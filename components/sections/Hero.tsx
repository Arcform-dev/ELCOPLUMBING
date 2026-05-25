"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Phone, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import QuoteForm from "../QuoteForm";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-brand-navy pt-32 pb-20 md:pt-40 lg:pt-32"
    >
      {/* Background image — van fully visible with a soft gray treatment */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-brand-navy">
        {/* The van photo. Centered, slight desaturation only. */}
        <Image
          src="/images/van.png"
          alt="ELCO Plumbing service van parked in a Marietta driveway"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{
            filter: "grayscale(25%) brightness(0.95) contrast(1.05)",
          }}
        />

        {/* Left-side text-area darken only. Right half stays photographic. */}
        <div className="absolute inset-y-0 left-0 w-[60%] bg-gradient-to-r from-brand-navy via-brand-navy/75 to-transparent" />

        {/* Soft top fade for the nav. */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-navy/70 to-transparent" />

        {/* Soft bottom fade into the ticker. */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-navy/70 to-transparent" />

        {/* Single brand color flare for atmosphere. */}
        <div className="absolute -bottom-32 right-0 h-[420px] w-[420px] rounded-full bg-brand-red/20 blur-[160px]" />
        <div className="absolute -top-24 left-0 h-[360px] w-[360px] rounded-full bg-brand-gold/15 blur-[140px]" />

        {/* Subtle film grain. */}
        <div
          className="absolute inset-0 opacity-[0.10] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' stitchTiles='stitch' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Floating drips */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {[12, 28, 47, 68, 84].map((left, i) => (
          <span
            key={left}
            className="drip absolute top-0 h-2 w-1 rounded-full bg-brand-gold/40"
            style={{
              left: `${left}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i * 0.7}s`,
            }}
          />
        ))}
      </div>

      <div className="container-fluid relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold backdrop-blur"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Marietta · Family-Owned · Since 2010
            </motion.div>

            <h1 className="mt-6 font-display text-[44px] font-extrabold leading-[1.02] tracking-tight md:text-6xl lg:text-7xl xl:text-[88px]">
              <span className="block">If water</span>
              <span className="block">
                runs <span className="italic text-brand-gold">through it</span>…
              </span>
              <span className="mt-2 block text-gradient-gold">
                We Do It.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
              Honest pricing, master-licensed technicians and same-day service
              across Cobb County and the greater Atlanta area. From a midnight
              burst pipe to a full re-pipe, ELCO shows up — clean, fast, and
              guaranteed.
            </p>

            {/* Star rating row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-7 flex flex-wrap items-center gap-5"
            >
              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-brand-gold text-brand-gold"
                    />
                  ))}
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-display text-xl font-bold">4.9</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/60">
                    247+ reviews
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur">
                <ShieldCheck className="h-6 w-6 text-emerald-400" />
                <div className="flex flex-col leading-tight">
                  <span className="text-sm font-bold">Licensed · Bonded · Insured</span>
                  <span className="text-[10px] uppercase tracking-wider text-white/60">
                    State of Georgia
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#free-quote"
                data-cursor="Get quote"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-brand-red px-8 py-5 text-sm font-bold uppercase tracking-[0.18em] text-white shadow-xl shadow-brand-red/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-brand-red/50"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Get Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="tel:6787721218"
                data-cursor="Call now"
                className="group inline-flex items-center gap-3 rounded-full border-2 border-white/30 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md transition-all duration-300 hover:border-brand-gold hover:bg-brand-gold/10 hover:text-brand-gold"
              >
                <Phone className="h-4 w-4" />
                678-772-1218
              </a>
            </motion.div>

            {/* Mini badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] uppercase tracking-wider text-white/50"
            >
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-brand-gold" />
                Same-day service
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-brand-gold" />
                Upfront pricing
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-brand-gold" />
                Free estimates
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-brand-gold" />
                Workmanship guaranteed
              </span>
            </motion.div>
          </motion.div>

          {/* Right: floating quote form */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Ambient glow */}
            <div className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-br from-brand-gold/30 via-brand-red/20 to-transparent blur-3xl" />
            <QuoteForm variant="hero" />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-12 w-px overflow-hidden bg-white/10">
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "100%" }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-full w-full bg-gradient-to-b from-transparent via-brand-gold to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
