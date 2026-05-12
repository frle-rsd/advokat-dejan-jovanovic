import Link from "next/link";

const areas = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Krivično pravo",
    desc: "Odbrana u krivičnim postupcima, zastupanje pred sudovima svih instanci, zaštita prava okrivljenih.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: "Građansko pravo",
    desc: "Ugovorno pravo, naknada štete, imovinsko-pravni odnosi i zastupanje u parničnim postupcima.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Porodično pravo",
    desc: "Razvod braka, starateljstvo nad decom, izdržavanje i regulisanje imovinskih odnosa supružnika.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Radno pravo",
    desc: "Zaštita prava zaposlenih i poslodavaca, otkazi, radni sporovi i kolektivni ugovori.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Privredno pravo",
    desc: "Osnivanje privrednih društava, ugovori, statusne promene i privrednopravni sporovi.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Nekretnine i imovinsko pravo",
    desc: "Kupoprodaja nekretnina, uknjižba, exproprijacija i rešavanje imovinsko-pravnih sporova.",
  },
];

export default function PracticeAreas() {
  return (
    <section className="py-20 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Naša specijalizacija
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a2744] mb-4">
            Oblasti prava
          </h2>
          <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <div
              key={area.title}
              className="bg-white p-8 border border-gray-100 hover:shadow-lg hover:border-[#c9a84c]/30 transition-all duration-300 group"
            >
              <div className="text-[#c9a84c] mb-4 group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg text-[#1a2744] mb-3">
                {area.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/oblasti-prava"
            className="inline-block border border-[#1a2744] text-[#1a2744] font-semibold px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#1a2744] hover:text-white transition-colors duration-200"
          >
            Sve oblasti prava
          </Link>
        </div>
      </div>
    </section>
  );
}
