export type WorkPhoto = {
  src: string;
  alt: string;
  caption: string;
};

/**
 * Dokumentasi kegiatan perusahaan (armada beroperasi, pengangkutan barang,
 * pengelolaan sampah) yang tampil pada bagian galeri di beranda.
 *
 * `src` mengarah ke foto asli di `public/images/`. Ganti/atur ulang sesuai
 * kebutuhan; tambah foto baru dengan menempatkannya di `public/images/`
 * lalu daftarkan di sini.
 */
export const workPhotos: WorkPhoto[] = [
  {
    src: "/images/truk-1.jpeg",
    alt: "Unit truk siap melayani pengiriman",
    caption: "Unit truk siap melayani",
  },
  {
    src: "/images/truk-2.jpeg",
    alt: "Armada andal untuk kebutuhan angkutan",
    caption: "Armada andal untuk angkutan",
  },
  {
    src: "/images/truk-3.jpeg",
    alt: "Kesiapan armada setiap hari",
    caption: "Kesiapan armada setiap hari",
  },
  {
    src: "/images/truk-mengangkut.jpeg",
    alt: "Truk sedang mengangkut barang",
    caption: "Truk mengangkut barang",
  },
  {
    src: "/images/truk-mengangkut-2.jpeg",
    alt: "Distribusi barang menuju tujuan",
    caption: "Distribusi barang ke tujuan",
  },
  {
    src: "/images/manajemen-sampah.jpeg",
    alt: "Kegiatan penanganan sampah non-B3",
    caption: "Penanganan sampah non-B3",
  },
];