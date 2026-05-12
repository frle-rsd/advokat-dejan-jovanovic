import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Kontakt – Advokat Dejan Jovanović",
  description:
    "Kontaktirajte advokatsku kancelariju Dejan Jovanović u Beogradu. Telefon, email i kontakt forma.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[#1a2744] py-16 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Stupite u kontakt
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Kontakt</h1>
          <div className="w-12 h-0.5 bg-[#c9a84c]" />
        </div>
      </div>

      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                  Informacije
                </p>
                <h2 className="font-heading text-2xl font-bold text-[#1a2744] mb-6">
                  Adresa i kontakt
                </h2>
              </div>

              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Adresa",
                  value: "Bulevar kralja Aleksandra 1\n11000 Beograd, Srbija",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Telefon",
                  value: "+381 11 123 4567",
                  href: "tel:+381111234567",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: "office@advokatjovanovic.rs",
                  href: "mailto:office@advokatjovanovic.rs",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: "Radno vreme",
                  value: "Ponedeljak – Petak\n09:00 – 17:00",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1a2744] text-[#c9a84c] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-[#1a2744] font-medium hover:text-[#c9a84c] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-[#1a2744] font-medium whitespace-pre-line">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 border border-gray-100">
                <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                  Pišite nam
                </p>
                <h2 className="font-heading text-2xl font-bold text-[#1a2744] mb-6">
                  Pošaljite upit
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="h-80 w-full">
        <iframe
          title="Lokacija kancelarije"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.5!2d20.4569!3d44.8176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa559d861a1%3A0x1c121ef9d9c84b96!2sBeograd!5e0!3m2!1ssr!2srs!4v1700000000000!5m2!1ssr!2srs"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
