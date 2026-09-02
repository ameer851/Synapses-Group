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
    key: "capital",
    name: "Synapses Capital",
    sector: "Capital Allocation",
    desc: "The Group's capital engine: public markets, private markets, acquisitions, and disciplined internal allocation.",
    status: { label: "Core", color: "#22c55e", dot: "●" },
    accent: "var(--accent-cyan)",
    detail: "Capital exists to preserve purchasing power, compound intelligently, finance the Group, and acquire durable businesses when ownership creates superior long-term value.",
    metrics: [{ label: "Mandate", value: "Allocate + Compound" }, { label: "Scope", value: "Global" }, { label: "Doctrine", value: "Build → Cash flow → Acquire → Compound" }],
    head: "Capital",
  },
  {
    key: "technology",
    name: "Synapses Technology",
    sector: "Technology",
    desc: "A technology portfolio building intelligent systems, software, interfaces, and infrastructure businesses.",
    status: { label: "Core", color: "#3b82f6", dot: "●" },
    accent: "var(--accent-cyan)",
    detail: "Technology is a portfolio and operating capability spanning AI, software, interfaces, robotics, and other technologies that can become durable companies.",
    metrics: [{ label: "Domains", value: "AI · Software · Robotics · Interfaces" }, { label: "Approach", value: "Build + Acquire" }, { label: "Principle", value: "Useful technology" }],
    head: "Technology",
  },
  {
    key: "energy",
    name: "Synapses Energy",
    sector: "Energy & Infrastructure",
    desc: "Power generation, storage, grid infrastructure, and energy systems that support the next industrial cycle.",
    status: { label: "Strategic", color: "#f59e0b", dot: "●" },
    accent: "var(--accent-cyan)",
    detail: "Energy is a first-class industrial pillar. The long-term opportunity spans generation, storage, grid infrastructure, data-center power, and advanced energy systems.",
    metrics: [{ label: "Focus", value: "Generation + Storage + Grid" }, { label: "Role", value: "Strategic Infrastructure" }, { label: "Horizon", value: "Long-term" }],
    head: "Energy",
  },
  {
    key: "industries",
    name: "Synapses Industries",
    sector: "Industrial & Government",
    desc: "Industrial businesses and critical infrastructure, beginning with defense and government contracting.",
    status: { label: "Building", color: "#ef4444", dot: "●" },
    accent: "var(--accent-pink)",
    detail: "Industries is the Group's physical-world execution arm. The initial wedge is lawful defense and critical-infrastructure work, with a path from subcontracting and small government contracts toward larger programs and acquisitions.",
    metrics: [{ label: "Initial Wedge", value: "Defense + GovCon" }, { label: "Model", value: "Build + Acquire" }, { label: "Standard", value: "Compliance + Delivery" }],
    head: "Industries",
  },
  {
    key: "media",
    name: "Synapses Media",
    sector: "Media & Culture",
    desc: "Film, journalism, documentaries, podcasts, education, games, and cultural storytelling around the ideas shaping the future.",
    status: { label: "Strategic", color: "#f59e0b", dot: "●" },
    accent: "var(--accent-pink)",
    detail: "Media is a communications and distribution capability—not the definition of the Group. Influence is built through credibility, strong storytelling, and clear editorial and commercial boundaries.",
    metrics: [{ label: "Role", value: "Narrative + Distribution" }, { label: "Formats", value: "Film · Audio · Writing · Interactive" }, { label: "Standard", value: "Credibility" }],
    head: "Media",
  },
  {
    key: "bio",
    name: "Synapses Bio",
    sector: "Frontier Research",
    desc: "A long-horizon research vehicle exploring biology, longevity, regenerative systems, and future human technologies.",
    status: { label: "Research", color: "#ec4899", dot: "●" },
    accent: "var(--accent-pink)",
    detail: "Bio is intentionally long-horizon and subject to scientific, ethical, biosafety, and regulatory governance. It is a research vehicle, not a promise of human immortality.",
    metrics: [{ label: "Horizon", value: "Long-term" }, { label: "Mode", value: "Research" }, { label: "Governance", value: "Scientific + Regulatory" }],
    head: "Research",
  },
  {
    key: "continuity",
    name: "Synapses Continuity",
    sector: "Continuity Company",
    desc: "The dedicated company responsible for building systems that preserve, extend, connect, and carry human identity, memory, and capability across generations.",
    status: { label: "Frontier", color: "#06b6d4", dot: "●" },
    accent: "var(--accent-cyan)",
    detail: "Continuity is a company within Synapses Group, not the Group's corporate category. Its flagship infrastructure is Synapses Vault, focused on authenticated memory, identity, provenance, succession, and inheritance.",
    metrics: [{ label: "Mission", value: "Preserve + Extend + Inherit" }, { label: "Flagship", value: "Synapses Vault" }, { label: "Focus", value: "Identity + Memory + Inheritance" }],
    head: "Continuity",
  },
  {
    key: "intelligence",
    name: "Synapses Intelligence",
    handle: "Hermes / SYNA",
    sector: "Internal Intelligence",
    desc: "Group-wide AI infrastructure for research, planning, software, memory, monitoring, and delegated execution.",
    status: { label: "Internal", color: "#a855f7", dot: "●" },
    accent: "var(--accent-purple)",
    detail: "Hermes is internal intelligence infrastructure. It can operate within explicit delegated authority, but it is not a shareholder, director, officer, board member, or source of constitutional authority.",
    metrics: [{ label: "Role", value: "Group Intelligence" }, { label: "Scope", value: "Group-wide" }, { label: "Authority", value: "Delegated" }],
    head: "Intelligence",
  },
];
