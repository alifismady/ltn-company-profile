import Link from "next/link";

type Props = {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export default function CtaCard({
  title,
  subtitle,
  ctaLabel = "Hubungi Kami Sekarang",
  ctaHref = "/kontak",
}: Props) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl bg-primary px-6 py-14 text-center text-white sm:px-12">
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl">{title}</h2>
          {subtitle && (
            <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
              {subtitle}
            </p>
          )}
          <Link
            href={ctaHref}
            className="inline-block rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-primary transition-transform hover:scale-105"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}