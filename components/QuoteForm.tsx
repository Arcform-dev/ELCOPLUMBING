"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type Variant = "hero" | "section";

const SERVICES = [
  "Plumbing Repair",
  "Drain Cleaning",
  "Water Heater Install / Repair",
  "Water Restoration",
  "Emergency Plumbing (24/7)",
  "Leak Detection",
  "Other / Not Sure",
];

export default function QuoteForm({ variant = "hero" }: { variant?: Variant }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1100));
    setSubmitting(false);
    setSubmitted(true);
  };

  const isHero = variant === "hero";

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`flex flex-col items-center justify-center gap-4 rounded-3xl p-10 text-center ${
          isHero
            ? "bg-white text-brand-navy shadow-2xl"
            : "bg-brand-navy text-white"
        }`}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
          <CheckCircle2 className="h-9 w-9" strokeWidth={2} />
        </div>
        <h3 className="font-display text-2xl font-bold">Request received.</h3>
        <p
          className={`max-w-sm text-sm leading-relaxed ${
            isHero ? "text-brand-navy/70" : "text-white/70"
          }`}
        >
          A licensed ELCO technician will reach out within{" "}
          <span className="font-bold">15 minutes</span> during business hours,
          or first thing tomorrow morning.
        </p>
        <a
          href="tel:6787721218"
          className={`mt-2 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
            isHero
              ? "bg-brand-red text-white hover:bg-brand-red/90"
              : "bg-brand-gold text-brand-navy hover:bg-brand-gold/90"
          }`}
        >
          Need it now? Call 678-772-1218
        </a>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`relative grid gap-4 ${
        isHero
          ? "rounded-[28px] bg-white p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] md:p-8"
          : "rounded-[32px] bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-md md:p-10"
      }`}
    >
      {isHero && (
        <div className="absolute -top-3 left-6 inline-flex items-center gap-2 rounded-full bg-brand-red px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-white shadow-lg">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
          Free · No Obligation
        </div>
      )}

      <div>
        <h3
          className={`font-display text-2xl font-bold leading-tight md:text-3xl ${
            isHero ? "text-brand-navy" : "text-white"
          }`}
        >
          Get your free quote
        </h3>
        <p
          className={`mt-1 text-sm ${
            isHero ? "text-brand-navy/60" : "text-white/60"
          }`}
        >
          Same-day callbacks. No fees, no pressure.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <Field
          label="First Name"
          name="firstName"
          placeholder="Jane"
          variant={variant}
          required
        />
        <Field
          label="Last Name"
          name="lastName"
          placeholder="Doe"
          variant={variant}
          required
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          placeholder="(678) 555-0199"
          variant={variant}
          required
        />
        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@email.com"
          variant={variant}
          required
        />
        <SelectField
          label="Service"
          name="service"
          variant={variant}
          options={SERVICES}
          required
        />
        <Field
          label="Zip Code"
          name="zip"
          placeholder="30066"
          maxLength={5}
          variant={variant}
          required
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        data-cursor="Submit"
        className={`group relative mt-2 inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl px-6 py-4 text-sm font-bold uppercase tracking-[0.18em] transition-all duration-300 disabled:cursor-wait ${
          isHero
            ? "bg-brand-navy text-white hover:bg-brand-red"
            : "bg-brand-gold text-brand-navy hover:bg-white"
        }`}
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        {submitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Request My Free Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>

      <p
        className={`text-center text-[11px] leading-relaxed ${
          isHero ? "text-brand-navy/50" : "text-white/50"
        }`}
      >
        By submitting you agree to be contacted by ELCO Plumbing. We never sell
        your data.
      </p>
    </form>
  );
}

function Field({
  label,
  variant,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  variant: Variant;
}) {
  const isHero = variant === "hero";
  return (
    <label className="group flex flex-col gap-1.5">
      <span
        className={`text-[11px] font-semibold uppercase tracking-wider ${
          isHero ? "text-brand-navy/70" : "text-white/70"
        }`}
      >
        {label}
        {props.required && (
          <span className="ml-1 text-brand-red">*</span>
        )}
      </span>
      <input
        {...props}
        className={`w-full rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
          isHero
            ? "border-brand-navy/15 bg-brand-navy/[0.02] text-brand-navy placeholder:text-brand-navy/30 focus:border-brand-red focus:bg-white"
            : "border-white/15 bg-white/5 text-white placeholder:text-white/30 focus:border-brand-gold focus:bg-white/10"
        }`}
      />
    </label>
  );
}

function SelectField({
  label,
  options,
  variant,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  variant: Variant;
  options: string[];
}) {
  const isHero = variant === "hero";
  return (
    <label className="group flex flex-col gap-1.5 md:col-span-1">
      <span
        className={`text-[11px] font-semibold uppercase tracking-wider ${
          isHero ? "text-brand-navy/70" : "text-white/70"
        }`}
      >
        {label}
        {props.required && (
          <span className="ml-1 text-brand-red">*</span>
        )}
      </span>
      <select
        {...props}
        defaultValue=""
        className={`w-full rounded-xl border px-4 py-3 text-sm font-medium transition-colors ${
          isHero
            ? "border-brand-navy/15 bg-brand-navy/[0.02] text-brand-navy focus:border-brand-red focus:bg-white"
            : "border-white/15 bg-white/5 text-white focus:border-brand-gold focus:bg-white/10"
        }`}
      >
        <option value="" disabled>
          Select a service…
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="text-brand-navy">
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}
