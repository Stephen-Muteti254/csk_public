import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-csk-navy text-white mt-24">
      <div className="h-1 flag-bar-h" aria-hidden />
      <div className="container mx-auto px-4 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="bg-white inline-flex rounded-lg p-2">
            <Logo />
          </div>
          <p className="mt-5 text-sm text-white/75 max-w-md leading-relaxed">
            Campus Support Kenya stands with university students across Kenya — offering
            counselling, abuse support, academic guidance, financial wellbeing aid and
            uplifting awareness events.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-csk-amber uppercase tracking-wider">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-csk-amber">Services</Link></li>
            <li><Link to="/events" className="hover:text-csk-amber">Events</Link></li>
            <li><Link to="/about" className="hover:text-csk-amber">About CSK</Link></li>
            <li><Link to="/contact" className="hover:text-csk-amber">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-csk-amber uppercase tracking-wider">Reach Us</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-csk-amber" /> +254 700 000 000</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-csk-amber" /> help@campussupportkenya.org</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-csk-amber" /> Nairobi, Kenya</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-white/60">
          <p>© {new Date().getFullYear()} Campus Support Kenya (CSK). All rights reserved.</p>
          <p>Built with care for Kenyan campus students 🇰🇪</p>
        </div>
      </div>
    </footer>
  );
}
