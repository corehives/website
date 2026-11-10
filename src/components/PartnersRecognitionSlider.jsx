import { useMemo } from "react";

// ── Row 1 Logos: Press & Industry Platforms ──────────────────────────────────
function ForbesLogo() {
  return (
    <span className="font-serif font-black text-2xl tracking-tighter text-white italic select-none">
      Forbes
    </span>
  );
}

function EntrepreneurLogo() {
  return (
    <span className="font-serif font-semibold text-lg sm:text-xl tracking-tight text-white select-none">
      Entrepreneur
    </span>
  );
}

function BusinessWeekLogo() {
  return (
    <div className="bg-[#B91C1C] px-3 py-1 rounded border border-white/20 select-none flex items-center justify-center">
      <span className="font-serif font-bold text-xs sm:text-sm tracking-tight text-white">
        BusinessWeek
      </span>
    </div>
  );
}

function IncLogo() {
  return (
    <span className="font-serif font-black text-2xl sm:text-3xl text-white tracking-tight select-none">
      Inc.
    </span>
  );
}

function BloombergLogo() {
  return (
    <span className="font-sans font-black text-lg sm:text-xl tracking-tight text-white select-none">
      Bloomberg
    </span>
  );
}

function NprLogo() {
  return (
    <div className="flex items-center gap-1 select-none">
      <span className="w-6 h-6 rounded-xs bg-[#1F242C] text-white flex items-center justify-center font-bold text-sm">
        n
      </span>
      <span className="w-6 h-6 rounded-xs bg-[#D9383A] text-white flex items-center justify-center font-bold text-sm">
        p
      </span>
      <span className="w-6 h-6 rounded-xs bg-[#2B7BB9] text-white flex items-center justify-center font-bold text-sm">
        r
      </span>
    </div>
  );
}

function MetaPartnerLogo() {
  return (
    <div className="flex flex-col items-center justify-center gap-0.5 select-none">
      <div className="flex items-center gap-1.5">
        <svg
          className="w-5 h-3.5 text-[#0081FB]"
          viewBox="0 0 36 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18 10.3c-2.4-3.6-5.4-5.8-8.8-5.8C4.1 4.5 0 8.7 0 13.9 0 19.1 4.1 23.3 9.2 23.3c3.4 0 6.4-2.2 8.8-5.8 2.4 3.6 5.4 5.8 8.8 5.8 5.1 0 9.2-4.2 9.2-9.4 0-5.2-4.1-9.4-9.2-9.4-3.4 0-6.4 2.2-8.8 5.8zm-8.8 9c-2.8 0-5-2.2-5-5s2.2-5 5-5c2.4 0 4.6 2 6.5 5-1.9 3-4.1 5-6.5 5zm17.6 0c-2.4 0-4.6-2-6.5-5 1.9-3 4.1-5 6.5-5 2.8 0 5 2.2 5 5s-2.2 5-5 5z" />
        </svg>
        <span className="font-bold text-sm text-white">Meta</span>
      </div>
      <span className="text-[10px] text-gray-300 font-medium tracking-tight">
        Business Partner
      </span>
    </div>
  );
}

function ZendeskLogo() {
  return (
    <div className="flex flex-col items-center justify-center gap-1 select-none">
      <svg
        className="w-5 h-5 text-white"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M10.8 4.2v9.3L1.5 4.2h9.3zm2.4 15.6v-9.3l9.3 9.3h-9.3zM1.5 15.1c0-2.6 2.1-4.7 4.7-4.7h4.6v4.7c0 2.6-2.1 4.7-4.7 4.7H1.5v-4.7zm17.8-6.2c0 2.6-2.1 4.7-4.7 4.7H10V8.9c0-2.6 2.1-4.7 4.7-4.7h4.6v4.7z" />
      </svg>
      <span className="font-bold text-xs tracking-wider text-white">
        zendesk
      </span>
    </div>
  );
}

function TechCrunchLogo() {
  return (
    <div className="flex items-center gap-1.5 font-bold text-base text-white select-none">
      <span className="bg-[#00D664] text-black font-black text-xs px-1.5 py-0.5 rounded-xs">
        TC
      </span>
      <span>TechCrunch</span>
    </div>
  );
}

function WsjLogo() {
  return (
    <span className="font-serif font-bold text-xs tracking-widest text-white uppercase select-none">
      The Wall Street Journal
    </span>
  );
}

// ── Row 2 Logos: Certifications & Recognition Badges ─────────────────────────
function MenaAwardsBadge() {
  return (
    <div className="bg-[#171B30] border border-[#F59E0B]/50 rounded px-2.5 py-1.5 flex flex-col items-center text-center select-none shadow-sm">
      <span className="text-[8px] font-bold text-[#F59E0B] tracking-wider uppercase leading-none">
        MENA 2017
      </span>
      <span className="text-[9.5px] font-black text-white tracking-tight uppercase leading-tight mt-0.5">
        Search Awards
      </span>
      <span className="text-[7.5px] font-extrabold text-[#FBBF24] tracking-widest uppercase leading-none mt-0.5">
        Winner
      </span>
    </div>
  );
}

function HubSpotCertifiedBadge() {
  return (
    <div className="flex items-center gap-2 bg-[#1C222C] border border-white/10 rounded-lg px-2.5 py-1.5 select-none shadow-sm">
      <div className="flex flex-col text-left">
        <span className="text-xs font-bold text-white tracking-tight leading-none">
          HubSpot
        </span>
        <span className="text-[8px] text-gray-400 font-semibold uppercase tracking-tight mt-0.5">
          Certified Partner
        </span>
      </div>
      <div className="w-6 h-6 rounded-full bg-[#FF7A59] flex items-center justify-center text-white text-[11px] shrink-0">
        🤝
      </div>
    </div>
  );
}

function MicrosoftSelectBadge() {
  return (
    <div className="flex items-center gap-2 bg-[#181A26] border border-white/10 rounded-lg px-2.5 py-1.5 select-none shadow-sm">
      <span className="bg-[#523FA8] text-[7.5px] font-bold text-white px-1 py-0.5 rounded [writing-mode:vertical-lr] rotate-180">
        2025
      </span>
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1">
          <span className="grid grid-cols-2 gap-0.5 shrink-0">
            <span className="w-1.5 h-1.5 bg-[#F25022]" />
            <span className="w-1.5 h-1.5 bg-[#7FBA00]" />
            <span className="w-1.5 h-1.5 bg-[#00A4EF]" />
            <span className="w-1.5 h-1.5 bg-[#FFB900]" />
          </span>
          <span className="text-[8px] text-gray-400 font-medium leading-none">
            Microsoft Advertising
          </span>
        </div>
        <span className="text-xs font-bold text-white tracking-tight mt-0.5 leading-none">
          Select Partner
        </span>
      </div>
    </div>
  );
}

function HubSpotArchitectureBadge() {
  return (
    <div className="w-16 h-18 relative flex flex-col items-center justify-center bg-white/[0.03] border-2 border-[#E53E3E]/70 rounded-t-lg rounded-b-2xl p-1 text-center shadow-md select-none">
      <span className="text-[7px] font-bold text-[#E53E3E] uppercase leading-none">
        HubSpot
      </span>
      <span className="text-[6.5px] font-black text-white leading-tight uppercase mt-0.5">
        Solutions Architecture
      </span>
      <span className="text-[5.5px] text-gray-300 leading-none mt-0.5 uppercase tracking-tight">
        Accreditation
      </span>
    </div>
  );
}

function TikTokPartnerBadge() {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg
        className="w-5 h-5 text-white shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298 0 .59.05.86.15V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.5 6.3 6.3 0 0 0 1.86-4.49V8.71a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.86-.14z" />
      </svg>
      <div className="flex flex-col text-left">
        <span className="text-xs font-bold text-white tracking-tight leading-none">
          TikTok
        </span>
        <span className="text-[9px] text-gray-400 font-medium leading-none mt-0.5">
          Marketing Partner
        </span>
      </div>
    </div>
  );
}

function TwilioPreferredBadge() {
  return (
    <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#EF4444] bg-[#EF4444]/10 flex flex-col items-center justify-center text-center p-1 select-none shadow-sm">
      <span className="text-[6.5px] font-bold text-gray-300 uppercase leading-none">
        Twilio SendGrid
      </span>
      <div className="bg-[#EF4444] text-white text-[8px] font-black px-1.5 py-0.5 rounded my-0.5 uppercase tracking-wider">
        Preferred
      </div>
      <span className="text-[6.5px] font-semibold text-gray-300 leading-none uppercase">
        Partner
      </span>
    </div>
  );
}

function GooglePartnerBadge() {
  return (
    <div className="flex items-center gap-2 select-none">
      <svg
        className="w-6 h-6 shrink-0"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        />
      </svg>
      <div className="flex flex-col text-left">
        <span className="text-xs font-bold text-white tracking-tight leading-none">
          Google
        </span>
        <span className="text-[10px] text-gray-300 font-medium leading-none mt-0.5">
          Partner
        </span>
      </div>
    </div>
  );
}

function HubSpotEliteBadge() {
  return (
    <div className="w-16 h-18 relative flex flex-col items-center justify-center bg-white/[0.03] border-2 border-[#00A389]/70 rounded-t-lg rounded-b-2xl p-1 text-center shadow-md select-none">
      <span className="text-[7px] font-bold text-[#00A389] uppercase leading-none">
        HubSpot
      </span>
      <div className="bg-[#EF4444] text-white text-[7px] font-black px-1.5 py-0.5 rounded my-0.5 uppercase tracking-wider w-full">
        Elite
      </div>
      <span className="text-[6px] text-gray-300 leading-none uppercase">
        Partner
      </span>
    </div>
  );
}

function AwsPartnerBadge() {
  return (
    <div className="flex items-center gap-2 bg-[#181C26] border border-white/10 rounded-lg px-2.5 py-1.5 select-none shadow-sm">
      <span className="text-sm font-black text-[#FF9900]">aws</span>
      <div className="flex flex-col text-left">
        <span className="text-[7.5px] text-gray-400 font-medium leading-none">
          Partner Network
        </span>
        <span className="text-[9.5px] font-bold text-white leading-none mt-0.5">
          Select Tier
        </span>
      </div>
    </div>
  );
}

function ShopifyPlusBadge() {
  return (
    <div className="flex items-center gap-2 select-none">
      <span className="text-lg">🛍️</span>
      <div className="flex flex-col text-left">
        <span className="text-xs font-bold text-white leading-none">
          shopify
        </span>
        <span className="text-[9px] text-[#95BF47] font-semibold leading-none mt-0.5">
          Plus Partner
        </span>
      </div>
    </div>
  );
}

// ── Card Wrapper (Styled like Our Tech Stack) ────────────────────────────────
function CardItem({ children }) {
  return (
    <div className="w-40 sm:w-48 h-24 sm:h-28 rounded-2xl border border-white/5 bg-[#031111]/40 flex items-center justify-center px-4 py-2 hover:border-[#07BEB8]/40 hover:bg-[#051e1e]/50 hover:shadow-[0_0_24px_rgba(7,190,184,0.18)] hover:scale-[1.03] transition-all duration-300 shrink-0 backdrop-blur-md">
      {children}
    </div>
  );
}

export default function PartnersRecognitionSlider() {
  const row1Items = useMemo(
    () => [
      <ForbesLogo key="forbes" />,
      <EntrepreneurLogo key="entrepreneur" />,
      <BusinessWeekLogo key="businessweek" />,
      <IncLogo key="inc" />,
      <BloombergLogo key="bloomberg" />,
      <NprLogo key="npr" />,
      <MetaPartnerLogo key="meta" />,
      <ZendeskLogo key="zendesk" />,
      <TechCrunchLogo key="tc" />,
      <WsjLogo key="wsj" />,
    ],
    []
  );

  const row2Items = useMemo(
    () => [
      <MenaAwardsBadge key="mena" />,
      <HubSpotCertifiedBadge key="hubspot-cert" />,
      <MicrosoftSelectBadge key="ms-select" />,
      <HubSpotArchitectureBadge key="hubspot-arch" />,
      <TikTokPartnerBadge key="tiktok" />,
      <TwilioPreferredBadge key="twilio" />,
      <GooglePartnerBadge key="google" />,
      <HubSpotEliteBadge key="hubspot-elite" />,
      <AwsPartnerBadge key="aws" />,
      <ShopifyPlusBadge key="shopify" />,
    ],
    []
  );

  return (
    <section
      aria-label="Partners and Recognition"
      className="section-auto-render relative w-full overflow-hidden bg-[#000405] py-20 px-4 sm:px-6 lg:py-24 border-b border-white/5"
    >
      <style>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-left 36s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-right 36s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Subtle Background Mesh Glows (matching Our Tech Stack) */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/4 w-[400px] h-[400px] z-0 opacity-15 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #07BEB8 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-1/4 w-[400px] h-[400px] z-0 opacity-10 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #07BEB8 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Left/Right Edge Fades */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 md:w-48 bg-gradient-to-r from-[#000405] via-[#000405]/80 to-transparent z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 md:w-48 bg-gradient-to-l from-[#000405] via-[#000405]/80 to-transparent z-10"
        aria-hidden="true"
      />

      {/* Header — Styled like Our Tech Stack */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
        <span className="inline-block text-[#07BEB8] text-xs font-semibold tracking-[0.25em] uppercase mb-4 px-4 py-1.5 rounded-full border border-[#07BEB8]/30 bg-[#07BEB8]/[0.06]">
          Partners &amp; Recognition
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mt-2">
          Recognized by <span className="precision-gradient">Industry Leaders</span>
        </h2>
        <p className="mt-4 text-white/50 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Featured across world-renowned media publications and certified by global technology pioneers.
        </p>
      </div>

      {/* Track 1: Moving Left */}
      <div className="relative w-full overflow-hidden mb-4 sm:mb-5">
        <div className="animate-marquee-left gap-4 sm:gap-5 flex items-center">
          {[...row1Items, ...row1Items].map((logo, idx) => (
            <CardItem key={`row1-${idx}`}>{logo}</CardItem>
          ))}
        </div>
      </div>

      {/* Track 2: Moving Right */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee-right gap-4 sm:gap-5 flex items-center">
          {[...row2Items, ...row2Items].map((logo, idx) => (
            <CardItem key={`row2-${idx}`}>{logo}</CardItem>
          ))}
        </div>
      </div>
    </section>
  );
}
