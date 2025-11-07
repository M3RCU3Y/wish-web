import Link from "next/link";
import { PageHero } from "@/components/page-hero";

const pathways = [
  {
    id: "donate",
    title: "Donate",
    copy:
      "Fuel magazine printing, science kits, astronomy nights, and the 2025 fundraiser goal.",
    suggestions: [
      "TTD $250 sponsors a science kit",
      "TTD $1,000 funds an astronomy night",
      "Custom pledges + corporate matching",
    ],
    action: {
      label: "Pledge via email",
      href: "mailto:WISH.Foundation@hotmail.com?subject=Donation%20pledge",
    },
  },
  {
    id: "volunteer",
    title: "Volunteer",
    copy:
      "Mentor a session, prep kits, translate copy, or help document events for the magazines.",
    suggestions: [
      "STEM mentors & facilitators",
      "Photographers + social storytellers",
      "Logistics + procurement helpers",
    ],
    action: {
      label: "Join the roster",
      href: "mailto:WISH.Foundation@hotmail.com?subject=Volunteer%20interest",
    },
  },
  {
    id: "partner",
    title: "Partner",
    copy:
      "Bring your company, foundation, or school onboard. Sponsor a home, fund the library, or co-host events.",
    suggestions: [
      "Impact reporting & recognition",
      "Employee volunteer days",
      "Co-branded kit drops",
    ],
    action: { label: "Request a deck", href: "/contact" },
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Get involved"
        title="Every contribution keeps curiosity alive."
        description="Choose the path that matches your energy — give, volunteer, or partner. We’ll follow up within 48 hours with next steps."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {pathways.map((path) => (
          <article
            key={path.id}
            id={path.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-amber-200">
              {path.title}
            </p>
            <p className="text-sm text-slate-200">{path.copy}</p>
            <ul className="mt-4 space-y-1 text-sm text-slate-300">
              {path.suggestions.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <Link
              href={path.action.href}
              className="mt-4 inline-flex items-center rounded-full bg-amber-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
            >
              {path.action.label}
            </Link>
          </article>
        ))}
      </div>

      <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 text-sm text-slate-200">
        <p>
          Wishlist: telescopes & binoculars, large-format printers, bilingual
          editors, bus transport stipends, art supplies for Ramajay creative
          sessions.
        </p>
        <p className="mt-2">
          Donations will be processed via WiPay TT or Stripe (pending confirmation). Let us know your preference in your email.
        </p>
      </section>
    </div>
  );
}

