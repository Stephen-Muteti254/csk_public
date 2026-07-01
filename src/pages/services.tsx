import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { PageShell } from "@/components/PageShell";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SITE = "https://campussupportkenya.org";

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services — Campus Support Kenya (CSK)</title>

        <meta
          name="description"
          content="Counselling, abuse support, academic follow-up, financial wellbeing aid and awareness events for Kenyan university students."
        />

        <meta
          property="og:title"
          content="Our Services — Campus Support Kenya"
        />

        <meta
          property="og:description"
          content="Five core services designed around the real struggles of Kenyan campus life."
        />

        <meta
          property="og:image"
          content="https://campussupportkenya.org/og-image.jpg"
        />

        <meta
          property="og:url"
          content="https://campussupportkenya.org/services"
        />

        <link
          rel="canonical"
          href="https://campussupportkenya.org/services"
        />
      </Helmet>

      <PageShell>
      <section className="bg-csk-navy text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-csk-amber">Services</span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold max-w-3xl text-balance">
            Five lifelines for every Kenyan campus student.
          </h1>
          <p className="mt-5 text-white/75 max-w-2xl leading-relaxed">
            Whatever you're walking through, CSK has a dedicated team and process behind it.
            Confidential, accessible, and shaped by Kenyan student realities.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 space-y-20">
        {services.map((s, i) => {
          const Icon = s.icon;
          const reverse = i % 2 === 1;
          return (
            <article
              key={s.slug}
              className={`grid gap-10 md:grid-cols-2 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative">
                <div className={`absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-${s.accent}/15`} aria-hidden />
                <img
                  src={s.image}
                  alt={`${s.title} — Kenyan university students`}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="relative rounded-2xl shadow-elegant aspect-[4/3] object-cover w-full"
                />
              </div>
              <div>
                <div className={`inline-flex h-12 w-12 rounded-xl items-center justify-center bg-csk-mist text-csk-navy`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-csk-navy text-balance">
                  {s.title}
                </h2>
                <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
                <div className="mt-6">
                  <Button asChild className="bg-csk-navy hover:bg-csk-navy/90 text-white">
                    <Link to="/contact">
                      Request this service <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </PageShell>
    </>    
  );
}
