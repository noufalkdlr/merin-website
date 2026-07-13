"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { DURATION, EASE_LUXURY } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: DURATION.base }}
          className="fixed inset-0 z-50 flex flex-col bg-cream md:hidden"
        >
          <div className="flex items-center justify-end px-6 py-4">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center text-charcoal"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>
          <motion.nav
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: DURATION.slow, ease: EASE_LUXURY, delay: 0.05 }}
            className="flex flex-1 flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    "font-display text-3xl",
                    active ? "text-burgundy" : "text-charcoal",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
