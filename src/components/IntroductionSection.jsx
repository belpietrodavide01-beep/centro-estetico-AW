import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import ScrollReveal from './react-bits/ScrollReveal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IntroductionSection = () => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Animating the images upwards as a locked grid
      imagesRef.current.forEach((img, index) => {
        if (!img) return;
        
        const side = index % 2 === 0 ? -1 : 1;

        gsap.fromTo(img, 
          { 
            y: 600, // Identical offset for all images to maintain proportional distance
            opacity: 0,
            scale: 0.95,
            rotate: side * 2 
          },
          {
            y: 0, // Reach final position together
            opacity: 1,
            scale: 1,
            rotate: 0,
            force3D: true, // Hardware acceleration for GSAP
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "+=70%", 
              scrub: 1, // Faster scrub for a more locked feeling
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const imageAssets = [
    '/hero-1.png',
    '/hero-2.png',
    '/hero-3.png',
    '/hero-4.png'
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative lg:min-h-screen w-full flex flex-col items-center justify-start lg:justify-center overflow-hidden pt-20 lg:pt-0 pb-24 lg:pb-0 bg-[#faf9f6]"
    >
      {/* Decorative Assets - Rising Images */}
      {imageAssets.map((src, i) => (
        <div
          key={i}
          ref={(el) => (imagesRef.current[i] = el)}
          className={`absolute z-20 pointer-events-none hidden lg:block rounded-[2.5rem] overflow-hidden shadow-xl border-2 border-white/30`}
          style={{
            width: '240px',
            height: '320px',
            top: i < 2 ? '5%' : 'auto',
            bottom: i >= 2 ? '5%' : 'auto',
            left: i % 2 === 0 ? '2%' : 'auto',
            right: i % 2 === 1 ? '2%' : 'auto',
            filter: 'brightness(1.02)',
            willChange: 'transform, opacity',
            transform: 'translateZ(0)'
          }}
        >
          <img 
            src={src} 
            alt="Skin treatment detail" 
            className="w-full h-full object-cover rounded-[2.5rem]"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}

      {/* Central Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 flex flex-col items-center text-center">
        {/* Badge Top */}
        <div 
          className="flex items-center gap-3 px-4 py-1.5 md:px-6 md:py-2 rounded-full mb-12 shadow-sm"
          style={{ backgroundColor: '#fcf8f3', border: '1px solid rgba(166, 124, 82, 0.15)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#a67c52]" />
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#a67c52] uppercase">
            Eccellenza in ogni percorso
          </span>
        </div>

        {/* Main Content with Scroll Reveal */}
        <div className="relative w-full max-w-4xl mx-auto">
          <ScrollReveal
            baseColor="#99928f"
            activeColor="#000000"
            className="editorial-heading mobile-text-adjustment"
          >
            L'eccellenza dell'estetica avanzata per una bellezza naturale e radiosa.
          </ScrollReveal>
        </div>

        <style jsx>{`
          @media (max-width: 767px) {
            .mobile-text-adjustment {
              line-height: 1.15 !important;
              letter-spacing: -0.02em !important;
              max-width: 90% !important;
              margin: 0 auto !important;
            }
          }
        `}</style>

        {/* Bottom Social Proof */}
        <div className="flex flex-col items-center gap-3 mt-12 opacity-80">
          <div className="flex items-center gap-4">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ backgroundColor: '#a67c52' }}
            >
              5.0
            </div>
            <div className="flex flex-col items-start">
              <div className="flex gap-0.5 text-[#a67c52]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              <span className="text-xs md:text-sm text-stone-400 font-medium">
                86+ Recensioni dai clienti
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
