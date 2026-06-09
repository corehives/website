import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function TawkToChat() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();

    window.Tawk_API.onLoad = function () {
      window.Tawk_API.hideWidget();
    };

    window.Tawk_API.onChatMinimized = function () {
      setIsOpen(false);
    };

    window.Tawk_API.onChatEnded = function () {
      setIsOpen(false);
    };

    if (!document.querySelector('script[src*="tawk.to"]')) {
      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/6a2857f789c55b1c298781f7/1jqmpf7qi";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    }
  }, []);

  function handleToggle() {
    if (!window.Tawk_API?.maximize) return;
    if (isOpen) {
      window.Tawk_API.minimize();
      setIsOpen(false);
    } else {
      window.Tawk_API.maximize();
      setIsOpen(true);
    }
  }

  return (
    <>
      {/* Pulse ring */}
      <span className="fixed bottom-6 right-6 z-9998 flex h-14 w-14 items-center justify-center rounded-full pointer-events-none">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#07BEB8] opacity-20" />
      </span>

      <button
        onClick={handleToggle}
        aria-label="Toggle live chat"
        className="fixed bottom-6 right-6 z-9999 flex h-14 w-14 items-center justify-center rounded-full bg-[#07BEB8] shadow-[0_4px_20px_rgba(7,190,184,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_4px_32px_rgba(7,190,184,0.7)] active:scale-95"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" strokeWidth={2.5} />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" strokeWidth={2} />
        )}
      </button>
    </>
  );
}
