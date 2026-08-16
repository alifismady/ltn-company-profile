/**
 * NONAKTIF — CityServicePage & helper per kota.
 *
 * Hanya dipakai oleh sub-tree halaman `/[kota]` yang dinonaktifkan
 * (`features.kotaSubtree = false`). Seluruh isi dikomentari; aktifkan
 * kembali dengan menghapus komentar di bawah.
 */

/* ---------------------------------------------------------------------
import Link from "next/link";
import CtaCard from "@/components/cta-card";
import SectionTitle from "@/components/section-title";
import { getCity, cities, type City } from "@/lib/cities";
import { siteConfig } from "@/lib/site";

type ServicePageProps = {
  kota: string;
  serviceTitle: string;
  serviceName: string;
  intro: string;
  benefits: string[];
};

export default function CityServicePage({
  kota,
  serviceTitle,
  serviceName,
  intro,
  benefits,
}: ServicePageProps) {
  const city = getCity(kota);

  if (!city) return null;

  return (
    <>
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-20 text-white sm:px-6">
          <p className="mb-2 text-sm uppercase tracking-wide text-primary">
            Layanan di {city.name}
          </p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
            {serviceTitle}
          </h1>
          <p className="mt-4 max-w-2xl text-white/90">{intro}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle title={`Keunggulan ${serviceName} di ${city.name}`} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-xl border border-border bg-surface p-5"
              >
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
                <p className="text-sm">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionTitle title={`Hubungi Kami untuk ${serviceName} ${city.name}`} />
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(
                `Halo ${siteConfig.name}, saya ingin bertanya tentang ${serviceName} di ${city.name}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-whatsapp px-6 py-3 font-medium text-white hover:opacity-90"
            >
              Chat WhatsApp
            </a>
            <Link
              href="/kontak"
              className="rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-primary-dark"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      <CtaCard
        title={`Butuh ${serviceName} di ${city.name}?`}
        subtitle="Hubungi kami sekarang untuk mendapatkan penawaran terbaik."
      />
    </>
  );
}

export function CityLinks({ kota }: { kota: string }) {
  const city = getCity(kota);
  if (!city) return null;
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-4 text-center text-xl font-bold">
          Layanan {siteConfig.name} di {city.name}
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={`/${kota}/sewa-truk`}
            className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium hover:text-primary"
          >
            Sewa Truk {city.name}
          </Link>
          <Link
            href={`/${kota}/jasa-pindahan`}
            className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium hover:text-primary"
          >
            Jasa Pindahan {city.name}
          </Link>
          <Link
            href={`/${kota}/paket-kargo`}
            className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium hover:text-primary"
          >
            Paket & Kargo {city.name}
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CityIndex() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-4 text-center text-xl font-bold">
          Jangkauan Layanan Kami
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {cities.map((city: City) => (
            <Link
              key={city.slug}
              href={`/${city.slug}/sewa-truk`}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium hover:text-primary"
            >
              {city.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TruckTypeLinks({ kota }: { kota: string }) {
  const city = getCity(kota);
  if (!city) return null;
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-4 text-center text-xl font-bold">
          Jenis Truk yang Tersedia di {city.name}
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {[
            "Pickup",
            "Engkel (CDE)",
            "Double (CDD)",
            "Fuso",
            "Tronton / Wingbox",
            "CDD Long",
            "Fuso Long",
            "Flatbed / Lossbak",
          ].map((label) => (
            <Link
              key={label}
              href={`/${kota}/sewa-truk`}
              className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
--------------------------------------------------------------------- */