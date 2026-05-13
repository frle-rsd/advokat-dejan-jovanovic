"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/components/LanguageContext";

// ─── 3-D Tilt + glare card wrapper ──────────────────────────────────────────
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0); // -0.5 … 0.5
  const rawY = useMotionValue(0);

  const cfg = { stiffness: 300, damping: 28 };
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [9, -9]), cfg);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-9, 9]), cfg);

  // Glare position follows cursor
  const glareX = useTransform(rawX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(rawY, [-0.5, 0.5], ["0%", "100%"]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current!.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function onLeave() {
    rawX.set(0);
    rawY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative group"
    >
      {children}

      {/* Glare overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(201,168,76,0.12) 0%, transparent 65%)`,
        }}
      />
    </motion.div>
  );
}

// ─── Icons ───────────────────────────────────────────────────────────────────
const icons = [
  <svg key="k" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
  <svg key="g" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
  <svg key="p" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  <svg key="r" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  <svg key="pr" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  <svg key="n" className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>,
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
} as const;

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
} as const;

// ─── Section heading with gold sweep reveal ──────────────────────────────────
function SweepHeading({
  label,
  heading,
}: {
  label: string;
  heading: string;
}) {
  return (
    <div className="text-center mb-14">
      <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
        {label}
      </p>
      <div className="relative inline-block overflow-hidden">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a2744]">
          {heading}
        </h2>
        {/* Gold bar sweeps left→right then exits right */}
        <motion.div
          initial={{ x: "-101%" }}
          whileInView={{ x: ["−101%", "0%", "0%", "101%"] }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, times: [0, 0.38, 0.62, 1], ease: "easeInOut" }}
          className="absolute inset-0 bg-[#c9a84c]"
        />
      </div>
      <div className="w-12 h-0.5 bg-[#c9a84c] mx-auto mt-4" />
    </div>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────
export default function PracticeAreas() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#f8f6f0]" style={{ perspective: "1200px" }}>
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SweepHeading
            label={t.practiceAreas.label}
            heading={t.practiceAreas.heading}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.practiceAreas.items.map((area, i) => (
            <motion.div key={area.title} variants={cardVariants}>
              <TiltCard>
                <div className="bg-white p-7 border border-gray-100 hover:shadow-xl hover:border-[#c9a84c]/40 transition-all duration-300 group cursor-default h-full">
                  <div className="w-14 h-14 bg-[#1a2744]/5 flex items-center justify-center text-[#c9a84c] mb-5 group-hover:bg-[#1a2744] transition-colors duration-300">
                    {icons[i]}
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-[#1a2744] mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            href="/oblasti-prava"
            className="btn-shimmer inline-block border border-[#1a2744] text-[#1a2744] font-semibold px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#1a2744] hover:text-white transition-colors duration-200"
          >
            {t.practiceAreas.viewAll}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
