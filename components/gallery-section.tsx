import Image from "next/image";
import SectionTitle from "@/components/section-title";
import { workPhotos } from "@/lib/gallery";

export default function GallerySection() {
  return (
    <section className="border-t border-border bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          eyebrow="Dokumentasi Kegiatan"
          title="Kegiatan Operasional Kami"
          subtitle="Cuplikan kegiatan kami di lapangan, dari armada beroperasi hingga proses bongkar muat."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workPhotos.map((photo) => (
            <figure
              key={photo.src}
              className="group overflow-hidden rounded-2xl border border-border bg-white"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-background">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <figcaption className="px-5 py-4 text-center text-sm font-medium text-muted">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}