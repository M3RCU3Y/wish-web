import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { GlassCard } from "@/components/ui/glass-card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { PublicationCard } from "@/components/publication-card";
import { FadeReveal } from "@/components/reveal";
import { StaggerContainer, StaggerItem } from "@/components/stagger";
import { SectionBottomScrim } from "@/components/section-scrim";
import { org, programs, publications } from "@/data/site";
import { wishEvents } from "@/data/events";
import type { CSSProperties } from "react";

const programAccents = ["#5dd1ff", "#8a7bfd", "#40c9b6", "#f4a2ff", "#f7b84a"];

export default function AboutPage() {
  const sortedPubs = [...publications].sort((a, b) => b.year - a.year);

  return (
    <div className="space-y-[var(--pad-section)] pb-[var(--pad-section)]">
      <div className="container mx-auto px-6">
        <FadeReveal>
          <PageHero
            eyebrow="About W.I.S.H."
            title={org.name}
            description={org.tagline}
          />
        </FadeReveal>
      </div>

      <section className="relative">
        <div className="container mx-auto px-6">
          <FadeReveal delay={0.1}>
            <div className="grid gap-6 lg:grid-cols-2">
              <SpotlightCard className="p-8">
                <h2 className="font-serif text-3xl text-text-hi mb-4">Mission</h2>
                <p className="text-base text-text-lo leading-relaxed">{org.mission}</p>
              </SpotlightCard>
              <SpotlightCard className="p-8" spotlightColor="rgba(168, 85, 247, 0.15)">
                <h2 className="font-serif text-3xl text-text-hi mb-4">Notes & milestones</h2>
                <ul className="space-y-3">
                  {org.notes.map((note, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-text-lo">
                      <span className="text-sky-300 shrink-0">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </div>
          </FadeReveal>
        </div>
      </section>

      <section className="relative">
        <div className="container mx-auto px-6">
          <FadeReveal>
            <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300 mb-2">
                  Our Work
                </p>
                <h2 className="font-serif text-3xl text-text-hi">Programs</h2>
              </div>
            </div>
          </FadeReveal>

          <StaggerContainer className="grid gap-6 md:grid-cols-2">
            {programs.map((program, idx) => {
              const accentColor = programAccents[idx % programAccents.length];
              const style = { "--program-card-accent": accentColor } as CSSProperties;

              return (
                <StaggerItem key={program.id} className="h-full">
                  <SpotlightCard className="h-full p-6 transition-transform duration-300 hover:-translate-y-1" style={style} spotlightColor={accentColor + "20"}>
                    <div className="mb-4 flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold text-text-hi" style={{ color: accentColor }}>
                        {program.title}
                      </h3>
                      <span className="text-xs uppercase tracking-[0.3em] text-text-lo/70 bg-white/5 px-2 py-1 rounded">
                        {program.when}
                      </span>
                    </div>
                    <p className="text-sm text-text-lo mb-6">{program.summary}</p>
                    <ul className="space-y-2">
                      {program.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-text-lo/80">
                          <span className="mt-1.5 h-1 w-1 rounded-full bg-white/20 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
        <SectionBottomScrim tint={0.1} />
      </section>

      <section className="relative">
        <div className="container mx-auto px-6">
          <FadeReveal>
            <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300 mb-2">
                  Gatherings
                </p>
                <h2 className="font-serif text-3xl text-text-hi">Events</h2>
              </div>
            </div>
          </FadeReveal>

          <StaggerContainer className="space-y-4">
            {wishEvents.map((event) => (
              <StaggerItem key={event.title}>
                <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
                  <div className="grid md:grid-cols-[200px_1fr] gap-6 items-center">
                    <div className="text-xs uppercase tracking-[0.3em] text-sky-200/80 font-semibold">
                      {event.date}
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-white mb-2">{event.title}</h3>
                      <p className="text-sm text-slate-200 mb-3">{event.summary}</p>
                      {event.cta && (
                        <Link
                          href={event.cta.href}
                          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-amber-300 hover:text-amber-200"
                        >
                          {event.cta.label} <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative">
        <div className="container mx-auto px-6">
          <FadeReveal>
            <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300 mb-2">
                  Library
                </p>
                <h2 className="font-serif text-3xl text-text-hi">Publications</h2>
              </div>
              <Link href="/publications" className="text-sm text-text-lo hover:text-text-hi transition-colors hidden sm:block">
                View all →
              </Link>
            </div>
          </FadeReveal>

          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedPubs.slice(0, 3).map((pub) => (
              <StaggerItem key={pub.year}>
                <PublicationCard pub={pub} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative">
        <div className="container mx-auto px-6">
          <FadeReveal>
            <div className="mb-8 border-b border-white/10 pb-4">
              <h2 className="font-serif text-3xl text-text-hi">Executive & Board</h2>
            </div>
          </FadeReveal>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {org.team.map((member) => (
              <StaggerItem key={member.name} className="h-full">
                <GlassCard className="p-6 h-full hover:bg-white/10 transition-colors">
                  <div className="text-text-hi font-serif text-lg">{member.name}</div>
                  <div className="text-xs uppercase tracking-wider text-sky-300 mb-3">{member.role}</div>
                  {member.bio ? (
                    <p className="text-sm text-text-lo leading-relaxed">{member.bio}</p>
                  ) : null}
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative">
        <div className="container mx-auto px-6">
          <FadeReveal>
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-center">
              <h2 className="font-serif text-3xl text-text-hi mb-4">Get in Touch</h2>
              <p className="text-text-lo mb-6 max-w-xl mx-auto">
                Based in {org.contacts.location}. We're always looking for partners, volunteers, and supporters.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  {org.contacts.phone}
                </span>
                <a href={`mailto:${org.contacts.email}`} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sky-300">
                  {org.contacts.email}
                </a>
              </div>
            </div>
          </FadeReveal>
        </div>
      </section>
    </div>
  );
}
