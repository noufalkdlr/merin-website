import type { Metadata } from "next";
import { Clock, MapPin } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WHATSAPP_NUMBER, BRAND_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact — Lumière",
  description: "Get in touch with Lumière over WhatsApp for orders and questions.",
};

const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Lumière! I'd like to know more about your candles.",
)}`;

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 text-center lg:py-28">
      <TextReveal
        as="h1"
        text="We'd Love to Hear From You"
        className="font-display text-4xl font-normal text-charcoal sm:text-5xl"
      />
      <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-charcoal/75">
        Questions about a scent, a bulk order, or a gift you&apos;re planning? The
        fastest way to reach {BRAND_NAME} is over WhatsApp — real answers,
        no hold music.
      </p>

      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 inline-flex items-center gap-3 rounded-full bg-charcoal px-9 py-4 text-base font-medium tracking-wide text-cream transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Chat with Us on WhatsApp
      </a>

      <div className="mt-16 grid grid-cols-1 gap-8 border-t border-charcoal/10 pt-12 text-left sm:grid-cols-2">
        <div className="flex gap-3">
          <Clock className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
          <div>
            <h3 className="text-sm font-medium tracking-wide text-charcoal">
              Business Hours
            </h3>
            <p className="mt-1 text-sm text-charcoal/70">
              Monday – Saturday
              <br />
              10:00 AM – 7:00 PM IST
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          <MapPin className="h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
          <div>
            <h3 className="text-sm font-medium tracking-wide text-charcoal">
              Studio
            </h3>
            <p className="mt-1 text-sm text-charcoal/70">
              Lumière Candle Studio
              <br />
              Kalletumkara, Kerala, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
