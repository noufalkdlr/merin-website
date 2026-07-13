"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue } from "motion/react";

const LABELS: Record<string, string> = {
  view: "View",
  add: "Add",
};

export function CustomCursor() {
  const [enabled, setEnabled] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches,
  );
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setEnabled(query.matches);
    query.addEventListener("change", update);
    window.addEventListener("resize", update);
    return () => {
      query.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("hide-native-cursor");
      return;
    }
    document.documentElement.classList.add("hide-native-cursor");

    // Position tracks the pointer 1:1 — no spring/lerp smoothing, so the
    // visible cursor never drifts from the actual click target.
    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    }
    function handleOver(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest?.("[data-cursor]");
      setLabel(target ? LABELS[target.getAttribute("data-cursor") ?? ""] ?? null : null);
    }
    function handleLeave() {
      setVisible(false);
    }

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseleave", handleLeave);
      document.documentElement.classList.remove("hide-native-cursor");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100]"
      style={{ x, y, translateX: "-50%", translateY: "-50%", opacity: visible ? 1 : 0 }}
    >
      <motion.span
        initial={false}
        animate={{ scale: label ? 0 : 1 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        style={{ translateX: "-50%", translateY: "-50%" }}
        className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-gold"
      />
      <motion.div
        initial={false}
        animate={{ width: label ? 64 : 0, height: label ? 64 : 0 }}
        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center overflow-hidden rounded-full border border-gold bg-cream"
      >
        {label && (
          <span className="whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.1em] text-charcoal">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
