import type { Metadata } from "next";
import Hero from "@/components/hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi kami untuk konsultasi dan penawaran layanan sewa angkutan dan pengolahan sampah.",
};

export default function KontakPage() {
  return (
    <>
      <Hero
        title="Hubungi Kami"
        subtitle="Tim kami siap membantu Anda. Konsultasikan kebutuhan Anda secara gratis."
        ctaLabel=""
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-8">
          <h2 className="mb-6 text-2xl font-bold">Informasi Kontak</h2>
          <dl className="space-y-6">
            <div>
              <dt className="mb-1 font-semibold">Alamat</dt>
              <dd className="text-sm text-muted">{siteConfig.address}</dd>
            </div>
            <div>
              <dt className="mb-1 font-semibold">Telepon</dt>
              <dd className="text-sm text-muted">{siteConfig.phone}</dd>
            </div>
            <div>
              <dt className="mb-1 font-semibold">Email</dt>
              <dd className="text-sm text-muted">{siteConfig.email}</dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}