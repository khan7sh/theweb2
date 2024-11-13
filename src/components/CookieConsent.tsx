import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-effect subtle-border rounded-lg p-4 md:p-6 shadow-lg">
          <div className="flex items-start justify-between">
            <div className="pr-8">
              <p className="text-white mb-3">
                We use cookies to enhance your browsing experience, serve personalized content, 
                and analyze our traffic.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={acceptCookies}
                  className="px-6 py-2 bg-white text-gray-900 rounded-lg hover:bg-gray-100 
                           transition-colors duration-200 font-medium"
                >
                  Accept Cookies
                </button>
                <a
                  href="/cookies"
                  className="px-6 py-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>
            <button
              onClick={acceptCookies}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}