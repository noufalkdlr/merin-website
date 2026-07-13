import Link from "next/link";
import { BRAND_NAME, NAV_LINKS, WHATSAPP_NUMBER } from "@/lib/constants";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { InstagramIcon, FacebookIcon } from "@/components/ui/SocialIcons";

const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Lumière! I have a question about your candles.",
)}`;

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-cream-dark">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <span className="font-display text-2xl tracking-wide text-charcoal">
              {BRAND_NAME}
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-charcoal/70">
              Hand-poured soy candles, crafted in small batches for rooms that
              deserve a little more warmth.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-charcoal/50">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-charcoal/80 transition-colors hover:text-burgundy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-charcoal/50">
              Get in Touch
            </h3>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-charcoal/80 transition-colors hover:text-burgundy"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat with us
            </a>
            <div className="mt-5 flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-charcoal/60 transition-colors hover:text-burgundy"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-charcoal/60 transition-colors hover:text-burgundy"
              >
                <FacebookIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-charcoal/10 pt-6 text-center text-xs text-charcoal/50">
          © {new Date().getFullYear()} {BRAND_NAME}. Crafted with warmth, poured by hand.
        </div>
      </div>
    </footer>
  );
}
