import { useState } from "react";
import { ArrowRight, MapPin, Mail, Phone } from "lucide-react";
import CTAButton from "../components/shared/CTAButton";
import { FaWhatsapp } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet's broken default icon paths in Vite
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

// Custom teal marker for the brand
const tealMarker = new L.DivIcon({
  html: `
    <div style="
      width: 36px; height: 36px;
      background: #07BEB8;
      border: 3px solid #fff;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      box-shadow: 0 4px 20px rgba(7,190,184,0.6);
    ">
      <div style="
        width: 10px; height: 10px;
        background: #000405;
        border-radius: 50%;
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      "></div>
    </div>
  `,
  className: "",
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -40],
});

const CONTACT_API_URL =
  import.meta.env.VITE_CONTACT_API_URL || "/api/contact";
const OFFICE_LOCATIONS = [
  {
    id: "hq",
    badge: "Head Office",
    name: "CoreHives HQ",
    city: "Cheyenne, WY",
    address: "1023 E Lincolnway, Cheyenne, WY 82001, United States",
    addressLines: ["1023 E Lincolnway", "Cheyenne, WY 82001", "United States"],
    link: "https://maps.google.com/?q=1023+E+Lincolnway+Cheyenne+WY+82001",
    position: [41.1399, -104.8202],
    title: "Visit Our Main Office",
    description:
      "Tap into our Wyoming location, inspect the area, and jump to directions right from the map.",
  },
  {
    id: "production",
    badge: "Production Hub",
    name: "CoreHives Production Office",
    city: "Karachi, Pakistan",
    address: "Caesars Tower, Floor 1, Office 113, Shahrah-e-Faisal, Karachi, Pakistan",
    addressLines: [
      "Caesars Tower, Floor 1, Office 113",
      "Shahrah-e-Faisal",
      "Karachi, Pakistan",
    ],
    link:
      "https://maps.google.com/?q=Caesars+Tower+Floor+1+Office+113+Shahrah-e-Faisal+Karachi+Pakistan",
    position: [24.8578, 67.0456],
    title: "Visit Our Production Office",
    description:
      "Switch to our Karachi production office and open directions straight from the map.",
  },
];
const MAP_CORNERS = [
  { top: 0, left: 0, borderTop: true, borderLeft: true, borderRadius: "28px 0 0 0" },
  { top: 0, right: 0, borderTop: true, borderRight: true, borderRadius: "0 28px 0 0" },
  { bottom: 0, left: 0, borderBottom: true, borderLeft: true, borderRadius: "0 0 0 28px" },
  { bottom: 0, right: 0, borderBottom: true, borderRight: true, borderRadius: "0 0 28px 0" },
];

function ContactInfoCard({ icon: Icon, label, value, href }) {
  return (
    <div
      className="group flex items-start gap-4 p-5 rounded-2xl border transition-all duration-300 hover:border-[#07BEB8]/40"
      style={{
        background: "rgba(7,190,184,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-xl"
        style={{
          background: "rgba(7,190,184,0.12)",
          border: "1px solid rgba(7,190,184,0.25)",
        }}
      >
        <Icon className="h-4 w-4 text-[#07BEB8]" />
      </div>
      <div>
        <p className="text-white/40 text-[0.65rem] font-semibold tracking-widest uppercase mb-1">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="text-white text-sm leading-snug transition-colors duration-200 hover:text-[#07BEB8]"
          >
            {value}
          </a>
        ) : (
          <p className="text-white text-sm leading-snug">{value}</p>
        )}
      </div>
    </div>
  );
}

function ThemedMap({ activeLocation, onLocationChange }) {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 px-4 sm:px-8 lg:px-12">
      <div className="group relative isolate mx-auto h-[380px] w-full max-w-[1440px] sm:h-[460px] lg:h-[560px]">
        <div
          className="absolute inset-0 z-0 overflow-hidden"
          style={{
            borderRadius: "28px",
            border: "1px solid rgba(7,190,184,0.18)",
            boxShadow: "0 0 0 1px rgba(7,190,184,0.05), 0 32px 90px rgba(0,0,0,0.45)",
          }}
        >
          <MapContainer
            key={activeLocation.id}
            center={activeLocation.position}
            zoom={15}
            scrollWheelZoom={false}
            style={{ width: "100%", height: "100%" }}
            zoomControl={false}
            attributionControl={false}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              attribution='&copy; <a href="https://carto.com/">CARTO</a>'
            />
            <ZoomControl position="topright" />
            <Marker position={activeLocation.position} icon={tealMarker}>
              <Popup className="corehives-popup">
                <div
                  style={{
                    background: "#050f10",
                    border: "1px solid rgba(7,190,184,0.3)",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    color: "#fff",
                    minWidth: "200px",
                  }}
                >
                  <p
                    style={{
                      color: "#07BEB8",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    {activeLocation.name}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>
                    {activeLocation.addressLines[0]}<br />
                    {activeLocation.addressLines[1]}<br />
                    {activeLocation.addressLines[2]}
                  </p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {MAP_CORNERS.map((corner, i) => (
          <div
            key={i}
            className="pointer-events-none absolute z-20"
            style={{
              width: 64,
              height: 64,
              ...corner,
              ...(corner.borderTop ? { borderTop: "2px solid rgba(7,190,184,0.6)" } : {}),
              ...(corner.borderLeft ? { borderLeft: "2px solid rgba(7,190,184,0.6)" } : {}),
              ...(corner.borderRight ? { borderRight: "2px solid rgba(7,190,184,0.6)" } : {}),
              ...(corner.borderBottom ? { borderBottom: "2px solid rgba(7,190,184,0.6)" } : {}),
            }}
          />
        ))}

        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-[28px]">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(7,190,184,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(7,190,184,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,4,5,0.35) 0%, rgba(0,4,5,0.02) 22%, rgba(0,4,5,0.12) 62%, rgba(0,4,5,0.82) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 18% 20%, rgba(7,190,184,0.22), transparent 26%), radial-gradient(circle at 85% 78%, rgba(7,190,184,0.15), transparent 20%)",
            }}
          />
        </div>

        <div className="pointer-events-none absolute left-5 top-5 z-30 max-w-[260px] rounded-2xl border border-[#07BEB8]/20 bg-[#031112]/70 p-4 backdrop-blur-md sm:left-6 sm:top-6 sm:p-5">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#07BEB8]/20 bg-[#07BEB8]/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-[#8efcf8]">
            <span className="h-2 w-2 rounded-full bg-[#07BEB8]" />
            {activeLocation.badge}
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/45">
            {activeLocation.name}
          </p>
          <p className="mt-2 text-xl font-bold text-white sm:text-2xl">
            {activeLocation.title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/60">
            {activeLocation.description}
          </p>
        </div>

        <div className="absolute bottom-20 left-5 right-5 z-30 flex flex-col gap-3 sm:bottom-6 sm:left-6 sm:right-auto sm:flex-row sm:flex-wrap">
          {OFFICE_LOCATIONS.map((location) => {
            const isActive = location.id === activeLocation.id;

            return (
              <button
                key={location.id}
                type="button"
                onClick={() => onLocationChange(location.id)}
                className={`min-w-[160px] rounded-2xl border px-4 py-3 text-left backdrop-blur-md transition-all duration-300 ${
                  isActive
                    ? "border-[#07BEB8]/50 bg-[#062527]/90 shadow-[0_16px_36px_rgba(7,190,184,0.18)]"
                    : "border-white/10 bg-[#031112]/72 hover:border-[#07BEB8]/30 hover:bg-[#04191b]/88"
                }`}
              >
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#07BEB8]">
                  {location.badge}
                </p>
                <p className="mt-1 text-sm font-medium text-white/85">{location.city}</p>
              </button>
            );
          })}
        </div>

        <a
          href={activeLocation.link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-5 right-5 z-30 inline-flex items-center gap-3 rounded-full border border-[#07BEB8]/35 bg-[#031112]/80 py-2 pl-5 pr-2 text-sm font-medium text-white shadow-[0_14px_40px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:border-[#07BEB8]/60 hover:bg-[#062527]/95 hover:text-[#8efcf8] lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-within:translate-y-0 lg:group-focus-within:opacity-100"
        >
          Open in Google Maps
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#07BEB8] text-slate-950">
            <ArrowRight className="h-4 w-4" />
          </span>
        </a>

        <div className="pointer-events-none absolute right-5 top-20 z-20 rounded-full border border-[#07BEB8]/15 bg-[#031112]/65 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-white/55 backdrop-blur-md sm:right-6 sm:top-24">
          Zoom + Scan
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [activeLocationId, setActiveLocationId] = useState(OFFICE_LOCATIONS[0].id);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [validation, setValidation] = useState({});

  const activeLocation =
    OFFICE_LOCATIONS.find((location) => location.id === activeLocationId) || OFFICE_LOCATIONS[0];
  const contactInfo = [
    {
      icon: MapPin,
      label: "Head Office",
      value: OFFICE_LOCATIONS[0].address,
      href: OFFICE_LOCATIONS[0].link,
    },
    {
      icon: MapPin,
      label: "Production Office",
      value: OFFICE_LOCATIONS[1].address,
      href: OFFICE_LOCATIONS[1].link,
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "info@corehives.com",
      href: "mailto:info@corehives.com",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: "+1 4157189679",
      href: "tel:+14157189679",
    },
    {
      icon: Phone,
      label: "Call center",
      value: "+1 3072008084",
      href: "tel:+13072008084",
    },
  ];

  const validate = () => {
    const errors = {};

    if (!formData.name.trim()) errors.name = "Full name is required.";

    if (!formData.email.trim()) {
      errors.email = "Email address is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Enter a valid email address.";
    }

    if (!formData.subject.trim()) errors.subject = "Subject is required.";
    if (!formData.message.trim()) errors.message = "Message is required.";

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setValidation((prev) => ({ ...prev, [name]: undefined }));

    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const errors = validate();
    setValidation(errors);

    if (Object.keys(errors).length > 0) return;

    setLoading(true);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.name.trim(),
          email: formData.email.trim(),
          phone: "",
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setValidation({});
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setError("Could not reach the contact server. Make sure the backend is running and try again.");
    } finally {
      setLoading(false);
    }
  };

  const fieldClass =
    "w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all duration-200";
  const fieldStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
  };

  return (
    <>
      {/* ── Leaflet popup style override ── */}
      <style>{`
        .leaflet-popup-content-wrapper,
        .leaflet-popup-tip {
          background: transparent !important;
          box-shadow: none !important;
          padding: 0 !important;
        }
        .leaflet-popup-content {
          margin: 0 !important;
        }
        .leaflet-container {
          background: #050f10 !important;
        }
        .leaflet-top.leaflet-right {
          top: 20px;
          right: 20px;
        }
        .leaflet-control-zoom {
          border: 1px solid rgba(7,190,184,0.24) !important;
          border-radius: 18px !important;
          overflow: hidden;
          box-shadow: 0 18px 50px rgba(0,0,0,0.36) !important;
        }
        .leaflet-control-zoom a {
          width: 44px;
          height: 44px;
          line-height: 42px;
          background: rgba(3,17,18,0.92) !important;
          color: #07BEB8 !important;
          border-bottom: 1px solid rgba(7,190,184,0.18) !important;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .leaflet-control-zoom a:last-child {
          border-bottom: none !important;
        }
        .leaflet-control-zoom a:hover {
          background: rgba(7,190,184,0.16) !important;
          color: #ffffff !important;
        }
        .leaflet-control-zoom a.leaflet-disabled {
          color: rgba(255,255,255,0.28) !important;
          background: rgba(3,17,18,0.82) !important;
        }
      `}</style>

      <section className="relative w-full min-h-screen bg-[#000405] overflow-hidden">
        {/* Background glows */}
        <div
          className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #07BEB8, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute top-1/2 -right-60 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, #07BEB8, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-14 py-24">

          {/* ── Page Header ── */}
          <div className="mb-16 max-w-6xl text-center">
            <p className="text-[#07BEB8] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
              Get In Touch
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Let's Start a{" "}
              <span
                style={{
                  background: "#07BEB8",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Conversation.
              </span>
            </h1>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed">
              Have a project in mind or just want to explore what's possible?
              Drop us a message and we'll get back to you within 24 hours.
            </p>
          </div>

          {/* ── Main Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10">

            {/* ── Left: Contact Info ── */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {contactInfo.map((item) => (
                <ContactInfoCard key={item.label} {...item} />
              ))}
            </div>

            {/* ── Right: Contact Form ── */}
            <div
              className="lg:col-span-3 rounded-2xl p-8 border"
              style={{
                background: "rgba(7,190,184,0.03)",
                borderColor: "rgba(7,190,184,0.15)",
              }}
            >
              {error && !submitted ? (
                <div className="mb-5 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                  {error}
                </div>
              ) : null}

              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center gap-4">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full"
                    style={{
                      background: "rgba(7,190,184,0.15)",
                      border: "1px solid rgba(7,190,184,0.4)",
                    }}
                  >
                    <svg
                      className="h-7 w-7 text-[#07BEB8]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-white text-xl font-bold">Message Sent!</h3>
                  <p className="text-white/50 text-sm max-w-xs">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label className="text-white/40 text-[0.65rem] font-semibold tracking-widest uppercase">
                        Full Name
                      </label>
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className={fieldClass}
                          style={fieldStyle}
                          onFocus={(e) => (e.target.style.borderColor = "rgba(7,190,184,0.5)")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                        />
                        {validation.name ? (
                          <p className="mt-2 text-xs text-red-300">{validation.name}</p>
                        ) : null}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-white/40 text-[0.65rem] font-semibold tracking-widest uppercase">
                        Email Address
                      </label>
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className={fieldClass}
                          style={fieldStyle}
                          onFocus={(e) => (e.target.style.borderColor = "rgba(7,190,184,0.5)")}
                          onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                        />
                        {validation.email ? (
                          <p className="mt-2 text-xs text-red-300">{validation.email}</p>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-[0.65rem] font-semibold tracking-widest uppercase">
                      Subject
                    </label>
                    <div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="What's this about?"
                        className={fieldClass}
                        style={fieldStyle}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(7,190,184,0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                      {validation.subject ? (
                        <p className="mt-2 text-xs text-red-300">{validation.subject}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-[0.65rem] font-semibold tracking-widest uppercase">
                      Message
                    </label>
                    <div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us about your project..."
                        className={`${fieldClass} resize-none`}
                        style={fieldStyle}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(7,190,184,0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                      />
                      {validation.message ? (
                        <p className="mt-2 text-xs text-red-300">{validation.message}</p>
                      ) : null}
                    </div>
                  </div>

                  <CTAButton
                    type="submit"
                    disabled={loading}
                    loading={loading}
                    className="mt-2 self-start"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </CTAButton>
                </form>
              )}
            </div>
          </div>

          {/* ── Map Section ── */}
          <div>
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-lg"
                  style={{
                    background: "rgba(7,190,184,0.12)",
                    border: "1px solid rgba(7,190,184,0.3)",
                  }}
                >
                  <MapPin className="h-4 w-4 text-[#07BEB8]" />
                </div>
                <div>
                  <p className="text-[#07BEB8] text-xs font-semibold tracking-[0.25em] uppercase">
                    Find Us
                  </p>
                  <p className="text-white/40 text-xs mt-0.5">
                    {activeLocation.address}
                  </p>
                </div>
              </div>

              <p className="max-w-md text-xs leading-relaxed text-white/45 sm:text-left sm:text-sm">
                Switch between our two office locations, explore the live map, and open directions for the branch you need.
              </p>
            </div>

            <ThemedMap
              activeLocation={activeLocation}
              onLocationChange={setActiveLocationId}
            />
          </div>
        </div>
      </section>
    </>
  );
}
