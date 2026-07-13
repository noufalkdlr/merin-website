"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";

export function BrandStoryStrip() {
  return (
    <section className="bg-cream px-6 py-28 lg:px-16 lg:py-40 xl:px-20">
      <div className="mx-auto max-w-[1920px]">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
          className="max-w-4xl font-display text-4xl font-light leading-[1.15] text-charcoal sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          Every candle is <span className="text-gold">poured by hand</span>, in
          small batches — because a room deserves to smell{" "}
          <span className="font-medium">considered</span>, not manufactured.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          <Link
            href="/about"
            className="mt-10 inline-block text-xs font-medium uppercase tracking-[0.15em] text-burgundy underline decoration-1 underline-offset-4 transition-opacity hover:opacity-70"
          >
            Read Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
