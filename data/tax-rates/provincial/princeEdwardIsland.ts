// data/tax-rates/provincial/prince-edward-island.ts
import { TaxData } from "@/types";

const princeEdwardIslandTaxRates: TaxData = {
  // Early years - Limited historical data available
  // These are approximations based on general Canadian tax history patterns
  1917: {
    brackets: [
      // Estimated rates - historical research needed for accuracy
      { min: 0, max: 1000, rate: 0.01 },
      { min: 1000.01, max: 5000, rate: 0.02 },
      { min: 5000.01, max: null, rate: 0.03 },
    ],
  },

  // Mid-century rates are not well documented in search results
  1950: {
    brackets: [
      // Estimated rates - historical research needed for accuracy
      { min: 0, max: 2000, rate: 0.02 },
      { min: 2000.01, max: 10000, rate: 0.03 },
      { min: 10000.01, max: null, rate: 0.05 },
    ],
  },

  // Modern era tax rates
  2000: {
    brackets: [
      { min: 0, max: 30754, rate: 0.098 },
      { min: 30754.01, max: 61509, rate: 0.143 },
      { min: 61509.01, max: null, rate: 0.167 },
    ],
  },

  2008: {
    brackets: [
      { min: 0, max: 31984, rate: 0.098 },
      { min: 31984.01, max: 63969, rate: 0.138 },
      { min: 63969.01, max: null, rate: 0.167 },
    ],
  },

  2010: {
    brackets: [
      { min: 0, max: 31984, rate: 0.098 },
      { min: 31984.01, max: 63969, rate: 0.138 },
      { min: 63969.01, max: null, rate: 0.167 },
    ],
  },

  2014: {
    brackets: [
      { min: 0, max: 31984, rate: 0.098 },
      { min: 31984.01, max: 63969, rate: 0.138 },
      { min: 63969.01, max: null, rate: 0.167 },
    ],
  },

  2015: {
    brackets: [
      { min: 0, max: 31984, rate: 0.098 },
      { min: 31984.01, max: 63969, rate: 0.138 },
      { min: 63969.01, max: null, rate: 0.167 },
    ],
  },

  2016: {
    brackets: [
      // Note: PEI began indexing brackets in 2016
      { min: 0, max: 31984, rate: 0.098 },
      { min: 31984.01, max: 63969, rate: 0.138 },
      { min: 63969.01, max: null, rate: 0.167 },
    ],
  },

  2017: {
    brackets: [
      { min: 0, max: 31985, rate: 0.098 },
      { min: 31985.01, max: 63969, rate: 0.138 },
      { min: 63969.01, max: null, rate: 0.167 },
    ],
  },

  2018: {
    brackets: [
      { min: 0, max: 36810, rate: 0.098 },
      { min: 36810.01, max: 73620, rate: 0.138 },
      { min: 73620.01, max: null, rate: 0.167 },
    ],
  },

  2019: {
    brackets: [
      { min: 0, max: 37566, rate: 0.098 },
      { min: 37566.01, max: 75133, rate: 0.138 },
      { min: 75133.01, max: null, rate: 0.167 },
    ],
  },

  2020: {
    brackets: [
      { min: 0, max: 38719, rate: 0.098 },
      { min: 38719.01, max: 77439, rate: 0.138 },
      { min: 77439.01, max: null, rate: 0.167 },
    ],
  },

  2021: {
    brackets: [
      { min: 0, max: 43499, rate: 0.098 },
      { min: 43499.01, max: 86998, rate: 0.138 },
      { min: 86998.01, max: null, rate: 0.167 },
    ],
  },

  2022: {
    brackets: [
      { min: 0, max: 44500, rate: 0.098 },
      { min: 44500.01, max: 89000, rate: 0.138 },
      { min: 89000.01, max: null, rate: 0.167 },
    ],
  },

  2023: {
    brackets: [
      { min: 0, max: 45350, rate: 0.098 },
      { min: 45350.01, max: 90700, rate: 0.138 },
      { min: 90700.01, max: null, rate: 0.167 },
    ],
  },

  2024: {
    brackets: [
      { min: 0, max: 46635, rate: 0.098 },
      { min: 46635.01, max: 93270, rate: 0.138 },
      { min: 93270.01, max: null, rate: 0.167 },
    ],
  },
};

export default princeEdwardIslandTaxRates;
