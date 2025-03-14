// app/api/calculate/route.ts
import { NextRequest } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { CalculationRequest } from "@/types";
import { calculateLifetimeTax } from "@/lib/taxCalculator";

import federalRates from "@/data/tax-rates/federal";

// Import all provincial tax rate files
import albertaTaxRates from "@/data/tax-rates/provincial/alberta";
import britishColumbiaTaxRates from "@/data/tax-rates/provincial/britishColumbia";
import manitobaTaxRates from "@/data/tax-rates/provincial/manitoba";
import newBrunswickTaxRates from "@/data/tax-rates/provincial/newBrunswick";
import northwestTerritoriesTaxRates from "@/data/tax-rates/provincial/northwestTerritories";
import novaScotiaTaxRates from "@/data/tax-rates/provincial/novaScotia";
import nunavutTaxRates from "@/data/tax-rates/provincial/nunavut";
import ontarioTaxRates from "@/data/tax-rates/provincial/ontario";
import princeEdwardIslandTaxRates from "@/data/tax-rates/provincial/princeEdwardIsland";
import quebecTaxRates from "@/data/tax-rates/provincial/quebec";
import saskatchewanTaxRates from "@/data/tax-rates/provincial/saskatchewan";
import yukonTaxRates from "@/data/tax-rates/provincial/yukon";

export async function POST(request: NextRequest) {
  const { env } = await getCloudflareContext({ async: true });

  try {
    const body: CalculationRequest = await request.json();
    const { income, province = "ontario" } = body;

    // Get provincial tax rates based on province using switch statement
    let provincialRates;
    switch (province.toLowerCase()) {
      case "alberta":
        provincialRates = albertaTaxRates;
        break;

      case "british_columbia":
      case "bc":
        provincialRates = britishColumbiaTaxRates;
        break;

      case "manitoba":
        provincialRates = manitobaTaxRates;
        break;

      case "new_brunswick":
        provincialRates = newBrunswickTaxRates;
        break;

      case "northwest_territories":
      case "nwt":
        provincialRates = northwestTerritoriesTaxRates;
        break;

      case "nova_scotia":
        provincialRates = novaScotiaTaxRates;
        break;

      case "nunavut":
        provincialRates = nunavutTaxRates;
        break;

      case "ontario":
        provincialRates = ontarioTaxRates;
        break;

      case "prince_edward_island":
      case "pei":
        provincialRates = princeEdwardIslandTaxRates;
        break;

      case "quebec":
        provincialRates = quebecTaxRates;
        break;

      case "saskatchewan":
        provincialRates = saskatchewanTaxRates;
        break;

      case "yukon":
        provincialRates = yukonTaxRates;
        break;

      default:
        console.log(`Province "${province}" not found, defaulting to Ontario`);
        provincialRates = ontarioTaxRates;
    }

    const result = calculateLifetimeTax(income, federalRates, provincialRates);

    return Response.json(result);
  } catch (error) {
    console.error("Calculation error:", error);
    return Response.json({ error: "Calculation failed" }, { status: 400 });
  }
}
