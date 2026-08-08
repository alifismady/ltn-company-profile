import type { Metadata } from "next";
import Hero from "@/components/hero";

export const metadata: Metadata = {
  title: "Syarat & Ketentuan",
  description: "Syarat dan ketentuan layanan kami.",
};

const items = [
  {
    title: "Penggunaan Layanan",
    body: "Dengan menggunakan layanan kami, Anda menyetujui seluruh syarat dan ketentuan yang berlaku. Pastikan data yang Anda berikan akurat dan lengkap agar proses pengiriman berjalan lancar.",
  },
  {
    title: "Tanggung Jawab Pengirim",
    body: "Pengirim bertanggung jawab atas kebenaran informasi muatan, kelengkapan dokumen, dan kepatuhan terhadap peraturan perundang-undangan yang berlaku.",
  },
  {
    title: "Pembatalan & Pengembalian",
    body: "Pembatalan pesanan dapat dilakukan sebelum armada diberangkatkan. Detail kebijakan pembatalan dan pengembalian diatur pada saat konfirmasi pemesanan.",
  },
];

export default function SyaratKetentuanPage() {
  return (
    <>
      <Hero
        title="Syarat & Ketentuan"
        subtitle="Dokumen ini berlaku untuk seluruh layanan yang kami sediakan."
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