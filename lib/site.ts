/**
 * Fitur-fitur situs. Saat ini situs difokuskan sebagai company profile.
 * Jika salah satu layanan (sewa truk, kargo, blog, dll.) nantinya
 * dibutuhkan, cukup ubah flag terkait menjadi `true` dan aktifkan
 * kembali link/section yang tersembunyi di komponen.
 *
 * Catatan: fitur yang bernilai `false` berikut sudah dikomentari isinya:
 * - `services`    → halaman /sewa-truk, /jasa-pindahan, /paket-kargo,
 *                   lib/fleet.ts, components/fleet-section.tsx,
 *                   components/service-grid.tsx
 * - `kotaSubtree` → app/[kota]/*, lib/cities.ts,
 *                   components/city-service-page.tsx,
 *                   components/coverage-section.tsx
 * - `faq`         → halaman /faq, lib/faqs.ts,
 *                   components/faq-accordion.tsx
 * - `blog`        → halaman /blog, lib/posts.ts
 * - `cekHarga`    → halaman /cek-harga
 *
 * Info layanan yang aktif (Sewa Angkutan & Pengolahan Sampah) kini tampil
 * di homepage melalui lib/services.ts + components/services-section.tsx.
 */
export const features = {
  blog: false,
  cekHarga: false,
  faq: false,
  services: false,
  kotaSubtree: false,
} as const;

export const siteConfig = {
  name: "PT Lestari Trans Nusantara",
  tagline:
    "Menjadi perusahaan yang unggul, terpercaya, dan terdepan dengan memberikan pelayanan terbaik dan harga kompetitif dalam optimalisasi serta pemenuhan kebutuhan klien.",
  description:
    "PT Lestari Trans Nusantara adalah perusahaan yang bergerak di bidang jasa sewa angkutan dan pengolahan sampah, menjunjung tinggi integritas, profesionalisme, dan pelayanan terbaik untuk optimalisasi serta pemenuhan kebutuhan klien.",
  phone: "0822-1876-5376",
  phoneRaw: "6282218765376",
  email: "ptlestaritransnusantara@gmail.com",
  address:
    "Ruko Kaujon Mantion, Jalan Klunjukan Kaujon Blok R Nomor 15, Kelurahan Serang, Kecamatan Serang, Kota Serang, Banten 42116",
  whatsappText: "Halo PT Lestari Trans Nusantara, saya ingin bertanya tentang layanan Anda.",
  /* Sosial media belum tersedia — dikomentari. Isi dengan tautan asli bila
   * akun sudah ada, lalu aktifkan kembali kontennya di halaman kontak.
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "X", href: "#" },
    { label: "Telegram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  */
  csAgents: [
    { name: "CS", role: "Dukungan & Penawaran", phone: "6282218765376" },
  ],
} as const;
