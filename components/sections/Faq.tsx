"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";

const FAQS = [
  {
    q: "How fast can ELCO get to my house?",
    a: "For non-emergency calls in Cobb County we offer same-day service when you book before noon. Most appointments are scheduled within a 2-hour arrival window. For true emergencies — burst pipes, sewage backups, no water in the house — a technician is typically dispatched within 60 minutes, 24/7.",
  },
  {
    q: "Do you charge a trip or diagnostic fee?",
    a: "No. Estimates and on-site diagnostics are completely free. You'll get a flat-rate, written quote before any work begins — if you decide not to move forward, you owe us nothing. The only time we charge a separate fee is for advanced leak detection involving thermal imaging or sewer camera work, and we'll always quote that up front too.",
  },
  {
    q: "Are you actually licensed and insured?",
    a: "Yes — and we'll send you the documentation before we show up. ELCO carries an active Georgia Master Plumber license, $2M general liability coverage, and a state-required surety bond. Every technician on the truck is W-2, background-checked, and drug-tested. We never subcontract.",
  },
  {
    q: "How much does a typical repair cost?",
    a: "It depends on the job, but here are honest ballparks for the Marietta market: a basic faucet replacement runs $185–$285; a standard 50-gallon water heater install is $1,650–$2,200 with all-new code-required parts; a routine drain cleaning is $129–$249; main-line clearing with camera is $450–$675. We'll give you the exact flat-rate number before any wrench turns.",
  },
  {
    q: "Do you offer financing for bigger jobs?",
    a: "Yes. For re-pipes, sewer-line replacements, and water restoration jobs over $1,500, we partner with GreenSky and Synchrony to offer 0% APR for 12 months for qualified customers, plus longer fixed-rate plans up to 84 months. You can pre-qualify in about 60 seconds without affecting your credit score.",
  },
  {
    q: "What brands of water heater do you install?",
    a: "We stock and install Rheem, A.O. Smith, Bradford White, Rinnai (tankless), and Navien (tankless) — all with full manufacturer warranties plus a 1-year ELCO labor warranty on top. If you have a strong brand preference and we don't carry it, we can usually source it within 24 hours.",
  },
  {
    q: "What should I do right now if a pipe burst?",
    a: "Three steps, in this order: (1) Shut off the main water valve — usually near the front hose bib or in the garage. (2) Open the lowest faucet in the house to drain pressure out of the system. (3) Call us at 678-772-1218. While you're on the phone with us, move valuables off the floor and snap a few photos for your insurance carrier. We can usually be on-site in under an hour.",
  },
  {
    q: "Will you work with my insurance company on a water-damage claim?",
    a: "Absolutely. For burst-pipe and flood jobs we document everything with photos, moisture readings, and itemized scopes that insurance adjusters can submit directly. We've worked with State Farm, Allstate, Liberty Mutual, USAA, and most regional Georgia carriers. We won't inflate the scope, but we'll make sure nothing legitimate gets left off the claim.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-white py-24 md:py-32">
      <div className="container-fluid">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="section-eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Common Questions
            </span>
            <h2 className="mt-6 heading-section text-brand-navy">
              The questions
              <br />
              <span className="italic text-brand-red">homeowners actually ask.</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-brand-navy/70">
              Plumbing is stressful enough without a fast-talking quote. Here's
              what most Marietta-area homeowners want to know before they pick
              up the phone.
            </p>

            <div className="mt-8 flex flex-col gap-3 rounded-3xl border border-brand-navy/10 bg-brand-navy/[0.03] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy text-brand-gold">
                  <MessageCircleQuestion className="h-5 w-5" />
                </div>
                <p className="font-display text-lg font-bold text-brand-navy">
                  Still have questions?
                </p>
              </div>
              <p className="text-sm text-brand-navy/60">
                A real plumber will answer the phone. No call centers, no menus.
              </p>
              <a
                href="tel:6787721218"
                data-cursor="Call now"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-red px-5 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:scale-[1.02]"
              >
                Call 678-772-1218
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={item.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-brand-red bg-gradient-to-br from-white to-brand-red/[0.03] shadow-xl shadow-brand-red/5"
                      : "border-brand-navy/10 bg-white hover:border-brand-navy/30"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    data-cursor={isOpen ? "Close" : "Open"}
                    className="flex w-full items-center justify-between gap-6 p-6 text-left md:p-7"
                  >
                    <span className="flex items-baseline gap-4">
                      <span
                        className={`font-mono text-xs font-bold transition-colors ${
                          isOpen ? "text-brand-red" : "text-brand-navy/30"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`font-display text-lg font-bold leading-tight md:text-xl ${
                          isOpen ? "text-brand-navy" : "text-brand-navy"
                        }`}
                      >
                        {item.q}
                      </span>
                    </span>
                    <span
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-brand-red text-white rotate-180"
                          : "bg-brand-navy/5 text-brand-navy"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 pb-7 pl-[60px] pr-12 md:px-7 md:pl-[68px]">
                          <p className="text-[15px] leading-relaxed text-brand-navy/75">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
