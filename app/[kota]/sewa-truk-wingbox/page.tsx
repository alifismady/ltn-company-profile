/**
 * NONAKTIF — halaman /[kota]/sewa-truk-wingbox (`features.kotaSubtree = false`).
 *
 * Seluruh isi halaman dikomentari. Aktifkan kembali dengan mengubah
 * `features.kotaSubtree` menjadi `true` di lib/site.ts lalu hapus
 * komentar di bawah.
 */
import { notFound } from "next/navigation";

/* ---------------------------------------------------------------------
import type { Metadata } from "next";
import CityServicePage, { CityLinks } from "@/components/city-service-page";
import CtaCard from "@/components/cta-card";
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
    title: `Sewa Truk Wingbox ${city.name}`,
    description: `Sewa truk wingbox di ${city.name} untuk pengiriman barang yang aman dan terlindungi, siap melayani berbagai kebutuhan logistik.`,
  };
}

export default async function WingboxCityPage({
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
        serviceTitle={`Sewa Truk Wingbox di ${city.name}: Solusi Andal untuk Bisnis Anda`}
        serviceName="Sewa Truk Wingbox"
        intro={`Truk wingbox menawarkan solusi pengiriman yang aman dan terlindungi untuk barang di ${city.name}. Dengan ruang tertutup dan kapasitas muat besar, armada ini ideal untuk barang yang rentan terhadap cuaca, debu, atau kerusakan.`}
        benefits={[
          "Ruang muat tertutup yang melindungi barang dari cuaca dan debu",
          "Kapasitas besar untuk pengiriman skala industri",
          "Cocok untuk material bangunan, tekstil, hingga mesin industri",
          "Driver profesional dengan pengetahuan rute lokal",
          "Harga transparan dan kompetitif",
          "Siap melayani pengiriman dari dan ke berbagai kawasan industri",
        ]}
      />
      <CityLinks kota={kota} />
      <CtaCard
        title={`Dapatkan Penawaran Sewa Truk Wingbox ${city.name} Terbaik!`}
        subtitle="Hubungi kami sekarang juga untuk berkonsultasi dan dapatkan penawaran terbaik."
      />
    </>
  );
}
--------------------------------------------------------------------- */

export default async function WingboxCityPage() {
  notFound();
}