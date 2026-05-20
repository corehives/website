export const pricingCycles = [
  { id: "monthly", label: "Monthly" },
  { id: "yearly", label: "Yearly" },
];

export function getPlanBilling(plan, billingCycle) {
  if (!plan?.billing) {
    return {
      price: "",
      billing: "",
      discountBadge: null,
      caption: "",
    };
  }

  return (
    plan.billing[billingCycle] ??
    plan.billing.monthly ??
    Object.values(plan.billing)[0] ?? {
      price: "",
      billing: "",
      discountBadge: null,
      caption: "",
    }
  );
}

export function isInternalHref(href) {
  return typeof href === "string" && href.startsWith("/");
}
