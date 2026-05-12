"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageContext";

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/o-meni", label: t.nav.about },
    { href: "/oblasti-prava", label: t.nav.practice },
    { href: "/blog", label: t.nav.blog },
    { href: "/kontakt", label: t.nav.contact },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#1a2744] shadow-xl" : "bg-[#1a2744]/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image
              src="/logo.png"
              alt="Advokat Jovanović"
              fill
              className="object-contain"
              style={{ mixBlendMode: "screen" }}
            />
          </div>
          <div className="leading-tight">
            <div className="text-[#c9a84c] font-heading font-bold text-base tracking-wide">
              Advokat
            </div>
            <div className="text-white font-heading font-semibold text-sm tracking-wider">
              Jovanović
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                isActive(href) ? "text-[#c9a84c]" : "text-gray-300 hover:text-white"
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-[#c9a84c] transition-all duration-300 ${
                  isActive(href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Right: lang switcher + hamburger */}
        <div className="flex items-center gap-4">
          {/* Language switcher */}
          <button
            onClick={() => setLang(lang === "sr" ? "en" : "sr")}
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-[#c9a84c] transition-colors border border-white/20 hover:border-[#c9a84c]/50 px-2.5 py-1.5 rounded-sm"
            aria-label="Switch language"
          >
            <span className="text-base leading-none">{lang === "sr" ? "🇷🇸" : "🇬🇧"}</span>
            <span>{lang === "sr" ? "SRB" : "ENG"}</span>
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Meni"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-[#152035] px-4 pb-4 pt-2">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center py-3 text-sm font-medium border-b border-white/10 transition-colors ${
                isActive(href) ? "text-[#c9a84c]" : "text-gray-300 hover:text-white"
              }`}
            >
              {isActive(href) && (
                <span className="w-1.5 h-1.5 bg-[#c9a84c] rotate-45 mr-3 inline-block" />
              )}
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
