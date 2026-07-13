"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { TextReveal } from "@/components/ui/TextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { DURATION, EASE_LUXURY } from "@/lib/motion";

const GIFT_IMAGE =
  "https://images.unsplash.com/photo-1577025728734-7ec67bdb97d0?q=80&w=1750&auto=format&fit=crop";

export function GiftingHighlight() {
  return (
    <section className="bg-cream-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: EASE_LUXURY }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-sm lg:aspect-[6/5]"
          >
            <Image
              src={GIFT_IMAGE}
              alt="A Lumière candle gift set, wrapped and ribbon-tied"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <div>
            <SectionLabel text="The Art of Gifting" index="05" onScroll={false} />
            <TextReveal
              as="h2"
              text="Gifts that feel considered"
              onScroll={false}
              className="mt-6 font-display text-4xl font-normal leading-[1.1] text-charcoal sm:text-5xl lg:text-6xl"
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.25 }}
              className="mt-6 max-w-md text-base leading-relaxed text-charcoal/75 lg:text-lg"
            >
              Curated candle sets, ribbon-tied and ready to give — for
              housewarmings, festivals, or simply because someone deserves it.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.4 }}
              className="mt-9"
            >
              <Button href="/shop?category=gift-sets" variant="outline" arrow>
                Explore Gift Sets
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
