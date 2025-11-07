import { PageHero } from "@/components/page-hero";
import { GlassCard } from "@/components/ui/glass-card";
import { org } from "@/data/site";

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <PageHero
        eyebrow="About W.I.S.H."
        title={org.name}
        description={org.tagline}
      />

      <section className="grid gap-6 lg:grid-cols-2">
        <GlassCard className="p-6">
          <h2 className="font-serif text-2xl text-text-hi">Mission</h2>
          <p className="mt-3 text-sm text-text-lo">{org.mission}</p>
        </GlassCard>
        <GlassCard className="p-6">
          <h2 className="font-serif text-2xl text-text-hi">Notes & milestones</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-text-lo">
            {org.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </GlassCard>
      </section>

      <section>
        <h2 className="font-serif text-3xl text-text-hi">Executive & Board</h2>
        <ul className="mt-4 grid gap-4 sm:grid-cols-2">
          {org.team.map((member) => (
            <li key={member.name}>
              <GlassCard className="p-6">
                <div className="text-text-hi font-semibold">{member.name}</div>
                <div className="text-text-lo">{member.role}</div>
                {member.bio ? (
                  <p className="mt-2 text-sm text-text-lo">{member.bio}</p>
                ) : null}
              </GlassCard>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="font-serif text-3xl text-text-hi">Contact</h2>
        <p className="text-text-lo">
          Phone: {org.contacts.phone} · Email: {org.contacts.email} · Based in{" "}
          {org.contacts.location}
        </p>
      </section>
    </div>
  );
}
