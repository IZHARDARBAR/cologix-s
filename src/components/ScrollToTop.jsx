import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react'; // Lucide icon use kiya

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-10 right-10 z-[150]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#f27c22] hover:bg-[#d96a1b] text-white p-3 rounded-sm shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-90 animate-bounce"
        >
          <ChevronUp size={24} strokeWidth={3} />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;