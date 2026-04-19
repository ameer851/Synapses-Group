export type EmailEntry = {
  role: string;
  address: string;
  priority: boolean;
  description: string;
};

export const emails: EmailEntry[] = [
  { role: "Board / Executive", address: "board@synapsesgroup.com", priority: true,
    description: "Direct line to the Synapses Group board." },
  { role: "CEO / Inwit AI", address: "ceo@synapsesgroup.com", priority: true,
    description: "Office of the CEO. Routed through Inwit AI." },
  { role: "General Inquiries", address: "hello@synapsesgroup.com", priority: true,
    description: "Anything else. We read everything." },
  { role: "Press & Media", address: "press@synapsesgroup.com", priority: false,
    description: "Interviews, quotes, press kit requests." },
  { role: "Partnerships", address: "partnerships@synapsesgroup.com", priority: false,
    description: "Distribution, integrations, co-development." },
  { role: "Careers", address: "careers@synapsesgroup.com", priority: false,
    description: "We hire selectively. Send something real." },
  { role: "InwitClipps Support", address: "support@inwitclipps.com", priority: false,
    description: "Product support for InwitClipps users." },
  { role: "InwitHQ Media", address: "media@inwithq.com", priority: false,
    description: "Editorial and brand inquiries for InwitHQ." },
];
