// data/tax-rates/provincial/nova-scotia.ts
import { TaxData } from "@/types";

const novaScotiaTaxRates: TaxData = {
  // Early years - Limited historical data available
  // These are approximations based on general Canadian tax history patterns
  1917: {
    brackets: [
      // Estimated rates - historical research needed for accuracy
      { min: 0, max: 1000, rate: 0.01 },
      { min: 1000.01, max: 5000, rate: 0.03 },
      { min: 5000.01, max: null, rate: 0.05 },
    ],
  },

  // Mid-century rates are not well documented in search results
  1950: {
    brackets: [
      // Estimated rates - historical research needed for accuracy
      { min: 0, max: 2000, rate: 0.03 },
      { min: 2000.01, max: 10000, rate: 0.05 },
      { min: 10000.01, max: null, rate: 0.07 },
    ],
  },

  // 2000 - Nova Scotia switched to a tax-on-income system
  2000: {
    brackets: [
      { min: 0, max: 29590, rate: 0.0879 },
      { min: 29590.01, max: 59180, rate: 0.1495 },
      { min: 59180.01, max: 93000, rate: 0.1667 },
      { min: 93000.01, max: 150000, rate: 0.175 },
      { min: 150000.01, max: null, rate: 0.21 },
    ],
  },

  // 2001-2023: These brackets remained the same due to lack of indexation since 2000
  // From search results [2] and [3], Nova Scotia has not indexed its tax brackets since 2000
  2010: {
    brackets: [
      { min: 0, max: 29590, rate: 0.0879 },
      { min: 29590.01, max: 59180, rate: 0.1495 },
      { min: 59180.01, max: 93000, rate: 0.1667 },
      { min: 93000.01, max: 150000, rate: 0.175 },
      { min: 150000.01, max: null, rate: 0.21 },
    ],
  },

  2020: {
    brackets: [
      { min: 0, max: 29590, rate: 0.0879 },
      { min: 29590.01, max: 59180, rate: 0.1495 },
      { min: 59180.01, max: 93000, rate: 0.1667 },
      { min: 93000.01, max: 150000, rate: 0.175 },
      { min: 150000.01, max: null, rate: 0.21 },
    ],
  },

  // Current tax rates from search result [5]
  2024: {
    brackets: [
      { min: 0, max: 29590, rate: 0.0879 },
      { min: 29590.01, max: 59180, rate: 0.1495 },
      { min: 59180.01, max: 93000, rate: 0.1667 },
      { min: 93000.01, max: 150000, rate: 0.175 },
      { min: 150000.01, max: null, rate: 0.21 },
    ],
  },

  // 2025 rates with indexation applied (3.1% increase) from search result [9]
  // Nova Scotia Budget announced indexing starting January 1, 2025
  2025: {
    brackets: [
      { min: 0, max: 30507, rate: 0.0879 },
      { min: 30507.01, max: 61015, rate: 0.1495 },
      { min: 61015.01, max: 95883, rate: 0.1667 },
      { min: 95883.01, max: 154650, rate: 0.175 },
      { min: 154650.01, max: null, rate: 0.21 },
    ],
  },
};

export default novaScotiaTaxRates;
