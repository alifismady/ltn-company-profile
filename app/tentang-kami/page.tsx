import type { Metadata } from "next";
import Hero from "@/components/hero";
import AdvantagesSection from "@/components/advantages-section";
import CtaCard from "@/components/cta-card";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: siteConfig.description,
};

export default function TentangKamiPage() {
  return (
    <>
      <Hero
        title="Tentang Kami"
        subtitle={siteConfig.tagline}
        ctaLabel="Hubungi Kami"
        ctaHref="/kontak"
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">
              Mitra Logistik Terpercaya Anda
            </h2>
            <p className="mb-4 leading-relaxed text-muted">
              Kami adalah perusahaan logistik yang menyediakan solusi
              terintegrasi meliputi pengiriman paket dan kargo, sewa truk, serta
              jasa pindahan. Dengan pengalaman melayani berbagai kebutuhan
              bisnis dan rumah tangga, kami berkomitmen memberikan layanan yang
              andal, aman, dan tepat waktu.
            </p>
            <p className="leading-relaxed text-muted">
              Didukung teknologi dan tim profesional, kami terus berinovasi
              untuk memajukan rantai pasok bisnis Anda di seluruh Indonesia.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h3 className="mb-4 text-lg font-semibold">Fakta Singkat</h3>
            <dl className="space-y-4">
              {[
                ["Layanan Utama", "Paket & Kargo, Sewa Truk, Jasa Pindahan"],
                ["Jangkauan", "Kota-kota besar di seluruh Indonesia"],
                ["Dukungan", "Customer service 24/7"],
                ["Telepon", siteConfig.phone],
                ["Email", siteConfig.email],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between gap-4 border-b border-border pb-3 text-sm"
                >
                  <dt className="font-semibold">{label}</dt>
                  <dd className="text-right text-muted">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <AdvantagesSection />
      <CtaCard
        title="Mari Bekerja Sama"
        subtitle="Bicarakan kebutuhan logistik Anda bersama tim kami hari ini."
      />
    </>
  );
}