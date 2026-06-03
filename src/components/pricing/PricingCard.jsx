import { Check, Sparkles } from "lucide-react";
import { classNames } from "../../utils/helpers";
import { getPlanBilling, isInternalHref } from "./pricingHelpers";
import CTAButton from "../shared/CTAButton";

export default function PricingCard({ plan, billingCycle }) {
  const billing = getPlanBilling(plan, billingCycle);
  const usesInternalHref = isInternalHref(plan.buttonHref);

  return (
    <article
      className={classNames(
        "pricing-card-surface group relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-6 transition-all duration-300 hover:-translate-y-2 sm:p-8",
        plan.popular
          ? "border-[#07BEB8]/65 bg-[linear-gradient(180deg,rgba(5,31,35,0.98),rgba(2,9,12,0.98))] shadow-[0_30px_90px_-45px_rgba(7,190,184,0.85)] lg:-translate-y-3"
          : "border-white/10 bg-[linear-gradient(180deg,rgba(8,15,20,0.96),rgba(2,7,10,0.96))] shadow-[0_24px_70px_-45px_rgba(0,0,0,0.95)]",
      )}
    >
      <div
        className={classNames(
          "absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent to-transparent",
          plan.popular ? "via-[#84fff7]" : "via-white/60",
        )}
      />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[0.7rem] font-medium tracking-[0.24em] text-[#84fff7] uppercase">
              {plan.eyebrow}
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-[1.75rem]">
              {plan.name}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {plan.description}
            </p>
          </div>

          {plan.popular ? (
            <span className="pricing-popular-badge inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#07BEB8]/25 bg-[#07BEB8]/14 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.18em] text-[#84fff7] uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              Popular
            </span>
          ) : null}
        </div>

        <div className="mt-8 flex items-end gap-2">
          <span className="text-4xl font-semibold tracking-tight text-white sm:text-[2.75rem]">
            {billing.price}
          </span>
          <span className="mb-1 text-sm font-medium text-slate-400">
            {billing.billing}
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-slate-400">{billing.caption}</p>

        {billing.discountBadge ? (
          <span className="mt-4 inline-flex w-fit items-center rounded-full border border-amber-200/15 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-100">
            {billing.discountBadge}
          </span>
        ) : null}

        <ul className="mt-8 flex flex-1 flex-col gap-3.5">
          {plan.features.map((feature) => (
            <li
              key={`${plan.id}-${feature}`}
              className="flex items-start gap-3 text-sm leading-6 text-slate-100"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#07BEB8]/30 bg-[#07BEB8]/12 text-[#84fff7]">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="min-w-0">{feature}</span>
            </li>
          ))}
        </ul>

        <CTAButton
          to={usesInternalHref ? plan.buttonHref : undefined}
          href={!usesInternalHref ? (plan.buttonHref ?? "/contact") : undefined}
          className="mt-8 w-full justify-center"
        >
          {plan.buttonText}
        </CTAButton>
      </div>
    </article>
  );
}
