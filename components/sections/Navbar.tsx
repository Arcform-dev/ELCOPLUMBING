"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Menu, X, Clock, ArrowRight } from "lucide-react";
import Logo from "../Logo";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#areas", label: "Service Areas" },
  { href: "#why", label: "Why ELCO" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top utility bar */}
      <div
        className={`bg-brand-navy text-white transition-[max-height,opacity] duration-500 ${
          scrolled ? "max-h-0 overflow-hidden opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="container-fluid flex items-center justify-between py-2.5 text-[12px]">
          <div className="flex items-center gap-5">
            <a
              href="tel:6787721218"
              className="link-underline flex items-center gap-2 font-medium hover:text-brand-gold"
              data-cursor="Call"
            >
              <Phone className="h-3.5 w-3.5 text-brand-gold" />
              <span className="hidden sm:inline">678-772-1218</span>
              <span className="sm:hidden">Call now</span>
            </a>
            <span className="hidden h-3 w-px bg-white/20 md:block" />
            <span className="hidden items-center gap-2 text-white/80 md:flex">
              <MapPin className="h-3.5 w-3.5 text-brand-gold" />
              Serving Cobb County + 50-mile radius
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-2 text-white/80 lg:flex">
              <Clock className="h-3.5 w-3.5 text-brand-gold" />
              24/7 Emergency Service
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Available now
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <nav
        className={`relative transition-all duration-500 ${
          scrolled
            ? "bg-white/95 shadow-lg shadow-black/5 backdrop-blur-md"
            : "bg-white/0 backdrop-blur-sm"
        }`}
      >
        <div className="container-fluid flex items-center justify-between gap-6 py-4">
          <div
            className={`transition-opacity duration-300 ${
              scrolled ? "opacity-100" : "opacity-100"
            }`}
          >
            <Logo dark={!scrolled} />
          </div>

          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-cursor="View"
                  className={`link-underline text-sm font-semibold tracking-wide transition-colors ${
                    scrolled
                      ? "text-brand-navy hover:text-brand-red"
                      : "text-white hover:text-brand-gold"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="tel:6787721218"
              data-cursor="Call now"
              className={`hidden items-center gap-2 rounded-full px-4 py-2.5 text-sm font-bold transition-all md:inline-flex ${
                scrolled
                  ? "border border-brand-navy/20 text-brand-navy hover:border-brand-red hover:text-brand-red"
                  : "border border-white/30 text-white hover:border-brand-gold hover:text-brand-gold"
              }`}
            >
              <Phone className="h-4 w-4" />
              678-772-1218
            </a>
            <a
              href="#free-quote"
              data-cursor="Quote"
              className="group hidden items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-red/20 transition-all hover:shadow-xl hover:shadow-brand-red/40 md:inline-flex"
            >
              Get Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((s) => !s)}
              className={`flex h-10 w-10 items-center justify-center rounded-xl border lg:hidden ${
                scrolled
                  ? "border-brand-navy/20 text-brand-navy"
                  : "border-white/30 text-white"
              }`}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="border-t border-brand-navy/10 bg-white shadow-xl lg:hidden"
          >
            <div className="container-fluid flex flex-col gap-2 py-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-4 text-base font-semibold text-brand-navy hover:bg-brand-navy/5 hover:text-brand-red"
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 opacity-50" />
                </a>
              ))}
              <div className="mt-3 grid gap-3 border-t border-brand-navy/10 pt-4">
                <a
                  href="tel:6787721218"
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-brand-navy py-3 text-sm font-bold uppercase tracking-wider text-brand-navy"
                >
                  <Phone className="h-4 w-4" />
                  Call 678-772-1218
                </a>
                <a
                  href="#free-quote"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-brand-red py-3 text-sm font-bold uppercase tracking-wider text-white"
                >
                  Get Free Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
