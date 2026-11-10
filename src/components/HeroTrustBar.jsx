import { Star, Users, Rocket, Calendar } from "lucide-react";

function GoogleIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
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
  );
}

export default function HeroTrustBar() {
  return (
    <section
      aria-label="CoreHives Highlights & Credentials"
      className="relative z-20 w-full border-y border-white/10 bg-black/90 py-5 sm:py-6 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-3 lg:flex lg:items-center lg:justify-between lg:gap-0">
          {/* Item 1: 5-Star Rated Agency */}
          <div className="flex items-center gap-3 sm:gap-3.5 justify-start">
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] shadow-sm">
              <Star className="h-5 w-5 fill-[#FFB800] text-[#FFB800]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm sm:text-base font-bold text-white tracking-tight leading-none">
                5-Star
              </span>
              <span className="text-xs sm:text-[13px] text-gray-400 font-normal leading-tight mt-1">
                Rated Agency
              </span>
            </div>
          </div>

          {/* Divider */}
          <div
            className="hidden h-8 w-px bg-white/15 lg:block"
            aria-hidden="true"
          />

          {/* Item 2: 500+ Trusted Clients */}
          <div className="flex items-center gap-3 sm:gap-3.5 justify-start">
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] shadow-sm">
              <Users className="h-5 w-5 text-white/90" strokeWidth={1.75} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm sm:text-base font-bold text-white tracking-tight leading-none">
                500+
              </span>
              <span className="text-xs sm:text-[13px] text-gray-400 font-normal leading-tight mt-1">
                Trusted Clients
              </span>
            </div>
          </div>

          {/* Divider */}
          <div
            className="hidden h-8 w-px bg-white/15 lg:block"
            aria-hidden="true"
          />

          {/* Item 3: 1,500+ Projects Delivered */}
          <div className="flex items-center gap-3 sm:gap-3.5 justify-start">
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] shadow-sm">
              <Rocket className="h-5 w-5 text-white/90" strokeWidth={1.75} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm sm:text-base font-bold text-white tracking-tight leading-none">
                1,500+
              </span>
              <span className="text-xs sm:text-[13px] text-gray-400 font-normal leading-tight mt-1">
                Projects Delivered
              </span>
            </div>
          </div>

          {/* Divider */}
          <div
            className="hidden h-8 w-px bg-white/15 lg:block"
            aria-hidden="true"
          />

          {/* Item 4: 12+ Years in the UAE */}
          <div className="flex items-center gap-3 sm:gap-3.5 justify-start">
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] shadow-sm">
              <Calendar className="h-5 w-5 text-white/90" strokeWidth={1.75} />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm sm:text-base font-bold text-white tracking-tight leading-none">
                12+
              </span>
              <span className="text-xs sm:text-[13px] text-gray-400 font-normal leading-tight mt-1">
                Years in the USA
              </span>
            </div>
          </div>

          {/* Divider */}
          <div
            className="hidden h-8 w-px bg-white/15 lg:block"
            aria-hidden="true"
          />

          {/* Item 5: Google Certified Partner */}
          <div className="flex items-center gap-3 sm:gap-3.5 justify-start col-span-2 sm:col-span-1 justify-self-center sm:justify-self-start">
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] shadow-sm">
              <GoogleIcon className="h-5 w-5" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm sm:text-base font-bold text-white tracking-tight leading-none">
                Google
              </span>
              <span className="text-xs sm:text-[13px] text-gray-400 font-normal leading-tight mt-1">
                Certified Partner
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

