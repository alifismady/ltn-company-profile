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
    title: "Sewa Angkutan",
    description:
      "Layanan sewa angkutan truk untuk berbagai kebutuhan pengangkutan dan distribusi barang — dari muatan ringan, jasa pindahan rumah dan kantor, hingga muatan besar — dengan armada terawat dan supir profesional.",
    offers: ["Sewa Truk Berbagai Armada", "Jasa Pindahan", "Angkutan Barang"],
  },
  {
    slug: "pengolahan-sampah",
    title: "Pengolahan Sampah",
    description:
      "Menggunakan kembali sampah yang masih dapat digunakan, mengurangi segala sesuatu yang menyebabkan pemborosan, dan mendaur ulang sampah — untuk pengolahan limbah non-B3 yang lebih ramah lingkungan dan berkelanjutan.",
    offers: ["Reuse — Guna Ulang", "Reduce — Kurangi", "Recycle — Daur Ulang"],
  },
];