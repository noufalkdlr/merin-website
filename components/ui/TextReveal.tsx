"use client";

import type { ElementType } from "react";
import { motion } from "motion/react";
import { EASE_LUXURY } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  /** Set true to reveal on scroll-into-view instead of on mount. Defaults to false — scroll-triggered reveal is unreliable with this site's smooth-scroll setup and can leave content permanently hidden below the fold. */
  onScroll?: boolean;
}

export function TextReveal({
  text,
  as: Tag = "span",
  className,
  delay = 0,
  stagger = 0.06,
  onScroll = false,
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <Tag className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span
          key={i}
          className={cn(
            "inline-block overflow-hidden pb-[0.1em] align-bottom",
            i < words.length - 1 && "mr-[0.25em]",
          )}
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            {...(onScroll
              ? { whileInView: { y: "0%" }, viewport: { once: true, margin: "-10% 0px" } }
              : { animate: { y: "0%" } })}
            transition={{
              duration: 0.5,
              ease: EASE_LUXURY,
              delay: delay + i * stagger,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
