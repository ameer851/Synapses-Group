export type Subsidiary = {
  slug: "inwitclipps" | "inwithq" | "inwit-ai";
  name: string;
  accent: string;
  accentVar: string;
  icon: string;
  tag: string;
  shortDesc: string;
  longDesc: string;
  bullets: { title: string; body: string }[];
  status: string;
};

export const subsidiaries: Subsidiary[] = [
  {
    slug: "inwitclipps",
    name: "InwitClipps",
    accent: "#7c3aed",
    accentVar: "var(--accent-purple)",
    icon: "▶",
    tag: "Clipping Platform",
    shortDesc:
      "AI-powered short-form video clipping platform. TrendSync matches your content to live trends across TikTok, YouTube and X in real time.",
    longDesc:
      "InwitClipps turns long-form video into a stream of platform-ready clips, scored against live trend data. Creators upload once and get back a sequenced release plan optimised for the moment.",
    bullets: [
      { title: "TrendSync engine", body: "Cross-platform trend ingestion across TikTok, YouTube Shorts and X. Updated continuously, scored per-niche." },
      { title: "Auto-clipping", body: "Identifies hooks, beats and quotable moments. Outputs vertical, captioned, thumbnailed assets ready to publish." },
      { title: "Release planning", body: "Sequences drops to ride trend windows instead of fighting them. Schedules across multiple accounts." },
    ],
    status: "Private beta · Q2 2025",
  },
  {
    slug: "inwithq",
    name: "InwitHQ",
    accent: "#ff4d6d",
    accentVar: "var(--accent-pink)",
    icon: "◉",
    tag: "Media Company",
    shortDesc:
      "AI-run media and publishing company. Curates and distributes viral content across social platforms — a Pubity-scale operation powered by Inwit AI.",
    longDesc:
      "InwitHQ is a media network with no human editors. Inwit AI runs the desk: sourcing from InwitClipps, curating, distributing and learning from performance loops.",
    bullets: [
      { title: "Always-on desk", body: "24/7 publishing across vertical-video platforms. No production team, no shift gaps." },
      { title: "Closed loop with InwitClipps", body: "Performance data flows back to TrendSync, sharpening both products with every post." },
      { title: "Network-of-pages model", body: "Multiple themed accounts, each with its own voice — all operated by a single executive layer." },
    ],
    status: "Building first network · 2025",
  },
  {
    slug: "inwit-ai",
    name: "Inwit AI",
    accent: "#00d4ff",
    accentVar: "var(--accent-cyan)",
    icon: "⬡",
    tag: "AI CEO",
    shortDesc:
      "The autonomous executive layer. Manages both subsidiaries simultaneously, reports to the Synapses board, and is itself a monetisable product.",
    longDesc:
      "Inwit AI is the executive operating system of the group. It plans, schedules, allocates budget, and reports — managing two companies at once and learning from both. The product layer underneath is licensable to other operators.",
    bullets: [
      { title: "Multi-company operator", body: "One agent, two P&Ls. Cross-portfolio context, shared memory, single chain of command." },
      { title: "Board-facing reporting", body: "Weekly briefs, monthly metrics, decision logs. Built to be supervised, not trusted blindly." },
      { title: "Productisable kernel", body: "The autonomous-CEO stack ships externally as a managed product for solo founders and small holdings." },
    ],
    status: "Internal v1 · Productising 2025",
  },
];

export const getSubsidiary = (slug: string) =>
  subsidiaries.find((s) => s.slug === slug);
