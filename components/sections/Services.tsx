"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Droplets,
  Flame,
  ShowerHead,
  AlertOctagon,
  Search,
  ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Wrench,
    title: "Plumbing Repair",
    blurb:
      "Faucets, fixtures, supply lines, valves and re-pipes. Whatever's leaking, dripping or running wrong — we make it right the first time.",
    points: ["Fixture replacement", "Pipe repair & re-piping", "Garbage disposals"],
  },
  {
    icon: Droplets,
    title: "Drain Cleaning",
    blurb:
      "Kitchen, bath, main line and storm drains. We use cameras and hydro-jetting — not just snakes — so the clog doesn't come back next month.",
    points: ["Camera inspection", "Hydro-jetting", "Main line clearing"],
  },
  {
    icon: Flame,
    title: "Water Heater",
    blurb:
      "Tank, tankless and hybrid installs from every major brand. Same-day diagnostics and replacement on most failed units.",
    points: ["Same-day install", "Tankless conversion", "Anode & flush service"],
  },
  {
    icon: ShowerHead,
    title: "Water Restoration",
    blurb:
      "Burst pipes, slab leaks and flooded basements. We stop the source, dry the structure, and coordinate with your insurance carrier.",
    points: ["Burst pipe response", "Drying & dehumidification", "Insurance coordination"],
  },
  {
    icon: AlertOctagon,
    title: "Emergency Plumbing",
    blurb:
      "Real people on the phone at 2 a.m. Trucks rolling within the hour across Cobb County and the metro Atlanta service area.",
    points: ["24/7 dispatch", "After-hours response", "Holiday & weekend service"],
  },
  {
    icon: Search,
    title: "Leak Detection",
    blurb:
      "Acoustic, thermal and pressure testing to find hidden leaks under slabs, behind walls or in your yard — without tearing the house apart.",
    points: ["Slab leak location", "Yard line testing", "Non-invasive methods"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-brand-navy py-24 md:py-32"
    >
      {/* Decorative bg */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,197,24,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(200,16,46,0.12),transparent_55%)]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
      </div>

      <div className="container-fluid">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-3 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            What We Do
          </span>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            Full-service plumbing,
            <br />
            <span className="italic text-brand-gold">handled by one crew.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65">
            From a quiet drip in the laundry room to a flooded basement at 3
            a.m., ELCO is the single number Cobb County calls.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.title}
                href="#free-quote"
                data-cursor="Quote"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/40 hover:bg-white/[0.06]"
              >
                {/* Spotlight */}
                <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-brand-red/30 blur-3xl" />
                  <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-brand-gold/20 blur-3xl" />
                </div>

                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-red to-[#8a0a1f] shadow-lg shadow-brand-red/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/40 transition-all duration-300 group-hover:border-brand-gold group-hover:text-brand-gold">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white md:text-[26px]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  {service.blurb}
                </p>

                <ul className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-wider text-white/70"
                    >
                      <span className="h-1 w-1 rounded-full bg-brand-gold" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.a>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center md:flex-row md:gap-8 md:p-10 md:text-left">
          <div className="flex-1">
            <p className="font-display text-xl font-bold text-white md:text-2xl">
              Not sure what you need?
            </p>
            <p className="mt-1 text-sm text-white/60">
              Send us a photo or describe the issue — we'll diagnose it for free.
            </p>
          </div>
          <a
            href="#free-quote"
            data-cursor="Free quote"
            className="group inline-flex items-center gap-3 rounded-full bg-brand-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-navy transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-brand-gold/40"
          >
            Get a free diagnosis
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
