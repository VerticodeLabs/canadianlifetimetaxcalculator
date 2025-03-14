// data/tax-rates/provincial/quebec.ts
import { TaxData } from "@/types";

const quebecTaxRates: TaxData = {
  // Early years - Limited historical data available for Quebec
  // These are approximations based on general Canadian tax history patterns
  1917: {
    brackets: [
      // Estimated rates - historical research needed for accuracy
      { min: 0, max: 2000, rate: 0.02 },
      { min: 2000.01, max: 5000, rate: 0.03 },
      { min: 5000.01, max: null, rate: 0.05 },
    ],
  },

  // Mid-century rates are not well documented in search results
  1950: {
    brackets: [
      // Estimated rates - historical research needed for accuracy
      { min: 0, max: 3000, rate: 0.03 },
      { min: 3000.01, max: 10000, rate: 0.05 },
      { min: 10000.01, max: null, rate: 0.08 },
    ],
  },

  // Quebec established its modern tax system in 1954 when it began collecting its own income taxes
  1954: {
    brackets: [
      // These are approximations - exact rates from 1954 not provided in search results
      { min: 0, max: 3000, rate: 0.06 },
      { min: 3000.01, max: 10000, rate: 0.08 },
      { min: 10000.01, max: null, rate: 0.1 },
    ],
  },

  // Late 20th century - Modern tax system
  1988: {
    brackets: [
      { min: 0, max: 14000, rate: 0.13 },
      { min: 14000.01, max: 28000, rate: 0.16 },
      { min: 28000.01, max: 45000, rate: 0.19 },
      { min: 45000.01, max: null, rate: 0.23 },
    ],
  },

  2000: {
    brackets: [
      { min: 0, max: 26000, rate: 0.17 },
      { min: 26000.01, max: 52000, rate: 0.19 },
      { min: 52000.01, max: null, rate: 0.24 },
    ],
  },

  // 21st century - More detailed data available
  2010: {
    brackets: [
      { min: 0, max: 38385, rate: 0.16 },
      { min: 38385.01, max: 76770, rate: 0.2 },
      { min: 76770.01, max: null, rate: 0.24 },
    ],
  },

  2013: {
    brackets: [
      { min: 0, max: 41095, rate: 0.16 },
      { min: 41095.01, max: 82190, rate: 0.2 },
      { min: 82190.01, max: 100000, rate: 0.24 },
      { min: 100000.01, max: null, rate: 0.255 },
    ],
  },

  2017: {
    brackets: [
      { min: 0, max: 42705, rate: 0.15 },
      { min: 42705.01, max: 85405, rate: 0.2 },
      { min: 85405.01, max: 103915, rate: 0.24 },
      { min: 103915.01, max: null, rate: 0.2575 },
    ],
  },

  2020: {
    brackets: [
      { min: 0, max: 44545, rate: 0.15 },
      { min: 44545.01, max: 89080, rate: 0.2 },
      { min: 89080.01, max: 108390, rate: 0.24 },
      { min: 108390.01, max: null, rate: 0.2575 },
    ],
  },

  2021: {
    brackets: [
      { min: 0, max: 45105, rate: 0.15 },
      { min: 45105.01, max: 90200, rate: 0.2 },
      { min: 90200.01, max: 109755, rate: 0.24 },
      { min: 109755.01, max: null, rate: 0.2575 },
    ],
  },

  2022: {
    brackets: [
      { min: 0, max: 46295, rate: 0.15 },
      { min: 46295.01, max: 92580, rate: 0.2 },
      { min: 92580.01, max: 112655, rate: 0.24 },
      { min: 112655.01, max: null, rate: 0.2575 },
    ],
  },

  2023: {
    brackets: [
      { min: 0, max: 47630, rate: 0.15 },
      { min: 47630.01, max: 95275, rate: 0.2 },
      { min: 95275.01, max: 115905, rate: 0.24 },
      { min: 115905.01, max: null, rate: 0.2575 },
    ],
  },

  // Current rates from search result [1]
  2024: {
    brackets: [
      { min: 0, max: 49275, rate: 0.15 },
      { min: 49275.01, max: 98540, rate: 0.2 },
      { min: 98540.01, max: 119910, rate: 0.24 },
      { min: 119910.01, max: null, rate: 0.2575 },
    ],
  },

  // 2025 rates with indexation (expected to follow similar pattern)
  2025: {
    brackets: [
      { min: 0, max: 50753, rate: 0.15 },
      { min: 50753.01, max: 101496, rate: 0.2 },
      { min: 101496.01, max: 123507, rate: 0.24 },
      { min: 123507.01, max: null, rate: 0.2575 },
    ],
  },
};

export default quebecTaxRates;
