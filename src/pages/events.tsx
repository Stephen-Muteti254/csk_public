import { Helmet } from "react-helmet-async";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import events from "@/assets/events.jpg";
import { Calendar, MapPin, Trophy } from "lucide-react";

const SITE = "https://campussupportkenya.org";

const upcoming = [
  { title: "Mind Matters Mental Health Drive", date: "Jun 14, 2026", venue: "University of Nairobi, Main Campus", prize: "KSh 100,000 in prizes", tag: "Mental Health" },
  { title: "Anti-GBV Awareness Walk", date: "Jul 02, 2026", venue: "Kenyatta University", prize: "Sponsored merch & data bundles", tag: "Safety" },
  { title: "Money Smart Campus Quiz", date: "Jul 19, 2026", venue: "JKUAT, Juja", prize: "Top 3 win laptops", tag: "Financial" },
  { title: "Career Compass Fair", date: "Aug 09, 2026", venue: "Moi University, Eldoret", prize: "Internship slots + cash", tag: "Academic" },
];

export default function EventsPage() {
  return (
    <>
      <Helmet>
        <title>Awareness Events — Campus Support Kenya</title>

        <meta
          name="description"
          content="Mental health drives, anti-GBV walks, career fairs and campus quiz nights — with prizes worth winning."
        />

        <meta
          property="og:title"
          content="CSK Awareness Events — Show Up, Speak Up, Win"
        />

        <meta
          property="og:description"
          content="Bold campus events across Kenyan universities with prizes from local sponsors."
        />

        <meta
          property="og:image"
          content="https://campussupportkenya.org/og-image.jpg"
        />

        <meta
          property="og:url"
          content="https://campussupportkenya.org/events"
        />

        <link
          rel="canonical"
          href="https://campussupportkenya.org/events"
        />
      </Helmet>

      <PageShell>
      <section className="relative overflow-hidden bg-csk-navy text-white">
        <img src={events} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-csk-navy via-csk-navy/85 to-transparent" />
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <Badge className="bg-csk-amber text-csk-navy hover:bg-csk-amber font-semibold">Events</Badge>
          <h1 className="mt-4 font-display text-4xl md:text-5xl font-bold max-w-3xl text-balance">
            Show up. Speak up. <span className="text-csk-amber">Walk away with prizes.</span>
          </h1>
          <p className="mt-5 text-white/75 max-w-2xl">
            CSK awareness events bring the campus together around the things that matter — and we
            partner with Kenyan brands to make sure showing up is rewarded.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <SectionHeading
          eyebrow="What's on"
          title="Upcoming events across Kenya"
          subtitle="From Nairobi to Eldoret, here's where you'll find CSK next."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {upcoming.map((e) => (
            <Card key={e.title} className="overflow-hidden border-border/60 hover:shadow-elegant transition-all hover:-translate-y-1">
              <div className="h-2 flag-bar-h" aria-hidden />
              <CardContent className="p-7">
                <div className="flex items-start justify-between gap-3">
                  <Badge variant="secondary" className="bg-csk-mist text-csk-navy">{e.tag}</Badge>
                  <div className="text-xs font-semibold text-csk-amber uppercase tracking-wider">Free Entry</div>
                </div>
                <h3 className="mt-4 font-display text-xl font-bold text-csk-navy">{e.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><Calendar className="h-4 w-4 text-csk-navy" /> {e.date}</li>
                  <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-csk-navy" /> {e.venue}</li>
                  <li className="flex items-center gap-2"><Trophy className="h-4 w-4 text-csk-amber" /> {e.prize}</li>
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
    </>    
  );
}
