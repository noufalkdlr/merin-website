import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { CartProvider } from "@/components/cart/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursorLoader } from "@/components/layout/CustomCursorLoader";
import { GrainOverlay } from "@/components/ui/GrainOverlay";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lumière — Premium Hand-Poured Candles",
  description:
    "Lumière crafts hand-poured, 100% soy wax candles with clean-burning, toxin-free fragrance blends — designed to turn any room into a ritual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-cream text-charcoal">
        <CartProvider>
          <SmoothScrollProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
          </SmoothScrollProvider>
          <CustomCursorLoader />
        </CartProvider>
        <GrainOverlay />
      </body>
    </html>
  );
}
