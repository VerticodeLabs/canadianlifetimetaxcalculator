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
      tax += taxableInThisBracket * rate;
    }

    if (income <= max) {
      break;
    }
  }

  return tax;
}

// Remove the findClosestPreviousYear function if it's not needed elsewhere

export function calculateLifetimeTax(
  incomeByYear: Record<number, number>,
  federalRates: TaxData,
  provincialRates: TaxData
): CalculationResult {
  const result = {
    total: 0,
    byYear: {} as Record<
      number,
      { federal: number; provincial: number; total: number }
    >,
  };

  for (const [yearStr, income] of Object.entries(incomeByYear)) {
    const year = parseInt(yearStr);

    // Find the closest previous year with tax data
    const federalYear = findClosestPreviousYear(year, federalRates);
    const provincialYear = findClosestPreviousYear(year, provincialRates);

    // Skip only if we can't find any applicable tax rates
    if (!federalYear || !provincialYear) {
      continue;
    }

    const federalTax = calculateTax(income, federalRates[federalYear]);
    const provincialTax = calculateTax(income, provincialRates[provincialYear]);
    const totalTax = federalTax + provincialTax;

    // Calculate marginal rates - the rate that would apply to the next dollar earned
    const federalMarginalRate = findMarginalRate(
      income,
      federalRates[federalYear].brackets
    );
    const provincialMarginalRate = findMarginalRate(
      income,
      provincialRates[provincialYear].brackets
    );
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
function findClosestPreviousYear(
  year: number,
  taxRates: TaxData
): number | null {
  const availableYears = Object.keys(taxRates)
    .map(Number)
    .sort((a, b) => b - a);

  for (const availableYear of availableYears) {
    if (availableYear <= year) {
      return availableYear;
    }
  }

  return null;
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
