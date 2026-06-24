import { NavLink } from "react-router-dom";
import { MessageSquareQuote, FileText, Briefcase } from "lucide-react";

const NAV = [
  { to: "/corehives/admin/testimonials", label: "Testimonials", icon: MessageSquareQuote },
  { to: "/corehives/admin/blogs", label: "Blogs", icon: FileText },
  { to: "/corehives/admin/jobs", label: "Jobs", icon: Briefcase },
];

/**
 * Admin sidebar nav. CoreHives wordmark at top, links with teal active highlight.
 * `onNavigate` lets the mobile drawer close itself after a click.
 */
function Sidebar({ onNavigate }) {
  return (
    <div className="flex h-full flex-col bg-[#0d1117] border-r border-[rgba(7,190,184,0.18)]">
      <div className="px-6 py-6 border-b border-white/6">
        <span className="text-lg font-bold tracking-tight text-white">
          Core<span className="text-[#07BEB8]">Hives</span>
        </span>
        <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
          Admin
        </p>
      </div>

      <nav className="flex flex-col gap-1 p-3">
        {NAV.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onNavigate}
            className={({ isActive }) =>
              [
                "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all",
                isActive
                  ? "bg-[#07BEB8]/12 border border-[#07BEB8]/30 text-[#84fff7]"
                  : "border border-transparent text-white/55 hover:text-white hover:bg-white/4",
              ].join(" ")
            }
          >
            <Icon className="h-4 w-4 shrink-0" />
            {label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
