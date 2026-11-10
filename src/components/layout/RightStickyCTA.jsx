import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

// ── WhatsApp Icon ────────────────────────────────────────────────────────────
function WhatsAppIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.031 0C5.394 0 0 5.394 0 12.031c0 2.124.555 4.195 1.609 6.02L.055 24l6.155-1.614a12.01 12.01 0 0 0 5.821 1.493h.005c6.632 0 12.026-5.395 12.026-12.031 0-3.212-1.251-6.233-3.522-8.506C18.267 1.25 15.245 0 12.031 0zm0 22.025h-.004a10.01 10.01 0 0 1-5.1-1.396l-.366-.217-3.791.994 1.012-3.696-.239-.38a10.03 10.03 0 0 1-1.536-5.3c0-5.524 4.495-10.02 10.027-10.02a9.96 9.96 0 0 1 7.09 2.936 9.96 9.96 0 0 1 2.934 7.09c0 5.525-4.496 10.022-10.027 10.022zm5.494-7.502c-.301-.151-1.782-.879-2.058-.979-.276-.1-.476-.151-.677.151-.201.301-.778.979-.954 1.18-.176.201-.351.226-.652.075-.301-.151-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.151-.176.201-.301.301-.502.1-.201.05-.376-.025-.527-.075-.151-.677-1.631-.928-2.233-.244-.587-.492-.507-.677-.517-.175-.009-.376-.011-.577-.011s-.527.075-.803.376c-.276.301-1.054 1.029-1.054 2.509 0 1.48 1.079 2.91 1.229 3.111.151.201 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.722.229 1.378.197 1.898.119.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.431-.076-.126-.277-.201-.578-.352z" />
    </svg>
  );
}

const quickContacts = [
  {
    name: "WhatsApp",
    href: "https://wa.me/14157189679",
    icon: WhatsAppIcon,
    ariaLabel: "Chat with CoreHives on WhatsApp",
    tooltip: "Chat on WhatsApp",
  },
  {
    name: "Email",
    href: "mailto:info@corehives.com",
    icon: Mail,
    ariaLabel: "Email CoreHives at info@corehives.com",
    tooltip: "Send an Email",
  },
  {
    name: "Phone",
    href: "tel:+13072008084",
    icon: Phone,
    ariaLabel: "Call CoreHives",
    tooltip: "Call Us: +1 (307) 200-8084",
  },
];

export default function RightStickyCTA() {
  return (
    <aside
      aria-label="Quick contact and quote"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-2.5 sm:gap-3"
    >
      {/* ── Circular Quick-Contact Buttons (WhatsApp, Mail, Phone) ── */}
      {quickContacts.map((contact) => {
        const IconComponent = contact.icon;
        return (
          <div key={contact.name} className="group relative flex items-center mr-2 sm:mr-3">
            {/* Tooltip on hover */}
            <span
              role="tooltip"
              className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md border border-white/10 bg-[#121620] px-2.5 py-1 text-xs font-medium text-white shadow-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:inline-block"
            >
              {contact.tooltip}
            </span>

            <a
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={contact.ariaLabel}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/20 bg-black/85 text-white/90 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#07BEB8] hover:text-[#07BEB8] hover:shadow-[0_0_16px_rgba(7,190,184,0.45)] active:scale-95"
            >
              <IconComponent className="h-4 w-4" />
            </a>
          </div>
        );
      })}

      {/* ── Vertical "Get A Quote!" Pill CTA Button (CoreHives Theme Color) ── */}
      <Link
        to="/contact"
        aria-label="Request a project quote from CoreHives"
        className="group relative flex items-center justify-center rounded-l-2xl border-y border-l border-[#07BEB8]/40 bg-gradient-to-b from-[#07BEB8] via-[#05A39E] to-[#03837E] px-2.5 sm:px-3 py-5 sm:py-6 shadow-[-4px_0_20px_rgba(7,190,184,0.45)] transition-all duration-300 hover:translate-x-[-4px] hover:border-white/50 hover:from-[#09d8d1] hover:via-[#07BEB8] hover:to-[#059691] hover:shadow-[-6px_0_28px_rgba(7,190,184,0.75)] active:scale-95 select-none"
      >
        {/* Subtle inner pulse sheen */}
        <span
          className="pointer-events-none absolute inset-0 rounded-l-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white"
          aria-hidden="true"
        />

        <span className="[writing-mode:vertical-rl] rotate-180 text-xs sm:text-[13px] font-black tracking-widest text-[#000405] whitespace-nowrap uppercase">
          Get A Quote!
        </span>
      </Link>
    </aside>
  );
}

