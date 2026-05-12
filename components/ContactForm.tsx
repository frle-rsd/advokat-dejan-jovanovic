"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useLanguage } from "@/components/LanguageContext";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const { t } = useLanguage();
  const f = t.contact.fields;

  const [form, setForm] = useState<FormState>({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error: sbError } = await supabase.from("contact_submissions").insert([{
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      subject: form.subject || null,
      message: form.message,
    }]);

    setLoading(false);
    if (sbError) setError(t.contact.error);
    else {
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    }
  };

  const inputClass =
    "w-full border border-gray-200 px-4 py-3 text-sm text-gray-800 bg-white focus:outline-none focus:border-[#c9a84c] focus:ring-1 focus:ring-[#c9a84c]/20 transition-all duration-200 rounded-sm";

  if (success) {
    return (
      <div className="bg-[#1a2744] text-white p-10 text-center rounded-sm">
        <div className="w-16 h-16 bg-[#c9a84c]/20 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl font-semibold mb-2">{t.contact.success.title}</h3>
        <p className="text-gray-300">{t.contact.success.sub}</p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-6 text-[#c9a84c] text-sm underline underline-offset-2 hover:text-[#d4b561] transition-colors"
        >
          {t.contact.success.again}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            {f.name} <span className="text-[#c9a84c]">*</span>
          </label>
          <input type="text" name="name" required value={form.name} onChange={handleChange}
            className={inputClass} placeholder={f.namePlaceholder} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            {f.email} <span className="text-[#c9a84c]">*</span>
          </label>
          <input type="email" name="email" required value={form.email} onChange={handleChange}
            className={inputClass} placeholder={f.emailPlaceholder} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            {f.phone}
          </label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange}
            className={inputClass} placeholder={f.phonePlaceholder} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
            {f.subject}
          </label>
          <input type="text" name="subject" value={form.subject} onChange={handleChange}
            className={inputClass} placeholder={f.subjectPlaceholder} />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">
          {f.message} <span className="text-[#c9a84c]">*</span>
        </label>
        <textarea name="message" required rows={5} value={form.message} onChange={handleChange}
          className={inputClass} placeholder={f.messagePlaceholder} />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#1a2744] text-white font-semibold py-4 text-sm uppercase tracking-wider hover:bg-[#243560] disabled:opacity-60 active:scale-[0.99] transition-all duration-200 rounded-sm"
      >
        {loading ? f.submitting : f.submit}
      </button>
    </form>
  );
}
