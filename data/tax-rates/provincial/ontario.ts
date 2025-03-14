// data/tax-rates/provincial/ontario.ts
import { TaxData } from "@/types";

const ontarioTaxRates: TaxData = {
  // Early years - note: limited historical data available
  // This is an approximation based on general Canadian tax history
  1917: {
    brackets: [
      { min: 0, max: 2000, rate: 0.02 },
      { min: 2000, max: 6000, rate: 0.03 },
      { min: 6000, max: null, rate: 0.05 },
    ],
  },

  // Tax rates gradually increased in the mid-20th century
  // These are approximations as specific Ontario rates aren't in the search results
  1950: {
    brackets: [
      { min: 0, max: 3000, rate: 0.02 },
      { min: 3000, max: 10000, rate: 0.04 },
      { min: 10000, max: null, rate: 0.07 },
    ],
  },

  // Modern era - based on available data
  2010: {
    brackets: [
      { min: 0, max: 37106, rate: 0.0505 }, // Ontario reduced its lowest rate from 6.05% to 5.05% in 2010
      { min: 37106, max: 74214, rate: 0.0915 },
      { min: 74214, max: null, rate: 0.1116 },
    ],
  },

  2012: {
    brackets: [
      { min: 0, max: 39020, rate: 0.0505 },
      { min: 39020, max: 78043, rate: 0.0915 },
      { min: 78043, max: 500000, rate: 0.1116 },
      { min: 500000, max: null, rate: 0.1216 }, // New bracket added with 12.16% rate for income over $500,000
    ],
  },

  2013: {
    brackets: [
      { min: 0, max: 39723, rate: 0.0505 },
      { min: 39723, max: 79448, rate: 0.0915 },
      { min: 79448, max: 509000, rate: 0.1116 },
      { min: 509000, max: null, rate: 0.1316 }, // Tax rate for income over $509,000 was increased from 12.16% to 13.16%
    ],
  },

  2014: {
    brackets: [
      { min: 0, max: 40120, rate: 0.0505 },
      { min: 40120, max: 80242, rate: 0.0915 },
      { min: 80242, max: 150000, rate: 0.1116 }, // Income threshold lowered from $509,000 to $150,000
      { min: 150000, max: 220000, rate: 0.1216 }, // New bracket added
      { min: 220000, max: null, rate: 0.1316 },
    ],
  },

  2017: {
    brackets: [
      { min: 0, max: 42201, rate: 0.0505 },
      { min: 42201, max: 84404, rate: 0.0915 },
      { min: 84404, max: 150000, rate: 0.1116 },
      { min: 150000, max: 220000, rate: 0.1216 },
      { min: 220000, max: null, rate: 0.1316 },
    ],
  },

  2018: {
    brackets: [
      { min: 0, max: 42960, rate: 0.0505 },
      { min: 42960, max: 85923, rate: 0.0915 },
      { min: 85923, max: 150000, rate: 0.1116 },
      { min: 150000, max: 220000, rate: 0.1216 },
      { min: 220000, max: null, rate: 0.1316 },
    ],
  },

  2021: {
    brackets: [
      { min: 0, max: 45142, rate: 0.0505 },
      { min: 45142, max: 90287, rate: 0.0915 },
      { min: 90287, max: 150000, rate: 0.1116 },
      { min: 150000, max: 220000, rate: 0.1216 },
      { min: 220000, max: null, rate: 0.1316 },
    ],
  },

  2022: {
    brackets: [
      { min: 0, max: 46226, rate: 0.0505 },
      { min: 46226, max: 92454, rate: 0.0915 },
      { min: 92454, max: 150000, rate: 0.1116 },
      { min: 150000, max: 220000, rate: 0.1216 },
      { min: 220000, max: null, rate: 0.1316 },
    ],
  },

  2023: {
    brackets: [
      { min: 0, max: 49231, rate: 0.0505 },
      { min: 49231, max: 98463, rate: 0.0915 },
      { min: 98463, max: 150000, rate: 0.1116 },
      { min: 150000, max: 220000, rate: 0.1216 },
      { min: 220000, max: null, rate: 0.1316 },
    ],
  },

  2024: {
    brackets: [
      { min: 0, max: 51446, rate: 0.0505 },
      { min: 51446, max: 102894, rate: 0.0915 },
      { min: 102894, max: 150000, rate: 0.1116 },
      { min: 150000, max: 220000, rate: 0.1216 },
      { min: 220000, max: null, rate: 0.1316 },
    ],
  },
};

export default ontarioTaxRates;
