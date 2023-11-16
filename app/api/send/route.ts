import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { userName, userEmail, userSubject, userMessage } = data;
  try {
    const data = await resend.emails.send({
      from: `${userName} <onboarding@resend.dev>`,
      to: ["harshsikriwal04@gmail.com", "19uec030@lnmiit.ac.in"],
      subject: userSubject,
      reply_to: userEmail,
      text: userMessage,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
