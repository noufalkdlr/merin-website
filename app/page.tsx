import { Hero } from "@/components/home/Hero";
import { BrandStoryStrip } from "@/components/home/BrandStoryStrip";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { TrustBand } from "@/components/home/TrustBand";
import { CategoryShowcase } from "@/components/home/CategoryShowcase";
import { GiftingHighlight } from "@/components/home/GiftingHighlight";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandStoryStrip />
      <FeaturedProducts />
      <TrustBand />
      <CategoryShowcase />
      <GiftingHighlight />
    </>
  );
}
