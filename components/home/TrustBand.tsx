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

export function TrustBand() {
  return (
    <section className="bg-charcoal px-6 py-24 lg:px-16 lg:py-32 xl:px-20">
      <div className="mx-auto max-w-[1920px]">
        <SectionLabel text="Why Lumière" light />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer(0.12)}
          className="mt-16 grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10"
        >
          {USPS.map(({ index, label, detail }) => (
            <motion.div key={label} variants={fadeUp} className="relative">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-1 -top-8 select-none font-display text-[6.5rem] font-normal leading-none text-cream/[0.06] lg:text-[7.5rem]"
              >
                {index}
              </span>
              <div className="relative pt-16">
                <h3 className="font-display text-2xl font-normal text-cream">{label}</h3>
                <p className="mt-2 text-sm text-cream/55">{detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
