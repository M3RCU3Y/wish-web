export type TeamMember = {
  role: string;
  name: string;
  bio?: string;
};

export const org = {
  name: "W.I.S.H. – Women In Science for Hope",
  short: "WISH",
  founded: "December 2020 (registered nonprofit 2021)",
  tagline:
    "A volunteer-run Trinidad & Tobago charity sharing science, books, and practical support with children’s homes.",
  mission:
    "We support children’s homes in Trinidad & Tobago with seasonal giving (toys, groceries, toiletries), science learning, and our annual WISH Upon a Star magazine. The foundation grows largely by word-of-mouth and volunteer effort.",
  notes: [
    "Annual print magazine WISH Upon a Star distributed to kids in homes.",
    "Offline by design so far; relies on volunteers and supporters spreading the word.",
    "Recipient of a UWI Principal’s Research Award for most impactful community project.",
    "2023 park refurbishment at Swaha Vishok Bhavan Children’s Home.",
    "IAU/OAO support (posters, book, astronomy kit); NA-ROAD / Women & Girls in Astronomy binoculars for homes.",
    "2025: Inaugural fundraiser (Nov 14) with a public lecture + museum tour; supported hurricane Beryl relief to Grenada.",
  ],
  contacts: {
    phone: "+1 (868) 684-9823",
    email: "WISH.Foundation@hotmail.com",
    location: "Trinidad & Tobago",
    socials: [
      { label: "Instagram", href: "https://instagram.com/…" },
      { label: "Facebook", href: "https://facebook.com/…" },
    ],
  },
  team: [
    {
      role: "CEO & Founder",
      name: "Prof. Shirin Haque",
      bio: "Astronomer; Anthony N. Sabga Laureate for Excellence in Science & Technology (2020).",
    },
    { role: "Treasurer", name: "Mr. Deva Sharma", bio: "Architect." },
    { role: "Secretary", name: "Ms. Darnelle Hamilton", bio: "Science teacher." },
    {
      role: "Public Relations Officer",
      name: "Ms. Bhanumattee Ramdhanie",
      bio: "Analytical chemist / research student.",
    },
  ],
};

export type Program = {
  id: string;
  title: string;
  when: string;
  summary: string;
  bullets: string[];
};

export const programs: Program[] = [
  {
    id: "december-gifts",
    title: "Season of Joy – Gifts for Children",
    when: "December",
    summary:
      "Holiday gift drive delivering toys, books and joy to children in partner homes.",
    bullets: [
      "Community-supported donation drive",
      "Each child receives a gift",
      "Coordinated with home administrators",
    ],
  },
  {
    id: "april-groceries",
    title: "Groceries and Toiletries Drive",
    when: "March–April",
    summary:
      "Essential groceries and toiletries distributed to homes between the bigger giving seasons.",
    bullets: [
      "Partner and public donations combined",
      "Distribution scales beyond core homes when collections exceed targets",
    ],
  },
  {
    id: "july-magazine",
    title: "WISH Upon a Star – Annual Magazine",
    when: "July",
    summary:
      "Print magazine for kids in the homes: articles, puzzles, posters, local role models.",
    bullets: [
      "Created by volunteers and contributors",
      "Hard copies delivered to each child",
    ],
  },
  {
    id: "september-science",
    title: "Science Month Kits & Nights",
    when: "September",
    summary:
      "Science month deliveries and sky sessions at the homes (books, posters, planispheres; binoculars introduced with WGAP support).",
    bullets: [
      "IAU/OAO poster/book/kit support (2022)",
      "NA-ROAD / Women & Girls in Astronomy binoculars for homes (2023)",
      "Presentations on the Moon and night sky",
    ],
  },
  {
    id: "special-projects",
    title: "Special Projects & Emergency Support",
    when: "As needed",
    summary:
      "One-off upgrades and responses when asked: park renovation at Swaha Vishok Bhavan Children’s Home; support for families and regional crises (e.g., hurricane Beryl in 2024).",
    bullets: ["Volunteer labour & donated materials", "Targeted relief on request"],
  },
];

export type Publication = {
  year: number;
  title: string;
  theme: string[];
  blurb: string;
  href: string;
  cover: string;
  size: string;
};

export const publications: Publication[] = [
  {
    year: 2025,
    title: "WISH Upon a Star — Exercise & Mental Health",
    theme: ["Wellness", "Astronomy & Awe", "Interview", "Crossword"],
    blurb:
      "Fifth-anniversary issue focused on physical & mental health; features “Astronomy—Band-Aid for the Soul,” an interview with Gabrielle Motilal, pets & nature wellbeing, bilingual language feature, and a feel-good chemicals crossword.",
    href: "/pubs/wish-2025.pdf",
    cover: "/pubs/wish-2025-cover.svg",
    size: "PDF",
  },
  {
    year: 2024,
    title: "WISH Upon a Star — Science of Nature",
    theme: ["Nature", "Climate", "Space Safety", "Poems & Puzzles"],
    blurb:
      "Fourth issue themed on Nature: backyard butterflies, climate change primer, space debris & satellite safety, an interview with Asenath Mc Ewen, poems and puzzles from kids.",
    href: "/pubs/wish-2024.pdf",
    cover: "/pubs/wish-2024-cover.svg",
    size: "PDF",
  },
  {
    year: 2023,
    title: "WISH Upon a Star — The Future",
    theme: ["Careers", "Data Science", "ChatGPT", "Park Renovation"],
    blurb:
      "Third issue themed on the Future: data science for kids, what ChatGPT is, jobs of tomorrow, and a feature on refurbishing the Swaha Vishok Bhavan play park.",
    href: "/pubs/wish-2023.pdf",
    cover: "/pubs/wish-2023-cover.svg",
    size: "PDF",
  },
];

export const highlightCTA = {
  donate: { label: "Donate", href: "/get-involved#donate" },
  volunteer: { label: "Volunteer", href: "/get-involved#volunteer" },
  publications: { label: "Browse the library", href: "/publications" },
};
