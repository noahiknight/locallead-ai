"use client";

import { useState } from "react";

export default function Home() {
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");

  const sendSMS = async () => {
  alert("Button clicked");

  fetch("/api/sms", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ test: "ping" }),
  });
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
