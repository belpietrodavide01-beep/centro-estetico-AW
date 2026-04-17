import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  baseColor = "#a8a29e",
  activeColor = "#000000",
  className = ""
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Animazione di backgroundPositionX da 100% (baseColor) a 0% (activeColor)
    const tl = gsap.to(el, {
      backgroundPositionX: '0%',
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'top 30%',
        scrub: true,
        scroller: scrollContainerRef?.current || window,
      },
    });

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, [scrollContainerRef]);

  return (
    <span
      ref={textRef}
      className={className}
      style={{
        backgroundImage: `linear-gradient(to right, ${activeColor} 50%, ${baseColor} 50%)`,
        backgroundSize: '200% 100%',
        backgroundPositionX: '100%',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        boxDecorationBreak: 'clone',
        WebkitBoxDecorationBreak: 'clone',
        color: 'transparent',
        display: 'inline',
        willChange: 'background-position'
      }}
    >
      {children}
    </span>
  );
};

export default ScrollReveal;
