/**
 * NONAKTIF — halaman indeks /[kota] (`features.kotaSubtree = false`).
 *
 * Semula halaman ini me-redirect ke /[kota]/sewa-truk. Seluruh isi
 * dikomentari; aktifkan kembali dengan mengubah `features.kotaSubtree`
 * menjadi `true` di lib/site.ts lalu hapus komentar di bawah.
 */
import { notFound } from "next/navigation";

/* ---------------------------------------------------------------------
import { redirect } from "next/navigation";

export default async function CityHomePage({
  params,
}: {
  params: Promise<{ kota: string }>;
}) {
  const { kota } = await params;
  redirect(`/${kota}/sewa-truk`);
}
--------------------------------------------------------------------- */

export default async function CityHomePage() {
  notFound();
}