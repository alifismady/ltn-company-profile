"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

/* ===================================================================
   Mode saat ini: company profile. Link layanan, blog, dan cek harga
   dinonaktifkan. Untuk mengaktifkan kembali, ubah `features` di
   lib/site.ts menjadi `true` dan hapus nilai `false &&` di bawah.
   ===================================================================*/
const navLinks = [
  { label: "Layanan", href: "/#layanan" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Kontak", href: "/kontak" },
];

const hiddenLinks = [
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Cek Harga", href: "/cek-harga" },
];

const hiddenServiceLinks = [
  { label: "Sewa Truk", href: "/sewa-truk" },
  { label: "Jasa Pindahan", href: "/jasa-pindahan" },
  { label: "Paket & Kargo", href: "/paket-kargo" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            {/* Logo berisi latar putih — cocok dengan header yang terang. */}
            <Image
              src="/images/company-logo.png"
              alt={`Logo ${siteConfig.name}`}
              width={40}
              height={40}
              className="h-10 w-auto rounded object-contain"
            />
            <span className="text-lg font-bold tracking-tight text-foreground">
              {siteConfig.name}
            </span>
          </Link>
          <nav className="hidden items-center gap-5 lg:flex">
            {/* Layanan dropdown — nonaktif, aktifkan kembali jika fitur layanan dihidupkan */}
            {false && (
              <div className="group relative">
                <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary">
                  Layanan
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m19 9-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="invisible absolute left-0 top-full z-50 min-w-[200px] -translate-y-1 rounded-lg border border-border bg-surface py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {hiddenServiceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block whitespace-nowrap px-4 py-2 text-sm text-foreground hover:bg-background hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            {/* Link Blog / FAQ / Cek Harga — aktifkan kembali jika fitur hidup */}
            {false &&
              hiddenLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
          </nav>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/kontak"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
          >
            Hubungi Kami
          </Link>
        </div>

        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Buka menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-5 bg-foreground transition-transform ${
              menuOpen ? "translate-y-1 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-foreground transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-foreground transition-transform ${
              menuOpen ? "-translate-y-1 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-surface px-4 py-4 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-base font-semibold"
            >
              {link.label}
            </Link>
          ))}
          {false &&
            hiddenLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-base font-semibold"
              >
                {link.label}
              </Link>
            ))}
        </div>
      )}
    </header>
  );
}