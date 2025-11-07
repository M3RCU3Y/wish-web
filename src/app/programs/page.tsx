import { PageHero } from "@/components/page-hero";
import { GlassCard } from "@/components/ui/glass-card";
import { programs } from "@/data/site";

export default function ProgramsPage() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Programs"
        title="Seasonal drives anchored in care"
        description="W.I.S.H. keeps a predictable cadence so homes know when groceries, gifts, magazines, or science nights arrive—then adds special projects when a home calls."
      />

      <ul className="grid gap-6 md:grid-cols-2">
        {programs.map((program) => (
          <li key={program.id}>
            <GlassCard className="p-6">
              <div className="mb-2 flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-text-hi">
                  {program.title}
                </h3>
                <span className="text-xs uppercase tracking-[0.3em] text-text-lo">
                  {program.when}
                </span>
              </div>
              <p className="text-sm text-text-lo">{program.summary}</p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-text-lo/90">
                {program.bullets.map((bullet, index) => (
                  <li key={`${program.id}-${index}`}>{bullet}</li>
                ))}
              </ul>
            </GlassCard>
          </li>
        ))}
      </ul>
    </div>
  );
}

