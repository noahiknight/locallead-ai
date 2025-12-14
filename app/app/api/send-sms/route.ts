import { NextResponse } from 'next/server'
import twilio from 'twilio'

export async function POST(req: Request) {
  const { phone, message } = await req.json()

  const client = twilio(
    process.env.TWILIO_SID,
    process.env.TWILIO_AUTH_TOKEN
  )

  await client.messages.create({
    from: process.env.TWILIO_PHONE,
    to: phone,
    body: message
  })

  return NextResponse.json({ success: true })
}
