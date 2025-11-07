import clsx from "clsx";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function PageHero({
  eyebrow,
  title,
  description,
  align = "left",
}: PageHeroProps) {
  return (
    <section
      className={clsx(
        "relative overflow-hidden rounded-[var(--radius-xl)] border border-white/10 bg-white/5 p-8 shadow-soft",
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,255,0.15),_transparent_55%)] opacity-70" />
      <div
        className={clsx(
          "relative flex flex-col gap-4",
          align === "center" ? "items-center text-center" : "items-start text-left",
        )}
      >
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300/90">
            {eyebrow}
          </p>
        )}
        <h1 className="hero-title text-text-hi">{title}</h1>
        <p className="max-w-3xl text-base text-text-lo md:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
