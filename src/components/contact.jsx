import { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import BGSquare from "../assets/bg-square.png";
import BgLeft from "../assets/bg-left-content.webp";

function InputField({ name, placeholder, type = "text", value, onChange }) {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full bg-[#000405] border border-white/10 rounded-3xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none focus:border-[#07BEB8]/50 focus:bg-[#000405] transition-all duration-200"
    />
  );
}

function TextAreaField({ name, placeholder, value, onChange }) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={12}
      className="w-full bg-[#000405] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 outline-none focus:border-[#07BEB8]/50 focus:bg-[#000405] transition-all duration-200 resize-none"
    />
  );
}

const contactInfo = [
  {
    icon: <Phone size={15} className="text-[#001925]" />,
    label: "Phone",
    value: "(302) 857 0711",
  },
  {
    icon: <Mail size={15} className="text-[#001925]" />,
    label: "Email",
    value: "connect@CoreHives.com",
  },
  {
    icon: <MapPin size={15} className="text-[#001925]" />,
    label: "Address",
    value:
      "1st Floor Office No. 113, Caesar's Tower Main Shahra-E-Faisal Karachi, Pakistan",
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
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [validation, setValidation] = useState({});

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const errors = validate();
    setValidation(errors);
    if (Object.keys(errors).length > 0) return;
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSuccess("Your message has been sent successfully!");
        setForm({
          firstName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setError("Failed to send your message. Please try again later.");
      }
    } catch (err) {
      setError("Failed to send your message. Please check your connection.");
    } finally {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section className="section-auto-render relative overflow-hidden bg-[#000405] py-40 px-6">
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
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* ── LEFT COLUMN ── */}
        <div className="flex-1 min-w-[260px]">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
            Contact Us
          </h2>

          <p className="text-white text-sm leading-relaxed mb-10 max-w-sm">
            Whether you're ready to start or just exploring your options — we'd
            love to hear from you. Fill out the form and one of our expert
            agents will get back to you shortly.
          </p>

          {/* Let's Talk button */}
          <button className="inline-flex w-fit items-center gap-2 rounded-full border border-white/50 py-1.5 pl-4 pr-1.5 text-sm font-medium text-white transition-all hover:bg-[#017c785e] mb-10">
            Let's Talk
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07BEB8] text-slate-950">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>

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
        <div className="flex-1 min-w-[300px] max-h-[600px] w-full bg-[linear-gradient(200deg,#07beb824,#010a1133)] border border-[#07BEB8]/20 rounded-2xl p-8 sm:p-10 backdrop-blur-md shadow-[0_0_60px_rgba(7,190,184,0.07),0_24px_64px_rgba(0,0,0,0.4)]">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-7 tracking-tight">
            Let's Get in Touch
          </h3>

          {/* Loader and messages */}
          {loading && (
            <div className="mb-3 text-[#07BEB8] text-center font-semibold">
              Sending...
            </div>
          )}
          {success && submitted && (
            <div className="mb-3 text-green-400 text-center font-semibold">
              {success}
            </div>
          )}
          {error && submitted && (
            <div className="mb-3 text-red-400 text-center font-semibold">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <InputField
                  name="firstName"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={handleChange}
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
              />
              <InputField
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            {/* Textarea */}
            <div>
              <TextAreaField
                name="message"
                placeholder="Type your message"
                value={form.message}
                onChange={handleChange}
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
              <button
                type="submit"
                disabled={loading}
                className={`inline-flex w-fit items-center gap-2 rounded-full border border-white/50 py-1.5 pl-4 pr-1.5 text-sm font-medium text-white transition-all hover:bg-[#017c785e] ${
                  loading
                    ? "bg-[#07BEB8]/20 text-[#07BEB8] cursor-not-allowed"
                    : submitted && success
                      ? "bg-green-900/20 text-green-400"
                      : submitted && error
                        ? "bg-red-900/20 text-red-400"
                        : "bg-transparent text-white hover:bg-white/5"
                }`}
              >
                {loading ? "Sending..." : "Submit Now"}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07BEB8] text-slate-950">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>

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
