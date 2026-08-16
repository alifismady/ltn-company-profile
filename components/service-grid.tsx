/**
 * NONAKTIF — ServiceGrid (grid layanan sewa truk / pindahan / kargo).
 *
 * Hanya dipakai bila fitur `features.services` dihidupkan. Seluruh isi
 * dikomentari; aktifkan kembali dengan menghapus komentar di bawah.
 * (Konten layanan perusahaan yang aktif kini tampil di homepage melalui
 * komponen `ServicesSection`.)
 */

/* ---------------------------------------------------------------------
import Link from "next/link";
import SectionTitle from "@/components/section-title";

type Service = {
  title: string;
  description: string;
  href: string;
};

const services: Service[] = [
  {
    title: "Sewa Truk",
    description:
      "Beragam armada dari pickup hingga tronton dengan supir profesional untuk mendukung distribusi dan proyek Anda.",
    href: "/sewa-truk",
  },
  {
    title: "Jasa Pindahan",
    description:
      "Layanan pindahan rumah, kantor, atau apartemen secara lengkap mulai dari pengepakan hingga penataan barang.",
    href: "/jasa-pindahan",
  },
  {
    title: "Paket & Kargo",
    description:
      "Pengiriman paket dan kargo ke seluruh pelosok negeri dengan pelacakan estimasi biaya yang transparan.",
    href: "/paket-kargo",
  },
];

export default function ServiceGrid() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          title="Layanan Utama Kami"
          subtitle="Solusi logistik terintegrasi untuk kebutuhan pengiriman Anda."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-2xl border border-border bg-surface p-8 transition-shadow hover:shadow-lg"
            >
              <svg
                className="mb-4 h-10 w-10 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                />
              </svg>
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
--------------------------------------------------------------------- */