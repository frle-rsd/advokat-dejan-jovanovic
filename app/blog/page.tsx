import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog – Advokat Dejan Jovanović",
  description:
    "Pravni saveti, aktuelnosti i analize iz oblasti krivičnog, građanskog i privrednog prava.",
};

const posts = [
  {
    slug: "prava-okrivljenog-u-krivicnom-postupku",
    title: "Prava okrivljenog u krivičnom postupku – šta trebate znati",
    date: "15. april 2025.",
    excerpt:
      "Krivični postupak je jedan od najkompleksnijih pravnih procesa, a poznavanje sopstvenih prava može biti ključno za ishod. U ovom tekstu objašnjavamo osnovna prava okrivljenog od trenutka hapšenja do završetka suđenja.",
  },
  {
    slug: "razvod-braka-postupak-i-deoba-imovine",
    title: "Razvod braka: postupak, starateljstvo i deoba imovine",
    date: "2. mart 2025.",
    excerpt:
      "Razvod braka je emotivno i pravno složen proces. Saznajte koje su Vaše mogućnosti, kako se određuje starateljstvo nad decom i na koji način se vrši podela zajednički stečene imovine supružnika.",
  },
  {
    slug: "osnivanje-privrednog-drustva-u-srbiji",
    title: "Osnivanje privrednog društva u Srbiji – korak po korak",
    date: "18. januar 2025.",
    excerpt:
      "Pokretanje sopstvenog biznisa zahteva niz pravnih koraka. Vodič kroz postupak osnivanja d.o.o. u Srbiji – od registracije u APR-u do otvaranja poslovnog računa i svih neophodnih dokumenata.",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[#1a2744] py-16 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            Pravni saveti
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <div className="w-12 h-0.5 bg-[#c9a84c]" />
        </div>
      </div>

      <section className="py-20 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
