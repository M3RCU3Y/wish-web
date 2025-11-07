import "./globals.css";
import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AuroraBG } from "@/components/aurora-bg";
import { ViewportFX } from "@/components/viewport-fx";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export const metadata: Metadata = {
  title: "WISH · Women In Science, Hope",
  description:
    "WISH brings science kits, magazines, and astronomy outreach to children across Trinidad & Tobago.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${fraunces.variable} antialiased bg-canvas text-text-hi`}
      >
        <AuroraBG />
        <div aria-hidden className="aurora-bottom-blur" />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 w-full pb-[var(--pad-section)]">
            {children}
          </main>
          <SiteFooter />
        </div>
        <ViewportFX />
      </body>
    </html>
  );
}
