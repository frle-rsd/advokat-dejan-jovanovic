"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import ContactForm from "@/components/ContactForm";

export default function KontaktPage() {
  const { t } = useLanguage();
  const c = t.contact;

  const infoItems = [
    {
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      label: "Adresa",
      value: c.address,
      href: undefined,
    },
    {
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
      label: "Telefon",
      value: c.phone,
      href: "tel:+381605000362",
    },
    {
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      label: "Email",
      value: c.email,
      href: "mailto:jovanovic92.law@gmail.com",
    },
    {
      icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      label: c.hoursLabel,
      value: c.hours,
      href: undefined,
    },
  ];

  return (
    <>
      <div className="bg-[#1a2744] py-16 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            {c.label}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{c.pageTitle}</h1>
          <div className="w-12 h-0.5 bg-[#c9a84c]" />
        </div>
      </div>

      <section className="py-20 bg-[#f8f6f0]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                  {c.infoLabel}
                </p>
                <h2 className="font-heading text-2xl font-bold text-[#1a2744] mb-7">{c.infoTitle}</h2>
              </div>

              {infoItems.map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#1a2744] text-[#c9a84c] flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">{label}</div>
                    {href ? (
                      <a href={href} className="text-sm text-[#1a2744] font-medium hover:text-[#c9a84c] transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-[#1a2744] font-medium whitespace-pre-line">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="bg-white p-8 border border-gray-100 shadow-sm">
                <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                  {c.formLabel}
                </p>
                <h2 className="font-heading text-2xl font-bold text-[#1a2744] mb-7">{c.formTitle}</h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map */}
      <div className="h-80 w-full">
        <iframe
          title="Lokacija kancelarije – Lipetska 17, Beograd"
          src="https://maps.google.com/maps?q=Lipetska+17,+Beograd,+Srbija&t=&z=16&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}
