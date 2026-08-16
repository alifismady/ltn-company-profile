/**
 * NONAKTIF — halaman /paket-kargo (`features.services = false`).
 *
 * Seluruh isi halaman dikomentari. Aktifkan kembali dengan mengubah
 * `features.services` menjadi `true` di lib/site.ts lalu hapus komentar
 * di bawah.
 */
import { notFound } from "next/navigation";

/* ---------------------------------------------------------------------
import type { Metadata } from "next";
import Hero from "@/components/hero";
import CtaCard from "@/components/cta-card";

export const metadata: Metadata = {
  title: "Paket & Kargo",
  description:
    "Pengiriman paket dan kargo ke seluruh Indonesia dengan pelacakan real-time dan tarif kompetitif.",
};

const featuresData = [
  {
    title: "Pelacakan Real-time",
    description:
      "Pantau setiap pergerakan kiriman Anda melalui nomor resi kapan pun dan di mana pun.",
  },
  {
    title: "Jangkauan Nasional",
    description:
      "Jaringan pengiriman yang menjangkau kota-kota besar di seluruh Indonesia.",
  },
  {
    title: "Penanganan Aman",
    description:
      "Barang Anda ditangani dengan standar operasional yang menjaga kondisi tetap sempurna.",
  },
  {
    title: "Tarif Kompetitif",
    description:
      "Harga pengiriman yang transparan tanpa biaya tersembunyi.",
  },
];

export default function PaketKargoPage() {
  return (
    <>
      <Hero
        title="Kirim Paket & Kargo dengan Mudah"
        subtitle="Dari dokumen hingga barang besar, layanan kargo kami menjangkau seluruh Indonesia dengan cepat, aman, dan harga yang kompetitif."
        ctaLabel="Cek Tarif Pengiriman"
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="mb-10 text-center text-2xl font-bold">
          Kenapa Memilih Layanan Kargo Kami?
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuresData.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <svg
                className="mb-3 h-8 w-8 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                />
              </svg>
              <h3 className="mb-2 font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <CtaCard
        title="Kirim Paket Sekarang?"
        subtitle="Dapatkan penawaran tarif pengiriman yang kompetitif untuk kebutuhan paket dan kargo Anda."
      />
    </>
  );
}
--------------------------------------------------------------------- */

export default function PaketKargoPage() {
  notFound();
}