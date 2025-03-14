// lib/taxCalculator.ts
import { TaxData, TaxBracket, CalculationResult } from "@/types";

export function calculateTax(
  income: number,
  taxInfo: { brackets: TaxBracket[] }
): number {
  let tax = 0;

  for (const bracket of taxInfo.brackets) {
    const min = bracket.min;
    const max = bracket.max === null ? Infinity : bracket.max;
    const rate = bracket.rate;

    if (income > min) {
      const taxableInThisBracket = Math.min(income, max) - min;
      console.log({ taxableInThisBracket, rate });
      tax += taxableInThisBracket * rate;
    }

    if (income <= max) {
      break;
    }
  }

  return tax;
}

// Function to calculate Ontario surtax based on provincial tax payable
function calculateOntarioSurtax(baseTax: number, year: number) {
  // Get thresholds for the specific year (2025 values from search result)
  let lowerThreshold, upperThreshold;

  if (year === 2025) {
    lowerThreshold = 5710;
    upperThreshold = 7307;
  } else if (year === 2024) {
    lowerThreshold = 5554;
    upperThreshold = 7108;
  } else {
    // Default to most recent known values
    lowerThreshold = 5554;
    upperThreshold = 7108;
  }

  let surtax = 0;

  // Apply 20% surtax on provincial tax exceeding lower threshold
  if (baseTax > lowerThreshold) {
    surtax += (baseTax - lowerThreshold) * 0.2;
  }

  // Apply additional 36% surtax on provincial tax exceeding upper threshold
  if (baseTax > upperThreshold) {
    surtax += (baseTax - upperThreshold) * 0.36;
  }

  return surtax;
}

export function calculateLifetimeTax(
  incomeByYear: Record<number, number>,
  federalRates: TaxData,
  provincialRates: TaxData,
  province: string
): CalculationResult {
  const result = {
    total: 0,
    byYear: {} as Record<
      number,
      {
        federal: number;
        provincial: number;
        total: number;
        federalMarginalRate: number;
        provincialMarginalRate: number;
        combinedMarginalRate: number;
        effectiveRate: number;
      }
    >,
  };

  for (const [yearStr, income] of Object.entries(incomeByYear)) {
    const year = parseInt(yearStr);

    // Find the closest previous year with tax data
    const federalYear = findClosestPreviousYear(year, federalRates);
    const provincialYear = findClosestPreviousYear(year, provincialRates);

    // Calculate marginal rates - the rate that would apply to the next dollar earned
    const federalMarginalRate = findMarginalRate(
      income,
      federalRates[federalYear].brackets
    );
    let provincialMarginalRate = findMarginalRate(
      income,
      provincialRates[provincialYear].brackets
    );

    const federalTax = calculateTax(income, federalRates[federalYear]);
    let provincialTax = calculateTax(income, provincialRates[provincialYear]);

    let surtax = 0;
    if (province === "ontario") {
      console.log("Calculating Ontario surtax", { provincialTax });
      surtax = calculateOntarioSurtax(provincialTax, year);
      provincialTax += surtax;

      // Calculate tax at current income
      const provincialTaxAtIncome = calculateTax(
        income,
        provincialRates[provincialYear]
      );
      const surtaxAtIncome = calculateOntarioSurtax(
        provincialTaxAtIncome,
        year
      );
      const totalProvincialTaxAtIncome = provincialTaxAtIncome + surtaxAtIncome;

      // Calculate tax at income + 1
      const provincialTaxAtIncomePlusOne = calculateTax(
        income + 1,
        provincialRates[provincialYear]
      );
      const surtaxAtIncomePlusOne = calculateOntarioSurtax(
        provincialTaxAtIncomePlusOne,
        year
      );
      const totalProvincialTaxAtIncomePlusOne =
        provincialTaxAtIncomePlusOne + surtaxAtIncomePlusOne;

      // True marginal rate is the tax difference on one additional dollar
      provincialMarginalRate =
        totalProvincialTaxAtIncomePlusOne - totalProvincialTaxAtIncome;

      // True marginal rate is the tax difference on one additional dollar
      provincialMarginalRate =
        totalProvincialTaxAtIncomePlusOne - totalProvincialTaxAtIncome;

      console.log({ provincialMarginalRate });
    }

    const totalTax = federalTax + provincialTax;

    const combinedMarginalRate = federalMarginalRate + provincialMarginalRate;

    // Calculate effective tax rate (total tax / income)
    const effectiveRate = income > 0 ? totalTax / income : 0;

    result.byYear[year] = {
      federal: federalTax,
      provincial: provincialTax,
      total: totalTax,
      federalMarginalRate,
      provincialMarginalRate,
      combinedMarginalRate,
      effectiveRate,
    };

    result.total += totalTax;
  }

  return result;
}

// Keep this helper function as it's still useful for finding the right tax bracket
function findClosestPreviousYear(year: number, taxRates: TaxData): number {
  const availableYears = Object.keys(taxRates)
    .map(Number)
    .sort((a, b) => b - a);

  for (const availableYear of availableYears) {
    if (availableYear <= year) {
      return availableYear;
    }
  }

  return availableYears[0];
}
// Helper function to find the marginal tax rate (rate on next dollar earned)
function findMarginalRate(income: number, brackets: TaxBracket[]): number {
  // Sort brackets by minimum amount (descending) to find highest applicable bracket
  const sortedBrackets = [...brackets].sort((a, b) => b.min - a.min);

  // Find the highest bracket where income exceeds the minimum threshold
  for (const bracket of sortedBrackets) {
    if (income > bracket.min) {
      return bracket.rate;
    }
  }

  // Default to lowest bracket if no match (should not happen)
  return brackets[0]?.rate || 0;
}
