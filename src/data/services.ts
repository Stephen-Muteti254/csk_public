import counselling from "@/assets/counselling.jpg";
import support from "@/assets/support.jpg";
import academic from "@/assets/academic.jpg";
import wellbeing from "@/assets/wellbeing.jpg";
import events from "@/assets/events.jpg";
import { Heart, ShieldCheck, GraduationCap, HandCoins, Sparkles } from "lucide-react";

export const services = [
  {
    slug: "counselling",
    title: "Counselling",
    short: "Compassionate listening for emotionally bruised students.",
    description:
      "Life on campus can be heavy. Our trained counsellors walk with you through grief, heartbreak, anxiety and burnout — confidentially and without judgement.",
    icon: Heart,
    image: counselling,
    accent: "ke-red",
  },
  {
    slug: "abuse-support",
    title: "Abuse Support",
    short: "Standing with students facing abuse from peers or lecturers.",
    description:
      "If you have been harassed, assaulted, intimidated or exploited by a fellow student or staff member, we step in with safe reporting, legal guidance and protection.",
    icon: ShieldCheck,
    image: support,
    accent: "csk-navy",
  },
  {
    slug: "academic",
    title: "Academic Follow-Up",
    short: "Untangling missing marks and overwhelming retakes.",
    description:
      "From chasing missing marks to mapping a recovery plan for retakes, we point you to the right offices and the right people so you can get back on track.",
    icon: GraduationCap,
    image: academic,
    accent: "csk-amber",
  },
  {
    slug: "wellbeing",
    title: "Financial Wellbeing",
    short: "Bridging the gap before parents and guardians can step in.",
    description:
      "Empty stomach? Locked out of hostel? Missing exam fee? We help cover urgent essentials so a temporary crunch never becomes a dropped semester.",
    icon: HandCoins,
    image: wellbeing,
    accent: "ke-green",
  },
  {
    slug: "events",
    title: "Awareness Events",
    short: "Bold campus events with prizes worth winning.",
    description:
      "Mental health drives, anti-GBV walks, career fairs and quiz nights — designed to inform, energise and reward the campus community.",
    icon: Sparkles,
    image: events,
    accent: "csk-amber",
  },
] as const;
