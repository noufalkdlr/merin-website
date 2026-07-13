"use client";

import localFont from "next/font/local";
import Image from "next/image";
import { motion } from "motion/react";
import { TextReveal } from "@/components/ui/TextReveal";
import { Button } from "@/components/ui/Button";
import { DURATION, EASE_LUXURY } from "@/lib/motion";

const zaslia = localFont({
  src: "../../public/fonts/Zaslia.otf",
  variable: "--font-zaslia",
});

export function Hero() {
  return (
<section className="relative overflow-hidden bg-cream">
      <div className="mx-auto flex min-h-[100svh] max-w-[1800px] flex-col items-center justify-center px-6 py-32 text-center lg:px-12">
        <div
          className="relative mx-auto w-full"
          style={{ fontSize: "clamp(5.75rem, 14.7vw, 18rem)" }}
        >
          <TextReveal
            as="h1"
            text="LUMIÈRE"
            onScroll={false}
            className={`${zaslia.className} text-[1em] leading-[0.85] tracking-tight text-charcoal`}
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.3 }}
            className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2"
          >
            <Image
              src="/images/hero-candle.png"
              alt="A hand-poured Lumière candle, lit"
              width={1196}
              height={1919}
              priority
              className="h-[2.14em] w-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.6 }}
          className="mt-28 max-w-lg text-base leading-relaxed text-charcoal/75 lg:mt-32 lg:text-lg"
        >
          Lumière crafts small-batch soy candles - clean-burning, thoughtfully scented,
          and finished by hand for rooms that deserve a little more care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.8 }}
          className="mt-10"
        >
          <Button href="/shop" variant="outline" arrow>
            Shop the Collection
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
