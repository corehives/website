import { forwardRef } from "react";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { Link } from "react-router-dom";

/**
 * Unified CTA component — renders the correct element automatically:
 *   href  → <a>       (external links, hash anchors, same-domain hrefs)
 *   to    → <Link>    (React Router client-side navigation)
 *   else  → <button>  (actions: form submit, toggle, API call, etc.)
 *
 * Supports forwardRef so parent scroll-reveal / animation refs work correctly.
 */
const CTAButton = forwardRef(function CTAButton(
  {
    href,
    to,
    onClick,
    type = "button",
    loading = false,
    disabled = false,
    target,
    rel,
    className = "",
    children,
  },
  ref,
) {
  const isLoading = loading;

  const baseClass = [
    "group inline-flex items-center gap-2 rounded-full border py-1.5 pl-5 pr-1.5 text-sm font-medium transition-all",
    isLoading
      ? "cursor-not-allowed border-[#07BEB8]/30 bg-[#07BEB8]/10 text-[#8efcf8]"
      : className.includes("bg-")
        ? ""
        : "border-white/50 text-white hover:bg-[#017c785e]",
    disabled && !isLoading ? "cursor-not-allowed opacity-50" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const icon = (
    <span className="arrow-wrap">
      {isLoading ? (
        <LoaderCircle className="h-3.75 w-3.75 animate-spin text-slate-950" />
      ) : (
        <ArrowRight className="arrow-icon" />
      )}
    </span>
  );

  if (to) {
    return (
      <Link ref={ref} to={to} className={baseClass}>
        {children}
        {icon}
      </Link>
    );
  }

  if (href) {
    return (
      <a ref={ref} href={href} target={target} rel={rel} onClick={onClick} className={baseClass}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClass}
    >
      {children}
      {icon}
    </button>
  );
});

export default CTAButton;
