"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type BlogCardProps = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  readMore: string;
};

export default function BlogCard({ title, date, excerpt, slug, readMore }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 group flex flex-col"
    >
      <div className="h-1 bg-[#1a2744] group-hover:bg-[#c9a84c] transition-colors duration-300" />
      <div className="p-7 flex flex-col flex-1">
        <p className="text-[#c9a84c] text-xs uppercase tracking-wider font-semibold mb-3">{date}</p>
        <h3 className="font-heading font-semibold text-lg text-[#1a2744] mb-4 leading-snug group-hover:text-[#c9a84c] transition-colors duration-200 flex-1">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">{excerpt}</p>
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-[#1a2744] text-sm font-semibold hover:text-[#c9a84c] transition-colors mt-auto"
        >
          {readMore}
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}
