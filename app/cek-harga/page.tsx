import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/hero";
import { siteConfig, features } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cek Harga",
  description: "Dapatkan estimasi biaya pengiriman, sewa truk, dan jasa pindahan.",
};

export default function CekHargaPage() {
  if (!features.cekHarga) {
    notFound();
  }
  return (
    <>
      <Hero
        title="Cek Estimasi Harga"
        subtitle="Masukkan asal, tujuan, dan jenis layanan untuk mendapatkan estimasi biaya secara instan."
        ctaLabel=""
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <form className="space-y-5 rounded-2xl border border-border bg-surface p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="asal">
                  Kota Asal
                </label>
                <input
                  id="asal"
                  placeholder="Misal: Jakarta"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>
              <div>
                <label
                  className="mb-1 block text-sm font-medium"
                  htmlFor="tujuan"
                >
                  Kota Tujuan
                </label>
                <input
                  id="tujuan"
                  placeholder="Misal: Bandung"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>
            </div>
            <div>
              <label
                className="mb-1 block text-sm font-medium"
                htmlFor="layanan"
              >
                Pilih Layanan
              </label>
              <select
                id="layanan"
                className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
              >
                <option>Paket / Kargo</option>
                <option>Sewa Truk</option>
                <option>Jasa Pindahan</option>
              </select>
            </div>
          </div>
          <button
            type="button"
            className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-primary-dark"
          >
            Hitung Estimasi
          </button>
          <p className="text-center text-xs text-muted">
            Hasil estimasi hanya perkiraan. Hubungi kami di {siteConfig.phone}{" "}
            untuk penawaran final.
          </p>
        </form>
      </section>
    </>
  );
}