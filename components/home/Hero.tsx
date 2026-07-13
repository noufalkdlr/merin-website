"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { TextReveal } from "@/components/ui/TextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { DURATION, EASE_LUXURY } from "@/lib/motion";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const candleY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const candleScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-charcoal">
      <div className="mx-auto flex min-h-[100svh] max-w-[1920px] flex-col lg:flex-row">
        {/* Text — its own column, never overlapped by the candle */}
        <div className="relative z-10 flex flex-1 flex-col justify-center px-6 pb-14 pt-36 lg:w-[54%] lg:flex-none lg:px-16 lg:py-0 xl:px-20">
          <SectionLabel text="Hand-Poured, Small-Batch" index="01" light onScroll={false} />

          <TextReveal
            as="h1"
            text="Warmth, poured by hand."
            onScroll={false}
            className="mt-8 font-display text-[15vw] font-normal leading-[1.03] text-cream sm:text-[10vw] lg:text-[5.2vw] xl:text-[4.6vw]"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.6 }}
            className="mt-8 max-w-md text-base leading-relaxed text-cream/70 lg:text-lg"
          >
            Lumière crafts small-batch soy candles — clean-burning,
            thoughtfully scented, and finished by hand for rooms that
            deserve a little more care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.8 }}
            className="mt-10"
          >
            <Button href="/shop" variant="outline-light" arrow>
              Shop the Collection
            </Button>
          </motion.div>
        </div>

        {/* Candle — the dominant visual, large and uncontested by text */}
        <div className="relative flex flex-1 items-center justify-center overflow-hidden px-6 pb-16 lg:pb-0">
          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.4, 0.65, 0.4], scale: [1, 1.1, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-[65%] w-[65%] rounded-full bg-gold/25 blur-3xl"
          />
          <motion.div style={{ y: candleY, scale: candleScale }} className="relative">
            <Image
              src="/images/hero-candle.png"
              alt="A hand-poured Lumière candle, lit"
              width={1196}
              height={1919}
              priority
              className="h-[42vh] w-auto object-contain drop-shadow-2xl sm:h-[50vh] lg:h-[64vh] xl:h-[72vh]"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION.slow, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-cream/50">
          Scroll
        </span>
        <motion.span
          animate={{ scaleY: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px origin-top bg-cream/40"
        />
      </motion.div>
    </section>
  );
}
