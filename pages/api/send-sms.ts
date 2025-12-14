import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  console.log("🔥 POST /api/send-sms HIT");

  res.status(200).json({ success: true });
}
