import { redirect } from "next/navigation";

export default async function CityHomePage({
  params,
}: {
  params: Promise<{ kota: string }>;
}) {
  const { kota } = await params;
  redirect(`/${kota}/sewa-truk`);
}
