import { useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import CTAButton from "./shared/CTAButton";
import BGSquare from "../assets/bg-square.png";
import BgLeft from "../assets/bg-left-content.webp";

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || "/api/contact";

function InputField({
  name,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  disabled,
}) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      aria-invalid={Boolean(error)}
      className={`w-full rounded-3xl border bg-[#000405] px-4 py-3 text-sm text-white outline-none transition-all duration-200 ${
        error
          ? "border-red-400/60 bg-red-500/[0.03] focus:border-red-400"
          : "border-white/10 focus:border-[#07BEB8]/50 focus:bg-[#000405]"
      } ${disabled ? "cursor-not-allowed opacity-70" : ""} placeholder-white/30`}
    />
  );
}

function TextAreaField({
  name,
  placeholder,
  value,
  onChange,
  error,
  disabled,
}) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={6}
      disabled={disabled}
      aria-invalid={Boolean(error)}
      className={`w-full resize-none rounded-xl border bg-[#000405] px-4 py-3 text-sm text-white outline-none transition-all duration-200 ${
        error
          ? "border-red-400/60 bg-red-500/[0.03] focus:border-red-400"
          : "border-white/10 focus:border-[#07BEB8]/50 focus:bg-[#000405]"
      } ${disabled ? "cursor-not-allowed opacity-70" : ""} placeholder-white/30`}
    />
  );
}

function StatusBanner({ status }) {
  if (!status) return null;

  const variants = {
    loading: {
      icon: LoaderCircle,
      iconClass: "animate-spin text-[#8efcf8]",
      container:
        "border-[#07BEB8]/25 bg-[linear-gradient(135deg,rgba(7,190,184,0.18),rgba(1,10,17,0.32))]",
      eyebrow: "text-[#8efcf8]",
      body: "text-white/65",
      label: "Sending",
    },
    success: {
      icon: CheckCircle2,
      iconClass: "text-emerald-300",
      container:
        "border-emerald-400/20 bg-[linear-gradient(135deg,rgba(16,185,129,0.16),rgba(1,10,17,0.32))]",
      eyebrow: "text-emerald-300",
      body: "text-white/65",
      label: "Delivered",
    },
    error: {
      icon: AlertCircle,
      iconClass: "text-rose-300",
      container:
        "border-rose-400/20 bg-[linear-gradient(135deg,rgba(244,63,94,0.16),rgba(1,10,17,0.32))]",
      eyebrow: "text-rose-300",
      body: "text-white/65",
      label: "Attention",
    },
  };

  const variant = variants[status.type];
  if (!variant) return null;

  const Icon = variant.icon;

  return (
    <div
      role={status.type === "error" ? "alert" : "status"}
      className={`mb-6 flex items-start gap-4 rounded-2xl border px-4 py-4 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-md ${variant.container}`}
    >
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#020b0d]/60">
        <Icon className={`h-5 w-5 ${variant.iconClass}`} />
      </div>
      <div className="min-w-0">
        <p
          className={`text-[0.65rem] font-semibold uppercase tracking-[0.24em] ${variant.eyebrow}`}
        >
          {variant.label}
        </p>
        <p className="mt-1 text-base font-semibold text-white">
          {status.title}
        </p>
        <p className={`mt-1 text-sm leading-relaxed ${variant.body}`}>
          {status.message}
        </p>
      </div>
    </div>
  );
}

const contactInfo = [
  {
    icon: <Phone size={15} className="text-[#001925]" />,
    label: "Phone",
    value: "+1 3072008084",
  },
  {
    icon: <FaWhatsapp size={15} className="text-[#001925]" />,
    label: "WhatsApp",
    value: "+1 4157189679",
  },
  {
    icon: <Mail size={15} className="text-[#001925]" />,
    label: "Email",
    value: "info@corehives.com",
  },
  {
    icon: <MapPin size={15} className="text-[#001925]" />,
    label: "Head Office",
    value: "1023 E Lincolnway, Cheyenne, WY 82001, United States",
  },
  {
    icon: <MapPin size={15} className="text-[#001925]" />,
    label: "Production Office",
    value:
      "Office Number 113 1st Floor, Caesar's Tower, Karachi, 75050, Pakistan",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [validation, setValidation] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const errors = {};
    if (!form.firstName.trim()) errors.firstName = "First name is required.";
    if (!form.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errors.email = "Invalid email address.";
    }
    if (!form.message.trim()) errors.message = "Message is required.";
    return errors;
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setValidation((v) => ({ ...v, [e.target.name]: undefined }));
    if (status?.type !== "loading") setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate();
    setValidation(errors);

    if (Object.keys(errors).length > 0) {
      setStatus({
        type: "error",
        title: "A few fields need attention",
        message:
          "Please review the highlighted fields and submit the form again.",
      });
      return;
    }

    setLoading(true);
    setStatus({
      type: "loading",
      title: "Sending your message",
      message: "We are routing your request to the CoreHives team now.",
    });

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          title: "Message delivered",
          message:
            "Thanks for reaching out. Our team will get back to you within 24 hours.",
        });
        setForm({
          firstName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setValidation({});
      } else {
        setStatus({
          type: "error",
          title: "Submission failed",
          message:
            "We could not send your message just now. Please try again in a moment.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        title: "Contact server unavailable",
        message:
          "Could not reach the contact server. Make sure the backend is running and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-auto-render relative overflow-hidden bg-[#000405] py-16 px-4 sm:px-6 lg:py-40">
      <img
        className="absolute -top-2/2 z-0 w-1/1 -right-20"
        src={BGSquare}
        alt=""
      />
      <img
        className="absolute -top-1/4 z-0 w-1/2 -left-0"
        src={BgLeft}
        alt=""
      />
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        {/* ── LEFT COLUMN ── */}
        <div className="flex-1 w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
            Contact Us
          </h2>

          <p className="text-white text-sm leading-relaxed mb-6 lg:mb-10 max-w-sm">
            Whether you're ready to start or just exploring your options, we'd
            love to hear from you. Fill out the form and one of our expert
            agents will get back to you shortly.
          </p>

          {/* Let's Talk button */}
          <CTAButton href="/contact" className="mb-5">
            Let's Talk
          </CTAButton>

          {/* Office heading */}
          <p className="text-white font-bold text-base mb-5">
            CoreHives Development Office
          </p>

          {/* Contact info items */}
          <div className="flex flex-col gap-5">
            {contactInfo.map(({ icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-[#07BEB8]/30 bg-[#07BEB8] flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-[#058682] text-[11px] font-semibold uppercase tracking-widest mb-0.5">
                    {label}
                  </p>
                  <p className="text-white text-sm leading-relaxed">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN — Form card ── */}
        <div className="flex-1 w-full bg-[linear-gradient(200deg,#07beb824,#010a1133)] border border-[#07BEB8]/20 rounded-2xl p-5 sm:p-8 lg:p-10 backdrop-blur-md shadow-[0_0_60px_rgba(7,190,184,0.07),0_24px_64px_rgba(0,0,0,0.4)]">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-7 tracking-tight">
            Let's Get in Touch
          </h3>

          <StatusBanner status={status} />
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <InputField
                  name="firstName"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={handleChange}
                  error={validation.firstName}
                  disabled={loading}
                />
                {validation.firstName && (
                  <div className="text-red-400 text-xs mt-1">
                    {validation.firstName}
                  </div>
                )}
              </div>
              <div>
                <InputField
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  error={validation.email}
                  disabled={loading}
                />
                {validation.email && (
                  <div className="text-red-400 text-xs mt-1">
                    {validation.email}
                  </div>
                )}
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InputField
                name="phone"
                placeholder="Phone No"
                value={form.phone}
                onChange={handleChange}
                disabled={loading}
              />
              <InputField
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

            {/* Textarea */}
            <div>
              <TextAreaField
                name="message"
                placeholder="Type your message"
                value={form.message}
                onChange={handleChange}
                error={validation.message}
                disabled={loading}
              />
              {validation.message && (
                <div className="text-red-400 text-xs mt-1">
                  {validation.message}
                </div>
              )}
            </div>

            {/* Bottom actions */}
            <div className="flex items-center gap-5 flex-wrap mt-2">
              {/* Submit button */}
              <CTAButton
                type="submit"
                disabled={loading}
                loading={loading}
                className="w-fit"
              >
                {loading ? "Submitting..." : "Submit Now"}
              </CTAButton>

              {/* 24/7 support */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#07BEB8]/30 bg-[#07BEB8]/[0.07] flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={16} className="text-[#07BEB8]" />
                </div>
                <div>
                  <p className="text-[#07BEB8] text-[11px] font-semibold uppercase tracking-widest leading-none mb-0.5">
                    24/7 Customer Support
                  </p>
                  <p className="text-white text-sm font-semibold leading-none">
                    Chat Now
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
