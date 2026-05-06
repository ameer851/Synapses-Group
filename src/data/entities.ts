export type Entity = {
  key: string;
  name: string;
  handle?: string;
  sector: string;
  desc: string;
  status: { label: string; color: string; dot: string };
  accent: string;
  detail: string;
  metrics: { label: string; value: string }[];
  head: string;
};

export const entities: Entity[] = [
  {
    key: "inwithq",
    name: "InwitHQ Media",
    handle: "@inwithq",
    sector: "Media",
    desc: "Social-first media brand. AI-curated, AI-posted, AI-engaged.",
    status: { label: "Live", color: "#22c55e", dot: "🟢" },
    accent: "var(--accent-pink)",
    detail:
      "A network of vertical-video pages operated end-to-end by SYNA. Sourcing, curation, scheduling and engagement loops run without a human desk.",
    metrics: [
      { label: "Mode", value: "Always-on" },
      { label: "Human editors", value: "0" },
      { label: "Run by", value: "SYNA" },
    ],
    head: "AI Operations Cluster",
  },
  {
    key: "media-clipping",
    name: "Media Clipping Platform",
    sector: "Software · Media",
    desc: "AI-powered video clipping platform. YouTube → viral clips in seconds.",
    status: { label: "Beta", color: "#eab308", dot: "🟡" },
    accent: "var(--accent-purple)",
    detail:
      "Long-form video in, platform-ready clips out. TrendSync scores every clip against live cross-platform trend data before release.",
    metrics: [
      { label: "Stage", value: "Private beta" },
      { label: "Engine", value: "TrendSync" },
      { label: "Surfaces", value: "TikTok · Shorts · X" },
    ],
    head: "Product Cluster",
  },
  {
    key: "software",
    name: "Synapses Software",
    sector: "Software",
    desc: "Niche SaaS products built on validated demand.",
    status: { label: "In development", color: "#3b82f6", dot: "🔵" },
    accent: "var(--accent-cyan)",
    detail:
      "Small, opinionated SaaS shipped against demand we've already measured. No speculative launches; every product begins with a signal.",
    metrics: [
      { label: "Approach", value: "Demand-first" },
      { label: "Surface", value: "B2B SaaS" },
      { label: "Cadence", value: "Quarterly" },
    ],
    head: "Engineering Cluster",
  },
  {
    key: "gaming",
    name: "Synapses Gaming",
    sector: "Gaming",
    desc: "Hyper-casual gaming division. Rapid niche-clone + differentiate.",
    status: { label: "In development", color: "#a855f7", dot: "🟣" },
    accent: "var(--accent-purple)",
    detail:
      "Hyper-casual titles built and shipped on tight loops. Identify a working niche, ship a differentiated cut, scale the winners.",
    metrics: [
      { label: "Format", value: "Hyper-casual" },
      { label: "Loop", value: "Clone → differentiate" },
      { label: "Targets", value: "Mobile" },
    ],
    head: "Studio Cluster",
  },
  {
    key: "syna",
    name: "Synapses AI (SYNA)",
    sector: "Intelligence Layer",
    desc: "Board Observer / CIO — persistent AI intelligence layer for the entire group.",
    status: { label: "Active", color: "#06b6d4", dot: "🌀" },
    accent: "var(--accent-cyan)",
    detail:
      "SYNA is the persistent intelligence layer across every division. Board Observer with continuous context, decision logs and audit trails on every call.",
    metrics: [
      { label: "Role", value: "Board Observer / CIO" },
      { label: "Scope", value: "Group-wide" },
      { label: "Output", value: "Audited decisions" },
    ],
    head: "Autonomous",
  },
];
