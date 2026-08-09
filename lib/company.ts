export type PhilosophyValue = {
  title: string;
  summary: string;
  details: string[];
};

export const philosophyPrinciples = [
  "Integritas",
  "Pencapaian Hasil",
];

export const philosophyValues: PhilosophyValue[] = [
  {
    title: "Fair",
    summary:
      "Tidak memihak atau tidak berat sebelah, menurunkan nilai-nilai seperti independen, profesional, dan rendah hati.",
    details: [
      "Kami tidak memihak dalam politik organisasi klien.",
      "Kami menjunjung standar etika profesional, termasuk tidak terlibat dalam segala bentuk suap dan KKN.",
      "Rendah hati menjadi syarat agar kami mampu bersikap objektif dan terbuka.",
    ],
  },
  {
    title: "Kontribusi Positif",
    summary:
      "Setiap penugasan harus memberikan hasil bisnis yang signifikan dan dapat bertahan lama.",
    details: [
      "Staf kami menyadari bahwa mereka harus memberikan kontribusi positif yang dapat dibanggakan.",
      "Setiap penugasan memberikan hasil yang bernilai baik secara finansial maupun dari perspektif strategis jangka panjang.",
    ],
  },
  {
    title: "Kemauan Kuat",
    summary:
      "Tidak mudah menyerah, beraspirasi tinggi, dan berusaha mencapai tujuan dengan segenap kemampuan.",
    details: [
      "Setiap staf kami tidak boleh mudah menyerah menghadapi tantangan.",
      "Kami selalu memiliki aspirasi tinggi dan berusaha mewujudkannya dengan segenap kemampuan.",
    ],
  },
];

export const vision =
  "Menjadi perusahaan yang unggul, terpercaya, terdepan dan memberikan pelayanan terbaik dengan harga kompetitif dalam optimalisasi dan pemenuhan kebutuhan klien.";

export const missions = [
  "Memberikan layanan prima dan solusi yang bernilai tambah kepada seluruh klien dalam penyediaan produk yang berkualitas, selaku mitra pilihan utama.",
  "Meningkatkan nilai produk yang unggul dan berkualitas.",
  "Penyediaan produk terbaik sebagai kebanggaan perusahaan untuk bisa diterima, sesuai, dan berkualitas.",
];

export type OrgStructure = {
  position: string;
  name: string;
};

export const organization: OrgStructure[] = [
  { position: "Direktur Utama", name: "Rangga Kumbara" },
  { position: "General Manager", name: "Shintia Niken" },
  { position: "Manager Operasional", name: "Kevin Kusumawinata" },
  { position: "Asisten Manager", name: "Bella Rosadi" },
];

export const legalitas = {
  institution: "KANTOR PELAYANAN PAJAK PRATAMA SERANG BARAT",
  registeredName: "LESTARI TRANS NUSANTARA",
  registeredDate: "19/06/2025",
  registeredNumber: "1000 0000 0310 9441",
  registeredAddress:
    "Ruko Kaujon Mantion, Jalan Klunjukan Kaujon Blok R Nomor 15, RT. 002 RW. 014, Serang, Kota Serang, Banten",
};