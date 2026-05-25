"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Calendar, Star, MapPin, Headphones } from "lucide-react";

const STATS = [
  {
    icon: Calendar,
    end: 15,
    suffix: "+",
    label: "Years of experience",
    sub: "Serving Marietta since 2010",
  },
  {
    icon: Star,
    end: 247,
    suffix: "+",
    label: "5-Star reviews",
    sub: "Avg. 4.9 across the web",
  },
  {
    icon: MapPin,
    end: 50,
    suffix: "mi",
    label: "Service radius",
    sub: "Cobb County + greater Atlanta",
  },
  {
    icon: Headphones,
    end: 24,
    suffix: "/7",
    label: "Emergency line",
    sub: "Real humans, never voicemail",
  },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animate = () => {
      STATS.forEach((stat, i) => {
        const el = numRefs.current[i];
        if (!el) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.end,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = Math.floor(obj.val).toString();
          },
        });
      });
    };

    let triggered = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered) {
            triggered = true;
            animate();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      <div className="container-fluid">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-3xl border border-brand-navy/10 bg-gradient-to-br from-white to-brand-navy/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-xl md:p-8"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-brand-red/5 transition-all duration-700 group-hover:scale-150 group-hover:bg-brand-red/10" />
                <Icon className="relative mb-5 h-7 w-7 text-brand-red md:h-8 md:w-8" />
                <div className="relative flex items-baseline gap-1">
                  <span
                    ref={(el) => {
                      numRefs.current[i] = el;
                    }}
                    className="font-display text-5xl font-extrabold leading-none tracking-tight text-brand-navy md:text-6xl lg:text-7xl"
                  >
                    0
                  </span>
                  <span className="font-display text-2xl font-bold text-brand-red md:text-3xl">
                    {stat.suffix}
                  </span>
                </div>
                <div className="relative mt-3">
                  <p className="text-sm font-bold uppercase tracking-wider text-brand-navy">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xs text-brand-navy/60">{stat.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
