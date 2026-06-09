import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function TawkToChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    // Match loader: 2100ms show + 820ms fade = 2920ms total
    const t = setTimeout(() => setVisible(true), 2920);
    return () => clearTimeout(t);
  }, []);

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

    window.Tawk_API.onUnreadCountChanged = function (count) {
      setUnread(count);
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
      setUnread(0);
    }
  }

  return (
    <>
      {/* Pulse ring */}
      <span
        className={`fixed bottom-6 right-6 z-9998 flex h-14 w-14 items-center justify-center rounded-full pointer-events-none transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"}`}
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#07BEB8] opacity-20" />
      </span>

      <button
        onClick={handleToggle}
        aria-label="Toggle live chat"
        className={`fixed bottom-6 right-6 z-9999 flex h-14 w-14 items-center justify-center rounded-full bg-[#07BEB8] shadow-[0_4px_20px_rgba(7,190,184,0.5)] transition-all duration-500 hover:scale-110 hover:shadow-[0_4px_32px_rgba(7,190,184,0.7)] active:scale-95 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" strokeWidth={2.5} />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" strokeWidth={2} />
        )}

        {/* Unread badge */}
        {!isOpen && unread > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white shadow-lg">
            {unread > 99 ? "99+" : unread}
          </span>
        )}
      </button>
    </>
  );
}
