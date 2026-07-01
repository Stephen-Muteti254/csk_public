import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import hero from "@/assets/hero-students.jpg";
import { CheckCircle2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const SITE = "https://campussupportkenya.org";


const values = [
  { t: "Confidentiality first", d: "Nothing you share leaves the support circle without your consent." },
  { t: "Kenyan-rooted", d: "Built by alumni of Kenyan public and private universities." },
  { t: "Action over advice", d: "Every conversation ends with a clear next step or referral." },
  { t: "Free for students", d: "Core support services cost you nothing." },
];

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About CSK — Campus Support Kenya</title>

        <meta
          name="description"
          content="Built by Kenyan campus alumni for today's students. Learn about our mission, values and the team behind CSK."
        />

        <meta
          property="og:title"
          content="About Campus Support Kenya"
        />

        <meta
          property="og:description"
          content="Our mission, values and the people behind Kenya's dedicated campus support platform."
        />

        <meta
          property="og:image"
          content="https://campussupportkenya.org/og-image.jpg"
        />
      </Helmet>

      <PageShell>
      <section className="bg-csk-mist py-20 md:py-28">
        <div className="container mx-auto px-4 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-csk-amber">About CSK</span>
            <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-csk-navy text-balance">
              A Kenyan student safety net — built by those who've lived it.
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Campus Support Kenya was started by a small circle of alumni who realised that
              between lectures, fees, family pressure and life, too many brilliant Kenyan students
              were falling through invisible cracks. CSK is our answer.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl flag-bar shadow-elegant" aria-hidden />
              <img
                src={hero}
                alt="Diverse Kenyan university students on campus"
                width={1200}
                height={900}
                loading="lazy"
                className="relative rounded-2xl shadow-elegant aspect-[4/3] object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <SectionHeading eyebrow="Our values" title="What we stand for" align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.t} className="rounded-2xl border border-border/60 bg-background p-6 hover:border-csk-amber/50 hover:shadow-elegant transition-all">
              <CheckCircle2 className="h-8 w-8 text-csk-amber" />
              <h3 className="mt-4 font-display text-lg font-bold text-csk-navy">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-csk-navy text-white py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-2xl font-bold text-csk-amber">Mission</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Make sure no Kenyan campus student ever faces a crisis alone — emotional, academic, or financial.
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-csk-amber">Vision</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              A Kenya where every campus is a place students grow, not just survive.
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-csk-amber">Promise</h3>
            <p className="mt-3 text-white/80 leading-relaxed">
              Listen first. Act fast. Stay confidential. Always free for students.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
    </>    
  );
}
