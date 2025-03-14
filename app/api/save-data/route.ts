// app/api/save-data/route.ts
import { NextRequest } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { generateSeed } from "@/lib/seedGenerator";

export async function POST(request: NextRequest) {
  const { env } = await getCloudflareContext({ async: true });

  try {
    const { incomeData } = await request.json<{
      incomeData: { income: Record<number, number>; province: string };
    }>();

    // Generate a unique seed
    const seed = generateSeed();

    // Store in KV with 1 year expiration (365 days)
    await env.TAX_DATA.put(seed, JSON.stringify(incomeData), {
      expirationTtl: 60 * 60 * 24 * 365,
    });

    return Response.json({ success: true, seed });
  } catch (error) {
    console.error("Save error:", error);
    return Response.json({ error: "Failed to save data" }, { status: 400 });
  }
}
