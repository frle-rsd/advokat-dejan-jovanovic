"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import { blogContent } from "@/lib/blogContent";

export default function BlogPostPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const { lang, t } = useLanguage();

  const postData = blogContent[slug];
  const post = postData ? postData[lang] : null;

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
          {t.notFound.badge}
        </p>
        <h1 className="font-heading text-4xl font-bold text-[#1a2744] mb-4">
          {t.notFound.heading}
        </h1>
        <p className="text-gray-500 mb-8">{t.notFound.desc}</p>
        <Link
          href="/blog"
          className="inline-block border border-[#1a2744] text-[#1a2744] font-semibold px-6 py-3 text-sm uppercase tracking-wider hover:bg-[#1a2744] hover:text-white transition-colors duration-200"
        >
          {lang === "sr" ? "Nazad na blog" : "Back to blog"}
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <div className="bg-[#1a2744] py-16 text-white">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-semibold mb-3">
            {post.date}
          </p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold leading-tight mb-4">
            {post.title}
          </h1>
          <div className="w-12 h-0.5 bg-[#c9a84c]" />
        </div>
      </div>

      {/* Article body */}
      <section className="py-16 bg-[#f8f6f0]">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 md:p-12 border border-gray-100"
          >
            <p className="text-gray-500 text-base leading-relaxed italic mb-8 pb-8 border-b border-gray-100">
              {post.excerpt}
            </p>
            <div className="space-y-5">
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-heading font-semibold text-[#1a2744] mb-1">
                  {lang === "sr" ? "Imate sličan problem?" : "Facing a similar situation?"}
                </p>
                <p className="text-gray-500 text-sm">
                  {lang === "sr"
                    ? "Kontaktirajte me za besplatnu inicijalnu konsultaciju."
                    : "Contact me for a free initial consultation."}
                </p>
              </div>
              <Link
                href="/kontakt"
                className="shrink-0 inline-flex items-center gap-2 bg-[#c9a84c] text-[#1a2744] font-semibold px-6 py-3 text-sm uppercase tracking-wider hover:bg-[#d4b561] transition-colors duration-200"
              >
                {lang === "sr" ? "Pišite mi" : "Write to me"}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Back to blog */}
          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#1a2744] transition-colors font-medium"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {lang === "sr" ? "Nazad na blog" : "Back to blog"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
