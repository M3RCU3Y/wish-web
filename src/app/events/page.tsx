import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { wishEvents } from "@/data/events";

export default function EventsPage() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Events"
        title="Moments that turn curiosity into community."
        description="We host annual anchor events plus rolling astronomy pop-ups. Sponsors and volunteers are welcome year-round."
      />

      <div className="space-y-5">
        {wishEvents.map((event) => (
          <article
            key={event.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-sky-200">
              {event.date}
            </p>
            <h3 className="font-serif text-2xl text-white">{event.title}</h3>
            <p className="text-sm text-slate-200">{event.summary}</p>
            {event.cta && (
              <Link
                href={event.cta.href}
                className="mt-4 inline-flex items-center text-sm font-semibold text-amber-200 underline decoration-dotted"
              >
                {event.cta.label} →
              </Link>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

