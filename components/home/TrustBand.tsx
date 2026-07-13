"use client";

import { motion } from "motion/react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/motion";

const USPS = [
  { index: "01", label: "100% Soy Wax", detail: "No paraffin, no shortcuts." },
  {
    index: "02",
    label: "Hand-poured",
    detail: "Small batches, checked by hand.",
  },
  {
    index: "03",
    label: "40+ Hr Burn",
    detail: "Built to outlast the ordinary.",
  },
  { index: "04", label: "Toxin-Free", detail: "Phthalate- and paraben-free." },
];

export function TrustBand() {
  return (
    <section className="bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel text="Why Lumière" light />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.12)}
          className="mt-16 grid grid-cols-1 gap-20 divide-y divide-cream/15 sm:grid-cols-2 sm:gap-14 sm:divide-y-0 lg:grid-cols-4 lg:gap-10"
        >
          {USPS.map(({ index, label, detail }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="relative pb-10 sm:pb-0"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-1 -top-14 select-none font-display text-[6.5rem] font-normal leading-none text-cream/[0.06] lg:text-[7.5rem]"
              >
                {index}
              </span>
              <div className="relative pt-16">
                <h3 className="font-display text-2xl font-normal text-cream">
                  {label}
                </h3>
                <p className="mt-2 text-sm text-cream/55">{detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
