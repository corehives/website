// ── Sticky Social Media Handles (Floating Left Bar) ─────────────────────────

function BehanceIcon() {
  return (
    <svg
      className="h-4 w-4 fill-current"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-4.321 0-5.625-3.045-5.625-6 0-3.155 1.488-6 5.625-6 4.674 0 5.419 3.504 4.883 6.999h-8.232c.075 1.621.905 2.853 2.843 2.853 1.464 0 2.215-.658 2.584-1.397l3.023.545zm-7.904-4h5.275c-.092-1.328-.857-2.146-2.529-2.146-1.745 0-2.534.887-2.746 2.146zm-9.822-9h5.18c2.261 0 3.82.898 3.82 2.915 0 1.258-.696 2.186-1.776 2.593 1.391.365 2.176 1.492 2.176 3.018 0 2.274-1.897 3.474-4.22 3.474h-5.18v-12zm3.178 4.743h1.803c.877 0 1.49-.408 1.49-1.196 0-.812-.596-1.177-1.472-1.177h-1.821v2.373zm0 4.887h1.965c.983 0 1.707-.464 1.707-1.353 0-.913-.742-1.362-1.725-1.362h-1.947v2.715z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      className="h-4 w-4 fill-current"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      className="h-4 w-4 fill-current"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      className="h-4 w-4 fill-current"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      className="h-4 w-4 fill-current"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socials = [
  {
    name: "Behance",
    href: "https://www.behance.net/corehives",
    icon: BehanceIcon,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/corehives",
    icon: InstagramIcon,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/corehives",
    icon: FacebookIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/corehives",
    icon: LinkedinIcon,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@corehives",
    icon: YoutubeIcon,
  },
];

export default function SocialSidebar() {
  return (
    <aside
      aria-label="Social media links"
      className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-2.5 sm:gap-3"
    >
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <div key={social.name} className="group relative flex items-center">
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow CoreHives on ${social.name}`}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-white/20 bg-black/85 text-white/90 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-[#07BEB8] hover:text-[#07BEB8] hover:shadow-[0_0_16px_rgba(7,190,184,0.45)]"
            >
              <Icon />
            </a>

            {/* Tooltip on hover */}
            <span
              role="tooltip"
              className="pointer-events-none absolute left-full ml-3 hidden whitespace-nowrap rounded-md border border-white/10 bg-[#121620] px-2.5 py-1 text-xs font-medium text-white shadow-xl opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:inline-block"
            >
              {social.name}
            </span>
          </div>
        );
      })}
    </aside>
  );
}

