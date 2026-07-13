"use client";

import Image, { type ImageProps } from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { EASE_LUXURY } from "@/lib/motion";

type Direction = "left" | "right" | "top" | "bottom";

interface ImageRevealProps extends ImageProps {
  wrapperClassName?: string;
  direction?: Direction;
}

const ORIGIN: Record<Direction, string> = {
  left: "left",
  right: "right",
  top: "top",
  bottom: "bottom",
};

export function ImageReveal({
  wrapperClassName,
  direction = "left",
  className,
  alt,
  ...imageProps
}: ImageRevealProps) {
  const isHorizontal = direction === "left" || direction === "right";

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      <Image alt={alt} className={cn("object-cover", className)} {...imageProps} />
      <motion.div
        initial={isHorizontal ? { scaleX: 1 } : { scaleY: 1 }}
        whileInView={isHorizontal ? { scaleX: 0 } : { scaleY: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.8, ease: EASE_LUXURY }}
        style={{ transformOrigin: ORIGIN[direction] }}
        className="absolute inset-0 bg-cream"
      />
    </div>
  );
}
