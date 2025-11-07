import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { org } from "@/data/site";

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <PageHero
        eyebrow="Contact"
        title="Reach the W.I.S.H. team"
        description="We respond via email or phone while staying intentionally low-profile online. Reach out to coordinate deliveries, volunteer, or host an event."
      />

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6 text-text-lo">
          <h2 className="font-serif text-2xl text-text-hi">Direct contacts</h2>
          <p>Phone: {org.contacts.phone}</p>
          <p>
            Email:{" "}
            <Link
              href={`mailto:${org.contacts.email}`}
              className="text-brand-cta underline decoration-dotted"
            >
              {org.contacts.email}
            </Link>
          </p>
          <p>{org.contacts.location}</p>
        </article>
        <article className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="font-serif text-2xl text-text-hi">Quick inquiry</h2>
          <form className="space-y-4 text-text-lo">
            <label className="block text-sm">
              Name
              <input
                className="mt-1 w-full rounded-md border border-white/20 bg-slate-950/40 px-3 py-2 text-text-hi"
                placeholder="Your name"
                type="text"
              />
            </label>
            <label className="block text-sm">
              Email
              <input
                className="mt-1 w-full rounded-md border border-white/20 bg-slate-950/40 px-3 py-2 text-text-hi"
                placeholder="name@email.com"
                type="email"
              />
            </label>
            <label className="block text-sm">
              Message
              <textarea
                className="mt-1 w-full rounded-md border border-white/20 bg-slate-950/40 px-3 py-2 text-text-hi"
                rows={4}
                placeholder="Tell us how you’d like to collaborate."
              />
            </label>
            <p className="text-xs text-text-lo">
              TODO copy — connect this placeholder form before launch.
            </p>
            {/* TODO: Wire this form to Formspree, Resend, or Sanity Forms. */}
          </form>
        </article>
      </section>
    </div>
  );
}
