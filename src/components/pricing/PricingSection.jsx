import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { classNames } from "../../utils/helpers";
import PricingCard from "./PricingCard";
import PricingToggle from "./PricingToggle";
import pricingPlans from "./pricingData.json";
import { isInternalHref, pricingCycles } from "./pricingHelpers";
import CTAButton from "../shared/CTAButton";

export default function PricingSection({
  id = "pricing",
  plans = pricingPlans,
  eyebrow = "Flexible engagement options",
  title = "Pricing designed to grow with your roadmap",
  description = "Choose the delivery lane that fits your stage today, then scale into a deeper partnership as your product, marketing, and support needs expand.",
  defaultCycle = "monthly",
  cycleOptions = pricingCycles,
  savingsLabel = "Save up to 20% with annual retainers",
  footerNote = "Need a custom build, hybrid scope, or white-label partnership?",
  footerDescription = "We also create tailored quotes for enterprise workflows, bundled app plus web delivery, and longer-term product engagements.",
  footerCtaText = "Request a custom quote",
  footerCtaHref = "/contact",
  className,
}) {
  const initialCycle = cycleOptions.some((cycle) => cycle.id === defaultCycle)
    ? defaultCycle
    : (cycleOptions[0]?.id ?? "monthly");
  const [billingCycle, setBillingCycle] = useState(initialCycle);
  const visiblePlans = Array.isArray(plans) ? plans : pricingPlans;
  const usesInternalFooterHref = isInternalHref(footerCtaHref);

  if (!visiblePlans.length) {
    return null;
  }

  return (
    <section
      id={id}
      className={classNames(
        "section-auto-render relative overflow-hidden px-6 py-20 sm:px-10 sm:py-24 lg:px-10 lg:py-15",
        className,
      )}
    >
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#02090d_0%,#041216_48%,#02070a_100%)]" />
      <div className="pricing-orb absolute -left-24 top-16 -z-10 h-56 w-56 rounded-full bg-[#07BEB8]/18 blur-3xl" />
      <div
        className="pricing-orb absolute -right-10 top-1/3 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl"
        style={{ animationDelay: "-2s" }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-[720px] text-center">
          <span className="inline-flex items-center rounded-full border border-[#07BEB8]/20 bg-[#07BEB8]/10 px-4 py-1.5 text-[0.7rem] font-medium tracking-[0.24em] text-[#84fff7] uppercase">
            {eyebrow}
          </span>
          <h2 className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
            {description}
          </p>
        </div>
        <div className="mt-10 flex justify-center">
          <PricingToggle
            cycles={cycleOptions}
            activeCycle={billingCycle}
            onChange={setBillingCycle}
            savingsLabel={savingsLabel}
          />
        </div>

        <div className="mt-14 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] xl:gap-7">
          {visiblePlans.map((plan) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              billingCycle={billingCycle}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_80px_-50px_rgba(7,190,184,0.65)] backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-semibold text-white">{footerNote}</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              {footerDescription}
            </p>
          </div>

          <CTAButton
            to={usesInternalFooterHref ? footerCtaHref : undefined}
            href={!usesInternalFooterHref ? footerCtaHref : undefined}
            className="self-start sm:self-center"
          >
            {footerCtaText}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
