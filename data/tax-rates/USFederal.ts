// data/tax-rates/federal.ts
import { TaxData } from "@/types";

const USFederalTaxRates: TaxData = {
  1917: {
    brackets: [
      { min: 0, max: 1500, rate: 0.04 },
      { min: 1500, max: 3000, rate: 0.06 },
      { min: 3000, max: 5000, rate: 0.08 },
      { min: 5000, max: 10000, rate: 0.1 },
      { min: 10000, max: null, rate: 0.15 },
    ],
  },

  // World War II era - significant tax increases
  1939: {
    brackets: [
      // Added 20% surtax on all income tax and National Defence Tax
      { min: 0, max: 1000, rate: 0.04 },
      { min: 1000, max: 2000, rate: 0.08 },
      { min: 2000, max: 5000, rate: 0.12 },
      { min: 5000, max: 10000, rate: 0.15 },
      { min: 10000, max: null, rate: 0.18 },
    ],
  },

  1942: {
    brackets: [
      // Wartime rates increased dramatically
      { min: 0, max: 1000, rate: 0.3 },
      { min: 1000, max: 2000, rate: 0.44 },
      { min: 2000, max: 5000, rate: 0.5 },
      { min: 5000, max: 10000, rate: 0.6 },
      { min: 10000, max: 15000, rate: 0.69 },
      { min: 15000, max: null, rate: 0.75 },
    ],
  },

  // Post-war rates remained higher than pre-war
  1950: {
    brackets: [
      { min: 0, max: 1000, rate: 0.15 },
      { min: 1000, max: 2000, rate: 0.2 },
      { min: 2000, max: 5000, rate: 0.25 },
      { min: 5000, max: 10000, rate: 0.35 },
      { min: 10000, max: null, rate: 0.45 },
    ],
  },

  // Prior to the 1987 tax reform
  1987: {
    brackets: [
      // 10 brackets with rates from 6% to 34%
      { min: 0, max: 1500, rate: 0.06 },
      { min: 1500, max: 3000, rate: 0.08 },
      { min: 3000, max: 5000, rate: 0.12 },
      { min: 5000, max: 10000, rate: 0.16 },
      { min: 10000, max: 15000, rate: 0.2 },
      { min: 15000, max: 20000, rate: 0.24 },
      { min: 20000, max: 30000, rate: 0.27 },
      { min: 30000, max: 40000, rate: 0.3 },
      { min: 40000, max: 50000, rate: 0.32 },
      { min: 50000, max: null, rate: 0.34 },
    ],
  },

  // After 1987 tax reform - 3 brackets
  1988: {
    brackets: [
      { min: 0, max: 25000, rate: 0.17 },
      { min: 25000, max: 50000, rate: 0.26 },
      { min: 50000, max: null, rate: 0.29 },
    ],
  },

  // From search result [3] - 1998-1999 rates
  1998: {
    brackets: [
      { min: 0, max: 29590, rate: 0.17 },
      { min: 29590, max: 59180, rate: 0.26 },
      { min: 59180, max: null, rate: 0.29 },
    ],
  },

  1999: {
    brackets: [
      { min: 0, max: 29590, rate: 0.17 },
      { min: 29590, max: 59180, rate: 0.26 },
      { min: 59180, max: null, rate: 0.29 },
    ],
  },

  // 2000 rates
  2000: {
    brackets: [
      { min: 0, max: 30004, rate: 0.17 },
      { min: 30004, max: 60009, rate: 0.25 },
      { min: 60009, max: null, rate: 0.29 },
    ],
  },

  // From search result [5] - 2015 had four brackets
  2015: {
    brackets: [
      { min: 0, max: 44701, rate: 0.15 },
      { min: 44701, max: 89401, rate: 0.22 },
      { min: 89401, max: 138586, rate: 0.26 },
      { min: 138586, max: null, rate: 0.29 },
    ],
  },

  // Current year rates from search result [3]
  2024: {
    brackets: [
      { min: 0, max: 55867, rate: 0.15 },
      { min: 55867, max: 111733, rate: 0.205 },
      { min: 111733, max: 173205, rate: 0.26 },
      { min: 173205, max: 246752, rate: 0.29 },
      { min: 246752, max: null, rate: 0.33 },
    ],
  },
};

export default federalTaxRates;
