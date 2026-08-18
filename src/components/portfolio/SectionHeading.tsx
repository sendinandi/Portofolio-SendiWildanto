export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-[11px] font-semibold tracking-[0.18em] text-primary uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-[2.15rem]">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
