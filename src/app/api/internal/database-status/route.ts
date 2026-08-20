import { NextResponse } from "next/server";
import { connectToDatabase, getMongoConnectionState, isMongoConfigured } from "@/lib/db/mongoose";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return new NextResponse(null, { status: 404 });
  }

  if (!isMongoConfigured()) {
    return NextResponse.json(
      { status: "configuration-error", readyState: getMongoConnectionState() },
      { status: 503 },
    );
  }

  try {
    await connectToDatabase();

    return NextResponse.json({ status: "connected", readyState: getMongoConnectionState() });
  } catch {
    return NextResponse.json(
      { status: "unavailable", readyState: getMongoConnectionState() },
      { status: 503 },
    );
  }
}
