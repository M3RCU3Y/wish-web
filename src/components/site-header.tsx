import Link from "next/link";
import { navigationLinks } from "@/data/navigation";
import { CTA, Ghost } from "@/components/ui/cta";
import { org, highlightCTA } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-gradient-to-b from-canvas/95 via-canvas/80 to-transparent backdrop-blur-2xl">
      <div className="w-full px-6 py-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-3">
          <Link href="/" className="text-xs font-semibold tracking-[0.4em] text-sky-300">
            {org.short} · WOMEN IN SCIENCE FOR HOPE
          </Link>
          <div className="flex w-full flex-wrap items-center gap-3">
            <nav
              aria-label="Primary navigation"
              className="hide-scrollbar relative mr-auto inline-flex min-w-0 flex-nowrap gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-1 text-sm text-text-lo shadow-[0_25px_45px_rgba(2,6,23,0.45)]"
            >
              <span aria-hidden className="constellation-ambient" />
              <div className="relative flex flex-wrap gap-1">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full px-4 py-1.5 font-medium text-text-lo transition-colors duration-200 hover:bg-white/15 hover:text-text-hi focus-visible:bg-white/20 focus-visible:text-text-hi"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>
            <div className="ml-auto flex flex-shrink-0 items-center gap-2">
              <Ghost
                href={highlightCTA.volunteer.href}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em]"
              >
                {highlightCTA.volunteer.label}
              </Ghost>
              <CTA
                href={highlightCTA.donate.href}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em]"
              >
                {highlightCTA.donate.label}
              </CTA>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
