import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, User, Eye, EyeOff, LoaderCircle } from "lucide-react";
import { loginAdmin } from "../../api/adminAxios.js";
import AdminInput from "../../components/admin/AdminInput.jsx";

/**
 * Admin login. Authenticates username + password against the backend
 * (/api/v1/auth/login), which returns the bearer token used for all
 * write requests. The token is then stored in localStorage by loginAdmin().
 */
function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.username.trim() || !form.password) {
      setError("Please enter your username and password.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      await loginAdmin(form.username.trim(), form.password);
      navigate("/corehives/admin/testimonials");
    } catch (err) {
      if (err?.response?.status === 401) {
        setError("Invalid username or password. Try again.");
      } else {
        setError("Something went wrong. Please try again.");
      }
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#07090f] text-white px-4">
      {/* Subtle teal glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(7,190,184,0.18), transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-[rgba(7,190,184,0.18)] bg-[#0d1117] p-8 shadow-[0_0_80px_rgba(7,190,184,0.10),0_40px_100px_rgba(0,0,0,0.6)]">
        <div className="text-center mb-7">
          <span className="text-2xl font-bold tracking-tight text-white">
            Core<span className="text-[#07BEB8]">Hives</span>
          </span>
          <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/30">
            Admin panel
          </p>
        </div>

        <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#07BEB8]/30 bg-[#07BEB8]/10">
          <Lock className="h-5 w-5 text-[#07BEB8]" />
        </div>

        <h1 className="mb-1 text-center text-lg font-semibold text-white">
          Sign in to continue
        </h1>
        <p className="mb-6 text-center text-xs text-white/40">
          Enter your admin credentials to manage content.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <AdminInput
              label="Username"
              type="text"
              name="username"
              placeholder="corehivesadmin"
              value={form.username}
              onChange={handleChange}
              autoComplete="username"
              autoFocus
            />
            <User className="pointer-events-none absolute right-4 top-[42px] h-4 w-4 text-white/25" />
          </div>

          <div className="relative">
            <AdminInput
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              className="absolute right-3 top-[36px] flex h-7 w-7 items-center justify-center rounded-lg text-white/30 hover:text-white/70 transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>

          {error && (
            <p className="rounded-xl border border-red-400/30 bg-red-500/10 px-3 py-2 text-xs text-red-300">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-1 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#07BEB8] px-5 py-3 text-sm font-semibold text-[#03110f] hover:bg-[#84fff7] transition-colors disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting && <LoaderCircle className="h-4 w-4 animate-spin" />}
            {submitting ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <p className="mt-5 text-center text-xs text-white/30 leading-relaxed">
          Your session is stored locally and sent with each request.
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
