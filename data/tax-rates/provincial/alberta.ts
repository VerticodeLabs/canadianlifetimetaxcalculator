// data/tax-rates/provincial/alberta.ts
import { TaxData } from "@/types";

const albertaTaxRates: TaxData = {
  // Early years - Limited historical data available
  // These are approximations based on general tax history patterns
  1917: {
    brackets: [
      // Estimated rates - historical research needed for accuracy
      { min: 0, max: 1000, rate: 0.01 },
      { min: 1000.01, max: 5000, rate: 0.02 },
      { min: 5000.01, max: null, rate: 0.03 },
    ],
  },

  // Alberta implemented a flat tax in 2001
  2001: {
    brackets: [
      { min: 0, max: null, rate: 0.1 }, // Alberta's famous flat tax rate
    ],
  },

  // Flat tax continued through most of the early 2000s
  2010: {
    brackets: [{ min: 0, max: null, rate: 0.1 }],
  },

  // In 2015, Alberta moved away from its flat tax system
  2015: {
    brackets: [
      { min: 0, max: 125000, rate: 0.1 },
      { min: 125000.01, max: 150000, rate: 0.1075 },
      { min: 150000.01, max: 200000, rate: 0.115 },
      { min: 200000.01, max: 300000, rate: 0.12 },
      { min: 300000.01, max: null, rate: 0.15 },
    ],
  },

  2016: {
    brackets: [
      { min: 0, max: 125000, rate: 0.1 },
      { min: 125000.01, max: 150000, rate: 0.12 },
      { min: 150000.01, max: 200000, rate: 0.13 },
      { min: 200000.01, max: 300000, rate: 0.14 },
      { min: 300000.01, max: null, rate: 0.15 },
    ],
  },

  2019: {
    brackets: [
      { min: 0, max: 131220, rate: 0.1 },
      { min: 131220.01, max: 157464, rate: 0.12 },
      { min: 157464.01, max: 209952, rate: 0.13 },
      { min: 209952.01, max: 314928, rate: 0.14 },
      { min: 314928.01, max: null, rate: 0.15 },
    ],
  },

  // In 2022, Alberta returned to a simplified tax system
  2022: {
    brackets: [
      { min: 0, max: 134238, rate: 0.1 },
      { min: 134238.01, max: 161086, rate: 0.12 },
      { min: 161086.01, max: 214781, rate: 0.13 },
      { min: 214781.01, max: 322171, rate: 0.14 },
      { min: 322171.01, max: null, rate: 0.15 },
    ],
  },

  // Based on recent information
  2023: {
    brackets: [
      { min: 0, max: 142292, rate: 0.1 },
      { min: 142292.01, max: 170751, rate: 0.12 },
      { min: 170751.01, max: 227668, rate: 0.13 },
      { min: 227668.01, max: 341502, rate: 0.14 },
      { min: 341502.01, max: null, rate: 0.15 },
    ],
  },

  // Current tax structure moved back toward flat tax simplicity
  2024: {
    brackets: [
      { min: 0, max: 148269, rate: 0.1 },
      { min: 148269.01, max: null, rate: 0.15 },
    ],
  },
};

export default albertaTaxRates;
