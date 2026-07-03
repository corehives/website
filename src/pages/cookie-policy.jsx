import { useEffect } from "react";
import leftLight from "../assets/left-light.png";
import rightLight from "../assets/right-light.png";
import { Info } from "lucide-react";
import Footer from "../components/layout/footer";

export default function CookiePolicy() {
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
            <Info className="h-8 w-8" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Cookie <span className="precision-gradient">Policy</span>
          </h1>
          <p className="text-[#8ca0b0] max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            This Cookie Policy explains how CoreHives uses cookies and similar technologies when you visit our website.
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
                <span className="text-[#07BEB8]">01.</span> Introduction
              </h2>
              <div className="h-[1px] w-full bg-[#07BEB8]/20 mb-4" />
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                This Cookie Policy explains how CoreHives uses cookies and similar technologies when you visit our website. It describes what cookies are, why we use them, and the choices you have regarding their use.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                By continuing to use our website, you agree to the use of cookies as described in this policy unless you disable them through your browser settings.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-[#07BEB8]">02.</span> What Are Cookies?
              </h2>
              <div className="h-[1px] w-full bg-[#07BEB8]/20 mb-4" />
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Cookies are small text files that are stored on your computer, smartphone, or other device when you visit a website. They help websites recognize your device, remember your preferences, and improve your browsing experience.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Cookies do not typically contain information that directly identifies you, but they may be linked to information you provide while using our website.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-[#07BEB8]">03.</span> How We Use Cookies
              </h2>
              <div className="h-[1px] w-full bg-[#07BEB8]/20 mb-4" />
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                CoreHives uses cookies to improve the functionality, performance, and security of our website.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Cookies may be used to:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-4 list-disc text-sm sm:text-base text-gray-300">
                <li>Remember your preferences and settings.</li>
                <li>Improve website performance and user experience.</li>
                <li>Analyze website traffic and visitor behavior.</li>
                <li>Maintain secure user sessions where applicable.</li>
                <li>Measure the effectiveness of our content and services.</li>
                <li>Identify and resolve technical issues.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-[#07BEB8]">04.</span> Types of Cookies We Use
              </h2>
              <div className="h-[1px] w-full bg-[#07BEB8]/20 mb-4" />
              
              <div className="space-y-6 mt-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Essential Cookies</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    These cookies are required for the website to function properly. They enable core features such as page navigation, security, and access to certain areas of the website. Without these cookies, some parts of the website may not function correctly.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Performance and Analytics Cookies</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    These cookies help us understand how visitors interact with our website by collecting anonymous information such as pages visited, time spent on pages, traffic sources, and browser/device information. This information helps us improve our website and user experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Functional Cookies</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Functional cookies remember your preferences, such as language selection or previously entered information, making future visits more convenient.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Marketing Cookies</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    With your permission, marketing cookies may be used to measure the effectiveness of advertising campaigns and provide content that is more relevant to your interests. CoreHives does not use marketing cookies without appropriate consent where required by law.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-[#07BEB8]">05.</span> Third-Party Cookies
              </h2>
              <div className="h-[1px] w-full bg-[#07BEB8]/20 mb-4" />
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Some features on our website may rely on trusted third-party services. These providers may place cookies on your device when you use their services.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Examples may include:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-4 list-disc text-sm sm:text-base text-gray-300">
                <li>Google Analytics</li>
                <li>Google Maps</li>
                <li>YouTube</li>
                <li>Live chat services</li>
                <li>Social media integrations</li>
              </ul>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed pt-2">
                These cookies are governed by the privacy policies of the respective third-party providers.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-[#07BEB8]">06.</span> Managing Cookies
              </h2>
              <div className="h-[1px] w-full bg-[#07BEB8]/20 mb-4" />
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Most web browsers allow you to manage or disable cookies through their settings. You can view stored cookies, delete existing cookies, block all cookies, block cookies from specific websites, or receive notifications before cookies are stored.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Please note that disabling cookies may affect certain features and functionality of the CoreHives website.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-3">
                <span className="text-[#07BEB8]">07.</span> Updates and Contact
              </h2>
              <div className="h-[1px] w-full bg-[#07BEB8]/20 mb-4" />
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                CoreHives may update this Cookie Policy from time to time to reflect changes in our website, technologies, or legal requirements. Any updates will be posted on this page with the revised effective date.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed pt-2">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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
