import type { Metadata } from "next";
import Hero from "@/components/hero";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontak",
  description: "Hubungi kami untuk konsultasi dan penawaran layanan logistik.",
};

export default function KontakPage() {
  return (
    <>
      <Hero
        title="Hubungi Kami"
        subtitle="Tim kami siap membantu Anda. Konsultasikan kebutuhan logistik Anda secara gratis."
        ctaLabel=""
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold">Informasi Kontak</h2>
            <dl className="space-y-6">
              <div>
                <dt className="mb-1 font-semibold">Alamat</dt>
                <dd className="text-sm text-muted">{siteConfig.address}</dd>
              </div>
              <div>
                <dt className="mb-1 font-semibold">Telepon</dt>
                <dd className="text-sm text-muted">{siteConfig.phone}</dd>
              </div>
              <div>
                <dt className="mb-1 font-semibold">Email</dt>
                <dd className="text-sm text-muted">{siteConfig.email}</dd>
              </div>
            </dl>
            <h3 className="mb-4 mt-8 text-lg font-semibold">Follow Kami</h3>
            <div className="flex flex-wrap gap-3">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium hover:text-primary"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h3 className="mb-6 text-lg font-semibold">Kirim Pesan</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium">
                  Nama
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Nama Anda"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email Anda"
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tuliskan kebutuhan Anda..."
                  className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none focus:border-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-3 font-medium text-white hover:bg-primary-dark"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}