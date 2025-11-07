import Link from "next/link";
import { org, programs, publications, highlightCTA } from "@/data/site";
import { GlassCard } from "@/components/ui/glass-card";
import { PublicationCard } from "@/components/publication-card";

export default function Home() {
  const sortedPublications = [...publications].sort((a, b) => b.year - a.year);
  const featuredPublication = sortedPublications[0];

  return (
    <div className="space-y-[var(--pad-section)] pb-[var(--pad-section)]">
      <section className="relative overflow-hidden rounded-[var(--radius-xl)] border border-white/15 bg-white/5 px-8 py-12 shadow-soft">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-60" />
        <div className="relative grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.25em] text-sky-300/90 mb-4">
              W.I.S.H. • WOMEN IN SCIENCE FOR HOPE
            </p>
            <h1 className="hero-title text-text-hi mb-6">{org.tagline}</h1>
            <p className="text-text-lo max-w-prose mb-8">
              Founded in {org.founded}, WISH supports children’s homes with seasonal drives,
              science month activities, and the annual
              <em> WISH Upon a Star</em> magazine—created and delivered by volunteers.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link className="btn-cta" href={highlightCTA.donate.href}>
                {highlightCTA.donate.label}
              </Link>
              <Link className="btn-ghost" href={highlightCTA.volunteer.href}>
                {highlightCTA.volunteer.label}
              </Link>
              <Link
                className="text-sky-300 underline/30 hover:underline"
                href={highlightCTA.publications.href}
              >
                Download magazines →
              </Link>
            </div>
          </div>
          <aside className="md:col-span-5">
            <GlassCard className="p-6">
              <p className="text-xs font-semibold tracking-[0.2em] text-text-lo">
                NOTES FROM THE FIELD
              </p>
              <ul className="mt-4 space-y-3 text-sm text-text-lo">
                {org.notes.slice(0, 4).map((note) => (
                  <li key={note} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </aside>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
            Annual rhythm
          </p>
          <h2 className="font-serif text-3xl text-text-hi">
            Seasonal drives, science month, and special care.
          </h2>
          <p className="text-text-lo">
            Everything grows by word-of-mouth: volunteers gather supplies, deliver them,
            and listen to what homes ask for next.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <GlassCard key={program.id} className="flex flex-col gap-4 p-6">
              <div className="flex items-start justify-between text-text-lo">
                <h3 className="font-serif text-2xl text-text-hi">{program.title}</h3>
                <span className="text-xs uppercase tracking-[0.3em] text-text-lo">
                  {program.when}
                </span>
              </div>
              <p className="text-sm text-text-lo">{program.summary}</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-text-lo/90">
                {program.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="grid gap-10 rounded-[var(--radius-xl)] border border-white/10 bg-white/5 p-8 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
            Publications Library
          </p>
          <h2 className="font-serif text-3xl text-text-hi">
            Download the WISH Upon a Star collection.
          </h2>
          <p className="text-text-lo">
            Each print issue is written by volunteers, printed for the kids, and re-shared as a PDF so
            supporters can help fund the next run.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link className="btn-cta" href={highlightCTA.publications.href}>
              {highlightCTA.publications.label}
            </Link>
            <Link className="btn-ghost" href="/contact">
              Request a print run
            </Link>
          </div>
        </div>
        <div className="max-w-md justify-self-end">
          <PublicationCard pub={featuredPublication} />
        </div>
      </section>
    </div>
  );
}
