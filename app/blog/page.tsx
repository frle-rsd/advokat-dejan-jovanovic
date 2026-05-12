"use client";

import { useLanguage } from "@/components/LanguageContext";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  const { t } = useLanguage();
  const b = t.blog;

  return (
    <>
      <div className="bg-[#1a2744] py-16 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            {b.label}
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{b.pageTitle}</h1>
          <div className="w-12 h-0.5 bg-[#c9a84c]" />
        </div>
      </div>

      <section className="py-20 bg-[#f8f6f0]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {b.posts.map((post) => (
              <BlogCard key={post.slug} {...post} readMore={b.readMore} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
