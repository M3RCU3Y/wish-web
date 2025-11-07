import Link from "next/link";
import { navigationLinks } from "@/data/navigation";
import { CTA, Ghost } from "@/components/ui/cta";
import { org, highlightCTA } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-gradient-to-b from-canvas/95 via-canvas/80 to-transparent backdrop-blur-xl">
      <div className="w-full px-8 py-5">
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/" className="flex min-w-[220px] flex-1 flex-col">
            <span className="text-xs font-semibold tracking-[0.4em] text-sky-300">
              {org.short} · WOMEN IN SCIENCE FOR HOPE
            </span>
            <span className="font-serif text-xl text-text-hi">{org.tagline}</span>
          </Link>
          <div className="ml-auto flex flex-wrap items-center gap-2">
            <Ghost
              href={highlightCTA.volunteer.href}
              className="px-4 py-2 text-xs uppercase tracking-[0.2em]"
            >
              {highlightCTA.volunteer.label}
            </Ghost>
            <CTA
              href={highlightCTA.donate.href}
              className="px-5 py-2 text-xs uppercase tracking-[0.2em]"
            >
              {highlightCTA.donate.label}
            </CTA>
          </div>
        </div>
        <nav className="mt-4 flex gap-2 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-2 text-sm text-text-lo">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-1.5 font-medium text-text-lo transition hover:bg-white/10 hover:text-text-hi"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
