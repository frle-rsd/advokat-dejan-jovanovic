"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useLanguage } from "@/components/LanguageContext";

function FlagSR() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="14" rx="2" fill="#EEE"/>
      <rect width="20" height="4.67" fill="#C6363C"/>
      <rect y="4.67" width="20" height="4.67" fill="#0C4076"/>
      <rect y="9.33" width="20" height="4.67" fill="#EEE"/>
    </svg>
  );
}

function FlagEN() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="14" rx="2" fill="#012169"/>
      <path d="M0 0L20 14M20 0L0 14" stroke="white" strokeWidth="2.5"/>
      <path d="M10 0V14M0 7H20" stroke="white" strokeWidth="4"/>
      <path d="M10 0V14M0 7H20" stroke="#C8102E" strokeWidth="2.5"/>
      <path d="M0 0L20 14M20 0L0 14" stroke="#C8102E" strokeWidth="1.5"/>
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
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
        scrolled
          ? "bg-[#1a2744] shadow-2xl shadow-black/20"
          : "bg-[#1a2744]/98 backdrop-blur-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-6">

        {/* Logo only */}
        <Link href="/" className="flex items-center shrink-0 group">
          <div
            className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-[#c9a84c]/40 group-hover:ring-[#c9a84c] transition-all duration-300 shrink-0"
            style={{ backgroundColor: "#3c3d3f" }}
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 flex-1 justify-center">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group whitespace-nowrap ${
                isActive(href) ? "text-[#c9a84c]" : "text-gray-300 hover:text-white"
              }`}
            >
              {label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-[#c9a84c] transition-all duration-300 ${
                  isActive(href) ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        {/* Right: lang switcher + hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setLang(lang === "sr" ? "en" : "sr")}
            className="flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-white transition-colors border border-white/15 hover:border-white/40 px-2.5 py-1.5 rounded-sm group"
            aria-label="Switch language"
          >
            {lang === "sr" ? <FlagSR /> : <FlagEN />}
            <span className="hidden sm:inline">{lang === "sr" ? "SRB" : "ENG"}</span>
          </button>

          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-[#111d36] px-4 py-2 border-t border-white/10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-3 py-3.5 text-sm font-medium border-b border-white/8 transition-colors last:border-0 ${
                isActive(href) ? "text-[#c9a84c]" : "text-gray-300 hover:text-white"
              }`}
            >
              <span className={`w-1 h-1 rotate-45 shrink-0 transition-colors ${isActive(href) ? "bg-[#c9a84c]" : "bg-transparent"}`} />
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
