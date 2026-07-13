"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

function LenisRouteResize() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    lenis?.resize();
  }, [lenis, pathname]);

  return null;
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
      }}
    >
      <LenisRouteResize />
      {children}
    </ReactLenis>
  );
}
