import Link from "next/link";
import { navigationLinks } from "@/data/navigation";
import { CTA } from "@/components/ui/cta";
import { org, highlightCTA } from "@/data/site";

export function SiteFooter() {
  const navigationColumns = [
    navigationLinks.slice(0, Math.ceil(navigationLinks.length / 2)),
    navigationLinks.slice(Math.ceil(navigationLinks.length / 2)),
  ];
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-[var(--pad-section)] overflow-hidden border-t border-white/10 bg-slate-950/90 text-sm text-text-lo backdrop-blur-md">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(78,150,255,0.18),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(253,230,138,0.12),_transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute inset-y-1/4 left-1/2 h-[160%] w-[90%] -translate-x-1/2 animate-[spin_80s_linear_infinite] rounded-full bg-gradient-to-tr from-brand-cta/15 via-transparent to-sky-500/15 blur-3xl" />
      </div>

      <div className="relative flex w-full flex-col gap-14 px-6 py-16 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="flex flex-col gap-6 text-left">
            <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.45em] text-sky-200">
              <span className="h-px w-10 bg-sky-400/60" />
              Stay curious
            </div>
            <p className="font-serif text-4xl leading-tight text-text-hi">
              Science, stories, and supply drives that keep curiosity alive.
            </p>
            <p className="text-base text-text-lo/85">
              Seasonal care kits, traveling science pop-ups, and our WISH Upon a
              Star magazine keep children&apos;s homes stocked and inspired.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTA
                href={highlightCTA.donate.href}
                className="group px-6 py-2 text-sm shadow-[0_0_25px_rgba(252,211,77,0.18)] transition duration-300 hover:-translate-y-0.5"
              >
                <span className="flex items-center gap-2">
                  {highlightCTA.donate.label}
                  <span className="text-lg leading-none transition group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </CTA>
              <a
                href={`mailto:${org.contacts.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-[0.25em] text-text-hi transition hover:border-white/50 hover:bg-white/5"
              >
                Contact
                <span aria-hidden="true" className="text-base leading-none">
                  ↗
                </span>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-200">
              Navigation
            </p>
            <div className="flex gap-10 text-base text-text-lo">
              {navigationColumns.map((column, columnIndex) => (
                <ul key={columnIndex} className="space-y-2">
                  {column.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-3 text-text-lo transition hover:text-text-hi"
                      >
                        <span className="h-px w-4 bg-white/10 transition-all duration-300 group-hover:w-6 group-hover:bg-white/60" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-200">
              Contact
            </p>
            <div className="space-y-4 text-base text-text-hi">
              <div className="flex flex-col gap-1">
                <span className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Phone
                </span>
                <a
                  href={`tel:${org.contacts.phone}`}
                  className="text-lg text-text-hi transition hover:text-white"
                >
                  {org.contacts.phone}
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm uppercase tracking-[0.3em] text-slate-400">
                  Email
                </span>
                <a
                  href={`mailto:${org.contacts.email}`}
                  className="inline-flex items-center gap-2 text-text-hi underline decoration-dotted decoration-white/40 underline-offset-4 transition hover:decoration-white"
                >
                  {org.contacts.email}
                </a>
              </div>
              <p className="text-sm text-text-lo">{org.contacts.location}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                {org.contacts.socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-text-hi transition hover:border-white/60 hover:bg-white/10"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60 transition group-hover:bg-white" />
                    {social.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.4em] text-text-lo/80 sm:flex-row sm:items-center sm:justify-between">
          <p>WISH • Women In Science, Hope</p>
          <div className="flex flex-col gap-2 text-[0.65rem] normal-case tracking-[0.2em] text-text-lo/70 sm:text-right">
            <p>Women In Science, Hope — uplifting curiosity across Trinidad & Tobago.</p>
            <p>© {year} {org.short ?? org.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
