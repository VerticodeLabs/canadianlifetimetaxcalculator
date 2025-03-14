// data/tax-rates/provincial/northwest-territories.ts
import { TaxData } from "@/types";

const northwestTerritoriesTaxRates: TaxData = {
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

  // Modern era tax rates - NWT has maintained consistent rates with indexed brackets
  2019: {
    brackets: [
      { min: 0, max: 43137, rate: 0.059 },
      { min: 43137.01, max: 86277, rate: 0.086 },
      { min: 86277.01, max: 140267, rate: 0.122 },
      { min: 140267.01, max: null, rate: 0.1405 },
    ],
  },

  2020: {
    brackets: [
      { min: 0, max: 43957, rate: 0.059 },
      { min: 43957.01, max: 87916, rate: 0.086 },
      { min: 87916.01, max: 142932, rate: 0.122 },
      { min: 142932.01, max: null, rate: 0.1405 },
    ],
  },

  2021: {
    brackets: [
      { min: 0, max: 44396, rate: 0.059 },
      { min: 44396.01, max: 88796, rate: 0.086 },
      { min: 88796.01, max: 144362, rate: 0.122 },
      { min: 144362.01, max: null, rate: 0.1405 },
    ],
  },

  2022: {
    brackets: [
      { min: 0, max: 45462, rate: 0.059 },
      { min: 45462.01, max: 90927, rate: 0.086 },
      { min: 90927.01, max: 147826, rate: 0.122 },
      { min: 147826.01, max: null, rate: 0.1405 },
    ],
  },

  2023: {
    brackets: [
      { min: 0, max: 48326, rate: 0.059 },
      { min: 48326.01, max: 96655, rate: 0.086 },
      { min: 96655.01, max: 157139, rate: 0.122 },
      { min: 157139.01, max: null, rate: 0.1405 },
    ],
  },

  2024: {
    brackets: [
      { min: 0, max: 50599, rate: 0.059 },
      { min: 50599.01, max: 101200, rate: 0.086 },
      { min: 101200.01, max: 164525, rate: 0.122 },
      { min: 164525.01, max: null, rate: 0.1405 },
    ],
  },

  // From search result #1 - 2025 rates with indexed brackets
  2025: {
    brackets: [
      { min: 0, max: 51964, rate: 0.059 },
      { min: 51964.01, max: 103930, rate: 0.086 },
      { min: 103930.01, max: 168967, rate: 0.122 },
      { min: 168967.01, max: null, rate: 0.1405 },
    ],
  },
};

export default northwestTerritoriesTaxRates;
