import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";
import nodemailer from "nodemailer";

async function sendNotificationEmail(data: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  console.log("[contact] GMAIL_USER set:", !!user, "| GMAIL_APP_PASSWORD set:", !!pass);

  if (!user || !pass) {
    console.warn("[contact] Email env vars missing — skipping email send");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const info = await transporter.sendMail({
    from: `"Sajt – Kontakt forma" <${user}>`,
    to: "dejanjovanovic.adv@gmail.com",
    replyTo: data.email,
    subject: data.subject
      ? `Upit: ${data.subject}`
      : `Nova poruka od ${data.name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
        <div style="background:#1a2744;padding:24px 32px">
          <h2 style="color:#c9a84c;margin:0;font-size:18px;letter-spacing:1px">NOVA PORUKA SA SAJTA</h2>
        </div>
        <div style="padding:32px;border:1px solid #e5e7eb;border-top:none">
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#6b7280;font-size:13px;width:110px">Ime</td><td style="padding:8px 0;font-weight:600;color:#1a2744">${data.name}</td></tr>
            <tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Email</td><td style="padding:8px 0"><a href="mailto:${data.email}" style="color:#c9a84c">${data.email}</a></td></tr>
            ${data.phone ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Telefon</td><td style="padding:8px 0;color:#1a2744">${data.phone}</td></tr>` : ""}
            ${data.subject ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:13px">Predmet</td><td style="padding:8px 0;color:#1a2744">${data.subject}</td></tr>` : ""}
          </table>
          <div style="margin-top:20px;padding:16px;background:#f8f6f0;border-left:3px solid #c9a84c">
            <p style="margin:0;color:#374151;line-height:1.6;white-space:pre-wrap">${data.message}</p>
          </div>
          <p style="margin-top:24px;font-size:12px;color:#9ca3af">Poruka primljena putem kontakt forme na advokat-dejan-jovanovic.vercel.app</p>
        </div>
      </div>
    `,
  });

  console.log("[contact] Email sent — messageId:", info.messageId);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, phone, subject, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Ime, email i poruka su obavezni." },
      { status: 400 }
    );
  }

  const { error } = await supabase.from("contact_submissions").insert([
    {
      name,
      email,
      phone: phone || null,
      subject: subject || null,
      message,
    },
  ]);

  if (error) {
    console.error("[contact] Supabase error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Awaited so errors appear in Vercel logs
  try {
    await sendNotificationEmail({ name, email, phone, subject, message });
  } catch (err) {
    console.error("[contact] Email FAILED:", err);
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
