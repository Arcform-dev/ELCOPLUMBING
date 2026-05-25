"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Jennifer Hollis",
    location: "Marietta, GA",
    initials: "JH",
    color: "from-rose-500 to-rose-700",
    quote:
      "I had a burst pipe under my kitchen sink at 9 a.m. on a Tuesday and water was spreading fast. I called ELCO and a plumber was at my door in under two hours. He shut it off, replaced the line, dried the cabinet, and was gone before lunch. Fair, professional, no upsells — exactly what I needed in a panic.",
    job: "Burst pipe · same-day repair",
  },
  {
    name: "Marcus Webb",
    location: "Kennesaw, GA",
    initials: "MW",
    color: "from-blue-500 to-blue-700",
    quote:
      "Our 12-year-old water heater finally gave out the weekend before Thanksgiving. ELCO quoted me about $400 less than the other shop I called and had a new 50-gallon installed by 2 p.m. the next day. They hauled the old one away, vacuumed the closet, and even labeled the shut-off valve. Spotless work.",
    job: "Water heater replacement",
  },
  {
    name: "Denise Trammell",
    location: "Cobb County, GA",
    initials: "DT",
    color: "from-amber-500 to-amber-700",
    quote:
      "Main drain backed up on a Sunday evening — the kind of mess you absolutely don't want. Most places sent me to voicemail or quoted an after-hours premium that felt punitive. ELCO picked up on the second ring, told me the flat after-hours rate up front, and had it cleared in 45 minutes. Transparent and honest people.",
    job: "After-hours drain cleaning",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-brand-navy py-24 md:py-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,197,24,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(200,16,46,0.10),transparent_50%)]" />
      </div>

      <div className="container-fluid">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-3 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
            Real Reviews · Real Neighbors
          </span>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            247+ Cobb County homeowners
            <br />
            <span className="italic text-brand-gold">trust ELCO with their pipes.</span>
          </h2>
          <div className="mt-6 flex items-center gap-3 text-white/80">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-brand-gold text-brand-gold"
                />
              ))}
            </div>
            <span className="font-bold">4.9 · 247+ reviews</span>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {REVIEWS.map((review, i) => (
            <motion.figure
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/30 hover:bg-white/[0.07]"
            >
              <Quote className="absolute -top-3 left-8 h-10 w-10 fill-brand-red text-brand-red" />

              <div className="mb-5 mt-3 flex">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="h-4 w-4 fill-brand-gold text-brand-gold"
                  />
                ))}
              </div>

              <blockquote className="flex-1 text-[15px] leading-relaxed text-white/85">
                {review.quote}
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-4 border-t border-white/10 pt-5">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${review.color} font-display text-base font-bold text-white shadow-lg`}
                >
                  {review.initials}
                </div>
                <div className="flex-1">
                  <p className="font-display text-base font-bold text-white">
                    {review.name}
                  </p>
                  <p className="text-xs text-white/55">{review.location}</p>
                </div>
              </figcaption>

              <p className="mt-4 inline-flex items-center gap-2 self-start rounded-full bg-brand-gold/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                {review.job}
              </p>
            </motion.figure>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-[0.25em] text-white/40">
          <span>Google</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>Nextdoor</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>BBB A+</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>Yelp</span>
          <span className="h-1 w-1 rounded-full bg-white/20" />
          <span>Angi Super Service</span>
        </div>
      </div>
    </section>
  );
}
