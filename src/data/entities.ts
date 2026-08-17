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
    sector: "Capital Engine",
    desc: "Disciplined capital allocation across public markets, private markets, acquisitions, and the Group.",
    status: { label: "Core", color: "#22c55e", dot: "●" },
    accent: "var(--accent-cyan)",
    detail: "Preserve capital, compound where the risk-adjusted return justifies it, acquire when ownership creates durable value, and allocate globally.",
    metrics: [{ label: "Mandate", value: "Allocate + Compound" }, { label: "Scope", value: "Global" }, { label: "Doctrine", value: "Preserve → Compound → Acquire" }],
    head: "Capital",
  },
  {
    key: "technology",
    name: "Synapses Technology",
    sector: "Technology Engine",
    desc: "The operating platform for intelligence, Vault, embodiment, interfaces, and future technology businesses.",
    status: { label: "Core", color: "#3b82f6", dot: "●" },
    accent: "var(--accent-cyan)",
    detail: "A portfolio of technology capabilities designed to preserve institutional knowledge, build intelligent systems, and create new interfaces between people and machines.",
    metrics: [{ label: "Domains", value: "AI · Vault · Robotics · Interfaces" }, { label: "Approach", value: "Platform + Portfolio" }, { label: "Principle", value: "Human sovereignty" }],
    head: "Technology",
  },
  {
    key: "vault",
    name: "Synapses Vault",
    sector: "Continuity Infrastructure",
    desc: "Authenticated memory, identity, provenance, succession, and inheritance built for the long term.",
    status: { label: "Frontier", color: "#06b6d4", dot: "●" },
    accent: "var(--accent-cyan)",
    detail: "Vault is designed as inheritance-grade trust infrastructure. Core records and provenance remain protected while surfaces such as models, avatars, and integrations can evolve or be revoked.",
    metrics: [{ label: "Guarantees", value: "5" }, { label: "Key model", value: "3-of-5 reference" }, { label: "Data wall", value: "Capital separated" }],
    head: "Continuity Infrastructure",
  },
  {
    key: "intelligence",
    name: "Synapses Intelligence",
    handle: "Hermes / SYNA",
    sector: "Intelligence Layer",
    desc: "Group-wide AI infrastructure for research, planning, software, memory, monitoring, and delegated execution.",
    status: { label: "Active", color: "#a855f7", dot: "●" },
    accent: "var(--accent-purple)",
    detail: "Hermes is the flagship internal intelligence architecture. AI can act within explicit delegated authority, but does not possess inherent corporate voting rights, ownership, or constitutional authority.",
    metrics: [{ label: "Role", value: "Group Intelligence" }, { label: "Scope", value: "Group-wide" }, { label: "Authority", value: "Delegated" }],
    head: "Intelligence",
  },
  {
    key: "media",
    name: "Synapses Media",
    sector: "Narrative Layer",
    desc: "Film, journalism, documentaries, podcasts, education, games, and cultural storytelling around the ideas shaping the future.",
    status: { label: "Strategic", color: "#f59e0b", dot: "●" },
    accent: "var(--accent-pink)",
    detail: "Media communicates Synapses' work and worldview while maintaining clear editorial and commercial boundaries. Influence is built through credibility, not fabrication or covert manipulation.",
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
    detail: "Bio is intentionally insulated from ordinary revenue targets. Frontier research remains subject to scientific, ethical, biosafety, and regulatory governance.",
    metrics: [{ label: "Horizon", value: "Long-term" }, { label: "Mode", value: "Research" }, { label: "Governance", value: "Scientific + Regulatory" }],
    head: "Research",
  },
];
