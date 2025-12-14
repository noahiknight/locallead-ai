'use client'

import { useState } from 'react'

export default function Home() {
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  async function sendSMS() {
    setStatus('Sending...')
    const res = await fetch('/api/send-sms', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, message })
    })

    if (res.ok) setStatus('Message sent ✅')
    else setStatus('Failed ❌')
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>LocalLead AI</h1>

      <input
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br /><br />

      <button onClick={sendSMS}>Send SMS</button>

      <p>{status}</p>
    </main>
  )
}
