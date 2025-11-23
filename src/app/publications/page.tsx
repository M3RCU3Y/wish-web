import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PublicationCard } from "@/components/publication-card";
import { FadeReveal } from "@/components/reveal";
import { publications, org } from "@/data/site";

export default function PublicationsPage() {
  const sorted = [...publications].sort((a, b) => b.year - a.year);

  return (
    <div className="space-y-10">
      <FadeReveal>
        <PageHero
          eyebrow="Publications"
          title="WISH Upon a Star library"
          description="Every PDF below matches the printed magazines delivered to children’s homes. Download, share crediting W.I.S.H., and reach out for print requests."
        />
      </FadeReveal>

      <FadeReveal delay={0.1}>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-text-lo">
          <p>
            Files currently ship from the `/public/pubs/` directory for preview.
            Production deployments should use long-term storage (R2/S3) with analytics-enabled links so we can see which issues travel the farthest.
          </p>
        </div>
      </FadeReveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((pub, idx) => (
          <FadeReveal key={pub.year} delay={idx * 0.1}>
            <PublicationCard pub={pub} />
          </FadeReveal>
        ))}
      </div>

      <FadeReveal delay={0.2}>
        <p className="text-xs uppercase tracking-[0.3em] text-text-lo">
          Need a print run?{" "}
          <Link
            href={`mailto:${org.contacts.email}?subject=Print%20magazines`}
            className="text-brand-cta underline"
          >
            Email the team
          </Link>
          .
        </p>
      </FadeReveal>
    </div>
  );
}

