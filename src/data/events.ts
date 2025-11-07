export type WishEvent = {
  title: string;
  date: string;
  summary: string;
  cta?: { label: string; href: string };
};

export const wishEvents: WishEvent[] = [
  {
    title: "International Day of Women & Girls in Science Competition",
    date: "11 February · annual",
    summary:
      "Nationwide art and storytelling challenge celebrating girls who dream in STEM. Winners are published in WISH Upon a Star.",
    cta: { label: "View brief", href: "/stories" },
  },
  {
    title: "Inaugural Fundraiser & Gala",
    date: "14 November 2025",
    summary:
      "Fifth anniversary celebration raising funds for Science Month kits and the 2026 “WISH Upon a Star” issue.",
    cta: { label: "Sponsor a table", href: "/get-involved#partner" },
  },
  {
    title: "Astronomy in the Courtyard Nights",
    date: "Rolling schedule",
    summary:
      "Binocular and telescope pop-ups with Dr. Dingolay bringing the Moon, planets, and star stories to community homes.",
  },
];

