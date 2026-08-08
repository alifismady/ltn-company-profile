import Hero from "@/components/hero";
import ServiceGrid from "@/components/service-grid";
import FleetSection from "@/components/fleet-section";
import FaqAccordion from "@/components/faq-accordion";
import AdvantagesSection from "@/components/advantages-section";
import CoverageSection from "@/components/coverage-section";
import CtaCard from "@/components/cta-card";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Jasa Pengiriman Profesional & Terpercaya"
        subtitle={`${siteConfig.name} hadir sebagai mitra logistik terdepan di Indonesia. Kami siap mengoptimalkan setiap rantai pasok Anda dengan solusi yang efisien, aman, dan inovatif.`}
      />
      <ServiceGrid />
      <FleetSection />
      <AdvantagesSection />
      <CoverageSection />
      <FaqAccordion />
      <CtaCard
        title={`Siap Meningkatkan Level Logistik Bisnis Anda?`}
        subtitle="Diskusikan kebutuhan Anda dengan tim ahli kami dan dapatkan solusi yang dirancang khusus untuk Anda."
      />
    </>
  );
}