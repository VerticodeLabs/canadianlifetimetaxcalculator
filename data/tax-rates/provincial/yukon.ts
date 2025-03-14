// data/tax-rates/provincial/yukon.ts
import { TaxData } from "@/types";

const yukonTaxRates: TaxData = {
  // Early years - Limited historical data available
  // These are approximations based on general Canadian tax history patterns
  1917: {
    brackets: [
      // Estimated rates - historical research needed for accuracy
      { min: 0, max: 2000, rate: 0.01 },
      { min: 2000.01, max: 5000, rate: 0.02 },
      { min: 5000.01, max: null, rate: 0.04 },
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

  // Modern era tax rates with documented historical data
  2012: {
    brackets: [
      { min: 0, max: 42707, rate: 0.0704 },
      { min: 42707.01, max: 85414, rate: 0.0968 },
      { min: 85414.01, max: 132406, rate: 0.1144 },
      { min: 132406.01, max: null, rate: 0.1276 },
      // Note: 5% surtax on Yukon tax over $6,000 for income above ~$81,497
    ],
  },

  2013: {
    brackets: [
      { min: 0, max: 43561, rate: 0.0704 },
      { min: 43561.01, max: 87123, rate: 0.0968 },
      { min: 87123.01, max: 135054, rate: 0.1144 },
      { min: 135054.01, max: null, rate: 0.1276 },
      // Note: 5% surtax on Yukon tax over $6,000
    ],
  },

  2014: {
    brackets: [
      { min: 0, max: 43953, rate: 0.0704 },
      { min: 43953.01, max: 87907, rate: 0.0968 },
      { min: 87907.01, max: 136270, rate: 0.1144 },
      { min: 136270.01, max: null, rate: 0.1276 },
      // Note: 5% surtax on Yukon tax over $6,000
    ],
  },

  2015: {
    brackets: [
      { min: 0, max: 44701, rate: 0.064 },
      { min: 44701.01, max: 89401, rate: 0.09 },
      { min: 89401.01, max: 138586, rate: 0.109 },
      { min: 138586.01, max: 500000, rate: 0.128 },
      { min: 500000.01, max: null, rate: 0.15 },
      // Note: Yukon surtax repealed in 2015
    ],
  },

  2016: {
    brackets: [
      { min: 0, max: 45282, rate: 0.064 },
      { min: 45282.01, max: 90563, rate: 0.09 },
      { min: 90563.01, max: 140388, rate: 0.109 },
      { min: 140388.01, max: 500000, rate: 0.128 },
      { min: 500000.01, max: null, rate: 0.15 },
    ],
  },

  2017: {
    brackets: [
      { min: 0, max: 45916, rate: 0.064 },
      { min: 45916.01, max: 91831, rate: 0.09 },
      { min: 91831.01, max: 142353, rate: 0.109 },
      { min: 142353.01, max: 500000, rate: 0.128 },
      { min: 500000.01, max: null, rate: 0.15 },
    ],
  },

  2018: {
    brackets: [
      { min: 0, max: 46605, rate: 0.064 },
      { min: 46605.01, max: 93208, rate: 0.09 },
      { min: 93208.01, max: 144489, rate: 0.109 },
      { min: 144489.01, max: 500000, rate: 0.128 },
      { min: 500000.01, max: null, rate: 0.15 },
    ],
  },

  2019: {
    brackets: [
      { min: 0, max: 47630, rate: 0.064 },
      { min: 47630.01, max: 95259, rate: 0.09 },
      { min: 95259.01, max: 147667, rate: 0.109 },
      { min: 147667.01, max: 500000, rate: 0.128 },
      { min: 500000.01, max: null, rate: 0.15 },
    ],
  },

  2020: {
    brackets: [
      { min: 0, max: 48535, rate: 0.064 },
      { min: 48535.01, max: 97069, rate: 0.09 },
      { min: 97069.01, max: 151473, rate: 0.109 },
      { min: 151473.01, max: 500000, rate: 0.128 },
      { min: 500000.01, max: null, rate: 0.15 },
    ],
  },

  2021: {
    brackets: [
      { min: 0, max: 49020, rate: 0.064 },
      { min: 49020.01, max: 98040, rate: 0.09 },
      { min: 98040.01, max: 151978, rate: 0.109 },
      { min: 151978.01, max: 500000, rate: 0.128 },
      { min: 500000.01, max: null, rate: 0.15 },
    ],
  },

  2022: {
    brackets: [
      { min: 0, max: 50197, rate: 0.064 },
      { min: 50197.01, max: 100392, rate: 0.09 },
      { min: 100392.01, max: 155625, rate: 0.109 },
      { min: 155625.01, max: 500000, rate: 0.128 },
      { min: 500000.01, max: null, rate: 0.15 },
    ],
  },

  2023: {
    brackets: [
      { min: 0, max: 53359, rate: 0.064 },
      { min: 53359.01, max: 106717, rate: 0.09 },
      { min: 106717.01, max: 165430, rate: 0.109 },
      { min: 165430.01, max: 500000, rate: 0.128 },
      { min: 500000.01, max: null, rate: 0.15 },
    ],
  },

  2024: {
    brackets: [
      { min: 0, max: 55867, rate: 0.064 },
      { min: 55867.01, max: 111733, rate: 0.09 },
      { min: 111733.01, max: 173205, rate: 0.109 },
      { min: 173205.01, max: 500000, rate: 0.128 },
      { min: 500000.01, max: null, rate: 0.15 },
    ],
  },

  2025: {
    brackets: [
      { min: 0, max: 57375, rate: 0.064 },
      { min: 57375.01, max: 114750, rate: 0.09 },
      { min: 114750.01, max: 177882, rate: 0.109 },
      { min: 177882.01, max: 500000, rate: 0.128 },
      { min: 500000.01, max: null, rate: 0.15 },
    ],
  },
};

export default yukonTaxRates;
