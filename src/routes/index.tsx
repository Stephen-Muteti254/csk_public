import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ShieldCheck, Heart, GraduationCap, HandCoins, Sparkles, Phone } from "lucide-react";
import hero from "@/assets/hero-students.jpg";
import { services } from "@/data/services";

const SITE = "https://campussupportkenya.org";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Campus Support Kenya (CSK) — Help for Every Kenyan Campus Student" },
      {
        name: "description",
        content:
          "CSK is the one-stop support platform for Kenyan university students: counselling, abuse response, academic follow-up, financial aid and awareness events.",
      },
      { property: "og:title", content: "Campus Support Kenya — Help for Every Kenyan Campus Student" },
      { property: "og:description", content: "Counselling, abuse support, academic follow-up, wellbeing aid and awareness events for Kenyan university students." },
      { property: "og:image", content: `${SITE}/og-image.jpg` },
      { property: "og:url", content: SITE },
    ],
  }),
  component: HomePage,
});

const stats = [
  { k: "12K+", v: "Students supported" },
  { k: "38", v: "Partner campuses" },
  { k: "24/7", v: "Crisis hotline" },
  { k: "100%", v: "Confidential" },
];

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute inset-0 opacity-25">
          <img src={hero} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-csk-navy via-csk-navy/85 to-csk-navy/40" />
        <div className="relative container mx-auto px-4 py-24 md:py-32 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-medium ring-1 ring-white/20">
              <span className="h-2 w-2 rounded-full bg-csk-amber animate-pulse" />
              Now serving 38 Kenyan universities
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-6xl font-bold leading-[1.05] text-balance">
              When campus gets heavy, <span className="text-csk-amber">we carry it</span> with you.
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl leading-relaxed">
              Campus Support Kenya (CSK) is the dedicated lifeline for university students across
              Kenya — counselling, protection, academic guidance and wellbeing support, in one place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-csk-amber text-csk-navy hover:bg-csk-amber/90 shadow-amber font-semibold">
                <Link to="/contact">
                  Get Help Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/10">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((s) => (
                <div key={s.v}>
                  <div className="font-display text-2xl md:text-3xl font-bold text-csk-amber">{s.k}</div>
                  <div className="text-xs uppercase tracking-wider text-white/60 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5 hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-csk-amber/30 blur-3xl rounded-full" aria-hidden />
              <img
                src={hero}
                alt="Kenyan university students walking together on campus"
                width={1600}
                height={1100}
                className="relative rounded-2xl shadow-elegant ring-1 ring-white/10 aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-csk-navy rounded-xl p-4 shadow-elegant max-w-[220px]">
                <div className="flex items-center gap-2 text-xs font-semibold text-ke-green uppercase tracking-wider">
                  <ShieldCheck className="h-4 w-4" /> Confidential
                </div>
                <p className="mt-1 text-sm font-medium leading-tight">Every conversation is private and judgement-free.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="container mx-auto px-4 py-20 md:py-28">
        <SectionHeading
          eyebrow="What we do"
          title="Five ways CSK shows up for you"
          subtitle="From the heart to the head, from your wallet to your wellbeing — we've built a network designed around the realities of Kenyan campus life."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Card key={s.slug} className="group relative overflow-hidden border-border/60 hover:border-csk-amber/50 transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className={`absolute top-0 left-0 h-1 w-full bg-${s.accent}`} />
                <CardContent className="p-7">
                  <div className="h-12 w-12 rounded-xl bg-csk-mist text-csk-navy flex items-center justify-center group-hover:bg-csk-navy group-hover:text-csk-amber transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-csk-navy">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                  <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-csk-navy group-hover:text-csk-amber">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* SPLIT FEATURE */}
      <section className="bg-csk-mist py-20 md:py-28">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="Built for Kenya"
              title="Rooted in our flag, run by our students."
              subtitle="CSK was built by Kenyan campus alumni who have lived through the same struggles you face today. Every service is shaped by real student feedback — not assumptions."
            />
            <ul className="mt-8 space-y-4">
              {[
                { i: Heart, t: "Trained Kenyan counsellors on call across all 47 counties." },
                { i: GraduationCap, t: "Direct liaison with academic registrars at partner campuses." },
                { i: HandCoins, t: "Emergency wellbeing fund for fees, food and transport." },
                { i: Sparkles, t: "Monthly awareness events with prizes from local sponsors." },
              ].map(({ i: I, t }) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1 h-9 w-9 rounded-lg bg-csk-navy text-csk-amber flex items-center justify-center shrink-0">
                    <I className="h-4 w-4" />
                  </span>
                  <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{t}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl flag-bar shadow-elegant" aria-hidden />
            <img
              src={hero}
              alt="Kenyan university students smiling on campus"
              width={1200}
              height={900}
              loading="lazy"
              className="relative rounded-2xl shadow-elegant aspect-[5/4] object-cover w-full"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero text-white p-10 md:p-16 shadow-elegant">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-csk-amber/30 blur-3xl" aria-hidden />
          <div className="relative grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-balance">
                You don't have to figure this out alone.
              </h2>
              <p className="mt-3 text-white/80 max-w-xl">
                Reach out today — whether it's a whisper or a cry for help, CSK is listening.
              </p>
            </div>
            <div className="flex md:justify-end gap-3 flex-wrap">
              <Button asChild size="lg" className="bg-csk-amber text-csk-navy hover:bg-csk-amber/90 font-semibold">
                <Link to="/contact"><Phone className="mr-2 h-4 w-4" /> Get Help Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white bg-white/5 hover:bg-white/10">
                <Link to="/about">About CSK</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
