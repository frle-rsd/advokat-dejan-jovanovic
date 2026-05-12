"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error: sbError } = await supabase
      .from("contact_submissions")
      .insert([
        {
          name: form.name,
          email: form.email,
          phone: form.phone || null,
          subject: form.subject || null,
          message: form.message,
        },
      ]);

    setLoading(false);

    if (sbError) {
      setError("Došlo je do greške. Molimo pokušajte ponovo.");
    } else {
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }
  };

  const inputClass =
    "w-full border border-gray-300 px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:border-[#c9a84c] transition-colors";

  if (success) {
    return (
      <div className="bg-[#1a2744] text-white p-10 text-center">
        <svg className="w-16 h-16 text-[#c9a84c] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-heading text-2xl font-semibold mb-2">Hvala!</h3>
        <p className="text-gray-300">Javićemo Vam se uskoro.</p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-6 text-[#c9a84c] text-sm underline"
        >
          Pošalji novu poruku
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ime i prezime <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="Vaše ime i prezime"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email adresa <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="vas@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Telefon
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={inputClass}
            placeholder="+381 6x xxx xxxx"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Predmet
          </label>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={inputClass}
            placeholder="Tema upita"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Poruka <span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={inputClass}
          placeholder="Opišite Vaš pravni upit..."
        />
      </div>

      {error && (
        <p className="text-red-600 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#1a2744] text-white font-semibold py-4 text-sm uppercase tracking-wider hover:bg-[#243560] disabled:opacity-60 transition-colors duration-200"
      >
        {loading ? "Slanje..." : "Pošalji poruku"}
      </button>
    </form>
  );
}
