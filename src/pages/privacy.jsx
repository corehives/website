import { useEffect } from "react";
import leftLight from "../assets/left-light.png";
import rightLight from "../assets/right-light.png";
import { Shield } from "lucide-react";
import Footer from "../components/layout/footer";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#000405] text-[#e8f0f4] pt-28 pb-16 md:pt-36">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={leftLight}
          className="absolute -top-40 -left-60 w-3/4 opacity-40 md:opacity-50"
          alt=""
        />
        <img
          src={rightLight}
          className="absolute top-1/3 -right-60 w-3/4 opacity-40 md:opacity-50"
          alt=""
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#07BEB8]/10 border border-[#07BEB8]/30 mb-6 text-[#07BEB8]">
            <Shield className="h-8 w-8" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Privacy <span className="precision-gradient">Policy</span>
          </h1>
          <p className="text-[#8ca0b0] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            At CoreHives, we value the trust our clients place in us. This Privacy Policy explains how we collect, use, store, and protect your information.
          </p>
        </div>

        {/* Content Section */}
        <div 
          className="rounded-2xl p-6 sm:p-10 md:p-12 mb-12 border border-white/10"
          style={{
            background: "rgba(7, 190, 184, 0.03)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            boxShadow: "0 0 30px rgba(7, 190, 184, 0.04)",
          }}
        >
          <div className="prose prose-invert max-w-none space-y-12">
            
            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-[#07BEB8]">01.</span> General Information
              </h2>
              <div className="h-[1px] w-full bg-[#07BEB8]/20 mb-4" />
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                At CoreHives, we value the trust our clients place in us. This Privacy Policy explains how we collect, use, store, and protect the information shared with us while providing our services.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                This policy applies to information collected through our website, products, and services provided by CoreHives. It does not apply to third-party websites, services, or organizations that we do not own, manage, or control.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                &quot;Information&quot; refers to any data voluntarily provided by our clients, customers, or website visitors for the purpose of using our services, requesting information, or engaging with CoreHives.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be published on this page, and the updated version will become effective immediately upon publication.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                This Privacy Policy is intended to comply with applicable data protection and privacy laws governing the collection and use of personal information.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-[#07BEB8]">02.</span> Information We Collect
              </h2>
              <div className="h-[1px] w-full bg-[#07BEB8]/20 mb-4" />
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                CoreHives collects information necessary to provide our services and improve the experience of our clients.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                The information we may collect includes:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-4 list-disc text-sm sm:text-base text-gray-300">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Project details and requirements</li>
                <li>Billing information when applicable</li>
                <li>Technical information (IP address, browser type, operating system, and device information)</li>
              </ul>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed pt-2">
                We collect this information when you contact us through our website, request a quote, submit an inquiry, subscribe to updates, purchase our services, or communicate with our team.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-[#07BEB8]">03.</span> How We Use Your Information
              </h2>
              <div className="h-[1px] w-full bg-[#07BEB8]/20 mb-4" />
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                The information collected by CoreHives may be used to:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-4 list-disc text-sm sm:text-base text-gray-300">
                <li>Respond to inquiries and support requests</li>
                <li>Deliver requested products and services</li>
                <li>Manage ongoing projects and project updates</li>
                <li>Improve our website and services</li>
                <li>Send important service announcements</li>
                <li>Share newsletters or company updates when chosen</li>
                <li>Process invoices and payments</li>
                <li>Maintain security and prevent unauthorized access</li>
                <li>Comply with applicable legal obligations</li>
              </ul>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed pt-2">
                We only use information for legitimate business purposes related to the services we provide.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-[#07BEB8]">04.</span> Information Security
              </h2>
              <div className="h-[1px] w-full bg-[#07BEB8]/20 mb-4" />
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                CoreHives takes appropriate technical and organizational measures to protect the information entrusted to us.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                We implement safeguards including secure authentication systems, access controls, encrypted communication where appropriate, regular system monitoring, secure hosting environments, and internal security practices.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Access to confidential client information is limited to authorized personnel who require it to perform their responsibilities.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-[#07BEB8]">05.</span> Cookies
              </h2>
              <div className="h-[1px] w-full bg-[#07BEB8]/20 mb-4" />
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Our website may use cookies and similar technologies to improve user experience and website performance.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Cookies help us remember user preferences, analyze website traffic, improve website functionality, and enhance security.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Users can disable cookies through their browser settings. Some website features may not function properly if cookies are disabled.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-[#07BEB8]">06.</span> Sharing Information
              </h2>
              <div className="h-[1px] w-full bg-[#07BEB8]/20 mb-4" />
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                CoreHives does not sell, rent, or trade personal information to third parties.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Information may be shared only when necessary to deliver requested services, process payments, work with trusted service providers, meet legal or regulatory requirements, or protect the rights, property, or safety of CoreHives, our clients, or others.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Any third-party service providers are expected to protect client information in accordance with applicable privacy requirements.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-[#07BEB8]">07.</span> Third-Party Services & Data Retention
              </h2>
              <div className="h-[1px] w-full bg-[#07BEB8]/20 mb-4" />
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Our website may contain links to external websites or services. CoreHives is not responsible for the privacy practices or content of third-party websites. We encourage users to review the privacy policies of any external websites they visit.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                We retain personal information only for as long as necessary to provide our services, fulfill contractual obligations, comply with legal requirements, resolve disputes, and enforce our agreements. When information is no longer required, it is securely deleted or anonymized.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-[#07BEB8]">08.</span> Children's Privacy & Your Rights
              </h2>
              <div className="h-[1px] w-full bg-[#07BEB8]/20 mb-4" />
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                CoreHives does not knowingly collect personal information from individuals under the age of 18. If we become aware that personal information has been submitted by a minor without appropriate consent, we will take steps to remove that information.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Depending on applicable laws, you may have the right to access your personal information, request corrections, request deletion, withdraw consent, object to certain processing, or request a copy of the information we hold about you. To exercise these rights, please contact us.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-[#07BEB8]">09.</span> Contact Us
              </h2>
              <div className="h-[1px] w-full bg-[#07BEB8]/20 mb-4" />
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                If you have any questions regarding this Privacy Policy or how CoreHives handles your information, please contact us:
              </p>
              <div className="p-5 rounded-xl border border-white/5 bg-white/[0.01] space-y-2 text-sm sm:text-base">
                <p className="text-white font-semibold">CoreHives</p>
                <p className="text-gray-300">Email: <a href="mailto:contact@corehives.com" className="text-[#07BEB8] hover:underline">contact@corehives.com</a></p>
                <p className="text-gray-300">Website: <a href="https://corehives.com" target="_blank" rel="noopener noreferrer" className="text-[#07BEB8] hover:underline">https://corehives.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
