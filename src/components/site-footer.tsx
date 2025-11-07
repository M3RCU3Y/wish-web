import Link from "next/link";
import { navigationLinks } from "@/data/navigation";
import { CTA } from "@/components/ui/cta";
import { org, highlightCTA } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="relative mt-[var(--pad-section)] border-t border-white/10 bg-[#070c1f]/90">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-cta/60 to-transparent" />
      <div className="grid w-full gap-10 px-8 py-12 text-sm text-text-lo md:grid-cols-3">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
            Stay curious
          </p>
          <p className="font-serif text-2xl text-text-hi">{org.tagline}</p>
          <p>{org.mission}</p>
          <CTA href={highlightCTA.donate.href} className="px-4 py-2 text-sm">
            {highlightCTA.donate.label}
          </CTA>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-text-hi">
            Navigation
          </p>
          <ul className="mt-4 space-y-2">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-text-lo transition hover:text-text-hi"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-text-hi">
            Contact
          </p>
          <p>Phone: {org.contacts.phone}</p>
          <p>
            Email:{" "}
            <Link
              href={`mailto:${org.contacts.email}`}
              className="text-text-hi underline decoration-dotted"
            >
              {org.contacts.email}
            </Link>
          </p>
          <p>{org.contacts.location}</p>
          <div className="flex flex-wrap gap-3">
            {org.contacts.socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                className="rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-wide text-text-hi transition hover:bg-white/10"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 px-6 py-4 text-center text-xs text-text-lo">
        © {new Date().getFullYear()} {org.name}. All rights reserved.
      </div>
    </footer>
  );
}
