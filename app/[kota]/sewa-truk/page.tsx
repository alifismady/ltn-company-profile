/**
 * NONAKTIF — halaman /[kota]/sewa-truk (`features.kotaSubtree = false`).
 *
 * Seluruh isi halaman dikomentari. Aktifkan kembali dengan mengubah
 * `features.kotaSubtree` menjadi `true` di lib/site.ts lalu hapus
 * komentar di bawah.
 */
import { notFound } from "next/navigation";

/* ---------------------------------------------------------------------
import type { Metadata } from "next";
import CityServicePage, { CityLinks, TruckTypeLinks } from "@/components/city-service-page";
import FleetSection from "@/components/fleet-section";
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
    title: `Sewa Truk ${city.name}`,
    description: `Layanan sewa truk di ${city.name} dengan berbagai pilihan armada dan tarif transparan.`,
  };
}

export default async function SewaTrukCityPage({
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
        serviceTitle={`Sewa Truk ${city.name}: Solusi Andal untuk Bisnis Anda`}
        serviceName="Sewa Truk"
        intro={`Kami menyediakan layanan sewa truk di ${city.name} dengan beragam pilihan armada untuk memenuhi kebutuhan pengiriman Anda, dari pengiriman skala kecil hingga kargo dalam jumlah besar.`}
        benefits={[
          "Unit prima dan selalu terawat dengan baik",
          "Driver berpengalaman dan mengenal rute di daerah Anda",
          "Proses pemesanan yang mudah dan fleksibel",
          "Harga transparan dan kompetitif tanpa biaya tersembunyi",
          "Dukungan pelanggan 24/7",
          "Beragam pilihan jenis armada",
        ]}
      />
      <FleetSection />
      <TruckTypeLinks kota={kota} />
      <CityLinks kota={kota} />
    </>
  );
}
--------------------------------------------------------------------- */

export default async function SewaTrukCityPage() {
  notFound();
}