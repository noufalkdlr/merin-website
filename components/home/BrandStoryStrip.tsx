"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { fadeUp } from "@/lib/motion";

export function BrandStoryStrip() {
  return (
    <section className="bg-cream pt-12 pb-28 lg:pt-16 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ fontSize: "clamp(2.25rem, 4.8vw, 2.5rem)" }}
          className="mx-auto max-w-[1400px] font-display font-light leading-[1.15] text-charcoal 2xl:!text-[2.9rem]"
        >
          Every candle is <span className="text-burgundy">poured by hand</span>, in<br className="hidden lg:inline" /> small batches — because a room<br className="hidden lg:inline" /> deserves to smell considered, not<br className="hidden lg:inline" /> manufactured.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
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
