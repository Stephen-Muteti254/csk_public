import logo from "@/assets/csk-logo.png";
import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <img
        src={logo}
        alt="CSK — Campus Support Kenya logo"
        width={40}
        height={40}
        className="h-10 w-10 object-contain transition-transform group-hover:scale-105"
      />
      {!compact && (
        <span className="font-display font-bold tracking-tight text-base leading-tight">
          <span className="text-csk-navy">Campus</span>
          <span className="text-ke-red">Support</span>
          <span className="text-ke-green">Kenya</span>
        </span>
      )}
    </Link>
  );
}
