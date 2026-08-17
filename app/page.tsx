import Hero from "@/components/hero";
import SectionTitle from "@/components/section-title";
import AdvantagesSection from "@/components/advantages-section";
import ServicesSection from "@/components/services-section";
import GallerySection from "@/components/gallery-section";
import CtaCard from "@/components/cta-card";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { philosophyValues, vision, missions } from "@/lib/company";

/* =====================================================================
   Company profile homepage (mode saat ini).
   Layanan ditampilkan melalui ServicesSection (lib/services.ts) dan foto
   kegiatan melalui GallerySection (lib/gallery.ts).
   Komponen lama untuk layanan (ServiceGrid, FleetSection, CoverageSection,
   FaqAccordion) sudah dikomentari. Cara mengaktifkan kembali jika fitur
   `features` di lib/site.ts dihidupkan:

   import ServiceGrid from "@/components/service-grid";
   import FleetSection from "@/components/fleet-section";
   import CoverageSection from "@/components/coverage-section";
   import FaqAccordion from "@/components/faq-accordion";

   <ServiceGrid />
   <FleetSection />
   <CoverageSection />
   <FaqAccordion />
   =====================================================================
*/

export default function HomePage() {
  return (
    <>
      <Hero
        title="Solusi Angkutan & Pengolahan Sampah yang Terpercaya"
        subtitle={`${siteConfig.name} hadir dengan integritas dan komitmen terhadap hasil. Kami memberikan pelayanan terbaik dan harga kompetitif untuk optimalisasi serta pemenuhan kebutuhan klien.`}
      />

      <ServicesSection />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Image
              src="/images/company-logo.jpeg"
              alt={`Logo ${siteConfig.name}`}
              width={120}
              height={120}
              className="mb-6 h-24 w-auto rounded-xl border border-border bg-white object-contain"
            />
            <SectionTitle
              align="left"
              eyebrow="Profil Perusahaan"
              title="Mitra Pilihan Utama Anda"
            />
            <p className="mb-4 leading-relaxed text-muted">
              PT Lestari Trans Nusantara adalah perusahaan yang berpedoman pada
              prinsip integritas dan pencapaian hasil dalam setiap penugasan.
              Kami hadir untuk memberikan solusi bernilai tambah yang unggul,
              terpercaya, dan berorientasi pada kebutuhan klien.
            </p>
            <p className="mb-6 leading-relaxed text-muted">
              Visi kami adalah menjadi perusahaan yang unggul, terdepan, dan
              terpercaya — “{vision}.”
            </p>
            <Link
              href="/tentang-kami"
              className="inline-block rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-primary-dark"
            >
              Selengkapnya Tentang Kami
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h3 className="mb-6 text-lg font-semibold">Misi Kami</h3>
            <ul className="space-y-4">
              {missions.map((mission, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed text-muted">{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionTitle
          eyebrow="Nilai Perusahaan"
          title="Filosofi yang Menjadi Akar Kami"
          subtitle="Tiga nilai dasar yang menurunkan seluruh nilai-nilai lainnya di perusahaan kami."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {philosophyValues.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <h3 className="mb-3 text-xl font-semibold">{value.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {value.summary}
              </p>
            </div>
          ))}
        </div>
      </section>

      <AdvantagesSection />
      <GallerySection />
      <CtaCard
        title="Mari Menjadi Mitra Kami"
        subtitle="Diskusikan kebutuhan Anda bersama perusahaan kami dan dapatkan solusi yang dirancang dengan integritas serta komitmen terhadap hasil."
      />
    </>
  );
}