import Link from "next/link";
import SectionTitle from "@/components/section-title";
import { cities, serviceTypes } from "@/lib/cities";

export default function CoverageSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          title="Jangkauan Layanan Kami"
          subtitle="Temukan layanan di berbagai kota di seluruh Indonesia."
        />
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3">
          {serviceTypes.map((service) => (
            <div key={service.slug}>
              <h3 className="mb-4 text-lg font-semibold">{service.label}</h3>
              <ul className="columns-2 gap-4 space-y-1 text-sm text-muted">
                {cities.map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/${city.slug}/${service.slug}`}
                      className="hover:text-primary"
                    >
                      {service.label} {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}