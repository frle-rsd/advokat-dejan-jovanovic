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

      {/* About preview */}
      <section className="py-24 bg-[#f8f6f0]">
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
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <Image
                  src="/advokat-photo.jpg"
                  alt="Advokat Dejan Jovanović"
                  fill
                  className="object-cover object-top"
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
                className="inline-block bg-[#1a2744] text-white font-semibold px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#243560] transition-colors duration-200"
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
      <section className="py-20 bg-[#1a2744] text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto px-4 text-center"
        >
          <div className="flex items-center justify-center gap-4 mb-7">
            <div className="h-px w-12 bg-[#c9a84c]" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]" />
            <div className="h-px w-12 bg-[#c9a84c]" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">{c.heading}</h2>
          <p className="text-gray-300 text-lg mb-8">{c.sub}</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center text-sm mb-10">
            <a href="tel:+381605000362" className="flex items-center gap-3 text-gray-300 hover:text-[#c9a84c] transition-colors">
              <svg className="w-5 h-5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +381 60 5000 362
            </a>
            <a href="mailto:jovanovic92.law@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-[#c9a84c] transition-colors">
              <svg className="w-5 h-5 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              jovanovic92.law@gmail.com
            </a>
          </div>
          <Link
            href="/kontakt"
            className="inline-block bg-[#c9a84c] text-[#1a2744] font-semibold px-10 py-4 text-sm uppercase tracking-wider hover:bg-[#d4b561] transition-colors duration-200"
          >
            {c.cta}
          </Link>
        </motion.div>
      </section>
    </>
  );
}
