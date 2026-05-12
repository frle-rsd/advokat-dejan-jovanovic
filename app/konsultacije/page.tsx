"use client";

import TawkTo from "@/components/TawkTo";
import { useLanguage } from "@/components/LanguageContext";

export default function KonsultacijePage() {
  const { lang } = useLanguage();

  const content = {
    sr: {
      badge: "Online konsultacije",
      heading: "Postavite pitanje",
      sub: "Koristite live chat ispod da mi direktno postavite pitanje. Odgovaram u toku radnog vremena — ponedeljak do petak, 09:00–17:00.",
      cards: [
        {
          icon: "💬",
          title: "Brz odgovor",
          desc: "Odgovaram na chat poruke tokom radnog vremena, obično u roku od nekoliko minuta.",
        },
        {
          icon: "🔒",
          title: "Diskretno",
          desc: "Vaše pitanje je privatno. Ne delim informacije o klijentima sa trećim licima.",
        },
        {
          icon: "📞",
          title: "Ili me pozovite",
          desc: "Ako preferirate glas, slobodno me pozovite direktno.",
          link: "tel:+381641234567",
          linkLabel: "+381 64 123 4567",
        },
      ],
      note: "Ako sam nedostupan u ovom trenutku, ostavite poruku i odgovoriti ću čim budem u mogućnosti.",
    },
    en: {
      badge: "Online consultations",
      heading: "Ask a question",
      sub: "Use the live chat below to ask me a question directly. I respond during business hours — Monday to Friday, 09:00–17:00.",
      cards: [
        {
          icon: "💬",
          title: "Quick response",
          desc: "I respond to chat messages during business hours, usually within a few minutes.",
        },
        {
          icon: "🔒",
          title: "Discreet",
          desc: "Your question is private. I do not share client information with third parties.",
        },
        {
          icon: "📞",
          title: "Or call me",
          desc: "If you prefer a call, feel free to reach me directly.",
          link: "tel:+381641234567",
          linkLabel: "+381 64 123 4567",
        },
      ],
      note: "If I'm unavailable at the moment, leave a message and I'll get back to you as soon as possible.",
    },
  };

  const c = content[lang];

  return (
    <>
      <TawkTo autoOpen />

      {/* Hero */}
      <section className="bg-[#1a2744] pt-20 pb-16 px-4 text-center">
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
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {c.cards.map((card) => (
            <div
              key={card.title}
              className="bg-[#f8f9fc] rounded-sm p-6 border border-gray-100 flex flex-col gap-3"
            >
              <span className="text-3xl">{card.icon}</span>
              <h3 className="font-playfair text-lg font-semibold text-[#1a2744]">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
              {card.link && (
                <a
                  href={card.link}
                  className="text-[#c9a84c] font-semibold text-sm hover:underline mt-auto"
                >
                  {card.linkLabel}
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm max-w-lg mx-auto">
          {c.note}
        </p>
      </section>

      {/* Spacer so the tawk.to widget doesn't overlap content at the bottom */}
      <div className="h-24 bg-white" />
    </>
  );
}
