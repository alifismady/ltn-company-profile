import SectionTitle from "@/components/section-title";
import { companyServices, type CompanyService } from "@/lib/services";

const TRUCK_ICON_PATH =
  "M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12";

const RECYCLE_ICON_PATHS = [
  "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",
  "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",
  "m14 16-3 3 3 3",
  "M8.293 13.596 7.196 9.5 3.1 10.598",
  "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",
  "m13.378 9.633 4.096 1.098 1.097-4.096",
];

function ServiceLogo({ service }: { service: CompanyService }) {
  if (service.slug === "manajemen-limbah-non-b3") {
    return (
      <svg
        className="h-12 w-12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {RECYCLE_ICON_PATHS.map((d) => (
          <path key={d} d={d} />
        ))}
      </svg>
    );
  }
  return (
    <svg
      className="h-12 w-12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={TRUCK_ICON_PATH}
      />
    </svg>
  );
}

export default function ServicesSection() {
  return (
    <section id="layanan" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Layanan Kami"
          title="Solusi yang Sesuai dengan Kebutuhan Anda"
          subtitle={
            "Perusahaan kami melayani lebih dari sekadar angkutan — mulai dari sewa angkutan truk dan logistik hingga pengelolaan limbah non-B3 yang ramah lingkungan."
          }
        />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {companyServices.map((service) => (
            <article
              key={service.slug}
              className="rounded-2xl border border-border bg-surface p-8 transition-shadow hover:shadow-lg"
            >
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ServiceLogo service={service} />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {service.offers.map((offer) => (
                  <li
                    key={offer}
                    className="rounded-full bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
                  >
                    {offer}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}