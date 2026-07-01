import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/events", label: "Events" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="h-1 flag-bar-h" aria-hidden />
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-csk-navy bg-csk-mist" }}
              className="px-3 py-2 rounded-md text-sm font-medium text-foreground/70 hover:text-csk-navy hover:bg-csk-mist transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="bg-csk-navy hover:bg-csk-navy/90 text-white">
            <Link to="/contact">Get Help Now</Link>
          </Button>
        </div>
        <button
          type="button"
          className="md:hidden p-2 rounded-md hover:bg-csk-mist"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-csk-navy bg-csk-mist" }}
                className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-csk-navy hover:bg-csk-navy/90 text-white">
              <Link to="/contact" onClick={() => setOpen(false)}>Get Help Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
