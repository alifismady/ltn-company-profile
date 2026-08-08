"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

const navLinks = [
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontak", href: "/kontak" },
];

const serviceLinks = [
  { label: "Sewa Truk", href: "/sewa-truk" },
  { label: "Jasa Pindahan", href: "/jasa-pindahan" },
  { label: "Paket & Kargo", href: "/paket-kargo" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-foreground"
          >
            {siteConfig.name}
          </Link>
          <nav className="hidden items-center gap-5 lg:flex">
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
                {serviceLinks.map((link) => (
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
            {navLinks.map((link) => (
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
            href="/cek-harga"
            className="rounded-lg px-4 py-2 text-sm font-medium text-foreground ring-1 ring-border hover:bg-surface"
          >
            Cek Harga
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
          <button
            className="flex w-full items-center justify-between py-2 text-left text-base font-semibold"
            onClick={() => setMobileDropdownOpen((v) => !v)}
          >
            Layanan
            <svg
              className={`h-4 w-4 transition-transform ${
                mobileDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m6 9 6 6 6-6"
              />
            </svg>
          </button>
          {mobileDropdownOpen && (
            <ul className="mb-2 space-y-2 pl-4">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-muted"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
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
          <Link
            href="/cek-harga"
            onClick={() => setMenuOpen(false)}
            className="mt-3 block rounded-lg bg-primary px-4 py-2 text-center text-sm font-medium text-white"
          >
            Cek Harga
          </Link>
        </div>
      )}
    </header>
  );
}