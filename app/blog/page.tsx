import type { Metadata } from "next";
import Hero from "@/components/hero";
import SectionTitle from "@/components/section-title";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import { features } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artikel dan wawasan seputar logistik, tips pengiriman, dan tren industri terbaru.",
};

export default function BlogPage() {
  if (!features.blog) {
    notFound();
  }
  return (
    <>
      <Hero
        title="Blog & Wawasan"
        subtitle="Artikel seputar logistik, tips pengiriman, dan informasi terbaru dari kami."
        ctaLabel=""
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionTitle title="Artikel Terbaru" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-lg"
            >
              <time className="mb-2 text-xs text-muted">{post.date}</time>
              <h3 className="mb-2 text-lg font-semibold leading-snug">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                  {post.title}
                </Link>
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-semibold text-primary hover:underline"
              >
                Baca Selengkapnya →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}