"use client";

import { Shield, Award, Star, MessageSquare, Zap, Gift, ThumbsUp, Clock, MapPin, Wrench } from "lucide-react";

const ITEMS = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Award, label: "Bonded in Georgia" },
  { icon: Star, label: "4.9 Star Rating" },
  { icon: MessageSquare, label: "247+ 5-Star Reviews" },
  { icon: Zap, label: "Same-Day Service" },
  { icon: Gift, label: "Free Estimates" },
  { icon: ThumbsUp, label: "No Hidden Fees" },
  { icon: Clock, label: "24/7 Emergency Service" },
  { icon: MapPin, label: "50-Mile Service Radius" },
  { icon: Wrench, label: "15+ Years Experience" },
];

export default function TickerBar() {
  // Duplicate items for seamless loop
  const loop = [...ITEMS, ...ITEMS];

  return (
    <section
      aria-label="Trust signals"
      className="relative overflow-hidden border-y border-white/5 bg-brand-navy py-5"
    >
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-brand-navy to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-brand-navy to-transparent" />

      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {loop.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-white/80"
            >
              <Icon className="h-4 w-4 text-brand-gold" />
              <span>{item.label}</span>
              <span className="ml-12 h-1.5 w-1.5 rounded-full bg-brand-red/80" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
