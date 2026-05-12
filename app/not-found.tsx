import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stranica nije pronađena – Advokat Dejan Jovanović",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#f5f5f5]">
      <div className="text-center px-4">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-12 bg-[#c9a84c]" />
          <div className="w-2 h-2 rotate-45 bg-[#c9a84c]" />
          <div className="h-px w-12 bg-[#c9a84c]" />
        </div>

        <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-4">
          Greška 404
        </p>
        <h1 className="font-heading text-6xl md:text-8xl font-bold text-[#1a2744] mb-4">
          404
        </h1>
        <p className="text-gray-600 text-lg mb-2">Stranica nije pronađena.</p>
        <p className="text-gray-500 text-sm mb-10">
          Stranica koju tražite ne postoji ili je premeštena.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-[#1a2744] text-white font-semibold px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#243560] transition-colors duration-200"
          >
            Povratak na početnu
          </Link>
          <Link
            href="/kontakt"
            className="inline-block border border-[#1a2744] text-[#1a2744] font-semibold px-8 py-3 text-sm uppercase tracking-wider hover:bg-[#1a2744] hover:text-white transition-colors duration-200"
          >
            Kontaktirajte nas
          </Link>
        </div>
      </div>
    </div>
  );
}
