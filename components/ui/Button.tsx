import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  primary: {
    base: "bg-charcoal",
    text: "text-cream",
    fill: "bg-charcoal-light",
  },
  outline: {
    base: "border border-charcoal",
    text: "text-charcoal group-hover:text-cream",
    fill: "bg-charcoal",
  },
  "outline-light": {
    base: "border border-cream/40",
    text: "text-cream group-hover:text-charcoal",
    fill: "bg-cream",
  },
  ghost: {
    base: "",
    text: "text-charcoal group-hover:text-burgundy",
    fill: "",
  },
} as const;

type Variant = keyof typeof VARIANTS;

interface BaseProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  cursorLabel?: string;
  arrow?: boolean;
}

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", className, children, cursorLabel, arrow, ...rest } = props;
  const { base, text, fill } = VARIANTS[variant];

  const classes = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-sm px-7 py-3.5 text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-300",
    base,
    className,
  );

  const content = (
    <>
      {fill && (
        <span
          aria-hidden="true"
          className={cn(
            "absolute inset-0 origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:scale-x-100",
            fill,
          )}
        />
      )}
      <span
        className={cn(
          "relative z-10 inline-flex items-center gap-2.5 transition-colors duration-300",
          text,
        )}
      >
        {children}
        {arrow && (
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
            strokeWidth={1.75}
          />
        )}
      </span>
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <Link href={href} className={classes} data-cursor={cursorLabel} {...anchorRest}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      data-cursor={cursorLabel}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
