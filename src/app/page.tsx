import Link from "next/link";
import { org, programs, publications, highlightCTA } from "@/data/site";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionBottomScrim } from "@/components/section-scrim";
import { FadeReveal } from "@/components/reveal";
import type { CSSProperties } from "react";
import { TiltCover } from "@/components/tilt-cover";

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

const fieldHighlights = [
  {
    title: "Print-first magazine reach",
    detail:
      "WISH Upon a Star is handcrafted each year and hand-delivered to children’s homes—no wifi, just volunteers and curiosity.",
    tag: "Magazine",
    icon: "📘",
  },
  {
    title: "Community care & recognition",
    detail:
      "Offline by design, powered by volunteers, and recognized with the UWI Principal’s Research Award after refurbishing the Swaha Vishok Bhavan park.",
    tag: "Awarded",
    icon: "✨",
  },
  {
    title: "Science partners & outreach",
    detail:
      "IAU/OAO kits, NA-ROAD binoculars, and the Nov 14 fundraiser (public lecture + museum tour) fuel hurricane Beryl relief for Grenada.",
    tag: "Impact",
    icon: "🛰️",
  },
];

const programAccents = ["#5dd1ff", "#8a7bfd", "#40c9b6", "#f4a2ff", "#f7b84a"];

export default function Home() {
  const featuredPublication = [...publications].sort((a, b) => b.year - a.year)[0];
  const curatedHighlights = [
    "Fifth anniversary issue centering exercise and mental health.",
    'Includes "Astronomy-Band-Aid for the Soul," Gabrielle Motilal interview, and bilingual reflections.',
    "Pets & nature wellbeing plus a feel-good chemicals crossword keep curiosity high.",
  ];

  return (
    <div className="space-y-[var(--pad-section)] pb-[var(--pad-section)]">
      <section className="hero band band--aurora relative">
        <FadeReveal>
          <div className="grid-12 items-start gap-10">
          <div className="col-span-12 xl:col-span-7 space-y-8">
            <p className="text-xs tracking-[0.25em] text-sky-300/90 mb-4">
              W.I.S.H. • Women in Science for Hope
            </p>
            <h1 className="hero-title prose-max mb-6 text-text-hi">
              Wonder under the night sky. Care in every home.
            </h1>
            <p className="text-text-lo max-w-2xl leading-relaxed">
              Founded in {org.founded}, WISH supports children’s homes with seasonal drives, science month activities,
              and the annual <em>WISH Upon a Star</em> magazine—created and delivered by volunteers.
            </p>

            <div className="mt-6 space-y-5 lg:mt-8 lg:space-y-6">
              <p className="text-xs font-semibold tracking-[0.3em] text-text-lo">
                Impact in motion
              </p>
              <ul className="grid gap-y-6 gap-x-8 sm:grid-cols-2">
                {heroStats.map((stat) => (
                  <li key={stat.label} className="space-y-2">
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
        </FadeReveal>
        <SectionBottomScrim />
      </section>

      <section className="section relative">
        <FadeReveal>
          <div className="container space-y-8">
            <div className="programs-header">
              <div className="programs-divider">
                <span />
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
                  Annual rhythm
                </p>
                <span />
              </div>
              <div className="space-y-3">
                <h2 className="font-serif text-3xl text-text-hi">
                  Seasonal drives, science month, and special care.
                </h2>
                <p className="text-text-lo">
                  Everything grows by word-of-mouth: volunteers gather supplies, deliver them, and listen to what homes ask
                  for next.
                </p>
              </div>
            </div>

            <div className="programs-scroll">
              <div className="programs-grid">
                {programs.map((program, idx) => {
                  const accentColor = programAccents[idx % programAccents.length];
                  const style = { "--program-card-accent": accentColor } as CSSProperties;

                  return (
                    <FadeReveal key={program.id} delay={idx * 0.08} amount={0.25}>
                      <article className="programs-card" style={style}>
                        <div className="programs-card__header">
                          <h3 className="font-serif text-2xl text-text-hi">{program.title}</h3>
                          <span className="programs-card__when">{program.when}</span>
                        </div>
                        <div className="programs-card__body">
                          <p className="programs-card__summary">{program.summary}</p>
                          <ul className="programs-card__bullets">
                            {program.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="programs-card__tagline">Seasonal care in motion</div>
                      </article>
                    </FadeReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeReveal>
        <SectionBottomScrim />
      </section>

      <section className="section relative">
        <FadeReveal>
          <div className="container">
            <div className="latest-pub-divider">
              <p className="latest-pub-divider__label">Latest publication</p>
              <span className="latest-pub-divider__line" aria-hidden />
              <p className="latest-pub-divider__year">Issue {featuredPublication.year}</p>
            </div>
            <article className="latest-pub-card">
              <div className="latest-pub-card__grid">
                  <div className="latest-pub-card__visual">
                    <div className="latest-pub-card__cover">
                      <TiltCover
                        src={featuredPublication.cover}
                        alt={`${featuredPublication.title} cover`}
                        width={280}
                        height={360}
                      />
                    </div>
                  <span className="latest-pub-card__badge">Fifth-anniversary issue</span>
                </div>

                <div className="latest-pub-card__content">
                  <h2 className="font-serif text-3xl text-text-hi leading-tight">
                    {featuredPublication.title}
                  </h2>
                  <p className="text-text-lo leading-relaxed">
                    {featuredPublication.blurb}
                  </p>

                  <div className="latest-pub-card__meta">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-text-lo">Format</p>
                      <p className="text-lg font-semibold text-text-hi">{featuredPublication.size}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-text-lo">Mood</p>
                      <p className="text-lg font-semibold text-text-hi">Joyful care</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-text-lo">Availability</p>
                      <p className="text-lg font-semibold text-text-hi">Digital + print</p>
                    </div>
                  </div>

                  <ul className="latest-pub-card__highlights">
                    {curatedHighlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

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
            </article>
          </div>
        </FadeReveal>
        <SectionBottomScrim height={"clamp(4.5rem, 12vw, 10rem)"} tint={0.18} />
      </section>

      <section className="section relative overflow-hidden">
        <FadeReveal>
          <div className="container space-y-8">
            <div className="notes-section-divider">
              <span />
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
                Field dispatch log
              </p>
              <span />
            </div>
            <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="notes-hero">
                <div className="notes-hero__glow" aria-hidden />
                <div className="space-y-6 relative z-10">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
                      Notes from the field
                    </p>
                    <h2 className="font-serif text-3xl text-text-hi">
                      Stories from our homes, partners, and volunteers.
                    </h2>
                    <p className="text-text-lo">
                      These dispatches capture the offline rhythms of WISH—print magazines, volunteer drives, park refurbishments, and telescopes in little hands.
                    </p>
                  </div>

                  <div className="notes-hero-grid">
                    {fieldHighlights.map((highlight) => (
                      <article key={highlight.title} className="notes-hero-grid__card">
                        <span className="notes-hero-grid__tag">{highlight.tag}</span>
                        <h3 className="font-serif text-xl text-text-hi">{highlight.title}</h3>
                        <p className="text-sm text-text-lo leading-relaxed">{highlight.detail}</p>
                        <span className="notes-hero-grid__icon" aria-hidden>
                          {highlight.icon}
                        </span>
                      </article>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3 text-sm">
                    <Link className="btn-ghost" href={highlightCTA.publications.href}>
                      Publications library
                    </Link>
                    <Link className="btn-ghost" href="/get-involved#volunteer">
                      Join a delivery drive
                    </Link>
                  </div>
                </div>
              </div>

              <div className="notes-panel">
                <div className="notes-panel__header">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
                    Field journal
                  </p>
                  <p className="text-sm text-text-lo">
                    Dispatches from every partner home and outreach drive.
                  </p>
                </div>

                <div className="notes-panel__grid">
                  {org.notes.map((note, idx) => (
                    <article key={note} className="notes-panel__note" tabIndex={0}>
                      <span className="notes-panel__note-index">{`0${idx + 1}`}</span>
                      <p className="text-sm leading-relaxed text-text-lo">{note}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeReveal>
        <SectionBottomScrim height={"clamp(4.5rem, 12vw, 10rem)"} tint={0.16} />
      </section>
    </div>
  );
}
