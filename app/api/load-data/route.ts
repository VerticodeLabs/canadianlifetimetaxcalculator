// app/api/load-data/route.ts
import { NextRequest } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function GET(request: NextRequest) {
  const { env } = await getCloudflareContext({ async: true });
  const seed = request.nextUrl.searchParams.get("seed");

  if (!seed) {
    return Response.json({ error: "No seed provided" }, { status: 400 });
  }

  try {
    const data = await env.TAX_DATA.get(seed);

    if (!data) {
      return Response.json(
        { error: "No data found for this seed" },
        { status: 404 }
      );
    }

    return Response.json({
      success: true,
      incomeData: JSON.parse(data),
    });
  } catch (error) {
    console.error("Load error:", error);
    return Response.json({ error: "Failed to load data" }, { status: 400 });
  }
}
