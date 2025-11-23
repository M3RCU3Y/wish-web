"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { PublicationCard } from "@/components/publication-card";
import { FadeReveal } from "@/components/reveal";
import { StaggerContainer, StaggerItem } from "@/components/stagger";
import { SectionBottomScrim } from "@/components/section-scrim";
import { StarfieldConstellation } from "@/components/starfield";
import { MissionSection } from "@/components/about/mission-section";
import { org, programs, publications } from "@/data/site";
import { wishEvents } from "@/data/events";
import type { CSSProperties } from "react";

const programAccents = ["#5dd1ff", "#8a7bfd", "#40c9b6", "#f4a2ff", "#f7b84a"];

export default function AboutPage() {
  const sortedPubs = [...publications].sort((a, b) => b.year - a.year);

  return (
    <div className="pb-[var(--pad-section)]">
      {/* Premium Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <StarfieldConstellation
          className="opacity-60"
          quality="low"
          density={0.065}
          fps={28}
          constellations={false}
          shootingStars={false}
          aurora={false}
          waveAmp={1.1}
          twinkleAmp={0.8}
          glow={0.85}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeReveal>
            <p className="text-sm font-bold uppercase tracking-[0.4em] text-sky-300 mb-6">
              About W.I.S.H.
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 drop-shadow-2xl">
              {org.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {org.tagline}
            </p>
          </FadeReveal>
        </div>
      </section>

      {/* Mission & Timeline Section */}
      <MissionSection />

      <section className="relative py-12">
        <div className="container mx-auto px-6">
          <FadeReveal>
            <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300 mb-2">
                  Our Work
                </p>
                <h2 className="font-serif text-4xl text-text-hi">Programs</h2>
              </div>
            </div>
          </FadeReveal>

          <StaggerContainer className="grid gap-8 md:grid-cols-2">
            {programs.map((program, idx) => {
              const accentColor = programAccents[idx % programAccents.length];
              const style = { "--program-card-accent": accentColor } as CSSProperties;

              return (
                <StaggerItem key={program.id} className="h-full">
                  <SpotlightCard className="h-full p-8 transition-transform duration-500 hover:-translate-y-2" style={style} spotlightColor={accentColor + "20"}>
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-serif text-text-hi" style={{ color: accentColor }}>
                        {program.title}
                      </h3>
                      <span className="text-xs uppercase tracking-[0.3em] text-text-lo/70 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                        {program.when}
                      </span>
                    </div>
                    <p className="text-base text-text-lo mb-8 leading-relaxed">{program.summary}</p>
                    <ul className="space-y-3">
                      {program.bullets.map((bullet, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start gap-3 text-sm text-text-lo/90 cursor-default"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.span
                            className="mt-2 h-1.5 w-1.5 rounded-full bg-white/20 shrink-0"
                            whileHover={{ scale: 1.5, backgroundColor: accentColor }}
                            transition={{ duration: 0.2 }}
                          />
                          <motion.span
                            whileHover={{ color: accentColor }}
                            transition={{ duration: 0.2 }}
                          >
                            {bullet}
                          </motion.span>
                        </motion.li>
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

      <section className="relative py-12">
        <div className="container mx-auto px-6">
          <FadeReveal>
            <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300 mb-2">
                  Gatherings
                </p>
                <h2 className="font-serif text-4xl text-text-hi">Events</h2>
              </div>
            </div>
          </FadeReveal>

          <StaggerContainer className="space-y-6">
            {wishEvents.map((event) => (
              <StaggerItem key={event.title}>
                <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:bg-white/10 hover:border-white/20">
                  <div className="grid md:grid-cols-[200px_1fr] gap-8 items-center">
                    <div className="text-sm uppercase tracking-[0.3em] text-sky-200/80 font-bold">
                      {event.date}
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl text-white mb-3">{event.title}</h3>
                      <p className="text-base text-slate-200 mb-4 leading-relaxed">{event.summary}</p>
                      {event.cta && (
                        <Link
                          href={event.cta.href}
                          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-amber-300 hover:text-amber-200"
                        >
                          {event.cta.label} <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
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

      <section className="relative py-12">
        <div className="container mx-auto px-6">
          <FadeReveal>
            <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300 mb-2">
                  Library
                </p>
                <h2 className="font-serif text-4xl text-text-hi">Publications</h2>
              </div>
              <Link href="/publications" className="text-sm text-text-lo hover:text-text-hi transition-colors hidden sm:block">
                View all →
              </Link>
            </div>
          </FadeReveal>

          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sortedPubs.slice(0, 3).map((pub) => (
              <StaggerItem key={pub.year}>
                <PublicationCard pub={pub} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative py-12">
        <div className="container mx-auto px-6">
          <FadeReveal>
            <div className="mb-12 border-b border-white/10 pb-6">
              <h2 className="font-serif text-4xl text-text-hi">Executive & Board</h2>
            </div>
          </FadeReveal>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2">
            {org.team.map((member) => (
              <StaggerItem key={member.name} className="h-full">
                <GlassCard className="p-8 h-full hover:bg-white/10 transition-colors border-white/5 hover:border-white/20">
                  <div className="text-text-hi font-serif text-2xl mb-1">{member.name}</div>
                  <div className="text-xs uppercase tracking-wider text-sky-300 mb-4">{member.role}</div>
                  {member.bio ? (
                    <p className="text-sm text-text-lo leading-relaxed">{member.bio}</p>
                  ) : null}
                </GlassCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative py-12">
        <div className="container mx-auto px-6">
          <FadeReveal>
            <div className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-12 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.1),transparent_50%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <h2 className="font-serif text-4xl md:text-5xl text-text-hi mb-6">Get in Touch</h2>
                <p className="text-lg text-text-lo mb-8 max-w-2xl mx-auto leading-relaxed">
                  Based in {org.contacts.location}. We're always looking for partners, volunteers, and supporters to join our mission.
                </p>
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <span className="px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                    {org.contacts.phone}
                  </span>
                  <a href={`mailto:${org.contacts.email}`} className="px-6 py-3 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 hover:bg-sky-500/20 hover:scale-105 transition-all duration-300">
                    {org.contacts.email}
                  </a>
                </div>
              </div>
            </div>
          </FadeReveal>
        </div>
      </section>
    </div>
  );
}
