"use client";

import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/LanguageContext";

function CountUp({ to, suffix = "", duration = 2.8 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration, ease: [0.16, 1, 0.3, 1] });
    return controls.stop;
  }, [inView, count, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const { t, lang } = useLanguage();

  const sectionRef = useRef<HTMLElement>(null);

  // Mouse position (0–100%)
  const rawX = useMotionValue(50);
  const rawY = useMotionValue(50);
  const springX = useSpring(rawX, { stiffness: 50, damping: 18 });
  const springY = useSpring(rawY, { stiffness: 50, damping: 18 });

  // Spotlight follows cursor
  const spotlightBg = useMotionTemplate`radial-gradient(ellipse 55% 55% at ${springX}% ${springY}%, rgba(201,168,76,0.10) 0%, transparent 65%)`;

  // Logo drifts opposite to cursor — subtle parallax
  const logoX = useTransform(springX, [0, 100], [20, -20]);
  const logoY = useTransform(springY, [0, 100], [12, -12]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set(((e.clientX - rect.left) / rect.width) * 100);
    rawY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  const stats = [
    { to: 5,   suffix: "+", label: lang === "sr" ? "godina iskustva"  : "years experience", dur: 2.8 },
    { to: 200, suffix: "+", label: lang === "sr" ? "rešenih predmeta" : "cases resolved",   dur: 3.2 },
    { to: 100, suffix: "%", label: lang === "sr" ? "posvećenost"      : "commitment",        dur: 2.5 },
  ];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[90vh] bg-[#1a2744] flex items-center overflow-hidden"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Logo watermark — drifts opposite to mouse */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ x: logoX, y: logoY }}
      >
        <Image
          src="/logo.png"
          alt=""
          width={420}
          height={420}
          className="opacity-[0.08]"
          aria-hidden
          draggable={false}
        />
      </motion.div>

      {/* Mouse-tracking spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: spotlightBg }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 w-full py-24 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="h-px w-8 bg-[#c9a84c]" />
          <span className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold">
            {t.hero.badge}
          </span>
          <div className="h-px w-8 bg-[#c9a84c]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.65 }}
          className="font-heading font-bold text-white leading-tight mb-2"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
        >
          {t.hero.heading1}
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.65 }}
          className="font-heading font-bold text-[#c9a84c] leading-tight mb-8"
          style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
        >
          {t.hero.heading2}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          {t.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
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

        {/* Counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex items-center justify-center gap-0 mt-16 pt-10 border-t border-white/10"
        >
          {stats.map(({ to, suffix, label, dur }, i) => (
            <div
              key={label}
              className={`text-center px-10 ${i !== 0 ? "border-l border-white/10" : ""}`}
            >
              <div className="text-[#c9a84c] font-heading font-bold text-3xl">
                <CountUp to={to} suffix={suffix} duration={dur} />
              </div>
              <div className="text-gray-400 text-xs mt-1 uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom wave — white so it merges with the About section */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40 L0 20 Q360 0 720 20 Q1080 40 1440 20 L1440 40 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
