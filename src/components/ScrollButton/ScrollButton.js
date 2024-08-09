import React, { useState, useEffect } from 'react';
import './ScrollButton.css';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <i class="fas fa-arrow-up"></i>
    </button>
  );
};

export default ScrollButton;