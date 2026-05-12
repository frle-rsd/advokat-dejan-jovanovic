"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function KonsultacijePage() {
  const { lang } = useLanguage();

  const content = {
    sr: {
      badge: "Online konsultacije",
      heading: "Postavite pitanje",
      sub: "Pišite mi direktno — odgovaram u toku radnog vremena, ponedeljak do petak od 09:00 do 17:00.",
      note: "Ako sam trenutno nedostupan, ostavite poruku i odgovoriti ću čim budem u mogućnosti.",
      cards: [
        { icon: "💬", title: "Direktna poruka", desc: "Bez registracije, bez čekanja. Ukucajte pitanje i pošaljite." },
        { icon: "🔒", title: "Diskretno", desc: "Vaša pitanja su privatna. Informacije o klijentima ne delim sa trećim licima." },
        { icon: "⚡", title: "Brz odgovor", desc: "Tokom radnog vremena obično odgovaram u roku od nekoliko minuta." },
      ],
    },
    en: {
      badge: "Online consultations",
      heading: "Ask a question",
      sub: "Write to me directly — I respond during business hours, Monday to Friday from 09:00 to 17:00.",
      note: "If I'm unavailable at the moment, leave a message and I'll get back to you as soon as possible.",
      cards: [
        { icon: "💬", title: "Direct message", desc: "No registration, no waiting. Type your question and send." },
        { icon: "🔒", title: "Discreet", desc: "Your questions are private. I do not share client information with third parties." },
        { icon: "⚡", title: "Quick reply", desc: "During business hours I usually respond within a few minutes." },
      ],
    },
  };

  const c = content[lang];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1a2744] pt-20 pb-14 px-4 text-center">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#c9a84c] border border-[#c9a84c]/30 px-4 py-1.5 rounded-sm mb-6">
          {c.badge}
        </span>
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
          {c.heading}
        </h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
          {c.sub}
        </p>
      </section>

      {/* Cards */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {c.cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#f8f9fc] rounded-sm p-5 border border-gray-100 flex flex-col gap-2"
            >
              <span className="text-2xl">{card.icon}</span>
              <h3 className="font-playfair text-base font-semibold text-[#1a2744]">{card.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Embedded chat */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-sm overflow-hidden border border-gray-200 shadow-md" style={{ height: 500 }}>
            <iframe
              src="https://tawk.to/chat/6a03ad848acb811c3685583f/1jof5rje8"
              title="Live chat"
              width="100%"
              height="100%"
              style={{ border: "none", display: "block" }}
              allow="microphone; camera"
            />
          </div>
          <p className="text-center text-gray-400 text-xs mt-3">{c.note}</p>
        </div>
      </section>

      <div className="h-16 bg-white" />
    </>
  );
}
