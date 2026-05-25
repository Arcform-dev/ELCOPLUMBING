"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Zap, BadgeDollarSign, Hammer, Check } from "lucide-react";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Licensed · Bonded · Insured",
    body: "Every ELCO technician carries an active Georgia master plumbing license. Full liability coverage on every job — protect your home, no exceptions.",
    proof: "Lic. #MP209123 · GL coverage $2M",
  },
  {
    icon: Zap,
    title: "Same-Day Service",
    body: "Call before noon and we'll be at your door before dinner. Most repairs are diagnosed and completed in a single visit — no come-backs.",
    proof: "Avg. response 47 min in Cobb County",
  },
  {
    icon: BadgeDollarSign,
    title: "Upfront Pricing",
    body: "Flat-rate quotes you approve before we lift a wrench. No clock-watching, no surprise add-ons, no awkward conversation at the end.",
    proof: "Free estimates · no trip fee",
  },
  {
    icon: Hammer,
    title: "15+ Years of Experience",
    body: "Family-owned and operated in Marietta since 2010. Two decades of pipes, fittings and water-heater diagnostics — and we're still answering the phone.",
    proof: "10,000+ Cobb County jobs completed",
  },
];

export default function WhyElco() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-gradient-to-br from-white to-brand-navy/[0.04] py-24 md:py-32"
    >
      <div className="container-fluid">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Left: copy + image */}
          <div className="flex flex-col">
            <span className="section-eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Why Choose ELCO
            </span>
            <h2 className="mt-6 heading-section text-brand-navy">
              The kind of plumber
              <br />
              <span className="italic text-brand-red">your neighbors recommend.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-brand-navy/70">
              We built ELCO on three rules: show up when we say we will, quote
              the price before we start, and leave the house cleaner than we
              found it. Fifteen years later, the rules still work.
            </p>

            <div className="relative mt-10 hidden flex-1 overflow-hidden rounded-[32px] bg-brand-navy lg:block">
              <Image
                src="/images/van.png"
                alt="ELCO Plumbing van and crew"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-3 text-white">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-[0.18em]">
                    Trucks rolling now
                  </span>
                </div>
                <p className="mt-2 font-display text-2xl font-bold text-white">
                  Real plumbers. Real Marietta.
                </p>
              </div>
            </div>
          </div>

          {/* Right: reasons grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {REASONS.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative flex flex-col rounded-3xl border border-brand-navy/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-2xl hover:shadow-brand-navy/5"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy/5 transition-colors group-hover:bg-brand-red/10">
                    <Icon className="h-6 w-6 text-brand-navy transition-colors group-hover:text-brand-red" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-navy md:text-2xl">
                    {reason.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-navy/70">
                    {reason.body}
                  </p>
                  <div className="mt-5 flex items-center gap-2 border-t border-brand-navy/10 pt-4 text-[11px] font-bold uppercase tracking-wider text-brand-red">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    {reason.proof}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
