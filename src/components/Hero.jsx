import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'

// ─── Lista servizi con immagini Unsplash affidabili e stabili ───────────────────────────
const SERVICES = [
  { name: 'Abbellimento sopracciglia', img: 'https://images.unsplash.com/photo-1598452963314-b09f397a5c48?w=300&h=300&q=80&auto=format&fit=crop' },
  { name: 'Abbronzatura', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=300&q=80&auto=format&fit=crop' },
  { name: 'Ceretta', img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?w=300&h=300&q=80&auto=format&fit=crop' },
  { name: 'Ceretta corpo', img: 'https://images.unsplash.com/photo-1544161515-4af6b1d46afb?w=300&h=300&q=80&auto=format&fit=crop' },
  { name: 'Depilazione laser', img: 'https://images.unsplash.com/photo-1559599189-fe84dea4eb79?w=300&h=300&q=80&auto=format&fit=crop' },
  { name: 'Extension ciglia', img: 'https://images.unsplash.com/photo-1588731247530-4076fc99173e?w=300&h=300&q=80&auto=format&fit=crop' },
  { name: 'Manicure', img: 'https://images.unsplash.com/photo-1604654894610-df49065027ae?w=300&h=300&q=80&auto=format&fit=crop' },
  { name: 'Massaggio', img: 'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=300&h=300&q=80&auto=format&fit=crop' },
  { name: 'Pedicure', img: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=300&h=300&q=80&auto=format&fit=crop' },
  { name: 'Permanenti ciglia', img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&h=300&q=80&auto=format&fit=crop' },
  { name: 'Architettura sopracciglia', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&h=300&q=80&auto=format&fit=crop' },
  { name: 'Servizio trucco', img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&q=80&auto=format&fit=crop' },
  { name: 'Pulizia viso profonda', img: 'https://images.unsplash.com/photo-1556228578-dd539282b964?w=300&h=300&q=80&auto=format&fit=crop' },
  { name: 'Trucco permanente', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&q=80&auto=format&fit=crop' },
  { name: 'Unghie in acrilico', img: 'https://images.unsplash.com/photo-1610992015732-2449b0deec5d?w=300&h=300&q=80&auto=format&fit=crop' },
  { name: 'Ricostruzione unghie', img: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=300&h=300&q=80&auto=format&fit=crop' },
  { name: 'Laminazione ciglia', img: 'https://images.unsplash.com/photo-1583001809272-19e09d435091?w=300&h=300&q=80&auto=format&fit=crop' },
  { name: 'Trattamenti viso e corpo', img: 'https://images.unsplash.com/photo-1570172619114-d101797e8f10?w=300&h=300&q=80&auto=format&fit=crop' },
]

const DURATION = 120

function useResponsive() {
  const [values, setValues] = React.useState({
    radius: 250,
    notchW: 220,
    isMobile: false,
    pillScale: 1,
    titleScale: 1
  });

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setValues({
        radius: mobile ? 180 : 250,
        notchW: mobile ? 180 : 220,
        isMobile: mobile,
        pillScale: mobile ? 0.75 : 1,
        titleScale: mobile ? 0.82 : 1
      });
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return values;
}

function ServicePill({ name, img, scale }) {
  const [hasError, setHasError] = useState(false);
  const isMobileScale = scale < 1;
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: isMobileScale ? `${10 * scale}px ${8 * scale}px ${16 * scale}px` : `${12 * scale}px ${8 * scale}px ${18 * scale}px`,
        gap: isMobileScale ? `${10 * scale}px` : `${12 * scale}px`,
        width: `${50 * scale}px`,
        height: isMobileScale ? `${210 * scale}px` : `${215 * scale}px`,
        background: isMobileScale ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255,255,255,0.3)',
        backdropFilter: 'blur(8px)',
        border: isMobileScale ? '1px solid rgba(255, 255, 255, 0.6)' : '0.8px solid rgba(255,255,255,0.5)',
        borderRadius: '999px',
        boxShadow: isMobileScale ? '0 4px 15px rgba(0,0,0,0.03)' : '0 10px 25px rgba(0,0,0,0.06)',
        position: 'relative',
        overflow: 'hidden',
        willChange: 'transform, backdrop-filter',
        transform: `translateZ(0) scale(${scale})`,
        transformOrigin: 'bottom center'
      }}
    >
      <div
        style={{
          width: isMobileScale ? `${34 * scale}px` : `${36 * scale}px`,
          height: isMobileScale ? `${34 * scale}px` : `${36 * scale}px`,
          borderRadius: '50%',
          overflow: 'hidden',
          border: isMobileScale ? '1.5px solid rgba(255, 255, 255, 0.9)' : '1.5px solid rgba(255,255,255,0.8)',
          flexShrink: 0,
          backgroundColor: isMobileScale ? '#f8f4f0' : '#efe5d8', // Fallback background color
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {!hasError ? (
          <img
            src={img}
            alt={name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            loading="lazy"
            onError={() => setHasError(true)}
          />
        ) : (
          <span style={{ 
            fontSize: isMobileScale ? `${12 * scale}px` : `${14 * scale}px`, 
            fontWeight: 700, 
            color: '#a67c52',
            fontFamily: 'Cormorant Garamond, serif'
          }}>
            {name.charAt(0)}
          </span>
        )}
      </div>
      <span
        style={{
          color: isMobileScale ? 'rgba(60, 50, 40, 0.9)' : 'rgba(74, 68, 63, 0.85)',
          fontSize: isMobileScale ? `${7.5 * scale}px` : `${8 * scale}px`,
          fontFamily: 'Inter, sans-serif',
          fontWeight: isMobileScale ? 700 : 600,
          letterSpacing: isMobileScale ? '0.12em' : '0.1em',
          textTransform: 'uppercase',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {name}
      </span>
    </div>
  )
}

export default function Hero({ isMenuOpen }) {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.1 });
  const rotateTween = useRef(null);
  const { radius, notchW, isMobile, pillScale, titleScale } = useResponsive();

  // Optimized pill count for mobile performance
  const displayServices = isMobile ? SERVICES.slice(0, 10) : SERVICES;

  useEffect(() => {
    rotateTween.current = gsap.to(carouselRef.current, {
      rotate: 360,
      duration: DURATION,
      ease: "none",
      repeat: -1,
      force3D: true,
    });

    return () => {
      if (rotateTween.current) rotateTween.current.kill();
    }
  }, []);

  useEffect(() => {
    if (rotateTween.current) {
      if (isInView && !isMenuOpen) rotateTween.current.play();
      else rotateTween.current.pause();
    }
  }, [isInView, isMenuOpen]);



  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-start px-6 lg:px-16 pt-0 md:pt-5 pb-0"
      style={{ backgroundColor: '#faf9f6', contain: 'paint layout' }}
    >
      <div className="relative w-full" style={{ 
        height: isMobile ? '70vh' : 'calc(100vh - 5rem)', 
        minHeight: isMobile ? '500px' : '600px', 
        maxHeight: isMobile ? '650px' : '860px' 
      }}>
        
        {/* OMBRA E FORMA DELLA HERO */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
          <div
            className="w-full h-full bg-stone-100"
            style={{
              borderRadius: isMobile ? '32px' : '44px',
              boxShadow: '0 10px 40px rgba(0,0,0,0.04)',
              WebkitMaskImage: `radial-gradient(circle at 50% calc(100% + 5px), transparent ${notchW / 2 + 4}px, black ${notchW / 2 + 4.5}px)`,
              maskImage: `radial-gradient(circle at 50% calc(100% + 5px), transparent ${notchW / 2 + 4}px, black ${notchW / 2 + 4.5}px)`,
            }}
          />
        </div>

        {/* CONTENUTO HERO */}
        <div
          className="relative w-full h-full overflow-hidden gpu-layer"
          style={{
            zIndex: 10,
            borderRadius: isMobile ? '32px' : '44px',
            backgroundColor: '#faf9f6',
            backgroundImage: "url('/hero-main.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'translateZ(0)',
            WebkitMaskImage: `radial-gradient(circle at 50% calc(100% + 5px), transparent ${notchW / 2 + 4}px, black ${notchW / 2 + 4.5}px)`,
            maskImage: `radial-gradient(circle at 50% calc(100% + 5px), transparent ${notchW / 2 + 4}px, black ${notchW / 2 + 4.5}px)`,
          }}
        >
          <img
            src="/hero-main.png"
            alt="Centro Estetico Premium"
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            decoding="sync"
            fetchpriority="high"
          /><div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, rgba(250,249,246,0.92) 0%, rgba(250,249,246,0.4) 40%, rgba(250,249,246,0) 70%)',
            }}
          />

          <div
            className={`absolute inset-x-0 flex flex-col items-center text-center px-6 z-30 ${isMobile ? 'top-[15%]' : 'top-[18%]'}`}
            style={{ pointerEvents: 'none', willChange: 'transform, opacity' }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-black font-medium tracking-tight leading-[1.1] gpu-layer"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: `clamp(2.5rem, ${10 * titleScale}vw, ${8 * titleScale}rem)`,
                textShadow: '0 4px 30px rgba(255,255,255,0.8)',
                maxWidth: isMobile ? '350px' : 'none',
                lineHeight: isMobile ? 1.05 : 1.2,
                letterSpacing: isMobile ? '-0.03em' : 'inherit'
              }}
            >
              Rigenera la tua essenza
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`text-black/90 max-w-xl font-medium gpu-layer ${isMobile ? 'mt-8' : 'mt-5'}`}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: isMobile ? '0.75rem' : 'clamp(0.85rem, 2vw, 1.15rem)',
                letterSpacing: '0.03em',
                textShadow: '0 0 20px rgba(255,255,255,0.6)',
              }}
            >
              Bellezza consapevole con trattamenti bio <br className="hidden md:block" />
              e tecnologie all'avanguardia
            </motion.p>
          </div>

          <div
            ref={carouselRef}
            className="absolute"
            style={{
              bottom: 0,
              left: '50%',
              width: 0,
              height: 0,
              transformOrigin: '0 0',
              zIndex: 20,
              willChange: 'transform',
              transform: 'translateZ(0)',
              contain: 'none' // Ensure children aren't clipped
            }}
          >
            {displayServices.map((item, i) => {
              const angleDeg = (i / displayServices.length) * 360
              const angleRad = (angleDeg * Math.PI) / 180
              const dx = Math.sin(angleRad) * radius
              const dy = -Math.cos(angleRad) * radius

              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: `${dx}px`,
                    bottom: `${-dy}px`,
                    transform: `translateX(-50%) translateY(50%) rotate(${angleDeg}deg)`,
                    transformOrigin: 'center center',
                    pointerEvents: 'none',
                  }}
                >
                  <ServicePill name={item.name} img={item.img} scale={isMobile ? 0.7 : 1} />
                </div>
              )
            })}
          </div>
        </div>

        <div
          className="absolute z-50 flex flex-col items-center justify-center pt-10 pb-6"
          style={{
            width: `${notchW}px`,
            bottom: isMobile ? '-15px' : '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
          }}
        >
          <img
            src="/logo_Aw.svg"
            alt="Logo"
            style={{
              width: isMobile ? '38px' : '44px',
              height: isMobile ? '38px' : '44px',
              objectFit: 'contain',
              filter: 'brightness(0)',
              pointerEvents: 'auto',
            }}
          />
          <span
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: isMobile ? '8px' : '10px',
              fontWeight: 700,
              letterSpacing: isMobile ? '0.15em' : '0.2em',
              textTransform: 'uppercase',
              color: '#222',
              textAlign: 'center',
              pointerEvents: 'auto',
              marginTop: isMobile ? '4px' : '6px',
              lineHeight: '1.4',
              maxWidth: isMobile ? '120px' : '180px'
            }}
          >
            Esplora i nostri servizi
          </span>
        </div>
      </div>
    </section>
  )
}
