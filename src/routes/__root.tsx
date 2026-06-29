import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

const SITE_URL = "https://campussupportkenya.org";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-csk-navy">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-csk-navy px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-csk-navy/90"
          >
            Go home
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
      { name: "theme-color", content: "#14213d" },
      { title: "Campus Support Kenya (CSK) — Standing With Every Kenyan University Student" },
      {
        name: "description",
        content:
          "CSK supports Kenyan university students through counselling, abuse support, academic follow-up, financial wellbeing aid and awareness events.",
      },
      { name: "author", content: "Campus Support Kenya" },
      { name: "keywords", content: "Kenya university students, campus counselling, abuse support, academic help, student welfare, CSK, Campus Support Kenya" },
      { property: "og:site_name", content: "Campus Support Kenya" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}/og-image.jpg` },
      { property: "og:image:width", content: "1600" },
      { property: "og:image:height", content: "1100" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@CampusSupportKE" },
      { name: "twitter:image", content: `${SITE_URL}/og-image.jpg` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "canonical", href: SITE_URL },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          name: "Campus Support Kenya",
          alternateName: "CSK",
          url: SITE_URL,
          logo: `${SITE_URL}/favicon.png`,
          areaServed: "KE",
          sameAs: [],
          description:
            "Supporting Kenyan university students through counselling, abuse response, academic follow-up, financial wellbeing and awareness events.",
        }),
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
