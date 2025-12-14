import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("🔥 POST /api/sms HIT");

  const body = await req.json();
  console.log("BODY:", body);

  return NextResponse.json({ success: true });
}
