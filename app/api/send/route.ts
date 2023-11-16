import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { userName, userEmail, userMessage } = data;
  try {
    const data = await resend.emails.send({
      from: `${userName} <onboarding@resend.dev>`,
      to: ["harshsikriwal04@gmail.com"],
      subject: "Hello world",
      reply_to: userEmail,
      text: userMessage,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
