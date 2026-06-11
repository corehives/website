import { lazy, Suspense, useState, useRef, useEffect } from "react";
import hero_bg from "../assets/hero-bgs.webp";
import leftLight from "../assets/left-light.png";
import rightLight from "../assets/right-light.png";
import Cloud from "../assets/icons/cloud.png";
import BgApp from "../assets/bg-app.png";
import BannerRightAnimation from "../components/animations/bannerRight";
import BannerLeftAnimation from "../components/animations/bannerleft";
import CTAButton from "../components/shared/CTAButton";
import {
  X, Upload, FileText, CheckCircle2, Plus, Minus,
  MapPin, Rocket, GraduationCap, Heart, Globe,
  Zap, Coffee, AlertCircle, Users, Award,
} from "lucide-react";

const Footer = lazy(() => import("../components/layout/footer.jsx"));

// ─── DATA ─────────────────────────────────────────────────────────────────────

const jobs = [
  {
    id: 1,
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-Time",
    shortDesc:
      "Build scalable, high-performance web applications for enterprise clients across finance, health-tech, and SaaS verticals. You'll own features end-to-end and collaborate with product and design.",
    fullDesc: `We're looking for a Senior Full-Stack Engineer who thrives in a fast-paced, product-driven environment. You'll work across our React/Next.js frontend and Node.js backend, contributing to architecture decisions and mentoring junior engineers.\n\nResponsibilities:\n• Design and ship production-grade features across the full stack\n• Lead code reviews and enforce engineering best practices\n• Collaborate with product managers and designers to shape requirements\n• Optimize for performance, scalability, and reliability\n\nRequirements:\n• 5+ years of production experience with React, TypeScript, and Node.js\n• Solid understanding of databases (PostgreSQL, Redis)\n• Experience with cloud infrastructure (AWS/GCP) and CI/CD pipelines\n• Strong communication skills and a bias for action`,
    requirements: ["5+ yrs React/Node.js", "TypeScript", "PostgreSQL", "AWS"],
  },
  {
    id: 2,
    title: "UI/UX Product Designer",
    department: "Design",
    location: "Remote / Hybrid",
    type: "Full-Time",
    shortDesc:
      "Craft pixel-perfect, human-centered interfaces for complex enterprise products. You'll drive the design system, run user research, and collaborate daily with engineering.",
    fullDesc: `We need a Product Designer who is equally strong in systems thinking and visual polish. You'll define the design language for our core products, run user research, and ship high-fidelity designs that engineering loves to build.\n\nResponsibilities:\n• Own the product design process from discovery to handoff\n• Build and maintain a scalable design system in Figma\n• Conduct user interviews and synthesize insights into design decisions\n• Work closely with engineering to ensure pixel-perfect implementation\n\nRequirements:\n• 4+ years of product design experience for digital products\n• Expert-level Figma skills\n• Portfolio demonstrating systems thinking and strong visual craft\n• Experience with user research methods`,
    requirements: ["4+ yrs Product Design", "Figma", "Design Systems", "User Research"],
  },
  {
    id: 3,
    title: "DevOps & Cloud Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-Time",
    shortDesc:
      "Own our cloud infrastructure, CI/CD pipelines, and observability stack. You'll build for reliability at scale and drive a culture of automation across the engineering team.",
    fullDesc: `We're hiring a DevOps Engineer to own and scale our cloud infrastructure across AWS and GCP. You'll architect CI/CD systems, improve observability, and enable engineering teams to ship faster with confidence.\n\nResponsibilities:\n• Design and manage containerized infrastructure (Kubernetes, Docker)\n• Build and maintain CI/CD pipelines for multiple product teams\n• Implement monitoring, alerting, and incident response processes\n• Optimize infrastructure costs and improve system reliability\n\nRequirements:\n• 4+ years in DevOps/Platform engineering\n• Deep expertise in Kubernetes and Docker\n• Experience with Terraform and infrastructure as code\n• Strong background in monitoring tools (Datadog, Grafana, PagerDuty)`,
    requirements: ["Kubernetes", "Terraform", "AWS / GCP", "CI/CD"],
  },
  {
    id: 4,
    title: "AI / ML Research Engineer",
    department: "AI Division",
    location: "Remote",
    type: "Full-Time",
    shortDesc:
      "Research, prototype, and productionize machine learning models for our AI-powered product suite. You'll work at the frontier of applied ML and directly shape our AI roadmap.",
    fullDesc: `We're building an AI division and need a Research Engineer who can bridge the gap between research and production. You'll design experiments, fine-tune LLMs, and deploy models at scale for our product suite.\n\nResponsibilities:\n• Research and prototype ML models for product use cases\n• Fine-tune and evaluate large language models (LLMs)\n• Build model serving infrastructure and monitoring pipelines\n• Collaborate with product to identify AI opportunities\n\nRequirements:\n• 3+ years ML engineering experience\n• Proficiency in Python, PyTorch / TensorFlow\n• Experience with LLM fine-tuning and prompt engineering\n• Knowledge of MLOps practices and model deployment`,
    requirements: ["Python", "PyTorch", "LLMs", "MLOps"],
  },
];

const benefits = [
  {
    icon: Rocket,
    title: "Fast-Track Growth",
    description:
      "Quarterly performance reviews, transparent promotion criteria, and direct mentorship from senior engineers and leadership.",
  },
  {
    icon: Globe,
    title: "Remote-First Culture",
    description:
      "Work from anywhere. Our distributed team spans 12+ countries with async-first collaboration and zero micromanagement.",
  },
  {
    icon: Heart,
    title: "Wellness First",
    description:
      "Comprehensive health coverage, mental wellness stipend, flexible PTO, and a genuine expectation that you use it.",
  },
  {
    icon: Zap,
    title: "High-Impact Work",
    description:
      "Your code ships to thousands of real users. We don't do fake projects — every feature you build matters.",
  },
  {
    icon: GraduationCap,
    title: "$2K Annual L&D Budget",
    description:
      "Spend it on courses, conferences, certifications, or books. We invest in your growth because it's also ours.",
  },
  {
    icon: Coffee,
    title: "Strong Team Culture",
    description:
      "Regular team retreats, virtual socials, and a low-ego, high-output environment where ideas are judged on merit.",
  },
];

const hiringSteps = [
  {
    step: "01",
    icon: Upload,
    title: "Apply",
    description:
      "Submit your application and resume. We review every application personally — no black holes, ever.",
  },
  {
    step: "02",
    icon: FileText,
    title: "Review",
    description:
      "Our team reviews your profile within 48 hours and sends detailed feedback either way.",
  },
  {
    step: "03",
    icon: Users,
    title: "Interviews",
    description:
      "A technical discussion (not a whiteboard puzzle) and a culture-fit conversation with the team.",
  },
  {
    step: "04",
    icon: Award,
    title: "Welcome",
    description:
      "Offer letter, onboarding, and your 30-day ramp plan. You'll be shipping code in week one.",
  },
];

// ─── SCROLL REVEAL HOOK ───────────────────────────────────────────────────────

function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─── FORM PRIMITIVES ──────────────────────────────────────────────────────────

function FormLabel({ children }) {
  return (
    <label className="block text-[10px] font-semibold uppercase tracking-[0.18em] text-white/45 mb-1.5">
      {children}
    </label>
  );
}

function FieldError({ msg }) {
  return msg ? <p className="mt-1 text-xs text-red-400">{msg}</p> : null;
}

function FormInput({ hasError, ...props }) {
  return (
    <input
      {...props}
      style={props.type === "date" ? { colorScheme: "dark", ...props.style } : props.style}
      className={[
        "w-full rounded-2xl border bg-[#000405] px-4 py-3 text-sm text-white outline-none transition-all duration-200 placeholder-white/25",
        hasError
          ? "border-red-400/60 bg-red-500/3 focus:border-red-400"
          : "border-white/10 focus:border-[#07BEB8]/55",
        props.disabled ? "cursor-not-allowed opacity-60" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

// ─── RESUME UPLOAD ────────────────────────────────────────────────────────────

const VALID_MIME = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

function ResumeUpload({ file, onFile, fieldError, disabled }) {
  const [dragOver, setDragOver] = useState(false);
  const [typeError, setTypeError] = useState("");
  const inputRef = useRef(null);

  const processFile = (f) => {
    if (!f) return;
    if (!VALID_MIME.includes(f.type)) {
      setTypeError("Only PDF, DOC, or DOCX files are accepted.");
      onFile(null);
      return;
    }
    if (f.size > 5 * 1024 * 1024) {
      setTypeError("File size must be under 5 MB.");
      onFile(null);
      return;
    }
    setTypeError("");
    onFile(f);
  };

  const displayError = typeError || fieldError;

  return (
    <div>
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-label="Upload resume"
        onClick={() => !disabled && inputRef.current?.click()}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && !disabled && inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); if (!disabled) setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          if (!disabled) processFile(e.dataTransfer.files[0]);
        }}
        className={[
          "relative flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed p-8 text-center transition-all duration-300",
          disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
          dragOver
            ? "border-[#07BEB8] bg-[#07BEB8]/10"
            : file
            ? "border-[#07BEB8]/55 bg-[#07BEB8]/4"
            : displayError
            ? "border-red-400/50 bg-red-500/3"
            : "border-white/12 hover:border-[#07BEB8]/40 hover:bg-[#07BEB8]/3",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {file ? (
          <>
            <div className="w-12 h-12 rounded-full bg-[#07BEB8]/15 border border-[#07BEB8]/40 flex items-center justify-center">
              <FileText className="w-6 h-6 text-[#07BEB8]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white truncate max-w-xs">{file.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">{(file.size / 1024).toFixed(0)} KB</p>
            </div>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); setTypeError(""); onFile(null); }}
              className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/8 hover:bg-red-500/20 flex items-center justify-center transition-colors"
              aria-label="Remove file"
            >
              <X className="w-3.5 h-3.5 text-white/55" />
            </button>
          </>
        ) : (
          <>
            <div className="w-14 h-14 rounded-2xl bg-white/4 border border-white/10 flex items-center justify-center">
              <Upload className={`w-7 h-7 transition-colors ${dragOver ? "text-[#07BEB8]" : "text-white/25"}`} />
            </div>
            <div>
              <p className="text-sm text-white/70">
                <span className="text-[#07BEB8] font-semibold">Click to upload</span> or drag &amp; drop
              </p>
              <p className="text-xs text-white/30 mt-0.5">PDF, DOC, DOCX · Max 5 MB</p>
            </div>
          </>
        )}
      </div>
      {displayError && <p className="mt-1.5 text-xs text-red-400">{displayError}</p>}
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        className="sr-only"
        disabled={disabled}
        onChange={(e) => processFile(e.target.files?.[0])}
      />
    </div>
  );
}

// ─── APPLICATION MODAL ────────────────────────────────────────────────────────

const emptyHistory = () => ({ company: "", joiningDate: "", lastWorkingDate: "" });

const initialForm = {
  fullName: "",
  dob: "",
  yearsExp: "",
  lastCompany: "",
  employmentHistory: [emptyHistory()],
  lastSalary: "",
  expectedSalary: "",
};

function validateForm(form, resume) {
  const e = {};
  if (!form.fullName.trim()) e.fullName = "Full name is required.";
  if (!form.dob) e.dob = "Date of birth is required.";
  if (!form.yearsExp) {
    e.yearsExp = "Years of experience is required.";
  } else if (Number.isNaN(Number(form.yearsExp)) || Number(form.yearsExp) < 0) {
    e.yearsExp = "Enter a valid number.";
  }
  if (!form.lastCompany.trim()) e.lastCompany = "Last company name is required.";
  if (!form.lastSalary.trim()) {
    e.lastSalary = "Last salary is required.";
  }
  if (!form.expectedSalary.trim()) {
    e.expectedSalary = "Expected salary is required.";
  }
  if (!resume) e.resume = "Please upload your resume.";
  return e;
}

function ApplicationModal({ job, onClose }) {
  const [form, setForm] = useState(initialForm);
  const [resume, setResume] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const scrollRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") handleClose(); };
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 280);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleHistoryChange = (idx, field, value) => {
    setForm((f) => {
      const h = [...f.employmentHistory];
      h[idx] = { ...h[idx], [field]: value };
      return { ...f, employmentHistory: h };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateForm(form, resume);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1800));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal card */}
      <div
        ref={scrollRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className={`relative z-10 w-full max-w-210 max-h-[92vh] overflow-y-auto rounded-3xl bg-[#07090f] border border-[#07BEB8]/20 shadow-[0_0_80px_rgba(7,190,184,0.14),0_40px_100px_rgba(0,0,0,0.7)] transition-all duration-300 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
          visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-[0.96] translate-y-4"
        }`}
      >
        {/* Sticky header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 border-b border-white/6 bg-[#07090f]/95 backdrop-blur-md">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#07BEB8] mb-0.5">
              Applying for
            </p>
            <h2 id="modal-title" className="text-lg font-bold text-white leading-tight">
              {job?.title ?? "Open Position"}
            </h2>
          </div>
          <button
            ref={closeRef}
            onClick={handleClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full border border-white/12 bg-white/4 hover:bg-white/8 hover:border-white/25 flex items-center justify-center transition-all shrink-0"
          >
            <X className="w-4 h-4 text-white/60" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-7">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-14 text-center">
              <div
                className="w-20 h-20 rounded-full bg-[#07BEB8]/12 border-2 border-[#07BEB8]/60 flex items-center justify-center mb-6"
                style={{ animation: "fadeScaleIn 0.45s ease both" }}
              >
                <CheckCircle2 className="w-10 h-10 text-[#07BEB8]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Application Submitted!</h3>
              <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                Thanks for applying to{" "}
                <span className="text-white font-semibold">{job?.title}</span>. Our team reviews
                every application personally and will be in touch within 48 hours.
              </p>
              <button
                onClick={handleClose}
                className="mt-8 px-8 py-2.5 rounded-full border border-[#07BEB8]/35 text-sm text-[#07BEB8] hover:bg-[#07BEB8]/10 transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              {/* Validation summary */}
              {Object.keys(errors).length > 0 && (
                <div className="flex items-start gap-3 rounded-2xl border border-red-400/20 bg-red-500/5 px-4 py-3.5">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-red-300 leading-relaxed">
                    Please fix the highlighted fields before submitting.
                  </p>
                </div>
              )}

              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <FormLabel>Full Name *</FormLabel>
                  <FormInput
                    name="fullName"
                    placeholder="Jane Smith"
                    value={form.fullName}
                    onChange={handleChange}
                    hasError={!!errors.fullName}
                    disabled={submitting}
                  />
                  <FieldError msg={errors.fullName} />
                </div>
                <div>
                  <FormLabel>Date of Birth *</FormLabel>
                  <FormInput
                    name="dob"
                    type="date"
                    value={form.dob}
                    onChange={handleChange}
                    hasError={!!errors.dob}
                    disabled={submitting}
                  />
                  <FieldError msg={errors.dob} />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <FormLabel>Total Years of Experience *</FormLabel>
                  <FormInput
                    name="yearsExp"
                    type="number"
                    min="0"
                    max="50"
                    placeholder="e.g. 5"
                    value={form.yearsExp}
                    onChange={handleChange}
                    hasError={!!errors.yearsExp}
                    disabled={submitting}
                  />
                  <FieldError msg={errors.yearsExp} />
                </div>
                <div>
                  <FormLabel>Last / Current Company *</FormLabel>
                  <FormInput
                    name="lastCompany"
                    placeholder="Acme Corp"
                    value={form.lastCompany}
                    onChange={handleChange}
                    hasError={!!errors.lastCompany}
                    disabled={submitting}
                  />
                  <FieldError msg={errors.lastCompany} />
                </div>
              </div>

              {/* Employment History */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <FormLabel>Employment History</FormLabel>
                  <button
                    type="button"
                    onClick={() =>
                      setForm((f) => ({
                        ...f,
                        employmentHistory: [...f.employmentHistory, emptyHistory()],
                      }))
                    }
                    className="flex items-center gap-1.5 text-xs font-medium text-[#07BEB8] hover:text-[#84fff7] transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                    Add Company
                  </button>
                </div>
                <div className="flex flex-col gap-3">
                  {form.employmentHistory.map((entry, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-white/6 bg-white/[0.018] p-4"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] uppercase tracking-widest text-white/30 font-medium">
                          Position {idx + 1}
                        </span>
                        {idx > 0 && (
                          <button
                            type="button"
                            onClick={() =>
                              setForm((f) => ({
                                ...f,
                                employmentHistory: f.employmentHistory.filter((_, i) => i !== idx),
                              }))
                            }
                            aria-label="Remove position"
                            className="w-6 h-6 rounded-full bg-red-500/8 hover:bg-red-500/22 flex items-center justify-center transition-colors"
                          >
                            <Minus className="w-3 h-3 text-red-400" />
                          </button>
                        )}
                      </div>
                      <div className="flex flex-col gap-3">
                        <FormInput
                          placeholder="Company Name"
                          value={entry.company}
                          onChange={(e) => handleHistoryChange(idx, "company", e.target.value)}
                          disabled={submitting}
                        />
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <p className="text-[10px] text-white/30 mb-1">Joining Date</p>
                            <FormInput
                              type="date"
                              value={entry.joiningDate}
                              onChange={(e) =>
                                handleHistoryChange(idx, "joiningDate", e.target.value)
                              }
                              disabled={submitting}
                            />
                          </div>
                          <div>
                            <p className="text-[10px] text-white/30 mb-1">Last Working Date</p>
                            <FormInput
                              type="date"
                              value={entry.lastWorkingDate}
                              onChange={(e) =>
                                handleHistoryChange(idx, "lastWorkingDate", e.target.value)
                              }
                              disabled={submitting}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <FormLabel>Last / Current Salary *</FormLabel>
                  <FormInput
                    name="lastSalary"
                    placeholder="e.g. $5,000 / mo"
                    value={form.lastSalary}
                    onChange={handleChange}
                    hasError={!!errors.lastSalary}
                    disabled={submitting}
                  />
                  <FieldError msg={errors.lastSalary} />
                </div>
                <div>
                  <FormLabel>Expected Salary *</FormLabel>
                  <FormInput
                    name="expectedSalary"
                    placeholder="e.g. $7,500 / mo"
                    value={form.expectedSalary}
                    onChange={handleChange}
                    hasError={!!errors.expectedSalary}
                    disabled={submitting}
                  />
                  <FieldError msg={errors.expectedSalary} />
                </div>
              </div>

              {/* Resume */}
              <div>
                <FormLabel>Resume *</FormLabel>
                <ResumeUpload
                  file={resume}
                  onFile={(f) => {
                    setResume(f);
                    if (f) setErrors((err) => ({ ...err, resume: undefined }));
                  }}
                  fieldError={errors.resume}
                  disabled={submitting}
                />
              </div>

              {/* Submit */}
              <div className="pt-1 text-center">
                <CTAButton type="submit" loading={submitting} disabled={submitting}>
                  {submitting ? "Submitting…" : "Submit Application"}
                </CTAButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── JOB CARD ─────────────────────────────────────────────────────────────────

function JobCard({ job, onApply, revealStyle }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={revealStyle}
      className="group flex flex-col rounded-2xl border border-[#07BEB8]/18 hover:border-[#07BEB8]/50 bg-linear-to-br from-[#07BEB8]/4 to-transparent p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(7,190,184,0.09)]"
    >
      {/* Row 1 — Title + meta left · Apply Now right */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#07BEB8] transition-colors leading-snug mb-1.5">
            {job.title}
          </h3>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-[11px] font-medium text-[#07BEB8]">{job.type}</span>
            <span className="text-white/25 text-[11px] select-none">·</span>
            <span className="flex items-center gap-1 text-[11px] text-gray-400">
              <MapPin className="w-2.5 h-2.5 shrink-0" />
              {job.location}
            </span>
            <span className="text-white/25 text-[11px] select-none">·</span>
            <span className="text-[11px] text-gray-400">{job.department}</span>
          </div>
        </div>
        <div className="shrink-0 pt-0.5">
          <CTAButton onClick={() => onApply(job)}>Apply Now</CTAButton>
        </div>
      </div>

      {/* Row 2 — Skill / stack badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {job.requirements.map((req) => (
          <span
            key={req}
            className="text-[10px] px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.035] text-gray-300"
          >
            {req}
          </span>
        ))}
      </div>

      {/* Row 3 — Description */}
      <p className="text-gray-400 text-sm leading-relaxed">
        {job.shortDesc}
      </p>

      {/* Expandable full description */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? "max-h-175 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/6 pt-4">
          <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
            {job.fullDesc}
          </p>
        </div>
      </div>

      {/* Row 4 — Inline text toggle */}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-3 self-start text-xs text-white/35 hover:text-[#07BEB8] transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer"
      >
        {expanded ? "Show less" : "Read more..."}
      </button>
    </div>
  );
}

// ─── HIVE BACKGROUND (canvas hex grid) ───────────────────────────────────────

function HiveBg({ sectionRef, mouseRef }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;
    const ctx = canvas.getContext("2d");
    const R = 42;
    const CW = R * Math.sqrt(3);
    const RH = R * 1.5;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let hexes = [];
    let raf = null;

    const buildGrid = () => {
      hexes = [];
      const cols = Math.ceil(canvas.width / CW) + 3;
      const rows = Math.ceil(canvas.height / RH) + 3;
      for (let r = -1; r < rows; r++) {
        for (let c = -1; c < cols; c++) {
          hexes.push({ x: c * CW + (r % 2 !== 0 ? CW * 0.5 : 0), y: r * RH, phase: Math.random() * Math.PI * 2 });
        }
      }
    };

    const resize = () => {
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
      buildGrid();
    };

    const hexPath = (cx, cy) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        i === 0 ? ctx.moveTo(cx + (R - 1.5) * Math.cos(a), cy + (R - 1.5) * Math.sin(a))
                : ctx.lineTo(cx + (R - 1.5) * Math.cos(a), cy + (R - 1.5) * Math.sin(a));
      }
      ctx.closePath();
    };

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;
      for (const h of hexes) {
        const prox = Math.max(0, 1 - Math.hypot(h.x - mx, h.y - my) / 195);
        const wave = prefersReduced ? 0.5 : 0.5 + 0.5 * Math.sin(t * 0.012 + h.phase);
        const alpha = Math.min(0.03 + wave * 0.028 + (prefersReduced ? 0 : prox * 0.22), 0.28);
        hexPath(h.x, h.y);
        if (!prefersReduced && prox > 0.03) { ctx.fillStyle = `rgba(255,255,255,${prox * 0.28})`; ctx.fill(); }
        ctx.strokeStyle = `rgba(255,255,255,${alpha})`; ctx.lineWidth = 1; ctx.stroke();
      }
      t++;
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    const ro = new ResizeObserver(resize);
    ro.observe(section);
    return () => { if (raf) cancelAnimationFrame(raf); ro.disconnect(); };
  }, [sectionRef, mouseRef]);

  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 pointer-events-none" />;
}

// ─── MAGNETIC CTA ─────────────────────────────────────────────────────────────

function MagneticCTA({ children }) {
  const wrapRef = useRef(null);
  const [xy, setXy] = useState({ x: 0, y: 0 });
  const onMove = (e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = wrapRef.current?.getBoundingClientRect();
    if (!r) return;
    setXy({ x: ((e.clientX - r.left) / r.width - 0.5) * 12, y: ((e.clientY - r.top) / r.height - 0.5) * 8 });
  };
  return (
    <div
      ref={wrapRef}
      className="relative inline-block"
      onMouseMove={onMove}
      onMouseLeave={() => setXy({ x: 0, y: 0 })}
      style={{
        transform: `translate(${xy.x}px, ${xy.y}px)`,
        transition: xy.x === 0 && xy.y === 0 ? "transform 0.6s cubic-bezier(0.2,0.9,0.2,1)" : "transform 0.12s ease",
      }}
    >
      {children}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Careers() {
  const [modalJob, setModalJob] = useState(null);
  const [openingsRef, openingsVisible] = useScrollReveal(0.08);
  const [benefitsRef, benefitsVisible] = useScrollReveal(0.07);
  const [processRef, processVisible] = useScrollReveal(0.07);
  const [ctaRef, ctaVisible] = useScrollReveal(0.1);
  const ctaSectionRef = useRef(null);
  const ctaCanvasMouseRef = useRef({ x: -9999, y: -9999 });
  const ctaGlowRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rect = ctaSectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;
    ctaCanvasMouseRef.current = { x: px, y: py };
    if (ctaGlowRef.current) {
      ctaGlowRef.current.style.transform = `translate(calc(${px}px - 300px), calc(${py}px - 300px))`;
    }
    if (!reduced) setMousePos({ x: px / rect.width - 0.5, y: py / rect.height - 0.5 });
  };
  const handleMouseLeave = () => {
    ctaCanvasMouseRef.current = { x: -9999, y: -9999 };
    if (ctaGlowRef.current) ctaGlowRef.current.style.transform = "translate(-300px, -300px)";
    setMousePos({ x: 0, y: 0 });
  };

  const revealBase = (visible, delay = 0) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
  });

  return (
    <>
      {/* ── BANNER ────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative z-0 flex w-full items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={hero_bg}
            alt="hero-bg"
            loading="eager"
            fetchPriority="high"
            className="h-full w-full object-cover object-center opacity-90"
          />
        </div>
        <img
          src={leftLight}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          className="pointer-events-none absolute left-0 top-0 z-2 h-auto max-w-[100%] object-left"
        />
        <img
          src={rightLight}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          className="pointer-events-none absolute right-0 top-0 z-2 h-auto max-w-[100%] object-right"
        />

        <div className="relative z-10 flex w-full flex-col items-center justify-center px-6 py-20 text-center sm:px-12 md:px-20 lg:px-32">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
            <span className="text-xs font-medium tracking-widest text-white uppercase">
              We're Hiring
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
          </div>

          <h1 className="max-w-4xl text-center text-3xl font-extrabold leading-[1] tracking-wider text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-4xl">
            Join Our Team {" "}
            <span className="precision-gradient">Build the Future</span>
            <br />
            With Us
          </h1>

          <p className="mt-6 max-w-xl text-center text-sm leading-relaxed text-white sm:text-base">
            We're a team of builders, thinkers, and craftspeople shaping the digital frontier. If
            you're passionate about your work and ready to make a real impact, we'd love to hear
            from you.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTAButton href="#openings">
              View Open Positions
            </CTAButton>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 z-3 -top-18 -right-240 flex items-center justify-center">
          <BannerRightAnimation />
          <div className="absolute flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-white flex items-center justify-center overflow-hidden border border-gray-500/30 absolute -top-16 -right-16 p-2">
              <img src={Cloud} alt="cloud icon" className="w-12 h-12 object-contain filter brightness-125" />
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 z-3 -top-16 -left-240 flex items-center justify-center">
          <BannerLeftAnimation />
          <div className="absolute flex items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white to-white flex items-center justify-center overflow-hidden border border-gray-500/30 absolute top-26 -left-20 p-2">
              <img src={Cloud} alt="cloud icon" className="w-12 h-12 object-contain filter brightness-125" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CURRENT OPENINGS ──────────────────────────────────────────────── */}
      <section id="openings" className="relative px-6 py-20 sm:px-12 md:px-20 lg:px-32 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-175 h-65 bg-[#07BEB8]/3.5 rounded-full blur-[90px]"
        />
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div
            ref={openingsRef}
            style={revealBase(openingsVisible)}
            className="text-center mb-14"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
              <span className="text-xs font-medium tracking-widest text-white uppercase">
                Open Roles
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Current <span className="precision-gradient">Openings</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              We hire for talent, not titles. Every role is a real-ownership role — you'll ship
              ideas, make decisions, and grow fast.
            </p>
          </div>

          {/* Job cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job, idx) => (
              <JobCard
                key={job.id}
                job={job}
                onApply={setModalJob}
                revealStyle={revealBase(openingsVisible, 0.1 + idx * 0.1)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY JOIN US ── BgApp parallax ────────────────────────────────── */}
      <section
        className="px-5 sm:px-10 lg:px-20 py-20 sm:py-28 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BgApp})`, backgroundAttachment: "fixed" }}
      >
        <div className="max-w-6xl mx-auto relative z-10">
          <div
            ref={benefitsRef}
            style={revealBase(benefitsVisible)}
            className="text-center mb-14"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
              <span className="text-xs font-medium tracking-widest text-white uppercase">
                Life at CoreHives
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Why <span className="precision-gradient">Join Us</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Great work happens when people feel trusted, challenged, and well-supported. Here's
              what that looks like in practice.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  style={revealBase(benefitsVisible, 0.07 + idx * 0.09)}
                  className="group rounded-2xl border border-[#07BEB8]/30 hover:border-[#07BEB8]/80 bg-gradient-to-br from-[#0a3a37]/40 to-[#051a19]/40 backdrop-blur-sm p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#07BEB8]/20 hover:from-[#0a3a37]/60 hover:to-[#051a19]/60"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#07BEB8]/15 border border-[#07BEB8]/35 flex items-center justify-center mb-4 group-hover:bg-[#07BEB8]/28 group-hover:border-[#07BEB8]/60 transition-all duration-300">
                    <Icon className="w-5 h-5 text-[#07BEB8]" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#07BEB8] transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HIRING PROCESS ────────────────────────────────────────────────── */}
      <section className="relative px-5 sm:px-10 lg:px-20 py-20 sm:py-28 bg-black overflow-hidden">
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(ellipse, rgba(7,190,184,0.055) 0%, transparent 70%)" }}
        />
        {/* Hex accents */}
        <svg aria-hidden="true" className="pointer-events-none absolute top-10 right-10 opacity-[0.035]" width="160" height="139" viewBox="0 0 100 87" fill="none">
          <polygon points="25,2 75,2 98,43.3 75,84.6 25,84.6 2,43.3" stroke="#07BEB8" strokeWidth="1.5" />
        </svg>
        <svg aria-hidden="true" className="pointer-events-none absolute bottom-10 left-8 opacity-[0.025]" width="100" height="87" viewBox="0 0 100 87" fill="none">
          <polygon points="25,2 75,2 98,43.3 75,84.6 25,84.6 2,43.3" stroke="#07BEB8" strokeWidth="1.5" />
        </svg>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Heading */}
          <div ref={processRef} style={revealBase(processVisible)} className="text-center mb-16 sm:mb-20">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
              <span className="text-xs font-medium tracking-widest text-white uppercase">How It Works</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Our Hiring <span className="precision-gradient">Process</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Transparent, respectful, and fast. No trick puzzles, no ghost-rounds — just honest conversations about fit.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Desktop connecting line */}
            <div aria-hidden="true" className="hidden lg:block absolute top-[36px] left-[12.5%] right-[12.5%] h-px z-0">
              <div className="absolute inset-0 bg-white/8 rounded-full" />
              <div
                className="absolute inset-0 rounded-full origin-left"
                style={{
                  background: "linear-gradient(90deg, rgba(7,190,184,0.4), #07BEB8 50%, rgba(7,190,184,0.4))",
                  transform: processVisible ? "scaleX(1)" : "scaleX(0)",
                  transition: "transform 1.3s cubic-bezier(0.4, 0, 0.2, 1) 0.45s",
                }}
              />
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6">
              {hiringSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    style={revealBase(processVisible, 0.2 + idx * 0.14)}
                    className="group relative flex flex-col items-center text-center"
                  >
                    {/* Mobile vertical connector */}
                    {idx < hiringSteps.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="lg:hidden absolute left-1/2 -translate-x-px w-px z-0"
                        style={{
                          top: "72px",
                          bottom: "-3rem",
                          background: "linear-gradient(to bottom, rgba(7,190,184,0.45), rgba(7,190,184,0.04))",
                        }}
                      />
                    )}

                    {/* Icon node */}
                    <div className="relative z-10 mb-5 shrink-0">
                      {/* Expanding ring on hover */}
                      <div
                        className="absolute rounded-full border border-[#07BEB8]/20 opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-[1.6] transition-all duration-600 pointer-events-none"
                        style={{ inset: 0, borderRadius: "50%" }}
                      />
                      {/* Main circle — solid bg masks the connecting line; inset shadow fakes teal tint on hover without transparency */}
                      <div className="w-[72px] h-[72px] rounded-full border-2 border-white/12 bg-black group-hover:border-[#07BEB8] group-hover:shadow-[0_0_36px_rgba(7,190,184,0.38),inset_0_0_22px_rgba(7,190,184,0.10)] flex items-center justify-center transition-all duration-350">
                        <Icon className="w-7 h-7 text-white/35 group-hover:text-[#07BEB8] group-hover:scale-110 transition-all duration-300" />
                      </div>
                      {/* Step badge */}
                      <div className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-[#07BEB8] border-2 border-black flex items-center justify-center shadow-[0_0_12px_rgba(7,190,184,0.55)]">
                        <span className="text-[12px] font-bold text-[#001b1a] leading-none">{step.step}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-white/90 group-hover:text-[#07BEB8] transition-colors duration-300 mb-2 leading-snug">
                      {step.title}
                    </h3>
                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-400 leading-relaxed max-w-[200px]">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section
        ref={ctaSectionRef}
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BgApp})`, backgroundAttachment: "fixed" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Layer 0 — animated hex grid canvas */}
        <HiveBg sectionRef={ctaSectionRef} mouseRef={ctaCanvasMouseRef} />
        {/* Layer 1 — dark gradient overlay */}
        <div className="absolute inset-0 bg-[#07BEB8]/50" style={{ zIndex: 1 }} />

        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 2, background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(7,190,184,0.10) 0%, transparent 65%)" }}
        />
        {/* Layer 3 — cursor-following glow blob (moved imperatively, no re-render) */}
        <div
          ref={ctaGlowRef}
          aria-hidden="true"
          className="absolute top-0 left-0 rounded-full pointer-events-none"
          style={{
            zIndex: 3,
            width: "600px",
            height: "600px",
            transform: "translate(-300px, -300px)",
            background: "radial-gradient(circle, rgba(7,190,184,0.15) 0%, transparent 65%)",
            transition: "transform 0.38s cubic-bezier(0.2,0.9,0.2,1)",
            filter: "blur(28px)",
            willChange: "transform",
          }}
        />
        {/* Layer 4 — large floating hex SVGs with mouse parallax */}
        {[
          { w: 200, top: "6%",  left: "3%",  px:  16, py:  12 },
          { w: 130, top: "65%", left: "79%", px: -14, py: -15 },
          { w:  85, top: "13%", left: "87%", px:  10, py:  -8 },
          { w: 155, top: "72%", left: "5%",  px: -18, py:  10 },
        ].map((h, i) => (
          <svg
            key={i}
            aria-hidden="true"
            className="pointer-events-none absolute"
            style={{
              zIndex: 4,
              top: h.top,
              left: h.left,
              width: h.w,
              height: Math.round(h.w * 0.866),
              opacity: 0.045 + (i % 3) * 0.016,
              transform: `translate(${mousePos.x * h.px}px, ${mousePos.y * h.py}px)`,
              transition: "transform 1s cubic-bezier(0.2,0.9,0.2,1)",
            }}
            viewBox="0 0 100 87"
            fill="none"
          >
            <polygon points="25,2 75,2 98,43.3 75,84.6 25,84.6 2,43.3" stroke="#07BEB8" strokeWidth="1.5" />
          </svg>
        ))}

        {/* Content */}
        <div className="relative px-5 sm:px-10 lg:px-20 py-20 sm:py-15" style={{ zIndex: 10 }}>
          <div ref={ctaRef} className="max-w-3xl ">

            {/* Badge */}
            <div
              style={revealBase(ctaVisible, 0)}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
              <span className="text-xs font-medium tracking-widest text-white uppercase">Get in Touch</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#07BEB8]" />
            </div>

            {/* Word-reveal headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              {[
                { text: "Want",  d: 0.13 },
                { text: "to",    d: 0.22 },
                { text: "Start", d: 0.31 },
                { text: "a",     d: 0.40 },
              ].map(({ text, d }) => (
                <span
                  key={text}
                  className="inline-block text-white mr-[0.22em]"
                  style={{
                    opacity: ctaVisible ? 1 : 0,
                    transform: ctaVisible ? "translateY(0)" : "translateY(28px)",
                    transition: `opacity 0.55s ease ${d}s, transform 0.55s ease ${d}s`,
                  }}
                >
                  {text}
                </span>
              ))}
              {/* "Conversation?" — gradient + animated underline draw */}
              <span
                className="relative inline-block"
                style={{
                  opacity: ctaVisible ? 1 : 0,
                  transform: ctaVisible ? "translateY(0)" : "translateY(28px)",
                  transition: "opacity 0.55s ease 0.55s, transform 0.55s ease 0.55s",
                }}
              >
                <span className="precision-gradient">Conversation?</span>
                <span
                  aria-hidden="true"
                  className="absolute left-0 -bottom-0.75 h-0.5 w-full rounded-full bg-linear-to-r from-[#07BEB8] to-[#84fff7] origin-left"
                  style={{
                    transform: ctaVisible ? "scaleX(1)" : "scaleX(0)",
                    transition: "transform 0.7s cubic-bezier(0.4,0,0.2,1) 0.72s",
                  }}
                />
              </span>
            </h2>

            {/* Copy */}
            <p
              className="text-white text-sm sm:text-base leading-relaxed mb-6 max-w-md"
              style={revealBase(ctaVisible, 0.45)}
            >
              Whether you're exploring opportunities or just curious about life at CoreHives our team would love to hear from you.
            </p>

            <div
              style={revealBase(ctaVisible, 0.52)}
              className="w-full h-px bg-linear-to-r from-white to-white mb-6"
            />

            {/* CTA cluster — magnetic button + email link */}
            <div>
              <a
                href="mailto:careers@corehives.com"
                className="text-sm text-white hover:text-[#FFF] hover:text-[1rem] transition-colors duration-200 underline underline-offset-4 decoration-white/20 hover:decoration-[#07BEB8]/50"
              >
                careers@corehives.com
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── MODAL ─────────────────────────────────────────────────────────── */}
      {modalJob && (
        <ApplicationModal job={modalJob} onClose={() => setModalJob(null)} />
      )}

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
