"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, BadgeDollarSign, Phone } from "lucide-react";
import QuoteForm from "../QuoteForm";

const PROMISES = [
  {
    icon: Clock,
    title: "Callback in 15 minutes",
    body: "During business hours, a real ELCO dispatcher picks up the phone and confirms your appointment.",
  },
  {
    icon: BadgeDollarSign,
    title: "Free, no-obligation quote",
    body: "Flat-rate pricing presented in writing before any work starts. No trip fees, no surprises.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed crew, every time",
    body: "Master-licensed plumbers in marked trucks. Background-checked, drug-tested, and W-2 employed.",
  },
];

export default function FreeQuote() {
  return (
    <section
      id="free-quote"
      className="relative overflow-hidden bg-brand-navy py-24 md:py-32"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,197,24,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(200,16,46,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div className="container-fluid">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left: copy + promises */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col text-white"
          >
            <span className="inline-flex w-fit items-center gap-3 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-gold opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-gold" />
              </span>
              Free Quote · No Obligation
            </span>

            <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              Let's fix
              <br />
              <span className="italic text-brand-gold">whatever's leaking.</span>
            </h2>

            <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
              Fill out the form and an ELCO dispatcher will reach back out
              within 15 minutes. Or skip the form and call us directly — a real
              plumber will pick up.
            </p>

            <a
              href="tel:6787721218"
              data-cursor="Call now"
              className="group mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-brand-red px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-red/40"
            >
              <Phone className="h-4 w-4" />
              678-772-1218
              <span className="ml-2 hidden rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-bold sm:inline">
                24/7
              </span>
            </a>

            <ul className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8">
              {PROMISES.map((p) => {
                const Icon = p.icon;
                return (
                  <li key={p.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                      <Icon className="h-5 w-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="font-display text-lg font-bold text-white">
                        {p.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-white/65">
                        {p.body}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-brand-gold/20 via-brand-red/15 to-transparent blur-3xl" />
            <QuoteForm variant="section" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
