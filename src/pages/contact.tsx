import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import { ReportApi } from "@/lib/api/report";
import { Loader2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const SITE = "https://campussupportkenya.org";

export default function ContactPage() {
  const [cskId, setCskId] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();

    if (!cskId || !category || !description) {
      toast.error("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const response = await ReportApi.create({
        cskId,
        category,
        description,
      });

      if (response.data.success) {
        toast.success(response.data.message);

        // clear form
        setCskId("");
        setCategory("");
        setDescription("");
      }
    }
    catch (error: any) {

      if (error.response?.status === 404) {
        toast.error("Invalid CSK ID");
      }
      else {
        toast.error(
          error.response?.data?.message ||
          "Failed to submit your request"
        );
      }

    }
    finally {
      setLoading(false);
    }
  }
  return (
    <>
      <Helmet>
        <title>Contact CSK — Get Help Today | Campus Support Kenya</title>

        <meta
          name="description"
          content="Reach Campus Support Kenya for confidential counselling, abuse support, academic guidance or wellbeing aid. We respond fast."
        />

        <meta
          property="og:title"
          content="Contact Campus Support Kenya"
        />

        <meta
          property="og:description"
          content="Confidential, fast, free help for Kenyan university students."
        />

        <meta
          property="og:image"
          content="https://campussupportkenya.org/og-image.jpg"
        />

        <meta
          property="og:url"
          content="https://campussupportkenya.org/contact"
        />

        <link
          rel="canonical"
          href="https://campussupportkenya.org/contact"
        />
      </Helmet>

      <PageShell>
      <Toaster richColors position="top-center" />
      <section className="bg-csk-navy text-white py-20">
        <div className="container mx-auto px-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-csk-amber">Contact</span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold max-w-3xl text-balance">
            Tell us what you're facing — we'll take it from there.
          </h1>
          <p className="mt-5 text-white/75 max-w-2xl">
            Every message reaches a real Kenyan support coordinator. Confidential, no judgement, no cost.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <SectionHeading eyebrow="Send a message" title="We typically reply within 2 hours during the day." />
          <form onSubmit={submit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="csk_id">CSK ID</Label>
              <Input
                id="csk_id"
                value={cskId}
                disabled={loading}
                onChange={(e) => setCskId(e.target.value)}
                placeholder="CSK-123456"
                required
              />
            </div>

            <div className="space-y-2">
              <Label>Type of Support</Label>

              <Select
                value={category}
                onValueChange={setCategory}
                disabled={loading}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select support type" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="Counselling">
                    Counselling
                  </SelectItem>

                  <SelectItem value="Abuse Support">
                    Abuse Support
                  </SelectItem>

                  <SelectItem value="Academic Follow-up">
                    Academic Follow-up
                  </SelectItem>

                  <SelectItem value="Financial Wellbeing">
                    Financial Wellbeing
                  </SelectItem>

                  <SelectItem value="Events & Partnerships">
                    Events & Partnerships
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Description</Label>

              <Textarea
                rows={5}
                disabled={loading}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Provide more information about the issue..."
                required
              />
            </div>

            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send message"
              )}
            </Button>

          </form>
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl bg-csk-mist p-6">
            <h3 className="font-display text-lg font-bold text-csk-navy">Crisis hotline</h3>
            <p className="mt-1 text-sm text-muted-foreground">24/7 — for urgent situations.</p>
            <a href="tel:+254700000000" className="mt-4 inline-flex items-center gap-2 text-csk-navy font-semibold">
              <Phone className="h-4 w-4 text-csk-amber" /> +254 700 000 000
            </a>
          </div>
          <div className="rounded-2xl border border-border/60 p-6 space-y-4 text-sm">
            <div className="flex items-start gap-3"><Mail className="h-4 w-4 mt-1 text-csk-amber" /><div><div className="font-semibold text-csk-navy">Email</div><div className="text-muted-foreground">help@campussupportkenya.org</div></div></div>
            <div className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-1 text-csk-amber" /><div><div className="font-semibold text-csk-navy">Office</div><div className="text-muted-foreground">Nairobi, Kenya</div></div></div>
            <div className="flex items-start gap-3"><Clock className="h-4 w-4 mt-1 text-csk-amber" /><div><div className="font-semibold text-csk-navy">Hours</div><div className="text-muted-foreground">Mon–Sat · 8am to 8pm EAT</div></div></div>
          </div>
          <div className="rounded-2xl bg-gradient-hero text-white p-6">
            <h3 className="font-display text-lg font-bold text-csk-amber">Stay anonymous</h3>
            <p className="mt-2 text-sm text-white/80 leading-relaxed">
              You can leave the name and email fields generic. We'll still help — your safety always comes before our paperwork.
            </p>
          </div>
        </aside>
      </section>
    </PageShell>
    </>    
  );
}
