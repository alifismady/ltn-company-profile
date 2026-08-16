/**
 * NONAKTIF — halaman /faq (`features.faq = false`).
 *
 * Seluruh isi halaman dikomentari. Aktifkan kembali dengan mengubah
 * `features.faq` menjadi `true` di lib/site.ts lalu hapus komentar
 * di bawah.
 */
import { notFound } from "next/navigation";

/* ---------------------------------------------------------------------
import type { Metadata } from "next";
import Hero from "@/components/hero";
import FaqAccordion from "@/components/faq-accordion";
import CtaCard from "@/components/cta-card";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Pertanyaan yang sering diajukan seputar layanan pengiriman, sewa truk, dan jasa pindahan.",
};

export default function FaqPage() {
  return (
    <>
      <Hero
        title="Pertanyaan yang Sering Diajukan"
        subtitle="Temukan jawaban atas pertanyaan seputar layanan kami."
        ctaLabel=""
      />
      <FaqAccordion />
      <CtaCard
        title="Masih Punya Pertanyaan?"
        subtitle="Tim kami siap membantu Anda. Hubungi kami untuk konsultasi gratis."
      />
    </>
  );
}
--------------------------------------------------------------------- */

export default function FaqPage() {
  notFound();
}