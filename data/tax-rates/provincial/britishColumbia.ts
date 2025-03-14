// data/tax-rates/provincial/british-columbia.ts
import { TaxData } from "@/types";

const britishColumbiaTaxRates: TaxData = {
  // Historical note: Canada's federal personal income tax began in 1917,
  // but BC provincial tax rates from 1917-2015 are not available in the search results

  // Early years would require additional historical research
  1917: {
    brackets: [
      // Estimated/approximate values for placeholder purposes only
      // Historical records would need to be consulted for accuracy
      { min: 0, max: 2000, rate: 0.01 },
      { min: 2000, max: null, rate: 0.02 },
    ],
  },

  // 2016-2025 rates are from official government records
  2016: {
    brackets: [
      { min: 0, max: 38210, rate: 0.0506 },
      { min: 38210.01, max: 76421, rate: 0.077 },
      { min: 76421.01, max: 87741, rate: 0.105 },
      { min: 87741.01, max: 106543, rate: 0.1229 },
      { min: 106543.01, max: null, rate: 0.147 },
    ],
  },

  2017: {
    brackets: [
      { min: 0, max: 38898, rate: 0.0506 },
      { min: 38898.01, max: 77797, rate: 0.077 },
      { min: 77797.01, max: 89320, rate: 0.105 },
      { min: 89320.01, max: 108460, rate: 0.1229 },
      { min: 108460.01, max: null, rate: 0.147 },
    ],
  },

  2018: {
    brackets: [
      { min: 0, max: 39676, rate: 0.0506 },
      { min: 39676.01, max: 79353, rate: 0.077 },
      { min: 79353.01, max: 91107, rate: 0.105 },
      { min: 91107.01, max: 110630, rate: 0.1229 },
      { min: 110630.01, max: 150000, rate: 0.147 },
      { min: 150000.01, max: null, rate: 0.168 },
    ],
  },

  2019: {
    brackets: [
      { min: 0, max: 40707, rate: 0.0506 },
      { min: 40707.01, max: 81416, rate: 0.077 },
      { min: 81416.01, max: 93476, rate: 0.105 },
      { min: 93476.01, max: 113506, rate: 0.1229 },
      { min: 113506.01, max: 153900, rate: 0.147 },
      { min: 153900.01, max: null, rate: 0.168 },
    ],
  },

  2020: {
    brackets: [
      { min: 0, max: 41725, rate: 0.0506 },
      { min: 41725.01, max: 83451, rate: 0.077 },
      { min: 83451.01, max: 95812, rate: 0.105 },
      { min: 95812.01, max: 116344, rate: 0.1229 },
      { min: 116344.01, max: 157748, rate: 0.147 },
      { min: 157748.01, max: 220000, rate: 0.168 },
      { min: 220000.01, max: null, rate: 0.205 },
    ],
  },

  2021: {
    brackets: [
      { min: 0, max: 42184, rate: 0.0506 },
      { min: 42184.01, max: 84369, rate: 0.077 },
      { min: 84369.01, max: 96866, rate: 0.105 },
      { min: 96866.01, max: 117623, rate: 0.1229 },
      { min: 117623.01, max: 159483, rate: 0.147 },
      { min: 159483.01, max: 222420, rate: 0.168 },
      { min: 222420.01, max: null, rate: 0.205 },
    ],
  },

  2022: {
    brackets: [
      { min: 0, max: 43070, rate: 0.0506 },
      { min: 43070.01, max: 86141, rate: 0.077 },
      { min: 86141.01, max: 98901, rate: 0.105 },
      { min: 98901.01, max: 120094, rate: 0.1229 },
      { min: 120094.01, max: 162832, rate: 0.147 },
      { min: 162832.01, max: 227091, rate: 0.168 },
      { min: 227091.01, max: null, rate: 0.205 },
    ],
  },

  2023: {
    brackets: [
      { min: 0, max: 45654, rate: 0.0506 },
      { min: 45654.01, max: 91310, rate: 0.077 },
      { min: 91310.01, max: 104835, rate: 0.105 },
      { min: 104835.01, max: 127299, rate: 0.1229 },
      { min: 127299.01, max: 172602, rate: 0.147 },
      { min: 172602.01, max: 240716, rate: 0.168 },
      { min: 240716.01, max: null, rate: 0.205 },
    ],
  },

  2024: {
    brackets: [
      { min: 0, max: 47937, rate: 0.0506 },
      { min: 47937.01, max: 95875, rate: 0.077 },
      { min: 95875.01, max: 110076, rate: 0.105 },
      { min: 110076.01, max: 133664, rate: 0.1229 },
      { min: 133664.01, max: 181232, rate: 0.147 },
      { min: 181232.01, max: 252752, rate: 0.168 },
      { min: 252752.01, max: null, rate: 0.205 },
    ],
  },

  2025: {
    brackets: [
      { min: 0, max: 49279, rate: 0.0506 },
      { min: 49279.01, max: 98560, rate: 0.077 },
      { min: 98560.01, max: 113158, rate: 0.105 },
      { min: 113158.01, max: 137407, rate: 0.1229 },
      { min: 137407.01, max: 186306, rate: 0.147 },
      { min: 186306.01, max: 259829, rate: 0.168 },
      { min: 259829.01, max: null, rate: 0.205 },
    ],
  },
};

export default britishColumbiaTaxRates;
