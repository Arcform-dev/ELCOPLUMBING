"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const AREAS = [
  { name: "Marietta", primary: true },
  { name: "Kennesaw", primary: true },
  { name: "Smyrna", primary: true },
  { name: "Acworth" },
  { name: "Powder Springs" },
  { name: "Austell" },
  { name: "Mableton" },
  { name: "Vinings" },
  { name: "Sandy Springs" },
  { name: "Roswell" },
  { name: "Alpharetta" },
  { name: "Woodstock" },
  { name: "Canton" },
  { name: "Cartersville" },
  { name: "Dallas" },
  { name: "Hiram" },
  { name: "Douglasville" },
  { name: "Lithia Springs" },
  { name: "Powers Park" },
  { name: "East Cobb" },
  { name: "West Cobb" },
  { name: "Brookhaven" },
  { name: "Dunwoody" },
  { name: "Holly Springs" },
];

export default function ServiceAreas() {
  return (
    <section
      id="areas"
      className="relative overflow-hidden bg-white py-24 md:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(27,42,74,0.06),transparent_60%)]" />
      </div>

      <div className="container-fluid">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-2">
          <div>
            <span className="section-eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Service Area
            </span>
            <h2 className="mt-6 heading-section text-brand-navy">
              Based in Marietta.
              <br />
              <span className="italic text-brand-red">Serving 50 miles in every direction.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-brand-navy/70 lg:max-w-md lg:justify-self-end">
            Our trucks roll out of Ruger Drive in Marietta and cover Cobb
            County, north Atlanta and the surrounding metro corridors. If
            you're not sure we cover your address — call us. Odds are we do.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {AREAS.map((area, i) => (
            <motion.span
              key={area.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.45,
                delay: i * 0.025,
                ease: [0.22, 1, 0.36, 1],
              }}
              data-cursor="Covered"
              className={`group relative inline-flex cursor-pointer items-center gap-2 rounded-full border px-5 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg ${
                area.primary
                  ? "border-brand-red bg-brand-red text-white hover:bg-brand-red/90 hover:shadow-brand-red/30"
                  : "border-brand-navy/15 bg-white text-brand-navy hover:border-brand-red hover:text-brand-red"
              }`}
            >
              <MapPin
                className={`h-3.5 w-3.5 transition-transform group-hover:scale-125 ${
                  area.primary ? "text-brand-gold" : "text-brand-red"
                }`}
              />
              {area.name}
              {area.primary && (
                <span className="ml-1 rounded-full bg-brand-gold px-1.5 py-0.5 text-[9px] uppercase tracking-wider text-brand-navy">
                  HQ
                </span>
              )}
            </motion.span>
          ))}
          <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-brand-navy/30 px-5 py-3 text-sm font-medium text-brand-navy/60">
            + surrounding communities
          </span>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 rounded-3xl bg-brand-navy/[0.03] p-8 text-center md:flex-row md:gap-8 md:p-10 md:text-left">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-navy text-brand-gold">
            <Navigation className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <p className="font-display text-xl font-bold text-brand-navy md:text-2xl">
              Don't see your city?
            </p>
            <p className="mt-1 text-sm text-brand-navy/60">
              We probably still serve you. Call 678-772-1218 and we'll confirm
              same-day coverage on the spot.
            </p>
          </div>
          <a
            href="tel:6787721218"
            data-cursor="Call now"
            className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all hover:bg-brand-red"
          >
            Check my area
          </a>
        </div>
      </div>
    </section>
  );
}
