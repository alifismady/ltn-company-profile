/**
 * NONAKTIF — halaman /[kota]/jasa-pindahan (`features.kotaSubtree = false`).
 *
 * Seluruh isi halaman dikomentari. Aktifkan kembali dengan mengubah
 * `features.kotaSubtree` menjadi `true` di lib/site.ts lalu hapus
 * komentar di bawah.
 */
import { notFound } from "next/navigation";

/* ---------------------------------------------------------------------
import type { Metadata } from "next";
import CityServicePage, { CityLinks } from "@/components/city-service-page";
import { getCity } from "@/lib/cities";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kota: string }>;
}): Promise<Metadata> {
  const { kota } = await params;
  const city = getCity(kota);
  if (!city) return {};
  return {
    title: `Jasa Pindahan ${city.name}`,
    description: `Jasa pindahan rumah, kantor, dan apartemen di ${city.name} dengan penanganan profesional.`,
  };
}

export default async function JasaPindahanCityPage({
  params,
}: {
  params: Promise<{ kota: string }>;
}) {
  const { kota } = await params;
  const city = getCity(kota);
  if (!city) notFound();

  return (
    <>
      <CityServicePage
        kota={kota}
        serviceTitle={`Jasa Pindahan ${city.name}: Pindah Tanpa Ribet`}
        serviceName="Jasa Pindahan"
        intro={`Tim profesional kami siap membantu proses pindahan rumah, kantor, atau apartemen di ${city.name} mulai dari pengepakan, pengangkutan, hingga penataan di lokasi baru.`}
        benefits={[
          "Pengepakan dengan material pelindung yang aman",
          "Pengangkutan dengan armada terawat",
          "Penataan barang di lokasi tujuan",
          "Tim berpengalaman dan terlatih",
          "Estimasi biaya transparan",
          "Dukungan pelanggan 24/7",
        ]}
      />
      <CityLinks kota={kota} />
    </>
  );
}
--------------------------------------------------------------------- */

export default async function JasaPindahanCityPage() {
  notFound();
}