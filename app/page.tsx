"use client";

export default function Home() {
  async function sendSms() {
    console.log("BUTTON CLICKED");

    await fetch("/api/send-sms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: "+15555555555",
        message: "test"
      }),
    });

    alert("Fetch sent");
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Send SMS</h1>

      <input placeholder="Phone number" />
      <br />
      <br />

      <input placeholder="Message" />
      <br />
      <br />

      <button onClick={sendSms}>Send SMS</button>
    </main>
  );
}
