// app/results/page.tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CalculationResult } from "@/types";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import USCanadaTaxComparison from "@/components/USCanadaTaxComparison";

export default function ResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [results, setResults] = useState<CalculationResult | null>(null);
  const [incomeData, setIncomeData] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve data from localStorage (passed during navigation)
    const storedResults = localStorage.getItem("tax-results");
    const storedIncome = localStorage.getItem("tax-income-data");

    if (storedResults && storedIncome) {
      setResults(JSON.parse(storedResults));
      setIncomeData(JSON.parse(storedIncome));
    }

    setLoading(false);
  }, []);

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 2,
      currencyDisplay: "narrowSymbol",
    }).format(amount);
  };

  // Handle back navigation
  const handleGoBack = () => {
    router.back();
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">Loading results...</div>
    );
  }

  if (!results) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p>
          No calculation results available. Please go back and calculate your
          taxes.
        </p>
        <button onClick={handleGoBack} className="btn btn-primary mt-4">
          Back to Calculator
        </button>
      </div>
    );
  }

  const sortedYears = Object.keys(results.byYear)
    .map(Number)
    .sort((a, b) => b - a);

  const shareTitle = `I just calculated my lifetime Canadian tax burden: ${formatCurrency(
    results.total
  )}`;
  const shareUrl = window.location.href; // Current URL

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <button
          onClick={handleGoBack}
          className="btn btn-primary mr-4"
          aria-label="Go back to calculator"
        >
          Back
        </button>
        <h1 className="text-3xl font-bold">Your Tax Calculation Results</h1>
      </div>

      <div className="bg-[#f5f5f5] border-l-4 border-[#26374A] p-6 mb-8 shadow-sm">
        <div className="justify-between items-center">
          <h2 className="text-2xl font-semibold mb-2">
            Total Lifetime Tax Paid: {formatCurrency(results.total)}
          </h2>

          <div className="space-x-2">
            <FacebookShareButton url={shareUrl} quote={shareTitle}>
              <FontAwesomeIcon icon={faFacebook} />
            </FacebookShareButton>

            <TwitterShareButton url={shareUrl} title={shareTitle}>
              <FontAwesomeIcon icon={faXTwitter} />
            </TwitterShareButton>

            <LinkedinShareButton url={shareUrl} title={shareTitle}>
              <FontAwesomeIcon icon={faLinkedin} />
            </LinkedinShareButton>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Breakdown by Year</h3>
          <button
            onClick={() => exportTableToCSV("tax_calculations.csv")}
            className="btn btn-primary"
          >
            Download CSV
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full tax-results-table">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Year</th>
                <th className="p-3 text-right">Income</th>
                <th className="p-3 text-right">Federal Tax</th>
                <th className="p-3 text-right">Provincial Tax</th>
                <th className="p-3 text-right">Total Tax</th>
                <th className="p-3 text-right">Effective Rate</th>
                <th className="p-3 text-right">Marginal Rate</th>
              </tr>
            </thead>
            <tbody>
              {sortedYears.map((year) => {
                const yearData = results.byYear[year];
                const income = incomeData[year];

                return (
                  <tr key={year} className="border-b">
                    <td className="p-3">{year}</td>
                    <td className="p-3 text-right">
                      {formatCurrency(income || 0)}
                    </td>
                    <td className="p-3 text-right">
                      {formatCurrency(yearData.federal)}
                    </td>
                    <td className="p-3 text-right">
                      {formatCurrency(yearData.provincial)}
                    </td>
                    <td className="p-3 text-right font-medium">
                      {formatCurrency(yearData.total)}
                    </td>
                    <td className="p-3 text-right">
                      {(yearData.effectiveRate * 100).toFixed(2)}%
                    </td>
                    <td className="p-3 text-right">
                      {(yearData.combinedMarginalRate * 100).toFixed(2)}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <USCanadaTaxComparison incomeData={incomeData} results={results} />
    </div>
  );
}

// CSV export function
function exportTableToCSV(filename: string) {
  const table = document.querySelector(".tax-results-table");
  if (!table) return;

  let csv = [];
  const rows = table.querySelectorAll("tr");

  for (let i = 0; i < rows.length; i++) {
    const row = [],
      cols = rows[i].querySelectorAll("td, th");

    for (let j = 0; j < cols.length; j++) {
      let data = cols[j].textContent?.replace(/"/g, '""') || "";
      row.push('"' + data + '"');
    }

    csv.push(row.join(","));
  }

  const csvFile = new Blob([csv.join("\n")], { type: "text/csv" });
  const downloadLink = document.createElement("a");
  downloadLink.download = filename;
  downloadLink.href = window.URL.createObjectURL(csvFile);
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}
