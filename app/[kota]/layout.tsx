import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCity } from "@/lib/cities";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return cities.map((city) => ({ kota: city.slug }));
}

export default async function CityLayout({
  children,
  params,
}: LayoutProps<"/[kota]">) {
  const { kota } = await params;
  const city = getCity(kota);

  if (!city) {
    notFound();
  }

  const links = [
    { label: "Sewa Truk", href: `/${kota}/sewa-truk` },
    { label: "Wingbox", href: `/${kota}/sewa-truk-wingbox` },
    { label: "Jasa Pindahan", href: `/${kota}/jasa-pindahan` },
    { label: "Paket & Kargo", href: `/${kota}/paket-kargo` },
  ];

  return (
    <div className="flex flex-col">
      <div className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-4 py-4 sm:px-6">
          <Link href="/" className="text-sm text-muted hover:text-primary">
            Beranda
          </Link>
          <span className="text-muted">/</span>
          <span className="text-sm font-medium text-primary">{city.name}</span>
          <span className="ml-auto hidden text-sm text-muted md:block">
            {siteConfig.name} {city.name}
          </span>
        </div>
        <nav className="mx-auto max-w-6xl overflow-x-auto px-4 sm:px-6">
          <div className="flex gap-6 py-3 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap text-muted hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      {children}
    </div>
  );
}