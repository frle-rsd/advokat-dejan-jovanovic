import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

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
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
}
