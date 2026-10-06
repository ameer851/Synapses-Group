import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/brand/Header";
import { Footer } from "@/components/brand/Footer";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({ meta: [
    { title: "Insights — Synapses Group" },
    { name: "description", content: "Essays and perspectives from Synapses Group on technology, capital, infrastructure, intelligence, continuity, and long-term institution building." },
    { property: "og:title", content: "Insights — Synapses Group" },
    { property: "og:description", content: "Ideas on technology, capital, infrastructure, intelligence, and continuity." },
    { property: "og:url", content: "https://synapsesgroup.co/insights" },
  ], links: [{ rel: "canonical", href: "https://synapsesgroup.co/insights" }] }),
  component: InsightsPage,
});

const topics=[
  ["01","The Long-Term Company","Why ownership architecture matters more than individual products when building institutions that compound.","Ownership · Strategy"],
  ["02","Capital as an Operating System","How disciplined allocation connects operating companies, acquisitions, and long-duration investment.","Capital · Allocation"],
  ["03","AI Inside the Institution","What changes when intelligence becomes an internal organizational capability rather than a standalone product.","AI · Organizations"],
  ["04","Building for Continuity","The technical and institutional problem of preserving identity, memory, provenance, and capability across generations.","Continuity · Infrastructure"],
  ["05","Africa's Infrastructure Decade","A practical view of the technology, energy, industrial, and human-capital systems required for the next phase of African growth.","Africa · Infrastructure"],
];

function InsightsPage(){return <div className="min-h-screen bg-background text-foreground"><Header/><main>
<section className="border-b border-border bg-[#060606]"><div className="mx-auto max-w-5xl px-6 py-24 md:py-32"><div className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-dim">Synapses Group · Insights</div><h1 className="mt-5 text-4xl font-semibold tracking-tight text-light md:text-7xl">Ideas for people<br/><span className="font-serif italic text-silver">building what lasts.</span></h1><p className="mt-7 max-w-2xl text-base leading-relaxed text-silver md:text-xl">Research, essays, and perspectives on the systems that shape technology, capital, infrastructure, and human continuity.</p></div></section>
<section className="mx-auto max-w-5xl px-6 py-24"><div className="space-y-px bg-border">{topics.map(([n,t,d,k])=><article key={n} className="group grid gap-5 bg-background p-7 md:grid-cols-[55px_1fr_180px] md:items-start md:p-9"><span className="font-mono text-[0.6rem] text-dim">{n}</span><div><h2 className="text-2xl font-semibold tracking-tight text-light">{t}</h2><p className="mt-3 max-w-2xl text-sm leading-relaxed text-silver/80">{d}</p></div><div className="flex items-center justify-between gap-3 md:block"><span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-dim">{k}</span><ArrowRight className="h-4 w-4 text-silver transition-transform group-hover:translate-x-1 md:mt-8"/></div></article>)}</div></section>
<section className="border-y border-border bg-[#060606]"><div className="mx-auto max-w-4xl px-6 py-24 text-center"><div className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-dim">Editorial standard</div><h2 className="mt-4 text-3xl font-semibold text-light md:text-5xl">Substance over volume.</h2><p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-silver">Insights should earn their place: original thinking, useful analysis, transparent uncertainty, and ideas that remain relevant after the news cycle moves on.</p></div></section>
</main><Footer/></div>}
