import Link from "next/link";

type BlogCardProps = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

export default function BlogCard({ title, date, excerpt, slug }: BlogCardProps) {
  return (
    <article className="bg-white border border-gray-100 hover:shadow-lg hover:border-[#c9a84c]/30 transition-all duration-300 group">
      <div className="h-2 bg-[#1a2744] group-hover:bg-[#c9a84c] transition-colors duration-300" />
      <div className="p-8">
        <p className="text-[#c9a84c] text-xs uppercase tracking-wider font-medium mb-3">
          {date}
        </p>
        <h3 className="font-heading font-semibold text-xl text-[#1a2744] mb-4 leading-snug group-hover:text-[#c9a84c] transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-[#1a2744] text-sm font-semibold hover:text-[#c9a84c] transition-colors"
        >
          Pročitaj više
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
