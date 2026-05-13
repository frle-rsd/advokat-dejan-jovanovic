"use client";

import { useLanguage } from "@/components/LanguageContext";

export default function KonsultacijePage() {
  const { lang } = useLanguage();

  const content = {
    sr: {
      badge: "Online konsultacije",
      heading: "Postavite pitanje",
      sub: "Pišite mi direktno — odgovaram radnim danima od 09:00 do 17:00.",
      step: "Ukucajte poruku u chatu ispod da započnete razgovor",
      note: "Ako sam trenutno nedostupan, ostavite poruku — odgovoriti ću čim budem u mogućnosti.",
      cards: [
        { icon: "💬", title: "Direktna poruka", desc: "Bez registracije. Ukucajte pitanje i pošaljite." },
        { icon: "🔒", title: "Diskretno", desc: "Vaša pitanja su privatna. Ne delim informacije sa trećim licima." },
        { icon: "⚡", title: "Brz odgovor", desc: "Tokom radnog vremena odgovaram u roku od nekoliko minuta." },
      ],
    },
    en: {
      badge: "Online consultations",
      heading: "Ask a question",
      sub: "Write to me directly — I respond on business days from 09:00 to 17:00.",
      step: "Type your message in the chat below to start a conversation",
      note: "If I'm unavailable, leave a message — I'll get back to you as soon as possible.",
      cards: [
        { icon: "💬", title: "Direct message", desc: "No registration needed. Type your question and send." },
        { icon: "🔒", title: "Discreet", desc: "Your questions are private. I don't share information with third parties." },
        { icon: "⚡", title: "Quick reply", desc: "During business hours I usually respond within a few minutes." },
      ],
    },
  };

  const c = content[lang];

  const chatUrl = `https://go.crisp.chat/chat/embed/?website_id=0b0d4f3d-6edd-4e21-9716-41db7b01a1b4&locale=${lang === "sr" ? "sr" : "en"}`;

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

        {/* Step hint */}
        <div className="max-w-3xl mx-auto mb-3 flex items-center gap-2 text-sm text-[#1a2744]/60">
          <span className="w-5 h-5 rounded-full bg-[#c9a84c] text-white text-xs flex items-center justify-center font-bold shrink-0">1</span>
          {c.step}
        </div>

        {/* Embedded chat */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-sm overflow-hidden border border-gray-200 shadow-md" style={{ height: 520 }}>
            <iframe
              key={lang}
              src={chatUrl}
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
