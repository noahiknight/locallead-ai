import type { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID!,
  process.env.TWILIO_AUTH_TOKEN!
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  try {
    const { to, message } = req.body;

    const msg = await client.messages.create({
      to,
      from: process.env.TWILIO_PHONE_NUMBER!,
      body: message,
    });

    console.log("SMS SENT:", msg.sid);

    res.status(200).json({ success: true, sid: msg.sid });
  } catch (err: any) {
  console.error("TWILIO ERROR:", err);
  return res.status(500).json({ error: err.message || err });
}

}
