import hero_bg from "../../assets/hero-bgs.webp";
import Cloud from "../../assets/icons/cloud.png";
import leftLight from "../../assets/left-light.png";
import rightLight from "../../assets/right-light.png";
import BannerRightAnimation from "../animations/bannerRight";
import BannerLeftAnimation from "../animations/bannerleft";

export default function BannerSection() {
  return (
    <section
      id="home"
      className="relative z-0 flex w-full items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={hero_bg}
          alt="hero-bg"
          loading="eager"
          fetchpriority="high"
          className="h-full w-full object-cover object-center opacity-90"
        />
      </div>

      <img
        src={leftLight}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchpriority="high"
        className="pointer-events-none absolute left-0 top-0 z-[2] h-auto max-w-[100%] object-left"
      />

      <img
        src={rightLight}
        alt=""
        aria-hidden="true"
        loading="eager"
        fetchpriority="high"
        className="pointer-events-none absolute right-0 top-0 z-[2] h-auto max-w-[100%] object-right"
      />

      <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 py-20 text-center sm:px-12 md:px-20 lg:px-32">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
          <span className="text-xs font-medium tracking-widest text-white uppercase">
            Web &amp; App Development
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
        </div>

        <h1 className="max-w-4xl text-center text-3xl font-extrabold leading-[1] tracking-wider text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-4xl">
          Mobile App{" "}
          <span className="text-[#07BEB8]">Development Services</span>
          <br />
          Dedicated to Evolving Brands
        </h1>

        <p className="mt-6 max-w-xl text-center text-sm leading-relaxed text-white sm:text-base">
          Building mobile applications that give your brand a modern and
          relevant persona with personalized features to meet your specific
          needs.
        </p>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[3] -top-18 -right-[60rem] flex items-center justify-center">
        <BannerRightAnimation />
        <div className="absolute flex items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-white flex items-center justify-center overflow-hidden border border-gray-500/30 absolute -top-16 -right-16 p-2">
            <img
              src={Cloud}
              alt="cloud icon"
              className="w-12 h-12 object-contain filter brightness-125"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[3] -top-16 -left-[60rem] flex items-center justify-center">
        <BannerLeftAnimation />
        <div className="absolute flex items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-white flex items-center justify-center overflow-hidden border border-gray-500/30 absolute top-26 -left-20 p-2">
            <img
              src={Cloud}
              alt="cloud icon"
              className="w-12 h-12 object-contain filter brightness-125"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
