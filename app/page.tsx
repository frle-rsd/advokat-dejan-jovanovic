"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import PracticeAreas from "@/components/PracticeAreas";
import WhyUs from "@/components/WhyUs";
import { useLanguage } from "@/components/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const a = t.aboutPreview;
  const c = t.contactTeaser;

  return (
    <>
      <HeroSection />

      {/* About preview — white background, no line */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative">
                <Image
                  src="/advokat-photo.jpg"
                  alt="Advokat Dejan Jovanović"
                  width={480}
                  height={640}
                  className="w-full h-auto object-contain transition-transform duration-500 ease-out hover:scale-[1.03]"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 w-28 h-28 border-4 border-[#c9a84c]/50 pointer-events-none" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                {a.label}
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a2744] mb-1">
                {a.heading1}
              </h2>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#c9a84c] mb-5">
                {a.heading2}
              </h2>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-7" />
              <p className="text-gray-600 leading-relaxed mb-4">{a.p1}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{a.p2}</p>
              <Link
                href="/o-meni"
                className="btn-shimmer inline-block bg-[#1a2744] text-white font-semibold px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#243560] transition-colors duration-200"
              >
                {a.cta}
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <PracticeAreas />
      <WhyUs />

      {/* Contact teaser */}
      <section className="relative py-24 bg-[#1a2744] text-white overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 max-w-5xl mx-auto px-4"
        >
          {/* Top label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#c9a84c]/60" />
            <span className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold">
              {c.heading}
            </span>
            <div className="h-px w-10 bg-[#c9a84c]/60" />
          </div>

          {/* Two-column card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {/* Left — message */}
            <div className="bg-[#1a2744] p-10 flex flex-col justify-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-4">
                {c.heading}
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">{c.sub}</p>
              <Link
                href="/kontakt"
                className="btn-shimmer self-start inline-flex items-center gap-2 bg-[#c9a84c] text-[#1a2744] font-semibold px-8 py-4 text-sm uppercase tracking-wider hover:bg-[#d4b561] active:scale-95 transition-all duration-200"
              >
                {c.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Right — contact details */}
            <div className="bg-[#111d36] p-10 flex flex-col justify-center gap-6">
              <a
                href="tel:+381605000362"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center shrink-0 group-hover:bg-[#c9a84c]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">Telefon</div>
                  <div className="text-white font-semibold group-hover:text-[#c9a84c] transition-colors">+381 60 5000 362</div>
                </div>
              </a>

              <a
                href="mailto:dejanjovanovic.adv@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center shrink-0 group-hover:bg-[#c9a84c]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">Email</div>
                  <div className="text-white font-semibold group-hover:text-[#c9a84c] transition-colors text-sm">dejanjovanovic.adv@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-[#c9a84c]/10 border border-[#c9a84c]/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">Radno vreme</div>
                  <div className="text-white font-semibold text-sm">Pon – Pet: 09:00 – 17:00</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
