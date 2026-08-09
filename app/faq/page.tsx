import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/hero";
import FaqAccordion from "@/components/faq-accordion";
import CtaCard from "@/components/cta-card";
import { features } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Pertanyaan yang sering diajukan seputar layanan pengiriman, sewa truk, dan jasa pindahan.",
};

/* Halaman FAQ nonaktif dalam mode company profile (lihat lib/site.ts). */
export default function FaqPage() {
  if (!features.faq) {
    notFound();
  }
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