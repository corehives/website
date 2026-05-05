// Contact.jsx
import React, { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import BGSquare from "../assets/bg-square.png";

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
    value: "2nd Floor, 92-C Jami Commercial Street 11, Phase VII Phase 2",
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
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="relative overflow-hidden bg-[#000405] py-60 px-6">
      <img className="absolute -top-150 z-0 w-1/2 -right-20" src={BGSquare} alt="" />
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
          <button className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#07BEB8]/50 text-white text-sm font-medium mb-14 hover:bg-[#07BEB8]/10 hover:border-[#07BEB8] transition-all duration-200">
            Let's Talk
            <span className="w-7 h-7 rounded-full bg-[#07BEB8] flex items-center justify-center">
              <ArrowRight size={14} className="text-black" />
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
                  <p className="text-[#07BEB8] text-[11px] font-semibold uppercase tracking-widest mb-0.5">
                    {label}
                  </p>
                  <p className="text-white text-sm leading-relaxed">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN — Form card ── */}
        <div className="flex-1 min-w-[300px] max-h-[600px] w-full bg-[#0a2826]/75 border border-[#07BEB8]/20 rounded-2xl p-8 sm:p-10 backdrop-blur-md shadow-[0_0_60px_rgba(7,190,184,0.07),0_24px_64px_rgba(0,0,0,0.4)]">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-7 tracking-tight">
            Let's Get in Touch
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InputField
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
              />
              <InputField
                name="email"
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
              />
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
            <TextAreaField
              name="message"
              placeholder="Type your message"
              value={form.message}
              onChange={handleChange}
            />

            {/* Bottom actions */}
            <div className="flex items-center gap-5 flex-wrap mt-2">
              {/* Submit button */}
              <button
                type="submit"
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 border border-white/40 ${
                  submitted
                    ? "bg-[#07BEB8]/20 text-[#07BEB8]"
                    : "bg-transparent text-white hover:bg-white/5"
                }`}
              >
                Submit Now
                <span className="w-7 h-7 rounded-full bg-[#07BEB8] flex items-center justify-center">
                  <ArrowRight size={14} className="text-black" />
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
