import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a2744] text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="text-[#c9a84c] font-heading font-bold text-xl mb-1">Advokat</div>
          <div className="text-white font-heading font-semibold text-base mb-3">Dejan Jovanović</div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Vaš pouzdani pravni savetnik u Beogradu. Profesionalnost, poverljivost i rezultati.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-[#c9a84c] font-semibold text-sm uppercase tracking-widest mb-4">
            Navigacija
          </h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/", label: "Početna" },
              { href: "/o-nama", label: "O nama" },
              { href: "/oblasti-prava", label: "Oblasti prava" },
              { href: "/blog", label: "Blog" },
              { href: "/kontakt", label: "Kontakt" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="hover:text-[#c9a84c] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[#c9a84c] font-semibold text-sm uppercase tracking-widest mb-4">
            Kontakt
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Bulevar kralja Aleksandra 1, Beograd</li>
            <li>
              <a href="tel:+381111234567" className="hover:text-[#c9a84c] transition-colors">
                +381 11 123 4567
              </a>
            </li>
            <li>
              <a href="mailto:office@advokatjovanovic.rs" className="hover:text-[#c9a84c] transition-colors">
                office@advokatjovanovic.rs
              </a>
            </li>
            <li className="text-gray-500">Pon–Pet: 09:00–17:00</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © 2025 Advokat Dejan Jovanović. Sva prava zadržana.
      </div>
    </footer>
  );
}
