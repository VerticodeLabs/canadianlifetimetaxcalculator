// data/tax-rates/provincial/manitoba.ts
import { TaxData } from "@/types";

const manitobaTaxRates: TaxData = {
  // Early years - Limited historical data available
  // These are approximations based on general Canadian tax history patterns
  1917: {
    brackets: [
      // Estimated rates - historical research needed for accuracy
      { min: 0, max: 1000, rate: 0.01 },
      { min: 1000.01, max: 5000, rate: 0.02 },
      { min: 5000.01, max: null, rate: 0.04 },
    ],
  },

  // Mid-century rates are not well documented in search results
  1950: {
    brackets: [
      // Estimated rates - historical research needed for accuracy
      { min: 0, max: 2000, rate: 0.02 },
      { min: 2000.01, max: 10000, rate: 0.04 },
      { min: 10000.01, max: null, rate: 0.07 },
    ],
  },

  // Modern era tax rates
  2001: {
    brackets: [
      { min: 0, max: 30544, rate: 0.105 },
      { min: 30544.01, max: 65000, rate: 0.148 },
      { min: 65000.01, max: null, rate: 0.17 },
    ],
  },

  2010: {
    brackets: [
      { min: 0, max: 31000, rate: 0.108 },
      { min: 31000.01, max: 67000, rate: 0.1275 },
      { min: 67000.01, max: null, rate: 0.174 },
    ],
  },

  2013: {
    brackets: [
      { min: 0, max: 31000, rate: 0.108 },
      { min: 31000.01, max: 67000, rate: 0.1275 },
      { min: 67000.01, max: null, rate: 0.174 },
    ],
  },

  2016: {
    brackets: [
      { min: 0, max: 31000, rate: 0.108 },
      { min: 31000.01, max: 67000, rate: 0.1275 },
      { min: 67000.01, max: null, rate: 0.174 },
    ],
  },

  2018: {
    brackets: [
      { min: 0, max: 31843, rate: 0.108 },
      { min: 31843.01, max: 68821, rate: 0.1275 },
      { min: 68821.01, max: null, rate: 0.174 },
    ],
  },

  2019: {
    brackets: [
      { min: 0, max: 32670, rate: 0.108 },
      { min: 32670.01, max: 70610, rate: 0.1275 },
      { min: 70610.01, max: null, rate: 0.174 },
    ],
  },

  2021: {
    brackets: [
      { min: 0, max: 33723, rate: 0.108 },
      { min: 33723.01, max: 72885, rate: 0.1275 },
      { min: 72885.01, max: null, rate: 0.174 },
    ],
  },

  2022: {
    brackets: [
      { min: 0, max: 34431, rate: 0.108 },
      { min: 34431.01, max: 74416, rate: 0.1275 },
      { min: 74416.01, max: null, rate: 0.174 },
    ],
  },

  2023: {
    brackets: [
      { min: 0, max: 35250, rate: 0.108 },
      { min: 35250.01, max: 76250, rate: 0.1275 },
      { min: 76250.01, max: null, rate: 0.174 },
    ],
  },

  // Manitoba's 2024 updated rates
  2024: {
    brackets: [
      { min: 0, max: 36842, rate: 0.108 },
      { min: 36842.01, max: 79625, rate: 0.1275 },
      { min: 79625.01, max: null, rate: 0.174 },
    ],
  },
};

export default manitobaTaxRates;
