import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center text-white"
      style={{
        background: "linear-gradient(135deg, #1a2744 0%, #243560 60%, #1a2744 100%)",
      }}
    >
      {/* Decorative overlay pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-[#c9a84c]" />
          <div className="w-2 h-2 rotate-45 bg-[#c9a84c]" />
          <div className="h-px w-16 bg-[#c9a84c]" />
        </div>

        <p className="text-[#c9a84c] text-sm uppercase tracking-[0.3em] font-medium mb-4">
          Pravna Kancelarija · Beograd
        </p>

        <h1 className="font-heading font-bold text-4xl md:text-6xl leading-tight mb-6">
          Advokat Dejan
          <br />
          <span className="text-[#c9a84c]">Jovanović</span>
        </h1>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Vaš pouzdani pravni savetnik u Beogradu. Stručnost, posvećenost i poverenje u svakom predmetu.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/kontakt"
            className="inline-block bg-[#c9a84c] text-[#1a2744] font-semibold px-8 py-4 text-sm uppercase tracking-wider hover:bg-[#b8973b] transition-colors duration-200"
          >
            Kontaktirajte nas
          </Link>
          <Link
            href="/oblasti-prava"
            className="inline-block border border-[#c9a84c] text-[#c9a84c] font-semibold px-8 py-4 text-sm uppercase tracking-wider hover:bg-[#c9a84c] hover:text-[#1a2744] transition-colors duration-200"
          >
            Oblasti prava
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
