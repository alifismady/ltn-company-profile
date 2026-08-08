export type City = {
  slug: string;
  name: string;
  region?: string;
};

/**
 * Daftar kota yang dilayani. Tambahkan/kurangi sesuai kebutuhan bisnis.
 * `slug` dipakai di URL (misal: /serang/sewa-truk-wingbox).
 */
export const cities: City[] = [
  { slug: "jakarta", name: "Jakarta", region: "Banten & Jabodetabek" },
  { slug: "bandung", name: "Bandung", region: "Jawa Barat" },
  { slug: "serang", name: "Serang", region: "Banten" },
  { slug: "surabaya", name: "Surabaya", region: "Jawa Timur" },
  { slug: "semarang", name: "Semarang", region: "Jawa Tengah" },
  { slug: "medan", name: "Medan", region: "Sumatera Utara" },
  { slug: "denpasar", name: "Denpasar", region: "Bali" },
  { slug: "makassar", name: "Makassar", region: "Sulawesi Selatan" },
];

export const serviceTypes = [
  { slug: "sewa-truk", label: "Sewa Truk" },
  { slug: "jasa-pindahan", label: "Jasa Pindahan" },
  { slug: "paket-kargo", label: "Paket & Kargo" },
] as const;

export const truckTypes = [
  { slug: "pickup", label: "Pickup" },
  { slug: "engkel", label: "Engkel (CDE)" },
  { slug: "cdd", label: "Double (CDD)" },
  { slug: "cdd-long", label: "CDD Long" },
  { slug: "fuso", label: "Fuso" },
  { slug: "fuso-long", label: "Fuso Long" },
  { slug: "wingbox", label: "Tronton / Wingbox" },
  { slug: "lossbak", label: "Flatbed / Lossbak" },
] as const;

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}