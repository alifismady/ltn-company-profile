import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function Hero({
  title,
  subtitle,
  ctaLabel = "",
  ctaHref = "/kontak",
}: Props) {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center bg-slate-900 bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/40" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-24 text-white sm:px-6">
        <h1 className="mb-4 max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            {subtitle}
          </p>
        )}
        {ctaLabel && (
          <div className="flex flex-wrap gap-3">
            <Link
              href={ctaHref}
              className="rounded-lg bg-primary px-6 py-3 font-medium text-white transition-colors hover:bg-primary-dark"
            >
              {ctaLabel}
            </Link>
            <Link
              href="/kontak"
              className="rounded-lg px-6 py-3 font-medium text-white ring-1 ring-white/60 hover:bg-white/10"
            >
              Kontak Kami
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}