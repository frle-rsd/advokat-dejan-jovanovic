import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O nama – Advokat Dejan Jovanović",
  description:
    "Upoznajte advokata Dejana Jovanovića – iskusnog pravnog stručnjaka sa dugogodišnjom praksom u Beogradu.",
};

export default function ONamaPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[#1a2744] py-16 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Naša kancelarija
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">O nama</h1>
          <div className="w-12 h-0.5 bg-[#c9a84c]" />
        </div>
      </div>

      {/* Main bio section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Photo */}
            <div className="lg:col-span-2">
              <div className="relative">
                <div className="w-full aspect-[3/4] bg-[#1a2744]/10 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <svg className="w-24 h-24 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-sm">Fotografija advokata</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-[#c9a84c] -z-10" />
              </div>

              {/* Quick facts */}
              <div className="mt-10 space-y-4">
                {[
                  { label: "Iskustvo", value: "15+ godina" },
                  { label: "Komora", value: "Advokatska komora Beograda" },
                  { label: "Specijalizacija", value: "Krivično i građansko pravo" },
                  { label: "Lokacija", value: "Beograd, Srbija" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-1 h-full min-h-[20px] bg-[#c9a84c] mt-1" />
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">{label}</div>
                      <div className="text-sm font-semibold text-[#1a2744]">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio text */}
            <div className="lg:col-span-3">
              <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                Biografija
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a2744] mb-6">
                Advokat Dejan Jovanović
              </h2>
              <div className="w-12 h-0.5 bg-[#c9a84c] mb-8" />

              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Advokat Dejan Jovanović je jedan od vodećih pravnih stručnjaka u Beogradu sa više od petnaest godina iskustva u krivičnom, građanskom, porodičnom i privrednom pravu. Tokom svoje bogate karijere, uspešno je zastupao stotine klijenata pred sudovima svih instanci u Republici Srbiji.
                </p>
                <p>
                  Nakon završenog Pravnog fakulteta Univerziteta u Beogradu i položenog pravosudnog ispita, advokat Jovanović je stekao bogato iskustvo radeći u uglednim pravnim kancelarijama pre nego što je 2010. godine otvorio sopstvenu praksu. Njegova kancelarija danas pruža sveobuhvatne pravne usluge fizičkim i pravnim licima, sa naglaskom na individualni pristup svakom predmetu.
                </p>
                <p>
                  Advokat Jovanović je poznat po svojoj posvećenosti klijentima, detaljnoj pripremi slučajeva i sposobnosti da pronađe najefikasnija pravna rešenja i u najsloženijim situacijama. Njegova metodičnost i temeljno poznavanje zakona i sudske prakse osiguravaju da svaki klijent dobije najviši nivo pravne zaštite.
                </p>
                <p>
                  Kao aktivni član Advokatske komore Beograda, redovno učestvuje u stručnim seminarima i konferencijama, kontinuirano prateći sve promene u zakonodavstvu i razvoju sudske prakse kako bi uvek pružao najažurnije pravne savete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Membership */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                Obrazovanje
              </p>
              <h3 className="font-heading text-2xl font-bold text-[#1a2744] mb-6">Akademska karijera</h3>
              <div className="space-y-6">
                {[
                  {
                    year: "2005",
                    title: "Diploma – Pravni fakultet",
                    org: "Univerzitet u Beogradu",
                  },
                  {
                    year: "2007",
                    title: "Pravosudni ispit",
                    org: "Ministarstvo pravde Republike Srbije",
                  },
                  {
                    year: "2010",
                    title: "Upis u Imenik advokata",
                    org: "Advokatska komora Beograda",
                  },
                ].map((item) => (
                  <div key={item.year} className="flex gap-4">
                    <div className="text-[#c9a84c] font-semibold text-sm w-12 shrink-0 pt-0.5">
                      {item.year}
                    </div>
                    <div>
                      <div className="font-semibold text-[#1a2744] text-sm">{item.title}</div>
                      <div className="text-gray-500 text-sm">{item.org}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                Članstvo
              </p>
              <h3 className="font-heading text-2xl font-bold text-[#1a2744] mb-6">Profesionalne organizacije</h3>
              <div className="space-y-4">
                {[
                  "Advokatska komora Beograda",
                  "Advokatska komora Srbije",
                  "Udruženje krivičnih branilaca Srbije",
                  "Srpsko udruženje za privredno pravo",
                ].map((org) => (
                  <div key={org} className="flex items-center gap-3">
                    <div className="w-2 h-2 rotate-45 bg-[#c9a84c] shrink-0" />
                    <span className="text-gray-700 text-sm">{org}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
