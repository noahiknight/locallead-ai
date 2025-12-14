"use client";

import { useState } from "react";

export default function Home() {
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");

  const sendSMS = async () => {
    const res = await fetch("/api/sms", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to, message }),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Send SMS</h1>

      <input
        placeholder="Phone number"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br /><br />

      <button onClick={sendSMS}>Send SMS</button>
    </main>
  );
}
