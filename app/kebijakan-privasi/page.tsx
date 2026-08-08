import type { Metadata } from "next";
import Hero from "@/components/hero";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi kami mengenal pengelolaan data pengguna.",
};

const items = [
  {
    title: "Data yang Kami Kumpulkan",
    body: "Kami mengumpulkan data yang Anda berikan secara langsung melalui formulir, seperti nama, kontak, dan alamat, serta data penggunaan situs untuk meningkatkan kualitas layanan.",
  },
  {
    title: "Penggunaan Data",
    body: "Data digunakan untuk memproses pemesanan, memberikan dukungan pelanggan, serta mengirimkan informasi dan penawaran yang relevan sesuai preferensi Anda.",
  },
  {
    title: "Perlindungan Data",
    body: "Kami menerapkan langkah keamanan yang memadai untuk melindungi data Anda dari akses yang tidak sah, penyalahgunaan, atau pengungkapan tanpa izin.",
  },
];

export default function KebijakanPrivasiPage() {
  return (
    <>
      <Hero
        title="Kebijakan Privasi"
        subtitle="Kami berkomitmen melindungi data pribadi Anda."
        ctaLabel=""
      />
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-8">
          {items.map((item) => (
            <div key={item.title}>
              <h2 className="mb-2 text-xl font-semibold">{item.title}</h2>
              <p className="leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}