// data/tax-rates/provincial/new-brunswick.ts
import { TaxData } from "@/types";

const newBrunswickTaxRates: TaxData = {
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
      { min: 2000.01, max: 8000, rate: 0.05 },
      { min: 8000.01, max: null, rate: 0.07 },
    ],
  },

  // Modern era tax brackets
  2000: {
    brackets: [
      { min: 0, max: 29590, rate: 0.0977 },
      { min: 29590.01, max: 59180, rate: 0.1523 },
      { min: 59180.01, max: null, rate: 0.1684 },
    ],
  },

  2008: {
    brackets: [
      { min: 0, max: 33451, rate: 0.1037 },
      { min: 33451.01, max: 66902, rate: 0.1542 },
      { min: 66902.01, max: 108768, rate: 0.1732 },
      { min: 108768.01, max: null, rate: 0.1784 },
    ],
  },

  2010: {
    brackets: [
      { min: 0, max: 35707, rate: 0.0939 },
      { min: 35707.01, max: 71415, rate: 0.135 },
      { min: 71415.01, max: 116105, rate: 0.135 },
      { min: 116105.01, max: null, rate: 0.145 },
    ],
  },

  2015: {
    brackets: [
      { min: 0, max: 39973, rate: 0.0939 },
      { min: 39973.01, max: 79946, rate: 0.14 },
      { min: 79946.01, max: 129975, rate: 0.16 },
      { min: 129975.01, max: 166280, rate: 0.175 },
      { min: 166280.01, max: null, rate: 0.21 },
    ],
  },

  2016: {
    brackets: [
      { min: 0, max: 40492, rate: 0.0939 },
      { min: 40492.01, max: 80985, rate: 0.14 },
      { min: 80985.01, max: 131664, rate: 0.16 },
      { min: 131664.01, max: 150000, rate: 0.1782 },
      { min: 150000.01, max: null, rate: 0.205 },
    ],
  },

  2019: {
    brackets: [
      { min: 0, max: 42592, rate: 0.094 },
      { min: 42592.01, max: 85184, rate: 0.14 },
      { min: 85184.01, max: 138491, rate: 0.16 },
      { min: 138491.01, max: 157778, rate: 0.1782 },
      { min: 157778.01, max: null, rate: 0.203 },
    ],
  },

  2020: {
    brackets: [
      { min: 0, max: 43401, rate: 0.094 },
      { min: 43401.01, max: 86803, rate: 0.14 },
      { min: 86803.01, max: 141122, rate: 0.16 },
      { min: 141122.01, max: 160776, rate: 0.1782 },
      { min: 160776.01, max: null, rate: 0.203 },
    ],
  },

  2021: {
    brackets: [
      { min: 0, max: 43835, rate: 0.094 },
      { min: 43835.01, max: 87671, rate: 0.14 },
      { min: 87671.01, max: 142534, rate: 0.16 },
      { min: 142534.01, max: 162383, rate: 0.195 },
      { min: 162383.01, max: null, rate: 0.203 },
    ],
  },

  2022: {
    brackets: [
      { min: 0, max: 44887, rate: 0.094 },
      { min: 44887.01, max: 89775, rate: 0.14 },
      { min: 89775.01, max: 146150, rate: 0.16 },
      { min: 146150.01, max: 166280, rate: 0.195 },
      { min: 166280.01, max: null, rate: 0.203 },
    ],
  },

  2023: {
    brackets: [
      { min: 0, max: 47715, rate: 0.094 },
      { min: 47715.01, max: 95431, rate: 0.14 },
      { min: 95431.01, max: 155332, rate: 0.16 },
      { min: 155332.01, max: 176756, rate: 0.195 },
      { min: 176756.01, max: null, rate: 0.203 },
    ],
  },

  2024: {
    brackets: [
      { min: 0, max: 49958, rate: 0.094 },
      { min: 49958.01, max: 99916, rate: 0.14 },
      { min: 99916.01, max: 185064, rate: 0.16 },
      { min: 185064.01, max: null, rate: 0.195 },
    ],
  },
};

export default newBrunswickTaxRates;
