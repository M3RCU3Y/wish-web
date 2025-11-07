import Image from "next/image";
import type { Publication } from "@/data/site";
import { CTA } from "@/components/ui/cta";
import { GlassCard } from "@/components/ui/glass-card";

type Props = {
  pub: Publication;
};

export function PublicationCard({ pub }: Props) {
  return (
    <GlassCard className="group overflow-hidden p-3">
      <div className="relative overflow-hidden rounded-[calc(var(--radius-xl)-12px)]">
        <div className="relative aspect-[4/5]">
          <Image
            src={pub.cover}
            alt={`${pub.title} cover art`}
            fill
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
            className="object-cover transition duration-[var(--dur-med)] ease-[var(--ease-out)] motion-safe:group-hover:scale-[1.04]"
            unoptimized
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-[var(--dur-med)] ease-[var(--ease-out)] motion-safe:group-hover:opacity-60"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.25), transparent 55%)",
            }}
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 space-y-2 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 text-text-hi">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-text-lo">
            {pub.year} · {pub.theme.join(" · ")}
          </p>
          <h3 className="font-serif text-2xl">{pub.title}</h3>
          <p className="text-sm text-text-lo">{pub.blurb}</p>
          <div className="flex flex-wrap gap-2 text-[0.65rem] uppercase tracking-wide">
            {pub.theme.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/30 px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-3">
            <CTA href={pub.href} className="text-sm">
              Download ({pub.size})
            </CTA>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
