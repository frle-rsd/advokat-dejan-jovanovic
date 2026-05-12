import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Oblasti prava – Advokat Dejan Jovanović",
  description:
    "Pravne usluge u oblasti krivičnog, građanskog, porodičnog, radnog, privrednog prava i prava nekretnina.",
};

const areas = [
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Krivično pravo",
    desc: "Pružamo sveobuhvatnu odbranu u svim fazama krivičnog postupka – od policijskog saslušanja do žalbenog postupka. Naš cilj je zaštita Vaših prava i sloboda.",
    services: [
      "Odbrana u istražnom postupku",
      "Zastupanje pred sudom",
      "Žalbeni postupci",
      "Krivične prijave",
      "Uslovni otpust i alternativne sankcije",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "Građansko pravo",
    desc: "Zastupamo klijente u svim vrstama parničnih postupaka, ugovornim sporovima i postupcima naknade štete, uvek u potrazi za najboljim rešenjem.",
    services: [
      "Ugovorni sporovi",
      "Naknada štete",
      "Izvršni postupci",
      "Nasledno pravo",
      "Obligacioni sporovi",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Porodično pravo",
    desc: "U osetljivim porodičnim situacijama, pristupamo svakom slučaju sa razumevanjem i profesionalizmom, štiteći interese naših klijenata i njihove dece.",
    services: [
      "Razvod braka",
      "Starateljstvo nad decom",
      "Alimentacija i izdržavanje",
      "Bračni ugovori",
      "Imovinsko-pravni odnosi supružnika",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Radno pravo",
    desc: "Štitimo prava zaposlenih i pomažemo poslodavcima da posluju u skladu sa zakonom. Rešavamo radne sporove brzo i efikasno.",
    services: [
      "Otkazi ugovora o radu",
      "Radni sporovi",
      "Mobing",
      "Kolektivni ugovori",
      "Savetovanje poslodavaca",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Privredno pravo",
    desc: "Pružamo pravnu podršku privrednim subjektima u svim fazama poslovanja – od osnivanja do rešavanja kompleksnih privrednih sporova.",
    services: [
      "Osnivanje privrednih društava",
      "Privredno-pravni ugovori",
      "Statusne promene privrednih društava",
      "Stečaj i likvidacija",
      "Privrednopravni sporovi",
    ],
  },
  {
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Nekretnine i imovinsko pravo",
    desc: "Obezbeđujemo pravnu sigurnost u svim transakcijama nekretninama, od kupoprodaje do uknjižbe i rešavanja imovinskih sporova.",
    services: [
      "Kupoprodaja nekretnina",
      "Uknjižba i prenos prava",
      "Eksproprijacija",
      "Susedski sporovi",
      "Legalizacija objekata",
    ],
  },
];

export default function OblastiPravaPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[#1a2744] py-16 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Naša specijalizacija
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Oblasti prava</h1>
          <div className="w-12 h-0.5 bg-[#c9a84c]" />
        </div>
      </div>

      {/* Areas grid */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {areas.map((area) => (
              <div key={area.title} className="bg-white p-8 border border-gray-100 hover:shadow-lg hover:border-[#c9a84c]/30 transition-all duration-300">
                <div className="flex items-start gap-5">
                  <div className="text-[#c9a84c] shrink-0 mt-1">{area.icon}</div>
                  <div>
                    <h2 className="font-heading text-xl font-bold text-[#1a2744] mb-3">
                      {area.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{area.desc}</p>
                    <ul className="space-y-2">
                      {area.services.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c] shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a2744] text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Imate pravni problem?
          </h2>
          <p className="text-gray-300 mb-8">
            Kontaktirajte nas danas za besplatnu inicijalnu konsultaciju.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-[#c9a84c] text-[#1a2744] font-semibold px-10 py-4 text-sm uppercase tracking-wider hover:bg-[#b8973b] transition-colors duration-200"
          >
            Kontaktirajte nas
          </Link>
        </div>
      </section>
    </>
  );
}
