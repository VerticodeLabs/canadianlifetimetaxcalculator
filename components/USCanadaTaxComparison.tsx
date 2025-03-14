// components/USCanadaTaxComparison.tsx
"use client";

import { CalculationResult, TaxData } from "@/types";
import { useEffect, useState } from "react";

interface USCanadaTaxComparisonProps {
  incomeData: Record<number, number>;
  results: CalculationResult;
}

export default function USCanadaTaxComparison({
  incomeData,
  results,
}: USCanadaTaxComparisonProps) {
  const [activeTab, setActiveTab] = useState<
    "healthcare" | "federaltax" | "other"
  >("healthcare");
  const [exchangeRate, setExchangeRate] = useState(0.74); // Default fallback rate
  const [rateLastUpdated, setRateLastUpdated] = useState(null);
  const [isLoadingRate, setIsLoadingRate] = useState(true);

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const employerSponsoredCost = 1368; // Annual cost for employee portion
  const selfEmployedCost = 7452; // Annual cost for self-employed

  // Fetch current exchange rate
  useEffect(() => {
    const fetchExchangeRate = async () => {
      setIsLoadingRate(true);
      try {
        // Using a free exchange rate API
        const response = await fetch(
          "https://api.exchangerate-api.com/v4/latest/CAD"
        );
        const data = await response.json();

        if (data && data.rates && data.rates.USD) {
          setExchangeRate(data.rates.USD);
          setRateLastUpdated(new Date());
        }
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
        // Keep using fallback rate
      } finally {
        setIsLoadingRate(false);
      }
    };

    fetchExchangeRate();
  }, []);

  // Convert CAD to USD using current exchange rate
  const cadToUsd = (cadAmount) => {
    return cadAmount * exchangeRate;
  };

  // Convert USD to CAD using current exchange rate
  const usdToCad = (usdAmount) => {
    return usdAmount / exchangeRate;
  };

  // Calculate US federal tax for a given income (in USD)
  const calculateUSFederalTax = (year, income) => {
    // Convert income to USD
    const usdIncome = income * 0.74;

    // Find the closest previous year in our data
    const availableYears = Object.keys(usTaxData).map(Number);
    const closestYear = availableYears.reduce((prev, curr) => {
      return Math.abs(curr - year) < Math.abs(prev - year) && curr <= year
        ? curr
        : prev;
    }, availableYears[0]);

    // Get tax brackets for that year
    const yearData = usTaxData[closestYear];
    if (!yearData) {
      console.error(`No tax data available for year ${year} or earlier`);
      return 0;
    }

    // Sort brackets by minimum amount (ascending)
    const sortedBrackets = [...yearData.brackets].sort((a, b) => a.min - b.min);

    // Calculate tax
    let tax = 0;
    let remainingIncome = usdIncome;

    for (const bracket of sortedBrackets) {
      const max = bracket.max !== null ? bracket.max : Infinity;
      const bracketAmount = Math.min(
        Math.max(0, remainingIncome - bracket.min),
        max - bracket.min
      );

      if (bracketAmount > 0) {
        tax += bracketAmount * bracket.rate;
        remainingIncome -= bracketAmount;
      }

      if (remainingIncome <= 0) break;
    }

    // Convert back to CAD
    return usdToCad(tax);
  };

  // Calculate healthcare costs
  const calculateHealthcareCosts = (
    year: number,
    cadIncome: number,
    isCDN: boolean
  ) => {
    if (isCDN) {
      // Canadian healthcare cost is estimated at 25.7% of total tax
      const yearData = results.byYear[year] || { total: 0 };
      return yearData.total * 0.257;
    } else {
      // Return both options
      return {
        employer: employerSponsoredCost,
        selfEmployed: selfEmployedCost,
      };
    }
  };

  // Get sorted years
  const sortedYears = Object.keys(incomeData)
    .map(Number)
    .sort((a, b) => a - b);
  // Calculate lifetime totals
  const lifetimeCdnHealthcare = sortedYears.reduce((total, year) => {
    return total + calculateHealthcareCosts(year, incomeData[year], true);
  }, 0);

  const lifetimeUsHealthcareEmployer = sortedYears.length * 1368;
  const lifetimeUsHealthcareSelf = sortedYears.length * 7452;

  const lifetimeCdnFederalTax = sortedYears.reduce((total, year) => {
    const yearData = results.byYear[year] || { federal: 0 };
    return total + yearData.federal;
  }, 0);

  const lifetimeUsFederalTax = sortedYears.reduce((total, year) => {
    return total + calculateUSFederalTax(year, incomeData[year]);
  }, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-semibold mb-4">
        Canada vs. United States Comparison
      </h3>
      {/* Display exchange rate information */}
      <div className="mb-4 flex items-center">
        <span className="mr-2">Current Exchange Rate:</span>
        {isLoadingRate ? (
          <span>Loading...</span>
        ) : (
          <span className="font-medium">
            1 CAD = {exchangeRate.toFixed(4)} USD
          </span>
        )}
        {rateLastUpdated && (
          <span className="text-sm text-gray-500 ml-2">
            (Updated: {rateLastUpdated.toLocaleString()})
          </span>
        )}
      </div>

      <div className="mb-4 bg-[#f5f5f5] border-l-4 border-[#26374A] p-4">
        <span>
          This analysis compares Canadian and American tax systems, showing
          yearly healthcare costs and federal income tax payments in both
          countries.
        </span>
      </div>

      {/* Tab navigation */}
      <div className="flex mb-4 border-b">
        <button
          className={`py-2 px-4 ${
            activeTab === "healthcare"
              ? "border-b-2 border-blue-600 font-medium"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("healthcare")}
        >
          Healthcare Costs
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === "federaltax"
              ? "border-b-2 border-blue-600 font-medium"
              : "text-gray-600"
          }`}
          onClick={() => setActiveTab("federaltax")}
        >
          Federal Income Tax
        </button>
        <button
          className="py-2 px-4 text-gray-600"
          onClick={() => setActiveTab("other")}
        >
          Other Facts
        </button>
      </div>

      {/* Healthcare costs table */}
      {activeTab === "healthcare" && (
        <div>
          <div className="p-4 rounded bg-green-50 mb-4">
            <h4 className="font-medium mb-2">Canadian Healthcare Facts</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                In Canada, approximately <strong>25.7%</strong> of tax dollars
                fund healthcare
                <a
                  href="https://www.cma.ca/how-health-care-funded-canada"
                  className="text-blue-600 ml-1"
                >
                  [Source]
                </a>
              </li>
              <li>
                Total health spending in Canada was about{" "}
                <strong>$8,740 per person</strong> in 2023
                <a
                  href="https://www.cma.ca/how-health-care-funded-canada"
                  className="text-blue-600 ml-1"
                >
                  [Source]
                </a>
              </li>
              <li>
                A typical Canadian family of four pays approximately{" "}
                <strong>$17,713 annually</strong> through taxes toward public
                healthcare
                <a
                  href="https://www.theepochtimes.com/world/health-care-costs-for-typical-canadian-family-will-reach-almost-18000-this-year-study-571239"
                  className="text-blue-600 ml-1"
                >
                  [Source]
                </a>
              </li>
              <li>
                US employer-sponsored health insurance costs employees
                approximately <strong>$1,368/year</strong> on average (employer
                pays ~$7,590)
              </li>
              <li>
                Canadian patients faced a record-breaking median wait time of{" "}
                <strong>30 weeks</strong> from GP referral to treatment in
                2024—the longest ever recorded
                <a
                  href="https://www.fraserinstitute.org/studies/waiting-your-turn-wait-times-for-health-care-in-canada-2024"
                  className="text-blue-600 ml-1"
                >
                  [Source]
                </a>
              </li>
              <li>
                Canada ranks last (10th out of 10) among peer countries for
                healthcare timeliness
                <a
                  href="https://www.theepochtimes.com/world/health-care-costs-for-typical-canadian-family-will-reach-almost-18000-this-year-study-571239"
                  className="text-blue-600 ml-1"
                >
                  [Source]
                </a>
              </li>
              <li>
                Specialty care in Canada shows severe backlogs:{" "}
                <strong>57.5 weeks</strong> for orthopedic surgery and{" "}
                <strong>46.2 weeks</strong> for neurosurgery
                <a
                  href="https://www.fraserinstitute.org/studies/waiting-your-turn-wait-times-for-health-care-in-canada-2024"
                  className="text-blue-600 ml-1"
                >
                  [Source]
                </a>
              </li>
              <li>
                Canadian patients waited an average of{" "}
                <strong>6.3 weeks longer</strong> than what physicians consider
                clinically reasonable
                <a
                  href="https://www.fraserinstitute.org/studies/waiting-your-turn-wait-times-for-health-care-in-canada-2024"
                  className="text-blue-600 ml-1"
                >
                  [Source]
                </a>
              </li>
              <li>
                An estimated <strong>1.5 million Canadians</strong> were waiting
                for medical procedures in 2024
                <a
                  href="https://www.fraserinstitute.org/studies/waiting-your-turn-wait-times-for-health-care-in-canada-2024"
                  className="text-blue-600 ml-1"
                >
                  [Source]
                </a>
              </li>
              <li>
                Diagnostic testing delays compound the problem: median wait
                times were approximately{" "}
                <strong>16.2 weeks for MRIs and 8.1 weeks for CT scans</strong>
                <a
                  href="https://www.fraserinstitute.org/studies/waiting-your-turn-wait-times-for-health-care-in-canada-2024"
                  className="text-blue-600 ml-1"
                >
                  [Source]
                </a>
              </li>
            </ul>
          </div>

          <div className="p-4 rounded bg-blue-50 mb-4">
            <h4 className="font-medium mb-2">
              US Health Insurance Costs (2025)
            </h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Employer-sponsored:</strong> Employee pays ~$1,368/year;
                employer pays ~$7,590/year on average
                <a
                  href="https://www.healthcaredive.com/news/employer-healthcare-costs-increase-2025-aon/724505/"
                  className="text-blue-600 ml-1"
                >
                  [Source]
                </a>
              </li>
              <li>
                <strong>Self-employed (ACA Marketplace):</strong> Approximately
                $7,452/year ($621/month) for a Silver plan
                <a
                  href="https://www.healthcare.gov/self-employed/"
                  className="text-blue-600 ml-1"
                >
                  [Source]
                </a>
              </li>
              <li>
                <strong>Costs vary significantly</strong> by age, location, and
                plan type
              </li>
            </ul>
          </div>

          <table className="w-full border-collapse mb-4">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Year</th>
                <th className="p-3 text-right">Income</th>
                <th className="p-3 text-right">
                  Canadian Healthcare (via tax)
                </th>
                <th className="p-3 text-right">US Employer-Sponsored</th>
                <th className="p-3 text-right">Difference (vs Employer)</th>
              </tr>
            </thead>
            <tbody>
              {sortedYears.map((year) => {
                const income = incomeData[year];
                const cdnHealthcare = calculateHealthcareCosts(
                  year,
                  income,
                  true
                );
                const usHealthcare = calculateHealthcareCosts(
                  year,
                  income,
                  false
                );
                const difference = cdnHealthcare - usHealthcare.employer;

                return (
                  <tr key={year} className="border-b">
                    <td className="p-3">{year}</td>
                    <td className="p-3 text-right">{formatCurrency(income)}</td>
                    <td className="p-3 text-right">
                      {formatCurrency(cdnHealthcare)}
                    </td>
                    <td className="p-3 text-right">
                      {formatCurrency(usHealthcare.employer)}
                    </td>
                    <td
                      className={`p-3 text-right ${
                        difference > 0 ? "text-red-600" : "text-green-600"
                      }`}
                    >
                      {difference > 0 ? "+" : ""}
                      {formatCurrency(difference)}
                    </td>
                  </tr>
                );
              })}

              {/* Lifetime summary row */}
              <tr className="bg-gray-100 font-medium">
                <td className="p-3">LIFETIME TOTAL</td>
                <td className="p-3 text-right"></td>
                <td className="p-3 text-right">
                  {formatCurrency(lifetimeCdnHealthcare)}
                </td>
                <td className="p-3 text-right">
                  {formatCurrency(lifetimeUsHealthcareEmployer)}
                </td>
                <td
                  className={`p-3 text-right ${
                    lifetimeCdnHealthcare - lifetimeUsHealthcareEmployer > 0
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {lifetimeCdnHealthcare - lifetimeUsHealthcareEmployer > 0
                    ? "+"
                    : ""}
                  {formatCurrency(
                    lifetimeCdnHealthcare - lifetimeUsHealthcareEmployer
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Federal income tax table */}
      {activeTab === "federaltax" && (
        <div>
          <div className="p-4 rounded bg-blue-50 mb-4">
            <h4 className="font-medium mb-2">Federal Tax Facts</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Canada has 5 federal tax brackets ranging from 15% to 33%</li>
              <li>The US has 7 federal tax brackets ranging from 10% to 37%</li>
              <li>
                Both countries have various deductions and credits that affect
                final tax amounts
              </li>
              <li>This comparison uses 2025 tax brackets for both countries</li>
            </ul>
          </div>

          <table className="w-full border-collapse mb-4">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Year</th>
                <th className="p-3 text-right">Income</th>
                <th className="p-3 text-right">Canadian Federal Tax</th>
                <th className="p-3 text-right">US Federal Tax (in CAD)</th>
                <th className="p-3 text-right">Difference</th>
              </tr>
            </thead>
            <tbody>
              {sortedYears.map((year) => {
                const income = incomeData[year];
                const yearData = results.byYear[year] || { federal: 0 };
                const cdnFederalTax = yearData.federal;

                const usFederalTax = calculateUSFederalTax(year, income);
                const usFederalTaxCAD = usdToCad(usFederalTax); // Convert back to CAD

                const difference = cdnFederalTax - usFederalTaxCAD;

                return (
                  <tr key={year} className="border-b">
                    <td className="p-3">{year}</td>
                    <td className="p-3 text-right">{formatCurrency(income)}</td>
                    <td className="p-3 text-right">
                      {formatCurrency(cdnFederalTax)}
                    </td>
                    <td className="p-3 text-right">
                      {formatCurrency(usFederalTaxCAD)}
                    </td>
                    <td
                      className={`p-3 text-right ${
                        difference > 0 ? "text-red-600" : "text-green-600"
                      }`}
                    >
                      {difference > 0 ? "+" : ""}
                      {formatCurrency(difference)}
                    </td>
                  </tr>
                );
              })}

              {/* Lifetime summary row */}
              <tr className="bg-gray-100 font-medium">
                <td className="p-3">LIFETIME TOTAL</td>
                <td className="p-3 text-right"></td>
                <td className="p-3 text-right">
                  {formatCurrency(lifetimeCdnFederalTax)}
                </td>
                <td className="p-3 text-right">
                  {formatCurrency(lifetimeUsFederalTax)}
                </td>
                <td
                  className={`p-3 text-right ${
                    lifetimeCdnFederalTax - lifetimeUsFederalTax > 0
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {lifetimeCdnFederalTax - lifetimeUsFederalTax > 0 ? "+" : ""}
                  {formatCurrency(lifetimeCdnFederalTax - lifetimeUsFederalTax)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {activeTab === "other" && (
        <div>
          <div className="p-4 rounded bg-yellow-50 mb-4">
            <h4 className="font-medium mb-2">US State Income Taxes (2025)</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Range from <strong>0% to 13.3%</strong> depending on the state
              </li>
              <li>
                <strong>Eight states have no income tax:</strong> Alaska,
                Florida, Nevada, New Hampshire, South Dakota, Tennessee, Texas,
                and Wyoming
              </li>
              <li>
                <strong>Flat tax states:</strong> Range from 2.5% (Arizona) to
                5.8% (Idaho)
              </li>
            </ul>
          </div>

          <div className="p-4 rounded bg-blue-50 mb-4">
            <h4 className="font-medium mb-2">Sales Tax Comparison</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Canada:</strong> 5% Federal GST + Provincial tax (varies
                by province, typically 13-15% combined)
              </li>
              <li>
                <strong>United States:</strong> Varies by state from 0% (e.g.,
                Oregon, Delaware) to over 10% in some jurisdictions
              </li>
              <li>
                Canadians typically pay 3-5% more in sales tax than Americans on
                purchases
              </li>
              <li>
                For the average household, this difference amounts to
                approximately $1,500-$2,000 in additional annual costs
              </li>
            </ul>
          </div>

          <div className="p-4 rounded bg-purple-50 mb-4">
            <h4 className="font-medium mb-2">Carbon Tax Impact (Canada)</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Current carbon tax rate: <strong>$80/tonne</strong>, increasing
                to <strong>$95/tonne</strong> on April 1, 2025
                <a
                  href="https://www.taxpayer.com/newsroom/federal-taxes-increasing-in-2025-report"
                  className="text-blue-600 ml-1"
                >
                  [Source]
                </a>
              </li>
              <li>
                Carbon tax adds approximately{" "}
                <strong>21 cents per litre of gasoline</strong>,{" "}
                <strong>25 cents per litre of diesel</strong>, and{" "}
                <strong>18 cents per cubic metre of natural gas</strong>
                <a
                  href="https://www.taxpayer.com/media/new-years-tax-changes-report-2025"
                  className="text-blue-600 ml-1"
                >
                  [Source]
                </a>
              </li>
              <li>
                Energy costs are significantly driving inflation: gasoline
                prices rose by <strong>8.6%</strong>, and natural gas by{" "}
                <strong>4.8%</strong> year-over-year
                <a
                  href="https://www.taxpayer.com/newsroom/federal-taxes-increasing-in-2025-report"
                  className="text-blue-600 ml-1"
                >
                  [Source]
                </a>
              </li>
              <li>
                Transportation costs increased sharply by <strong>3.4%</strong>{" "}
                year-over-year, significantly impacting household expenses
                <a
                  href="https://www.taxpayer.com/newsroom/federal-taxes-increasing-in-2025-report"
                  className="text-blue-600 ml-1"
                >
                  [Source]
                </a>
              </li>
              <li>
                Shelter costs remain elevated, rising by approximately{" "}
                <strong>4.5%</strong> year-over-year
                <a
                  href="https://www.taxpayer.com/newsroom/federal-taxes-increasing-in-2025-report"
                  className="text-blue-600 ml-1"
                >
                  [Source]
                </a>
              </li>
              <li>
                The average Canadian family of four is expected to spend
                approximately <strong>$16,834</strong> on food in 2025, an
                increase of up to <strong>$802</strong> from the previous year
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

const usTaxData = {
  1913: {
    brackets: [
      { min: 0, max: 20000, rate: 0.01 },
      { min: 20000, max: 50000, rate: 0.02 },
      { min: 50000, max: 75000, rate: 0.03 },
      { min: 75000, max: 100000, rate: 0.04 },
      { min: 100000, max: 500000, rate: 0.05 },
      { min: 500000, max: null, rate: 0.07 },
    ],
  },

  1917: {
    brackets: [
      { min: 0, max: 2000, rate: 0.02 },
      { min: 2000, max: 4000, rate: 0.04 },
      { min: 4000, max: 5000, rate: 0.06 },
      { min: 5000, max: 10000, rate: 0.1 },
      { min: 10000, max: 2000000, rate: 0.25 },
      { min: 2000000, max: null, rate: 0.67 },
    ],
  },

  1918: {
    brackets: [
      { min: 0, max: 4000, rate: 0.06 },
      { min: 4000, max: 10000, rate: 0.12 },
      { min: 10000, max: 20000, rate: 0.25 },
      { min: 20000, max: 1000000, rate: 0.5 },
      { min: 1000000, max: null, rate: 0.77 },
    ],
  },

  1925: {
    brackets: [
      { min: 0, max: 4000, rate: 0.02 },
      { min: 4000, max: 8000, rate: 0.04 },
      { min: 8000, max: 12000, rate: 0.06 },
      { min: 12000, max: 20000, rate: 0.08 },
      { min: 20000, max: null, rate: 0.25 },
    ],
  },

  1932: {
    brackets: [
      { min: 0, max: 1000, rate: 0.04 },
      { min: 1000, max: 2000, rate: 0.08 },
      { min: 2000, max: 4000, rate: 0.12 },
      { min: 4000, max: 8000, rate: 0.15 },
      { min: 8000, max: 10000, rate: 0.18 },
      { min: 10000, max: null, rate: 0.63 },
    ],
  },

  1944: {
    brackets: [
      { min: 0, max: 2000, rate: 0.23 },
      { min: 2000, max: 4000, rate: 0.33 },
      { min: 4000, max: 6000, rate: 0.43 },
      { min: 6000, max: 10000, rate: 0.53 },
      { min: 10000, max: 20000, rate: 0.63 },
      { min: 20000, max: 50000, rate: 0.73 },
      { min: 50000, max: 100000, rate: 0.83 },
      { min: 100000, max: 200000, rate: 0.88 },
      { min: 200000, max: null, rate: 0.94 },
    ],
  },

  1964: {
    brackets: [
      { min: 0, max: 1000, rate: 0.16 },
      { min: 1000, max: 2000, rate: 0.22 },
      { min: 2000, max: 4000, rate: 0.26 },
      { min: 4000, max: 6000, rate: 0.3 },
      { min: 6000, max: 10000, rate: 0.34 },
      { min: 10000, max: 20000, rate: 0.38 },
      { min: 20000, max: 50000, rate: 0.42 },
      { min: 50000, max: 100000, rate: 0.46 },
      { min: 100000, max: null, rate: 0.77 },
    ],
  },

  1987: {
    brackets: [
      { min: 0, max: 1500, rate: 0.06 },
      { min: 1500, max: 3000, rate: 0.08 },
      { min: 3000, max: 5000, rate: 0.12 },
      { min: 5000, max: 10000, rate: 0.16 },
      { min: 10000, max: 15000, rate: 0.2 },
      { min: 15000, max: 20000, rate: 0.24 },
      { min: 20000, max: 30000, rate: 0.27 },
      { min: 30000, max: 40000, rate: 0.3 },
      { min: 40000, max: 50000, rate: 0.32 },
      { min: 50000, max: null, rate: 0.34 },
    ],
  },

  1988: {
    brackets: [
      { min: 0, max: 25000, rate: 0.17 },
      { min: 25000, max: 50000, rate: 0.26 },
      { min: 50000, max: null, rate: 0.29 },
    ],
  },

  1998: {
    brackets: [
      { min: 0, max: 29590, rate: 0.17 },
      { min: 29590, max: 59180, rate: 0.26 },
      { min: 59180, max: null, rate: 0.29 },
    ],
  },

  2000: {
    brackets: [
      { min: 0, max: 30004, rate: 0.17 },
      { min: 30004, max: 60009, rate: 0.25 },
      { min: 60009, max: null, rate: 0.29 },
    ],
  },

  2015: {
    brackets: [
      { min: 0, max: 44701, rate: 0.15 },
      { min: 44701, max: 89401, rate: 0.22 },
      { min: 89401, max: 138586, rate: 0.26 },
      { min: 138586, max: null, rate: 0.29 },
    ],
  },

  2024: {
    brackets: [
      { min: 0, max: 55867, rate: 0.15 },
      { min: 55867, max: 111733, rate: 0.205 },
      { min: 111733, max: 173205, rate: 0.26 },
      { min: 173205, max: 246752, rate: 0.29 },
      { min: 246752, max: null, rate: 0.33 },
    ],
  },
};
