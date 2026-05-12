"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";

export default function OMeniPage() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <>
      {/* Header */}
      <div className="bg-[#1a2744] py-16 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            {a.label}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{a.pageTitle}</h1>
          <div className="w-12 h-0.5 bg-[#c9a84c]" />
        </div>
      </div>

      {/* Bio */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
            {/* Photo + quick facts */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                <div className="relative">
                  <Image
                    src="/advokat-photo.jpg"
                    alt="Advokat Dejan Jovanović"
                    width={480}
                    height={640}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-4 border-[#c9a84c]/40 pointer-events-none" />
              </div>

              <div className="mt-10 space-y-4">
                {a.quickFacts.map(({ label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-0.5 h-full min-h-[20px] bg-[#c9a84c] mt-1 shrink-0" />
                    <div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
                      <div className="text-sm font-semibold text-[#1a2744]">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                {a.label}
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1a2744] mb-5">
                Advokat Dejan Jovanović
              </h2>
              <div className="w-10 h-0.5 bg-[#c9a84c] mb-8" />

              <div className="space-y-5 text-gray-600 leading-relaxed">
                {a.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education & Membership */}
      <section className="py-16 bg-[#f8f6f0]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                {a.eduLabel}
              </p>
              <h3 className="font-heading text-2xl font-bold text-[#1a2744] mb-7">{a.eduTitle}</h3>
              <div className="space-y-6">
                {a.edu.map((item) => (
                  <div key={item.year} className="flex gap-5">
                    <div className="text-[#c9a84c] font-semibold text-sm w-10 shrink-0 pt-0.5">
                      {item.year}
                    </div>
                    <div>
                      <div className="font-semibold text-[#1a2744] text-sm">{item.title}</div>
                      <div className="text-gray-500 text-sm">{item.org}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Membership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
                {a.memberLabel}
              </p>
              <h3 className="font-heading text-2xl font-bold text-[#1a2744] mb-7">{a.memberTitle}</h3>
              <ul className="space-y-4">
                {a.members.map((org) => (
                  <li key={org} className="flex items-center gap-3">
                    <div className="w-2 h-2 rotate-45 bg-[#c9a84c] shrink-0" />
                    <span className="text-gray-700 text-sm">{org}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
