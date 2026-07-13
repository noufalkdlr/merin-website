"use client";

import { motion } from "motion/react";
import { EASE_LUXURY } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  text: string;
  index?: string;
  light?: boolean;
  className?: string;
  /** Set false for content already in view at load (e.g. Hero) to reveal on mount instead of on scroll-into-view. */
  onScroll?: boolean;
}

export function SectionLabel({
  text,
  index,
  light,
  className,
  onScroll = true,
}: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <motion.span
        initial={{ scaleX: 0 }}
        {...(onScroll
          ? { whileInView: { scaleX: 1 }, viewport: { once: true } }
          : { animate: { scaleX: 1 } })}
        transition={{ duration: 0.6, ease: EASE_LUXURY }}
        style={{ transformOrigin: "left" }}
        className="h-px w-8 shrink-0 bg-gold"
      />
      <span
        className={cn(
          "text-xs font-medium uppercase tracking-[0.2em]",
          light ? "text-cream/70" : "text-charcoal/60",
        )}
      >
        {index && <span className="mr-2 text-gold">{index}</span>}
        {text}
      </span>
    </div>
  );
}
