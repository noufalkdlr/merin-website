"use client";

import { motion } from "motion/react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { fadeUp, staggerContainer } from "@/lib/motion";

const USPS = [
  { index: "01", label: "100% Soy Wax", detail: "No paraffin, no shortcuts." },
  { index: "02", label: "Hand-poured", detail: "Small batches, checked by hand." },
  { index: "03", label: "40+ Hr Burn", detail: "Built to outlast the ordinary." },
  { index: "04", label: "Toxin-Free", detail: "Phthalate- and paraben-free." },
];

export function USPGrid() {
  return (
    <section className="bg-charcoal px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionLabel text="Why Lumière" light />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.12)}
          className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {USPS.map(({ index, label, detail }) => (
            <motion.div key={label} variants={fadeUp} className="border-t border-cream/15 pt-6">
              <span className="font-display text-sm text-gold">{index}/</span>
              <h3 className="mt-3 font-display text-2xl font-normal text-cream">{label}</h3>
              <p className="mt-2 text-sm text-cream/55">{detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
