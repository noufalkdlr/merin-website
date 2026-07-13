import type { Metadata } from "next";
import { TextReveal } from "@/components/ui/TextReveal";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { USPGrid } from "@/components/home/USPGrid";
import { BRAND_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About — Lumière",
  description:
    "The story behind Lumière — hand-poured, small-batch soy candles made with care.",
};

const FOUNDER_IMAGE = "/images/founder.jpeg";

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-4 text-center lg:pt-28">
        <TextReveal
          as="h1"
          text="Our Story"
          className="font-display text-4xl font-normal text-charcoal sm:text-5xl"
        />
      </section>

      <section className="mx-auto max-w-3xl px-6 py-12 text-base leading-relaxed text-charcoal/80 lg:py-16">
        <p>
          {BRAND_NAME} began in a small kitchen, with a single pot of soy wax
          and a conviction that candles had gotten lazy — mass-produced,
          synthetic, forgettable. We wanted to make something different: a
          candle that felt considered from the first pour to the last flicker
          of the wick.
        </p>
        <p className="mt-6">
          Every fragrance we carry starts as a scent memory — a garden after
          rain, a grandmother&apos;s kitchen, the inside of a cedar closet —
          before it&apos;s ever blended in a lab. We test every batch by hand, burn
          every candle ourselves before it ships, and reject anything that
          doesn&apos;t smell exactly right. It&apos;s slower than the alternative. We
          think it&apos;s worth it.
        </p>
        <p className="mt-6">
          Today, {BRAND_NAME} is still made in small batches, using 100% soy
          wax, cotton wicks, and fragrance oils that are phthalate- and
          paraben-free. No shortcuts, no fillers — just candles built to be
          burned slowly, in rooms that matter to you.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <ImageReveal
            src={FOUNDER_IMAGE}
            alt="Portrait of Merin Joy, founder of Lumière"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            direction="right"
            wrapperClassName="aspect-[4/5] w-full rounded-md order-2 lg:order-1"
          />
          <div className="order-1 lg:order-2">
            <span className="text-xs font-medium uppercase tracking-widest text-charcoal/50">
              Meet the Maker
            </span>
            <h2 className="mt-3 font-display text-3xl font-normal text-charcoal">
              Merin Joy, Founder
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal/75">
              &ldquo;I started {BRAND_NAME} because I wanted candles that felt
              like they were made for a specific room, a specific mood — not
              pulled off a shelf. Every scent in this collection is one I
              lived with for months before I let it carry our name.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-10 text-center">
        <TextReveal
          as="h2"
          text="What We Stand For"
          className="font-display text-3xl font-normal text-charcoal sm:text-4xl"
        />
      </section>
      <USPGrid />
    </div>
  );
}
