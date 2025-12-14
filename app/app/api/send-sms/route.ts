import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("🔥 POST /api/send-sms HIT");

  const body = await request.json();
  console.log("BODY:", body);

  return NextResponse.json({ success: true });
}
