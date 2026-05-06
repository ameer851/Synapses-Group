import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-dim">Synapses Group</div>
        <h1 className="mt-6 text-7xl font-semibold text-light tracking-tight">404</h1>
        <h2 className="mt-4 font-serif italic text-lg text-silver">This node isn't on the network.</h2>
        <p className="mt-2 text-sm text-silver/70">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-light px-6 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-90"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Synapses Group — Autonomous Intelligence" },
      { name: "description", content: "A holding company building AI-operated businesses. Media Clipping Platform · InwitHQ · Synapses AI." },
      { name: "author", content: "Synapses Group" },
      { name: "theme-color", content: "#080808" },
      { property: "og:title", content: "Synapses Group" },
      { property: "og:description", content: "Autonomous media & technology group." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@1,400;1,500&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
