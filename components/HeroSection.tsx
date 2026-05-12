"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";

export default function HeroSection() {
  const { t, lang } = useLanguage();

  const stats = [
    { num: "5+", label: lang === "sr" ? "godina iskustva" : "years experience" },
    { num: "200+", label: lang === "sr" ? "rešenih predmeta" : "cases resolved" },
    { num: "100%", label: lang === "sr" ? "posvećenost" : "commitment" },
  ];

  return (
    <section className="relative min-h-[92vh] bg-[#1a2744] flex items-center overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gold glow behind photo */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#c9a84c]/8 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-[#c9a84c]" />
              <span className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold">
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-heading font-bold text-white leading-tight mb-2"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              {t.hero.heading1}
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="font-heading font-bold text-[#c9a84c] leading-tight mb-8"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
            >
              {t.hero.heading2}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gray-300 text-lg leading-relaxed max-w-lg mb-10"
            >
              {t.hero.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] text-[#1a2744] font-semibold px-8 py-4 text-sm uppercase tracking-wider hover:bg-[#d4b561] active:scale-95 transition-all duration-200"
              >
                {t.hero.cta1}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/oblasti-prava"
                className="inline-flex items-center justify-center border border-white/30 text-white font-semibold px-8 py-4 text-sm uppercase tracking-wider hover:border-[#c9a84c] hover:text-[#c9a84c] active:scale-95 transition-all duration-200"
              >
                {t.hero.cta2}
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10"
            >
              {stats.map(({ num, label }) => (
                <div key={label} className="text-center">
                  <div className="text-[#c9a84c] font-heading font-bold text-2xl">{num}</div>
                  <div className="text-gray-400 text-xs mt-0.5">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border border-[#c9a84c]/30 z-0" />
              <div className="relative z-10 overflow-hidden" style={{ aspectRatio: "4/5" }}>
                <Image
                  src="/advokat-photo.jpg"
                  alt="Advokat Dejan Jovanović"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a2744] to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#c9a84c] text-[#1a2744] px-5 py-3 z-20">
                <div className="font-heading font-bold text-sm">Advokat</div>
                <div className="font-heading font-bold text-xs opacity-80">Dejan Jovanović</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40 L0 20 Q360 0 720 20 Q1080 40 1440 20 L1440 40 Z" fill="#f8f6f0" />
        </svg>
      </div>
    </section>
  );
}
