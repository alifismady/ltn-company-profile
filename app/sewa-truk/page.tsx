import type { Metadata } from "next";
import Hero from "@/components/hero";
import FleetSection from "@/components/fleet-section";
import CtaCard from "@/components/cta-card";

export const metadata: Metadata = {
  title: "Sewa Truk",
  description:
    "Sewa truk dari berbagai jenis armada mulai dari pickup, engkel, cdd, fuso, hingga tronton dan wingbox.",
};

export default function SewaTrukPage() {
  return (
    <>
      <Hero
        title="Sewa Truk Berbagai Jenis Armada"
        subtitle="Dari pickup untuk pengiriman ringan hingga tronton dan wingbox untuk kargo skala besar. Semua armada terawat dengan supir profesional."
        ctaLabel="Cek Ketersediaan Armada"
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold">
              Armada Tepat untuk Kebutuhan Anda
            </h2>
            <p className="mb-4 leading-relaxed text-muted">
              Kami menyediakan beragam pilihan armada mulai dari truk pickup
              untuk pengiriman barang berjumlah kecil, truk engkel untuk volume
              sedang, hingga truk tronton dan wingbox untuk pengiriman barang
              dalam jumlah besar.
            </p>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Unit prima dan terawat",
                "Supir berpengalaman",
                "Proses pemesanan fleksibel",
                "Harga transparan tanpa biaya tersembunyi",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-lg border border-border bg-surface p-3 text-sm"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
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
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h3 className="mb-4 text-lg font-semibold">Cara Pemesanan</h3>
            <ol className="list-decimal space-y-3 pl-5 text-sm text-muted">
              <li>Hubungi tim kami melalui WhatsApp atau formulir kontak.</li>
              <li>Sampaikan jenis armada, titik jemput, dan tujuan pengiriman.</li>
              <li>Terima penawaran harga yang transparan dan kompetitif.</li>
              <li>Konfirmasi pesanan dan selesaikan pembayaran.</li>
              <li>Armada siap menjemput barang Anda tepat waktu.</li>
            </ol>
          </div>
        </div>
      </section>
      <FleetSection />
      <CtaCard
        title="Butuh Armada untuk Pengiriman Anda?"
        subtitle="Hubungi kami sekarang untuk berkonsultasi dan dapatkan penawaran terbaik untuk kebutuhan sewa truk Anda."
      />
    </>
  );
}