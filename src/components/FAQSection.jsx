import { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How do you ensure the security of our project and data?",
    answer: "We prioritize security at every stage. We implement top-tier encryption standards (SSL/TLS, AES-256), follow OWASP secure coding guidelines, conduct rigorous vulnerability testing, and sign strict NDAs to protect your intellectual property.",
  },
  {
    question: "What is the typical cost of development projects?",
    answer: "Costs vary depending on scope, complexity, integrations, and specific feature sets. We provide transparent, highly competitive pricing after analyzing your requirements, ensuring complete visibility with no hidden charges.",
  },
  {
    question: "How long does it take to design and launch an application?",
    answer: "A standard web or mobile application typically takes 6 to 12 weeks from initial discovery to production launch. Complex enterprise systems may require longer. We structure work in milestones to ensure momentum and on-time delivery.",
  },
  {
    question: "What technology stack do you use for development?",
    answer: "We leverage modern, future-proof technologies. Our core stack includes React, React Native, Node.js, Express, Next.js, Vite, Tailwind CSS, PostgreSQL, and Prisma. We match the tech stack specifically to your project's performance needs.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer: "Yes, we provide comprehensive post-launch support, including server monitoring, security patching, optimization, bug fixes, and feature expansions. We offer custom maintenance packages to keep your platform future-ready.",
  },
  {
    question: "How do we get started with CoreHives?",
    answer: "Getting started is simple! Book a free consultation using any of our CTA buttons or by filling out the contact form. We will schedule a discovery call to discuss your objectives and present a detailed implementation roadmap.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const headerReveal = useScrollReveal(0);
  const subtitleReveal = useScrollReveal(100);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="section-auto-render relative py-20 md:py-24 lg:py-28 overflow-hidden bg-[#000405] text-white">
      {/* ── Background Glow ── */}
      <div
        className="pointer-events-none absolute left-0 bottom-1/4 w-96 h-[500px] z-0 opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(7,190,184,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="text-center mb-16">
          <p
            ref={subtitleReveal}
            className="text-xs uppercase text-[#07BEB8] mb-3 font-semibold tracking-widest"
            style={{ textShadow: "0 0 10px rgba(7,190,184,0.4)" }}
          >
            F.A.Q.
          </p>
          <h2
            ref={headerReveal}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight"
          >
            Frequently Asked <span className="precision-gradient">Questions</span>
          </h2>
        </div>

        {/* ── Accordion List ── */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const itemReveal = useScrollReveal(index * 80);

            return (
              <div
                ref={itemReveal}
                key={index}
                className="rounded-2xl border border-white/5 bg-[#030d0d]/40 overflow-hidden transition-all duration-300"
                style={{
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
                }}
              >
                {/* Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left p-6 sm:p-7 gap-4 transition-colors hover:bg-white/[0.01]"
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#07BEB8] bg-white/[0.02] flex-shrink-0 transition-all duration-300 ${
                      isOpen ? "rotate-180 border-[#07BEB8]/30 bg-[#07BEB8]/5" : ""
                    }`}
                  >
                    <ChevronDown size={16} />
                  </span>
                </button>

                {/* Answer Content */}
                <div
                  className="transition-all duration-300 ease-in-out overflow-hidden"
                  style={{
                    maxHeight: isOpen ? "200px" : "0",
                  }}
                >
                  <div className="px-6 sm:px-7 pb-6 sm:pb-7 border-t border-white/5 pt-4">
                    <p className="text-sm sm:text-base leading-relaxed text-white/70">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
