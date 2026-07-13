"use client";

import dynamic from "next/dynamic";

export const CustomCursorLoader = dynamic(
  () => import("./CustomCursor").then((m) => m.CustomCursor),
  { ssr: false },
);
