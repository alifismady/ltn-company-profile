const advantages = [
  {
    title: "Integritas & Profesionalisme",
    description:
      "Kami bersikap independen, objektif, dan terbuka dengan menjunjung tinggi standar etika profesional.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
      />
    ),
  },
  {
    title: "Harga Kompetitif",
    description:
      "Kami memberikan pelayanan terbaik dengan harga yang kompetitif untuk memenuhi kebutuhan klien.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 14.25l6-6m4.5-3.493V5a2.25 2.25 0 0 1-2.25 2.25H16.5a2.25 2.25 0 0 1-2.25-2.25V11.5M15 9.75l3-3m-7.5 7.5h.008v.008H10.5V17.25Zm-1.5-4.5h.008v.008H9v.008H8.25V12.75Zm6 6h.008v.008H15v.008H14.25V18.75Z"
      />
    ),
  },
  {
    title: "Kontribusi Positif",
    description:
      "Setiap penugasan kami memberikan hasil bisnis yang signifikan dan bernilai jangka panjang bagi klien.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253"
      />
    ),
  },
  {
    title: "Kemauan Kuat",
    description:
      "Kami tidak pernah mudah menyerah dan selalu berusaha mencapai aspirasi dengan segenap kemampuan.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26"
      />
    ),
  },
];

export default function AdvantagesSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 rounded-3xl border border-border bg-surface p-8 sm:p-10 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((adv) => (
            <div key={adv.title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  {adv.icon}
                </svg>
              </div>
              <div>
                <h3 className="mb-1 font-semibold">{adv.title}</h3>
                <p className="text-sm text-muted">{adv.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}