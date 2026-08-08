import type { Metadata } from "next";
import Link from "next/link";
import CtaCard from "@/components/cta-card";
import { posts, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return {
    title: post?.title ?? "Artikel",
    description: post?.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-2xl font-bold">Artikel tidak ditemukan</h1>
        <Link href="/blog" className="mt-4 inline-block text-primary">
          Kembali ke Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <time className="text-sm text-muted">{post.date}</time>
        <h1 className="mb-6 mt-2 text-3xl font-bold leading-tight">
          {post.title}
        </h1>
        <div className="space-y-4 leading-relaxed text-muted">
          {post.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/blog" className="text-sm font-semibold text-primary">
            ← Kembali ke Blog
          </Link>
        </div>
      </article>
      <CtaCard
        title="Butuh Bantuan Logistik?"
        subtitle="Hubungi tim kami untuk konsultasi gratis seputar kebutuhan pengiriman Anda."
      />
    </>
  );
}