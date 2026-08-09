import type { Metadata } from "next";
import Hero from "@/components/hero";
import SectionTitle from "@/components/section-title";
import CtaCard from "@/components/cta-card";
import { siteConfig } from "@/lib/site";
import {
  missions,
  vision,
  philosophyPrinciples,
  philosophyValues,
  organization,
  legalitas,
} from "@/lib/company";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: siteConfig.description,
};

export default function TentangKamiPage() {
  return (
    <>
      <Hero
        title="Tentang Kami"
        subtitle={siteConfig.tagline}
        ctaLabel="Hubungi Kami"
        ctaHref="/kontak"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionTitle
          eyebrow="Profil Perusahaan"
          title="PT Lestari Trans Nusantara"
          subtitle={`${siteConfig.name} adalah perusahaan yang berdiri dengan berpedoman pada dua prinsip: ${philosophyPrinciples[0]} dan ${philosophyPrinciples[1]}. Kami berkomitmen untuk menjadi mitra pilihan utama dalam memenuhi kebutuhan klien.`}
        />
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              Filosofi Perusahaan
            </h3>
            <p className="mb-4 leading-relaxed text-muted">
              Berdasarkan dua prinsip tersebut, kami menyimpulkan tiga nilai
              dasar yang menjadi akar dari seluruh nilai-nilai lainnya di
              perusahaan kami.
            </p>
            <div className="space-y-4">
              {philosophyValues.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-border bg-surface p-6"
                >
                  <h4 className="mb-2 text-lg font-semibold">{value.title}</h4>
                  <p className="mb-3 text-sm leading-relaxed text-muted">
                    {value.summary}
                  </p>
                  <ul className="space-y-2">
                    {value.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h3 className="mb-4 text-lg font-semibold">Visi</h3>
              <p className="text-sm leading-relaxed text-muted">
                “{vision}”
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h3 className="mb-4 text-lg font-semibold">Misi</h3>
              <ul className="space-y-3">
                {missions.map((mission) => (
                  <li
                    key={mission}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    {mission}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionTitle
          eyebrow="Struktur Perusahaan"
          title="Jajaran Manajemen"
          subtitle="Struktur organisasi yang solid untuk memastikan layanan terbaik bagi klien."
        />
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="flex flex-col items-center">
              {organization.map((org, index) => (
                <div key={org.position} className="flex w-full flex-col items-center">
                  <div className="rounded-2xl border border-border bg-surface px-8 py-5 text-center">
                    <p className="font-semibold">{org.position}</p>
                    <p className="text-sm font-medium text-primary">
                      {org.name}
                    </p>
                  </div>
                  {index < organization.length - 1 && (
                    <div className="h-6 w-px bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionTitle
          eyebrow="Legalitas"
          title="Legalitas Perusahaan"
          subtitle="Dokumen legal sebagai bukti kredibilitas dan kepatuhan kami."
        />
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface p-8">
          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-primary">
            {legalitas.institution}
          </p>
          <dl className="divide-y divide-border text-sm">
            {[
              ["Nama Terdaftar", legalitas.registeredName],
              ["Tanggal Terdaftar", legalitas.registeredDate],
              ["Nomor Pendaftaran", legalitas.registeredNumber],
              ["Alamat Terdaftar", legalitas.registeredAddress],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <dt className="font-semibold">{label}</dt>
                <dd className="text-sm text-muted sm:text-right">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaCard
        title="Mari Bekerja Sama"
        subtitle="Bicarakan kebutuhan logistik Anda bersama tim kami hari ini."
      />
    </>
  );
}