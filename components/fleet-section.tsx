/**
 * NONAKTIF — FleetSection (daftar armada truk).
 *
 * Hanya dipakai bila fitur `features.services` dihidupkan. Seluruh isi
 * dikomentari; aktifkan kembali dengan menghapus komentar di bawah.
 */

/* ---------------------------------------------------------------------
import SectionTitle from "@/components/section-title";
import { fleet } from "@/lib/fleet";

function TruckIcon() {
  return (
    <div className="flex h-40 w-full items-center justify-center bg-background">
      <svg
        className="h-24 w-24 text-primary/70"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
        />
      </svg>
    </div>
  );
}

export default function FleetSection() {
  return (
    <section className="border-t border-border bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle
          title="Armada yang Tepat untuk Pengirimanmu"
          subtitle="Pilih armada sesuai kebutuhan, kapasitas, dan jenis muatan Anda."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fleet.map((item) => (
            <FleetCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FleetCard({ item }: { item: (typeof fleet)[number] }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-white">
      <TruckIcon />
      <div className="flex items-center justify-between px-5 py-4">
        <h3 className="text-lg font-semibold">{item.name}</h3>
      </div>
      <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/75 p-4 text-white backdrop-blur transition-transform duration-300 group-hover:translate-y-0">
        <p className="text-xs">
          <strong className="block text-amber-400">Dimensi Bak:</strong>
          {item.dimension} | <strong>Kapasitas:</strong> {item.capacity}
          <span className="mt-1 block">
            <strong className="text-amber-400">Cocok untuk:</strong>{" "}
            {item.suitableFor}
          </span>
        </p>
      </div>
    </div>
  );
}
--------------------------------------------------------------------- */