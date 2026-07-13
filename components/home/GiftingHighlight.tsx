"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { TextReveal } from "@/components/ui/TextReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { DURATION, EASE_LUXURY } from "@/lib/motion";

const GIFT_IMAGE =
  "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=1800&q=80&auto=format&fit=crop";

export function GiftingHighlight() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative h-[70vh] overflow-hidden lg:h-[88vh]">
      <motion.div style={{ y: imageY }} className="absolute inset-0 -top-[8%] h-[116%] w-full">
        <Image
          src={GIFT_IMAGE}
          alt="A Lumière candle gift set, wrapped and ribbon-tied"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-charcoal/55" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <SectionLabel text="The Art of Gifting" index="05" light />
        <TextReveal
          as="h2"
          text="Gifts that feel considered"
          className="mt-6 font-display text-5xl font-normal text-cream sm:text-6xl lg:text-7xl"
        />
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.2 },
            },
          }}
          className="mx-auto mt-6 max-w-md text-base leading-relaxed text-cream/80 lg:text-lg"
        >
          Curated candle sets, ribbon-tied and ready to give — for
          housewarmings, festivals, or simply because someone deserves it.
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.35 },
            },
          }}
          className="mt-8"
        >
          <Button href="/shop?category=gift-sets" variant="outline-light" arrow>
            Explore Gift Sets
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
