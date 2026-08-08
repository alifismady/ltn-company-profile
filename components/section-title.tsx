type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: Props) {
  return (
    <div
      className={`mb-12 ${
        align === "center" ? "mx-auto max-w-2xl text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-muted">{subtitle}</p>
      )}
    </div>
  );
}