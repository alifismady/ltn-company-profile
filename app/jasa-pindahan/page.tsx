import type { Metadata } from "next";
import Hero from "@/components/hero";
import CtaCard from "@/components/cta-card";

export const metadata: Metadata = {
  title: "Jasa Pindahan",
  description:
    "Jasa pindahan rumah, kantor, dan apartemen dengan penanganan profesional mulai dari pengepakan hingga penataan.",
};

const steps = [
  {
    title: "Konsultasi & Survey",
    description:
      "Tim kami mendiskusikan kebutuhan pindahan Anda dan menghitung estimasi biaya secara transparan.",
  },
  {
    title: "Pengepakan",
    description:
      "Barang-barang Anda dikemas dengan material pelindung yang aman agar tetap dalam kondisi prima.",
  },
  {
    title: "Pengangkutan",
    description:
      "Armada dan kru berpengalaman mengangkut barang Anda dengan proses bongkar muat yang berhati-hati.",
  },
  {
    title: "Penataan di Tujuan",
    description:
      "Barang disusun dan ditata di lokasi baru sesuai keinginan Anda hingga siap digunakan.",
  },
];

export default function JasaPindahanPage() {
  return (
    <>
      <Hero
        title="Jasa Pindahan Rumah, Kantor & Apartemen"
        subtitle="Serahkan urusan pindahan Anda kepada tim profesional kami. Layanan lengkap dari pengepakan, pengangkutan, hingga penataan di lokasi baru."
        ctaLabel="Buat Penjadwalan Pindahan"
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="mb-10 text-center text-2xl font-bold">
          Proses Pindahan yang Amanah
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-white">
                {index + 1}
              </span>
              <h3 className="mb-2 font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <CtaCard
        title="Pindahan Tanpa Ribet?"
        subtitle="Diskusikan kebutuhan pindahan Anda dan dapatkan penawaran lengkap tanpa biaya tersembunyi."
      />
    </>
  );
}