// data/tax-rates/provincial/nunavut.ts
import { TaxData } from "@/types";

const nunavutTaxRates: TaxData = {
  // Nunavut was established on April 1, 1999
  // Prior to this, it was part of the Northwest Territories
  // Early rates are approximations based on limited historical data

  2000: {
    brackets: [
      // First year of tax collection as a separate territory
      { min: 0, max: 29590, rate: 0.04 },
      { min: 29590.01, max: 59180, rate: 0.07 },
      { min: 59180.01, max: 93000, rate: 0.09 },
      { min: 93000.01, max: null, rate: 0.115 },
    ],
  },

  // Years between 2000-2020 would need additional research for accurate rates

  2020: {
    brackets: [
      { min: 0, max: 46740, rate: 0.04 },
      { min: 46740.01, max: 93480, rate: 0.07 },
      { min: 93480.01, max: 151978, rate: 0.09 },
      { min: 151978.01, max: null, rate: 0.115 },
    ],
  },

  2023: {
    brackets: [
      { min: 0, max: 50877, rate: 0.04 },
      { min: 50877.01, max: 101755, rate: 0.07 },
      { min: 101755.01, max: 165429, rate: 0.09 },
      { min: 165429.01, max: null, rate: 0.115 },
    ],
  },

  2024: {
    brackets: [
      { min: 0, max: 53268, rate: 0.04 },
      { min: 53268.01, max: 106537, rate: 0.07 },
      { min: 106537.01, max: 173205, rate: 0.09 },
      { min: 173205.01, max: null, rate: 0.115 },
    ],
  },

  // 2025 rates with indexation of 2.7% applied (from search result #3 and #7)
  2025: {
    brackets: [
      { min: 0, max: 54707, rate: 0.04 },
      { min: 54707.01, max: 109413, rate: 0.07 },
      { min: 109413.01, max: 177881, rate: 0.09 },
      { min: 177881.01, max: null, rate: 0.115 },
    ],
  },
};

export default nunavutTaxRates;
