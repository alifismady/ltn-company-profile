export type CompanyService = {
  slug: string;
  title: string;
  description: string;
  offers: string[];
};

/**
 * Layanan perusahaan untuk bagian "Layanan Kami".
 * Logo tiap layanan dirender lewat komponen ServicesSection (berdasarkan
 * `slug`), bukan memakai foto.
 */
export const companyServices: CompanyService[] = [
  {
    slug: "sewa-angkutan",
    title: "Sewa Angkutan & Logistik",
    description:
      "Layanan sewa angkutan truk untuk berbagai kebutuhan pengiriman dan distribusi — mulai dari pengiriman ringan, jasa pindahan rumah dan kantor, hingga kargo skala besar — dengan armada terawat dan supir profesional.",
    offers: ["Sewa Truk Berbagai Armada", "Jasa Pindahan", "Paket & Kargo"],
  },
  {
    slug: "manajemen-limbah-non-b3",
    title: "Manajemen Limbah Non-B3",
    description:
      "Menggunakan kembali sampah yang masih dapat digunakan, mengurangi segala sesuatu yang menyebabkan pemborosan, dan mendaur ulang sampah — untuk pengelolaan limbah non-B3 yang lebih ramah lingkungan dan berkelanjutan.",
    offers: ["Reuse — Guna Ulang", "Reduce — Kurangi", "Recycle — Daur Ulang"],
  },
];