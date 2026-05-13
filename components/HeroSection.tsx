"use client";

import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/LanguageContext";

// ─── CountUp ────────────────────────────────────────────────────────────────
function CountUp({
  to,
  suffix = "",
  duration = 2.8,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
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

// ─── Floating particle ───────────────────────────────────────────────────────
function Particle({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) {
  return (
    <motion.div
      className="absolute rotate-45 bg-[#c9a84c] pointer-events-none"
      style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
      animate={{ y: [0, -22, 0], opacity: [0.2, 0.6, 0.2] }}
      transition={{ duration: 3.6 + delay * 0.4, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  );
}

const PARTICLES = [
  { x: 8,  y: 22, size: 4, delay: 0    },
  { x: 18, y: 72, size: 2, delay: 0.9  },
  { x: 72, y: 12, size: 5, delay: 1.6  },
  { x: 82, y: 58, size: 3, delay: 0.4  },
  { x: 58, y: 82, size: 2, delay: 1.2  },
  { x: 91, y: 30, size: 4, delay: 0.7  },
  { x: 12, y: 55, size: 3, delay: 2.0  },
  { x: 44, y: 8,  size: 2, delay: 0.3  },
  { x: 35, y: 90, size: 3, delay: 1.4  },
  { x: 95, y: 78, size: 2, delay: 0.6  },
];

// ─── Main ────────────────────────────────────────────────────────────────────
export default function HeroSection() {
  const { t, lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [inSection, setInSection] = useState(false);

  // Logo parallax (percentage-based, kept from before)
  const rawX = useMotionValue(50);
  const rawY = useMotionValue(50);
  const springX = useSpring(rawX, { stiffness: 50, damping: 18 });
  const springY = useSpring(rawY, { stiffness: 50, damping: 18 });
  const logoX = useTransform(springX, [0, 100], [20, -20]);
  const logoY = useTransform(springY, [0, 100], [12, -12]);

  // ── Cursor system (pixel coordinates relative to section) ────────────────
  const cursorX = useMotionValue(-300);
  const cursorY = useMotionValue(-300);

  // Ring springs behind the cursor
  const ringX = useSpring(cursorX, { stiffness: 160, damping: 22 });
  const ringY = useSpring(cursorY, { stiffness: 160, damping: 22 });

  // Glow drifts even more lazily
  const glowX = useSpring(cursorX, { stiffness: 55, damping: 18 });
  const glowY = useSpring(cursorY, { stiffness: 55, damping: 18 });

  // ── KEY FIX: on mouse ENTER, instantly teleport all springs to the
  //    entry position so the ring doesn't travel from (-300,-300) across
  //    the whole hero before becoming visible ────────────────────────────────
  function handleMouseEnter(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    cursorX.set(px);
    cursorY.set(py);
    ringX.set(px);   // instant — no spring travel
    ringY.set(py);
    glowX.set(px);
    glowY.set(py);
    setInSection(true);
  }

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    cursorX.set(px);
    cursorY.set(py);
    rawX.set((px / rect.width) * 100);
    rawY.set((py / rect.height) * 100);
  }

  function handleMouseLeave() {
    setInSection(false);
    cursorX.set(-300);
    cursorY.set(-300);
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[90vh] bg-[#1a2744] flex items-center overflow-hidden"
    >
      {/* Animated moving grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.045]"
        animate={{ backgroundPosition: ["0px 0px, 0px 0px", "60px 60px, 60px 60px"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(#c9a84c 1px, transparent 1px), linear-gradient(90deg, #c9a84c 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => <Particle key={i} {...p} />)}

      {/* Logo parallax watermark */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ x: logoX, y: logoY }}
      >
        <Image src="/logo.png" alt="" width={420} height={420} className="opacity-[0.07]" aria-hidden draggable={false} />
      </motion.div>

      {/* Glow orb — invisible until mouse enters, then fades in */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        animate={{ opacity: inSection ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          width: 440,
          height: 440,
          background: "radial-gradient(circle, rgba(201,168,76,0.11) 0%, rgba(201,168,76,0.04) 45%, transparent 70%)",
        }}
      />

      {/* Cursor ring — springs behind cursor, fades in on entry */}
      <motion.div
        className="absolute pointer-events-none z-20 rounded-full"
        animate={{ opacity: inSection ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 36,
          height: 36,
          border: "1px solid rgba(201,168,76,0.55)",
          boxShadow: "0 0 16px 4px rgba(201,168,76,0.15)",
        }}
      />

      {/* Cursor dot — snaps instantly, fades in on entry */}
      <motion.div
        className="absolute pointer-events-none z-20 rounded-full bg-[#c9a84c]"
        animate={{ opacity: inSection ? 1 : 0 }}
        transition={{ duration: 0.15 }}
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: 5,
          height: 5,
        }}
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

        {/* Heading 1 — slide-up mask reveal */}
        <div className="overflow-hidden mb-1">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.22, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold text-white leading-tight"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            {t.hero.heading1}
          </motion.h1>
        </div>

        {/* Heading 2 */}
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.36, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading font-bold text-[#c9a84c] leading-tight"
            style={{ fontSize: "clamp(2.4rem, 6vw, 4.5rem)" }}
          >
            {t.hero.heading2}
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          {t.hero.sub}
        </motion.p>

        {/* CTA buttons — shimmer, fixed position */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/kontakt"
            className="btn-shimmer inline-flex items-center justify-center gap-2 bg-[#c9a84c] text-[#1a2744] font-semibold px-8 py-4 text-sm uppercase tracking-wider hover:bg-[#d4b561] active:scale-95 transition-all duration-200"
          >
            {t.hero.cta1}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/oblasti-prava"
            className="btn-shimmer-outline inline-flex items-center justify-center border border-white/30 text-white font-semibold px-8 py-4 text-sm uppercase tracking-wider hover:border-[#c9a84c] hover:text-[#c9a84c] active:scale-95 transition-all duration-200"
          >
            {t.hero.cta2}
          </Link>
        </motion.div>

        {/* ── Stats — glassmorphism panel, responsive ────────────────────────
            Mobile:  stacked vertically (flex-col), full width
            Desktop: horizontal row (flex-row), auto width             */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.88, duration: 0.6 }}
          className="flex justify-center mt-14 px-4 sm:px-0"
        >
          <div className="flex flex-col sm:flex-row w-full sm:w-auto backdrop-blur-sm bg-white/[0.05] border border-white/[0.12]">
            {stats.map(({ to, suffix, label, dur }, i) => (
              <div
                key={label}
                className={`flex-1 sm:flex-none px-6 sm:px-9 py-4 sm:py-5 text-center ${
                  i > 0
                    ? "border-t sm:border-t-0 sm:border-l border-white/[0.12]"
                    : ""
                }`}
              >
                <div className="text-[#c9a84c] font-heading font-bold text-2xl sm:text-[1.75rem] leading-none">
                  <CountUp to={to} suffix={suffix} duration={dur} />
                </div>
                <div className="text-gray-400 text-[10px] mt-1.5 uppercase tracking-widest">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom wave — viewBox extended to 42 + display:block to kill 1px gap */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1440 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%" }}
        >
          <path d="M0 42 L0 20 Q360 0 720 20 Q1080 42 1440 20 L1440 42 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
