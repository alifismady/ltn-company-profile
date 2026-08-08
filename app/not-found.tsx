import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-24 text-center">
      <p className="mb-2 text-7xl font-bold text-primary">404</p>
      <h1 className="mb-3 text-2xl font-bold">Halaman tidak ditemukan</h1>
      <p className="mb-8 text-muted">
        Halaman yang Anda cari mungkin telah dipindahkan atau tidak tersedia.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-primary-dark"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}