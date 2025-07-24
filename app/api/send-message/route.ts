import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, message } = await req.json();

  const TELEGRAM_TOKEN = "7860189158:AAGU3hZ7-GQTbaigmiA9A0iBYIk6bsbAlrw";
  const CHAT_ID = "6030766740";

  const text = `📬 New Message From Contact Form:\n\n✉️ Email: ${email}\n📝 Message: ${message}`;

  const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ success: false }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
