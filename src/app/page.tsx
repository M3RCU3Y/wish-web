import Link from "next/link";
import { org, programs, publications, highlightCTA } from "@/data/site";
import { GlassCard } from "@/components/ui/glass-card";

const heroStats = [
  {
    value: "18",
    label: "Homes supported",
    detail: "Visits with kits, books, and sky nights since 2020.",
  },
  {
    value: "420+",
    label: "Science kits delivered",
    detail: "Posters, experiments, and magazines placed into little hands.",
  },
  {
    value: "75",
    label: "Active volunteers",
    detail: "Mentors, engineers, and artists rotating through drives.",
  },
  {
    value: "5",
    label: "Years of WISH",
    detail: "Grassroots, word-of-mouth, and still growing.",
  },
];

export default function Home() {
  const featuredPublication = [...publications].sort((a, b) => b.year - a.year)[0];

  return (
    <div className="space-y-[var(--pad-section)] pb-[var(--pad-section)]">
      <section className="hero band band--aurora">
        <div className="grid-12 items-start gap-10">
          <div className="col-span-12 xl:col-span-7 space-y-8">
            <p className="text-xs tracking-[0.25em] text-sky-300/90 mb-4">
              W.I.S.H. • Women in Science for Hope
            </p>
            <h1 className="hero-title prose-max mb-6 text-text-hi">
              Wonder under the night sky. Care in every home.
            </h1>
            <p className="text-text-lo max-w-2xl mb-8">
              Founded in {org.founded}, WISH supports children’s homes with seasonal drives, science month activities,
              and the annual <em>WISH Upon a Star</em> magazine—created and delivered by volunteers.
            </p>
            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-[0.3em] text-text-lo">
                Impact in motion
              </p>
              <ul className="grid gap-4 sm:grid-cols-2">
                {heroStats.map((stat) => (
                  <li key={stat.label} className="space-y-1">
                    <p className="text-3xl font-serif text-text-hi">{stat.value}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-text-lo">
                      {stat.label}
                    </p>
                    <p className="text-sm text-text-lo">{stat.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3 text-sm">
              <Link className="btn-cta" href={highlightCTA.donate.href}>
                Donate
              </Link>
              <Link className="btn-ghost" href="/get-involved#volunteer">
                Volunteer
              </Link>
              <Link
                href={highlightCTA.publications.href}
                className="text-sky-300 underline/30 hover:underline inline-flex items-center"
              >
                Download magazines →
              </Link>
            </div>
          </div>
          <aside className="col-span-12 xl:col-span-5">
            <GlassCard className="min-h-[320px] bg-gradient-to-br from-slate-900/50 via-slate-800/20 to-slate-900/60">
              <span className="sr-only">Future carousel placeholder</span>
            </GlassCard>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
              Annual rhythm
            </p>
            <h2 className="mb-3 font-serif text-3xl text-text-hi">
              Seasonal drives, science month, and special care.
            </h2>
            <p className="text-text-lo">
              Everything grows by word-of-mouth: volunteers gather supplies, deliver them, and listen to what homes ask
              for next.
            </p>
          </div>
          <div className="grid gap-10 lg:grid-cols-2">
            {programs.map((program) => (
              <article key={program.id} className="space-y-4 border-t border-white/15 pt-6">
                <div className="flex flex-wrap items-center justify-between gap-4 text-text-lo">
                  <h3 className="font-serif text-2xl text-text-hi">{program.title}</h3>
                  <span className="text-xs uppercase tracking-[0.3em]">{program.when}</span>
                </div>
                <p className="text-sm text-text-lo">{program.summary}</p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-text-lo/90">
                  {program.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pub-highlight">
            <div className="pub-highlight__art" aria-hidden>
              <div className="pub-highlight__beam" />
            </div>
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-200">
                Featured · {featuredPublication.year}
              </p>
              <h2 className="font-serif text-3xl text-text-hi">
                {featuredPublication.title}
              </h2>
              <p className="text-text-lo">{featuredPublication.blurb}</p>
              <div className="pub-pills">
                {featuredPublication.theme.map((tag) => (
                  <span key={tag} className="pub-pill">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link className="btn-cta" href={featuredPublication.href}>
                  Download (PDF)
                </Link>
                <Link className="btn-ghost" href={highlightCTA.publications.href}>
                  Browse library
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="notes-card">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-text-lo">
              Notes from the field
            </p>
            <ul className="mt-4 text-text-lo">
              {org.notes.map((note) => (
                <li key={note} className="flex gap-3 text-sm">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
