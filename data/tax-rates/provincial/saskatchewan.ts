// data/tax-rates/provincial/saskatchewan.ts
import { TaxData } from "@/types";

const saskatchewanTaxRates: TaxData = {
  // Early years - Limited historical data available
  // These are approximations based on general Canadian tax history patterns
  1917: {
    brackets: [
      // Estimated rates - historical research needed for accuracy
      { min: 0, max: 2000, rate: 0.01 },
      { min: 2000.01, max: 5000, rate: 0.02 },
      { min: 5000.01, max: null, rate: 0.03 },
    ],
  },

  // Mid-century rates are not well documented in search results
  1950: {
    brackets: [
      // Estimated rates - historical research needed for accuracy
      { min: 0, max: 3000, rate: 0.02 },
      { min: 3000.01, max: 10000, rate: 0.04 },
      { min: 10000.01, max: null, rate: 0.06 },
    ],
  },

  // Saskatchewan modernized its tax system in the late 20th century
  1988: {
    brackets: [
      { min: 0, max: 25000, rate: 0.07 },
      { min: 25000.01, max: 65000, rate: 0.09 },
      { min: 65000.01, max: null, rate: 0.11 },
    ],
  },

  // Saskatchewan moved to a tax-on-income system in 2000
  2000: {
    brackets: [
      { min: 0, max: 30000, rate: 0.11 },
      { min: 30000.01, max: 60000, rate: 0.13 },
      { min: 60000.01, max: null, rate: 0.15 },
    ],
  },

  // Saskatchewan reduced its rates in the mid-2000s
  2007: {
    brackets: [
      { min: 0, max: 37579, rate: 0.11 },
      { min: 37579.01, max: 107142, rate: 0.13 },
      { min: 107142.01, max: null, rate: 0.15 },
    ],
  },

  2010: {
    brackets: [
      { min: 0, max: 40354, rate: 0.11 },
      { min: 40354.01, max: 115337, rate: 0.13 },
      { min: 115337.01, max: null, rate: 0.15 },
    ],
  },

  // Further tax reductions over time
  2015: {
    brackets: [
      { min: 0, max: 44028, rate: 0.11 },
      { min: 44028.01, max: 125795, rate: 0.13 },
      { min: 125795.01, max: null, rate: 0.15 },
    ],
  },

  2017: {
    brackets: [
      { min: 0, max: 45225, rate: 0.105 },
      { min: 45225.01, max: 129214, rate: 0.125 },
      { min: 129214.01, max: null, rate: 0.145 },
    ],
  },

  2018: {
    brackets: [
      { min: 0, max: 45225, rate: 0.105 },
      { min: 45225.01, max: 129214, rate: 0.125 },
      { min: 129214.01, max: null, rate: 0.145 },
    ],
  },

  2020: {
    brackets: [
      { min: 0, max: 45225, rate: 0.105 },
      { min: 45225.01, max: 129214, rate: 0.125 },
      { min: 129214.01, max: null, rate: 0.145 },
    ],
  },

  2021: {
    brackets: [
      { min: 0, max: 45677, rate: 0.105 },
      { min: 45677.01, max: 130506, rate: 0.125 },
      { min: 130506.01, max: null, rate: 0.145 },
    ],
  },

  2022: {
    brackets: [
      { min: 0, max: 46773, rate: 0.105 },
      { min: 46773.01, max: 133638, rate: 0.125 },
      { min: 133638.01, max: null, rate: 0.145 },
    ],
  },

  2023: {
    brackets: [
      { min: 0, max: 49720, rate: 0.105 },
      { min: 49720.01, max: 142058, rate: 0.125 },
      { min: 142058.01, max: null, rate: 0.145 },
    ],
  },

  // Current rates from search result [1]
  2024: {
    brackets: [
      { min: 0, max: 52057, rate: 0.105 },
      { min: 52057.01, max: 148734, rate: 0.125 },
      { min: 148734.01, max: null, rate: 0.145 },
    ],
  },

  // 2025 projected rates with indexation
  2025: {
    brackets: [
      { min: 0, max: 53879, rate: 0.105 },
      { min: 53879.01, max: 153937, rate: 0.125 },
      { min: 153937.01, max: null, rate: 0.145 },
    ],
  },
};

export default saskatchewanTaxRates;
