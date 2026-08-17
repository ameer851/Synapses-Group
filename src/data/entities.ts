export type Entity = {
  key: string;
  name: string;
  level: string;
  purpose: string;
  status: { label: string; color: string };
  accent: string;
  detail: string;
  metrics: { label: string; value: string }[];
};

export const entities: Entity[] = [
  {
    key: "capital",
    name: "Synapses Capital",
    level: "Pillar",
    purpose: "Public markets, private markets, acquisitions, internal capital allocation.",
    status: { label: "Core", color: "#22c55e" },
    accent: "var(--accent-cyan)",
    detail:
      "The Group's capital allocation and compounding engine. Every deployment carries an identifiable expected return, strategic rationale, or explicitly approved research purpose. Regulated activity only occurs behind the appropriate entities, registrations, and professional review.",
    metrics: [
      { label: "Mandate", value: "Compounding" },
      { label: "Discipline", value: "Underwrite first" },
      { label: "Governing doc", value: "Capital Charter" },
    ],
  },
  {
    key: "technology",
    name: "Synapses Technology",
    level: "Pillar",
    purpose: "The technology operating platform through which the Group executes its mission.",
    status: { label: "Core", color: "#22c55e" },
    accent: "var(--accent-cyan)",
    detail:
      "Four capability domains — Intelligence, Vault, Embodiment, Interfaces. Products may be created, merged, spun out, acquired, or retired without rewriting the Group's constitutional layer.",
    metrics: [
      { label: "Domains", value: "Four" },
      { label: "Absorbs", value: "Software" },
      { label: "Layer", value: "Operating" },
    ],
  },
  {
    key: "vault",
    name: "Synapses Vault",
    level: "Protected core",
    purpose: "Human continuity: memory, identity, provenance, inheritance.",
    status: { label: "Protected", color: "#a855f7" },
    accent: "var(--accent-purple)",
    detail:
      "Not a storage service. Vault preserves authenticated memory, identity, connection and inheritance in a form designed to survive changes in technology, ownership, management and time. Its sovereignty is not subordinated to ordinary commercial interests.",
    metrics: [
      { label: "Custody", value: "Threshold N-of-M" },
      { label: "Master key", value: "None" },
      { label: "Governing doc", value: "Vault Protocol" },
    ],
  },
  {
    key: "intelligence",
    name: "Synapses Intelligence",
    level: "Capability domain",
    purpose: "AI systems, agents, Hermes, cognitive infrastructure and automation.",
    status: { label: "Active", color: "#06b6d4" },
    accent: "var(--accent-cyan)",
    detail:
      "Hermes is the flagship internal cognitive and chief-of-staff system. AI operates only inside explicit authority boundaries; high-impact external actions require human approval, and decision records remain exportable and inspectable.",
    metrics: [
      { label: "Flagship", value: "Hermes" },
      { label: "Authority", value: "Explicit, logged" },
      { label: "Model policy", value: "No single-model lock-in" },
    ],
  },
  {
    key: "embodied",
    name: "Synapses Embodied",
    level: "Future domain",
    purpose: "Robotics, digital humans, holographic interfaces, physical AI.",
    status: { label: "Horizon", color: "#3b82f6" },
    accent: "var(--accent-pink)",
    detail:
      "Humanoid systems, telepresence and spatial embodiment of AI systems. Embodiment is never marketed as proof of consciousness, immortality or subjective identity continuity.",
    metrics: [
      { label: "Scope", value: "Physical AI" },
      { label: "Claim policy", value: "Representation only" },
      { label: "Stage", value: "Future domain" },
    ],
  },
  {
    key: "interfaces",
    name: "Synapses Interfaces",
    level: "Future domain",
    purpose: "AR/XR, spatial computing, telepresence and future neural interfaces.",
    status: { label: "Horizon", color: "#3b82f6" },
    accent: "var(--accent-cyan)",
    detail:
      "The surface where human intent meets Group intelligence — wearable, immersive and eventually neural interfaces, built so human agency is served rather than quietly replaced.",
    metrics: [
      { label: "Scope", value: "Human-computer" },
      { label: "Principle", value: "Human sovereignty" },
      { label: "Stage", value: "Future domain" },
    ],
  },
  {
    key: "bio",
    name: "Synapses Bio",
    level: "Research vehicle",
    purpose: "Frontier biological, longevity and neural-interface research.",
    status: { label: "Research", color: "#eab308" },
    accent: "var(--accent-pink)",
    detail:
      "A long-horizon research vehicle rather than a revenue division. Longevity, regenerative medicine, synthetic biology and neural interfaces, all subject to separate scientific, ethical, biosafety and regulatory governance. Speculative concepts stay research horizons, not product commitments.",
    metrics: [
      { label: "Horizon", value: "Multi-decade" },
      { label: "Governance", value: "Ethics + biosafety" },
      { label: "Commitments", value: "None implied" },
    ],
  },
  {
    key: "m1000",
    name: "M1000 Foundation",
    level: "Charitable",
    purpose: "Independent charitable mission — STEM access and opportunity.",
    status: { label: "Chartered", color: "#22c55e" },
    accent: "var(--accent-purple)",
    detail:
      "An independent charitable institution pursuing a STEM and opportunity mission: a pipeline from underserved classrooms to the global technology economy.",
    metrics: [
      { label: "Structure", value: "Non-profit" },
      { label: "Mission", value: "STEM access" },
      { label: "Independence", value: "Chartered" },
    ],
  },
];

export const continuityLayers = [
  { n: "01", name: "Intelligence", desc: "The ability to reason, create, decide and act." },
  { n: "02", name: "Memory", desc: "Preservation of knowledge, experience, records and provenance." },
  { n: "03", name: "Identity", desc: "The authenticated representation of a person or institution." },
  { n: "04", name: "Connection", desc: "Interaction across people, systems, distance and time." },
  { n: "05", name: "Inheritance", desc: "Lawful transfer of knowledge, assets, permissions and capability across generations." },
];

export const governanceStack = [
  { layer: "I", doc: "Synapses Constitution", question: "Why do we exist, and what principles are protected?" },
  { layer: "II", doc: "Refounding Charter", question: "How is the corporation governed and structured?" },
  { layer: "III", doc: "Division & Entity Charters", question: "How does each business operate?" },
  { layer: "IV", doc: "PRDs, Playbooks & Specs", question: "How is a product actually built and run?" },
];

export const vaultGuarantees = [
  { name: "Ownership", desc: "The person or lawful entity retains sovereignty over their Vault data and designated rights." },
  { name: "Survivability", desc: "Designed to migrate across storage systems, cryptographic standards, models and infrastructure." },
  { name: "Succession", desc: "Access passes by predefined inheritance rules, not by Synapses discretion." },
  { name: "Authenticity", desc: "Records carry provenance classes; reconstruction is never presented as verified fact." },
  { name: "Revocation", desc: "Representations and access can be withdrawn without destroying the historical Core." },
];

export const principles = [
  { name: "Autonomy with accountability", desc: "AI and people act within explicit authority boundaries, with consequential actions logged and auditable." },
  { name: "Capital discipline", desc: "Every deployment of capital has an identifiable return, strategic rationale, or approved research purpose." },
  { name: "Niche precision", desc: "Products earn resources through demonstrated demand, technical evidence, or a defined strategic option." },
  { name: "Structural clarity", desc: "Authority, ownership, accountability and scope are documented rather than assumed." },
  { name: "Long-term thinking", desc: "Payoff horizons may exceed venture cycles where the Board has explicitly approved the option value." },
  { name: "Truth over narrative", desc: "Speculative technology is never represented as established capability." },
  { name: "Human sovereignty", desc: "Our systems exist to serve human agency, not quietly replace it." },
];

export const board = [
  { name: "Ali Abubakar", role: "CEO & Founder; Chair" },
  { name: "Abdullahi Oriyomi", role: "Co-Founder; President & COO" },
  { name: "Ahmed Wakil", role: "Co-Founder; CTO" },
];
