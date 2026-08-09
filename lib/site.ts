/**
 * Fitur-fitur situs. Saat ini situs difokuskan sebagai company profile.
 * Jika salah satu layanan (sewa truk, kargo, blog, dll.) nantinya
 * dibutuhkan, cukup ubah flag terkait menjadi `true` dan aktifkan
 * kembali link/section yang tersembunyi di komponen.
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
    "PT Lestari Trans Nusantara adalah perusahaan transportasi dan logistik yang menjunjung tinggi integritas, profesionalisme, dan pelayanan terbaik untuk optimalisasi serta pemenuhan kebutuhan klien.",
  phone: "0822-1876-5376",
  phoneRaw: "6282218765376",
  email: "ptlestaritransnusantara@gmail.com",
  address:
    "Ruko Kaujon Mantion, Jalan Klunjukan Kaujon Blok R Nomor 15, Kelurahan Serang, Kecamatan Serang, Kota Serang, Banten 42116",
  whatsappText: "Halo PT Lestari Trans Nusantara, saya ingin bertanya tentang layanan Anda.",
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "X", href: "#" },
    { label: "Telegram", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
  csAgents: [
    { name: "CS", role: "Dukungan & Penawaran", phone: "6282218765376" },
  ],
} as const;
