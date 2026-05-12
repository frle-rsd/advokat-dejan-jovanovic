"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/o-meni", label: t.nav.about },
    { href: "/oblasti-prava", label: t.nav.practice },
    { href: "/blog", label: t.nav.blog },
    { href: "/kontakt", label: t.nav.contact },
  ];

  return (
    <footer>
      {/* Top gold accent line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent" />

      {/* Main footer body */}
      <div className="bg-[#111d36]">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-full overflow-hidden ring-1 ring-[#c9a84c]/30 shrink-0"
                  style={{ backgroundColor: "#3c3d3f" }}
                >
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    width={36}
                    height={36}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="leading-none">
                  <span className="text-[#c9a84c] font-heading font-semibold text-[10px] uppercase tracking-widest block">
                    Advokat
                  </span>
                  <span className="text-white font-heading font-bold text-sm tracking-wide block">
                    Dejan Jovanović
                  </span>
                </div>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mt-2 max-w-[220px]">
                {t.footer.tagline}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-[#c9a84c] font-semibold text-[10px] uppercase tracking-widest mb-4">
                {t.footer.navLabel}
              </h4>
              <ul className="space-y-2">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-gray-400 hover:text-[#c9a84c] transition-colors text-xs"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#c9a84c] font-semibold text-[10px] uppercase tracking-widest mb-4">
                {t.footer.contactLabel}
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                <li className="flex items-start gap-2">
                  <svg className="w-3.5 h-3.5 text-[#c9a84c] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Lipetska 17, Beograd
                </li>
                <li>
                  <a href="tel:+381605000362" className="flex items-center gap-2 hover:text-[#c9a84c] transition-colors">
                    <svg className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +381 60 5000 362
                  </a>
                </li>
                <li>
                  <a href="mailto:dejanjovanovic.adv@gmail.com" className="flex items-center gap-2 hover:text-[#c9a84c] transition-colors">
                    <svg className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    jovanovic92.law@gmail.com
                  </a>
                </li>
                <li className="text-gray-600 pt-0.5">{t.footer.hours}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#0d1826] border-t border-white/5 py-4 text-center text-[11px] text-gray-600">
        {t.footer.copyright}
      </div>
    </footer>
  );
}
