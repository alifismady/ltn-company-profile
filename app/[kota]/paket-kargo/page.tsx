import type { Metadata } from "next";
import CityServicePage, { CityLinks } from "@/components/city-service-page";
import { getCity } from "@/lib/cities";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kota: string }>;
}): Promise<Metadata> {
  const { kota } = await params;
  const city = getCity(kota);
  if (!city) return {};
  return {
    title: `Paket & Kargo ${city.name}`,
    description: `Pengiriman paket dan kargo dari dan ke ${city.name} dengan tarif kompetitif.`,
  };
}

export default async function PaketKargoCityPage({
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
        serviceTitle={`Pengiriman Paket & Kargo ${city.name}`}
        serviceName="Paket & Kargo"
        intro={`Kirim paket dan kargo dari atau ke ${city.name} dengan layanan yang cepat, aman, dan harga kompetitif. Jaringan pengiriman kami menjangkau berbagai kota di seluruh Indonesia.`}
        benefits={[
          "Pelacakan kiriman secara real-time",
          "Penanganan barang yang aman dan teliti",
          "Tarif kompetitif dan transparan",
          "Jangkauan pengiriman ke seluruh Indonesia",
          "Proses pengiriman mudah dan cepat",
          "Dukungan pelanggan 24/7",
        ]}
      />
      <CityLinks kota={kota} />
    </>
  );
}