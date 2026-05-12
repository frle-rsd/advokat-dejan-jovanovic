import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import PracticeAreas from "@/components/PracticeAreas";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* O nama preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div className="relative">
              <div className="w-full aspect-[4/5] bg-[#1a2744]/10 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-24 h-24 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm">Fotografija advokata</span>
                </div>
              </div>
              {/* Gold accent border */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-[#c9a84c] -z-10" />
            </div>

            {/* Bio */}
            <div>
              <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                O nama
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a2744] mb-2">
                Advokat Dejan
              </h2>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#c9a84c] mb-6">
                Jovanović
              </h2>
              <div className="w-12 h-0.5 bg-[#c9a84c] mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Advokat Dejan Jovanović je iskusan pravni stručnjak sa dugogodišnjom praksom u oblasti krivičnog, građanskog i privrednog prava. Osnivač kancelarije koja nosi njegovo ime, posvetio je svoju karijeru pružanju vrhunske pravne pomoći fizičkim i pravnim licima.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Član je Advokatske komore Beograda i kontinuirano se usavršava u svim oblastima prava, prateci najnovije zakonske izmene i sudsku praksu.
              </p>
              <Link
                href="/o-nama"
                className="inline-block bg-[#1a2744] text-white font-semibold px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#243560] transition-colors duration-200"
              >
                Saznaj više
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PracticeAreas />
      <WhyUs />

      {/* Contact teaser */}
      <section className="py-20 bg-[#1a2744] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#c9a84c]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]" />
            <div className="h-px w-12 bg-[#c9a84c]" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Potrebna Vam je pravna pomoć?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Kontaktirajte nas za besplatnu inicijalnu konsultaciju. Tu smo za Vas.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm mb-10">
            <a href="tel:+381111234567" className="flex items-center gap-3 text-gray-300 hover:text-[#c9a84c] transition-colors">
              <svg className="w-5 h-5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +381 11 123 4567
            </a>
            <a href="mailto:office@advokatjovanovic.rs" className="flex items-center gap-3 text-gray-300 hover:text-[#c9a84c] transition-colors">
              <svg className="w-5 h-5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              office@advokatjovanovic.rs
            </a>
          </div>
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
