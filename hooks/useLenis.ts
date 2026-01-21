'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const useLenis = () => {
  useEffect(() => {
    // Create Lenis instance with optimized settings for smooth scrolling
    const lenis = new Lenis({
      duration: 1.0, // Reduced from 1.2 for snappier feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0, // Standard multiplier
      infinite: false,
    });

    // Add lenis class to html for CSS targeting
    document.documentElement.classList.add('lenis');

    // Request animation frame loop for smooth scrolling
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      document.documentElement.classList.remove('lenis');
    };
  }, []);
};
