"use client";

import { Phone, MapPin, Mail, Clock, ShieldCheck, Award, AlertOctagon, ArrowUpRight } from "lucide-react";
import Logo from "../Logo";

const SERVICE_LINKS = [
  { label: "Plumbing Repair", href: "#services" },
  { label: "Drain Cleaning", href: "#services" },
  { label: "Water Heater Install", href: "#services" },
  { label: "Water Restoration", href: "#services" },
  { label: "Leak Detection", href: "#services" },
  { label: "24/7 Emergency", href: "#services" },
];

const COMPANY_LINKS = [
  { label: "About ELCO", href: "#why" },
  { label: "Service Areas", href: "#areas" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Free Quote", href: "#free-quote" },
  { label: "Call Now", href: "tel:6787721218" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy text-white">
      {/* Top emergency strip */}
      <div className="relative bg-gradient-to-r from-brand-red via-[#a30d24] to-brand-red">
        <div className="container-fluid flex flex-col items-center justify-between gap-3 py-5 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/20">
              <AlertOctagon className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-display text-base font-bold leading-tight">
                Got a plumbing emergency right now?
              </p>
              <p className="text-xs text-white/80">
                We dispatch 24/7. No after-hours surprise fees.
              </p>
            </div>
          </div>
          <a
            href="tel:6787721218"
            data-cursor="Call 24/7"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wider text-brand-red transition-all hover:scale-[1.02] hover:bg-brand-gold hover:text-brand-navy"
          >
            <Phone className="h-4 w-4" />
            678-772-1218
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      <div className="relative">
        {/* BG decoration */}
        <div className="absolute inset-0 -z-0 opacity-50">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,197,24,0.10),transparent_60%)]" />
        </div>

        <div className="container-fluid relative grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:py-20">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Logo dark />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/65">
              Family-owned plumbing serving Marietta, Cobb County and the
              greater Atlanta area since 2010. If water runs through it — we do it.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:6787721218"
                className="group flex items-start gap-3 text-sm"
                data-cursor="Call"
              >
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-gold" />
                <div>
                  <p className="font-bold text-white group-hover:text-brand-gold transition-colors">
                    678-772-1218
                  </p>
                  <p className="text-xs text-white/50">24/7 emergency line</p>
                </div>
              </a>
              <a
                href="mailto:hello@elcoplumbing.com"
                className="group flex items-start gap-3 text-sm"
                data-cursor="Email"
              >
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-gold" />
                <div>
                  <p className="font-bold text-white group-hover:text-brand-gold transition-colors">
                    hello@elcoplumbing.com
                  </p>
                  <p className="text-xs text-white/50">Reply within 1 hour</p>
                </div>
              </a>
              <a
                href="https://maps.google.com/?q=2520+Ruger+Dr+NE+Marietta+GA+30066"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 text-sm"
                data-cursor="Directions"
              >
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-gold" />
                <div>
                  <p className="font-bold text-white group-hover:text-brand-gold transition-colors">
                    2520 Ruger Dr NE
                  </p>
                  <p className="text-xs text-white/50">Marietta, GA 30066</p>
                </div>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
              Services
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="link-underline text-sm text-white/75 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
              Company
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="link-underline text-sm text-white/75 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + credentials */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.25em] text-brand-gold">
              Hours
            </h4>
            <ul className="mt-5 flex flex-col gap-2 text-sm">
              <li className="flex justify-between gap-4 text-white/75">
                <span>Mon–Fri</span>
                <span className="font-bold text-white">7am – 7pm</span>
              </li>
              <li className="flex justify-between gap-4 text-white/75">
                <span>Saturday</span>
                <span className="font-bold text-white">8am – 5pm</span>
              </li>
              <li className="flex justify-between gap-4 text-white/75">
                <span>Sunday</span>
                <span className="font-bold text-white">By appointment</span>
              </li>
              <li className="mt-2 flex items-center justify-between gap-4 rounded-xl border border-brand-gold/20 bg-brand-gold/10 px-3 py-2 text-xs">
                <span className="flex items-center gap-2 text-brand-gold">
                  <Clock className="h-3.5 w-3.5" />
                  Emergency line
                </span>
                <span className="font-bold text-brand-gold">24 / 7</span>
              </li>
            </ul>

            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-xs text-white/60">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                Licensed · Bonded · Insured
              </div>
              <div className="flex items-center gap-2 text-xs text-white/60">
                <Award className="h-4 w-4 text-emerald-400" />
                Georgia Master Plumber MP209123
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container-fluid flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 md:flex-row">
            <p>
              © {new Date().getFullYear()} ELCO Plumbing. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Accessibility</span>
              <span className="flex items-center gap-2 text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                Made in Marietta, GA
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
