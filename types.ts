// types/index.ts
export interface TaxBracket {
  min: number;
  max: number | null; // null for unlimited upper bracket
  rate: number;
}

export interface YearlyTaxInfo {
  brackets: TaxBracket[];
}

export interface TaxData {
  [year: number]: YearlyTaxInfo;
}

export interface CalculationRequest {
  income: Record<number, number>;
  province: string;
}

export interface YearlyTaxResult {
  federal: number;
  provincial: number;
  total: number;
  federalMarginalRate: number; // Federal marginal rate (e.g., 0.26 for 26%)
  provincialMarginalRate: number; // Provincial marginal rate (e.g., 0.147 for 14.7%)
  combinedMarginalRate: number; // Total marginal rate (federal + provincial)
  effectiveRate: number; // Average tax rate (total tax / income)
}

export interface CalculationResult {
  total: number;
  byYear: Record<number, YearlyTaxResult>;
}

export interface User {
  id: string;
  email: string;
  passwordHash: string;
  createdAt: number;
  subscriptionExpiresAt: number | null;
}

export interface Env {
  DB: D1Database;
  TAX_RATES: KVNamespace;
  NODE_ENV: string;
  SUBSCRIPTION_PRICE: string;
}
