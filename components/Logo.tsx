import Link from "next/link";

export default function Logo({
  dark = false,
  compact = false,
}: {
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <Link
      href="#top"
      aria-label="ELCO Plumbing — Home"
      className="group flex items-center gap-3"
      data-cursor="Home"
    >
      <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-brand-red to-[#8a0a1f] shadow-lg ring-1 ring-white/10 transition-transform duration-500 group-hover:rotate-[8deg]">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          aria-hidden
        >
          <path
            d="M16 3C16 3 7 12.5 7 19.5C7 24.7467 11.0294 29 16 29C20.9706 29 25 24.7467 25 19.5C25 12.5 16 3 16 3Z"
            fill="currentColor"
          />
          <circle cx="13" cy="20" r="2.5" fill="#F5C518" />
        </svg>
        <span className="absolute -right-2 -bottom-2 h-3 w-3 rounded-full bg-brand-gold ring-2 ring-white/30" />
      </div>
      {!compact && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-display text-xl font-extrabold tracking-tight ${
              dark ? "text-white" : "text-brand-navy"
            }`}
          >
            ELCO
          </span>
          <span
            className={`text-[10px] font-bold uppercase tracking-[0.28em] ${
              dark ? "text-white/60" : "text-brand-navy/60"
            }`}
          >
            Plumbing
          </span>
        </div>
      )}
    </Link>
  );
}
