import { useEffect, useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import Sidebar from "./Sidebar.jsx";
import { logoutAdmin } from "../../api/adminAxios.js";

const TITLES = {
  "/corehives/admin/testimonials": "Testimonials",
  "/corehives/admin/blogs": "Blogs",
  "/corehives/admin/jobs": "Jobs",
};

/**
 * Admin shell: fixed 240px sidebar (desktop) + topbar with page title + Logout.
 * Mobile: hamburger toggles a slide-in drawer. Content via <Outlet/>.
 */
function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false);
  }, [location.pathname]);

  const pageTitle = TITLES[location.pathname] || "Admin";

  const handleLogout = () => {
    logoutAdmin();
    navigate("/admin-login");
  };

  return (
    <div className="min-h-screen bg-[#07090f] text-white">
      {/* Desktop sidebar */}
      <aside className="hidden lg:block fixed inset-y-0 left-0 w-60">
        <Sidebar />
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-10 w-64 h-full">
            <Sidebar onNavigate={() => setMobileOpen(false)} />
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
              className="absolute top-5 right-3 w-8 h-8 rounded-full border border-white/12 bg-white/4 flex items-center justify-center"
            >
              <X className="w-4 h-4 text-white/60" />
            </button>
          </div>
        </div>
      )}

      {/* Main column */}
      <div className="lg:pl-60">
        {/* Topbar */}
        <header className="sticky top-0 z-40 flex items-center justify-between gap-4 border-b border-[rgba(7,190,184,0.18)] bg-[#07090f]/95 backdrop-blur-md px-4 sm:px-8 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="lg:hidden w-9 h-9 rounded-2xl border border-white/12 bg-white/4 hover:bg-white/8 flex items-center justify-center transition-colors"
            >
              <Menu className="w-4.5 h-4.5 text-white/70" />
            </button>
            <h1 className="text-lg font-bold text-white">{pageTitle}</h1>
          </div>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/4 px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/8 hover:border-white/25 transition-all"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </header>

        <main className="px-4 sm:px-8 py-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AdminLayout;
