import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const contactToEmail = process.env.CONTACT_TO_EMAIL || 'isaia.luis@gmail.com';

// Ensure we run on the Node.js runtime (needed for some email providers)
export const runtime = 'nodejs';

type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<ContactPayload>;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Please fill in all fields.' },
        { status: 400 },
      );
    }

    if (!resendApiKey) {
      console.error('Missing RESEND_API_KEY env var');
      // In production you probably want to fail; for now return 500 with message
      return NextResponse.json(
        {
          ok: false,
          error:
            'Email service is not configured. Please set RESEND_API_KEY on Vercel.',
        },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);

    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: contactToEmail,
      replyTo: email,
      subject: `New message from ${name} - Portfolio`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error sending contact email', error);

    return NextResponse.json(
      {
        ok: false,
        error: 'Something went wrong while sending your message.',
      },
      { status: 500 },
    );
  }
}


