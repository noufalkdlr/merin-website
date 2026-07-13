export const EASE_LUXURY = [0.16, 1, 0.3, 1] as const;
export const EASE_SOFT = [0.65, 0, 0.35, 1] as const;

export const DURATION = {
  fast: 0.2,
  base: 0.3,
  slow: 0.4,
} as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE_LUXURY },
  },
};

export const staggerContainer = (stagger = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.base, ease: EASE_SOFT },
  },
};
