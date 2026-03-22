import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

const steps = [
  { href: "/bilgilerim", label: "Bilgilerim" },
  { href: "/filtreleme", label: "Filtreleme" },
  { href: "/favorilerim", label: "Favorilerim" },
  { href: "/notlarim", label: "Notlarım" },
  { href: "/basvurularim", label: "Başvurularım" },
  { href: "/sohbet", label: "AI Sohbet" },
] as const;

export function FlowNav({ activeHref }: { activeHref: string }) {
  return (
    <nav className="mb-10 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-800/60 px-4 py-3 shadow-glow backdrop-blur-md">
      <BrandLogo />
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((s, i) => {
          const active = s.href === activeHref;
          return (
            <span key={s.href} className="flex items-center gap-2">
              {i > 0 ? <span className="text-slate-500">/</span> : null}
              <Link
                href={s.href}
                className={
                  active
                    ? "rounded-lg bg-brand-500/20 px-2 py-1 text-sm font-semibold text-brand-300 ring-1 ring-brand-500/35"
                    : "rounded-lg px-2 py-1 text-sm text-slate-300 transition-colors duration-300 hover:bg-white/10 hover:text-slate-50"
                }
              >
                {s.label}
              </Link>
            </span>
          );
        })}
      </div>
    </nav>
  );
}