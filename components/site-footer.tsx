import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1.5 lg:pr-4">
            <p className="mb-3 text-lg font-bold tracking-tight">
              {siteConfig.name}
            </p>
            <p className="text-sm leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <p className="mb-3 font-semibold">Layanan</p>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/paket-kargo" className="hover:text-primary">
                  Pengiriman Paket
                </Link>
              </li>
              <li>
                <Link href="/sewa-truk" className="hover:text-primary">
                  Sewa Truk
                </Link>
              </li>
              <li>
                <Link href="/jasa-pindahan" className="hover:text-primary">
                  Jasa Pindahan
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 font-semibold">Perusahaan</p>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/tentang-kami" className="hover:text-primary">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-primary">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 font-semibold">Kontak</p>
            <ul className="space-y-2 text-sm text-muted">
              <li>{siteConfig.address}</li>
              <li>Telepon: {siteConfig.phone}</li>
              <li>Email: {siteConfig.email}</li>
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <p className="mb-3 font-semibold">Berlangganan Berita</p>
            <p className="mb-3 text-sm text-muted">
              Dapatkan wawasan dan penawaran terbaru dari kami.
            </p>
            <form className="flex" action="/kontak">
              <input
                type="email"
                required
                placeholder="Email Anda"
                className="w-full rounded-l-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="rounded-r-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Semua Hak
            Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-3">
            <Link href="/syarat-dan-ketentuan" className="hover:text-primary">
              Syarat & Ketentuan
            </Link>
            <span>|</span>
            <Link href="/kebijakan-privasi" className="hover:text-primary">
              Kebijakan Privasi
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}