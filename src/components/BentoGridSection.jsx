import React, { useRef } from 'react';
import { Star, Calendar, Sparkles, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const REVIEWS = [
  {
    id: 1,
    text: "Ero dubbiosa riguardo ai trattamenti estetici, ma i risultati sono incredibilmente naturali e mi sento benissimo.",
    author: "Elena M.",
    role: "Direttrice Creativa",
  },
  {
    id: 2,
    text: "Centro professionale e accogliente con tecnologie all'avanguardia. Il trattamento laser è stato piacevole.",
    author: "Sara V.",
    role: "Insegnante",
  },
  {
    id: 3,
    text: "Un'esperienza fantastica dall'inizio alla fine. Lo staff è estremamente competente e attento alle mie esigenze.",
    author: "Martina D.",
    role: "Imprenditrice",
  },
  {
    id: 4,
    text: "Pelle radiosa dopo una sola seduta. Consiglierò sicuramente questo centro a tutte le mie amiche!",
    author: "Giulia S.",
    role: "Avvocato",
  }
];

const bentoItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  }
};

export default function BentoGridSection() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const marqueeRef = useRef(null);
  const isInView = useInView(marqueeRef, { amount: 0.1 });

  return (
    <section className="w-full py-24 md:py-48 lg:py-56 px-6 lg:px-16" style={{ backgroundColor: '#faf9f6' }}>
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* Title Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          {/* Badge Top */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 px-4 py-1.5 md:px-6 md:py-2 rounded-full mb-12 shadow-sm"
            style={{ backgroundColor: '#fcf8f3', border: '1px solid rgba(166, 124, 82, 0.15)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#a67c52]" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#a67c52] uppercase">
              Perché i nostri clienti ci scelgono
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-black font-medium max-w-4xl"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3.2rem, 8vw, 7rem)',
              lineHeight: '1.05',
              letterSpacing: '-0.02em'
            }}
          >
            Leader nel settore
          </motion.h2>
        </div>

        {/* BENTO GRID */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
        >
          
          {/* ================= COLUMN 1 ================= */}
          <div className="flex flex-col gap-6 h-full">
            
            {/* Box 1: Before / After */}
            <motion.div 
              variants={bentoItemVariants}
              style={{ willChange: 'transform, opacity' }}
              className="relative w-full h-[320px] md:h-[400px] rounded-[2.5rem] overflow-hidden bg-[#e6ded5] group cursor-pointer shadow-sm"
            >
              <img src="/before-after.png" alt="Risultati Prima e Dopo" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
              
              {/* Labels Prima / Dopo */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-black shadow-sm z-10">
                Prima
              </div>
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase text-black shadow-sm z-10">
                Dopo
              </div>

              {/* Glass overlay text */}
              <div 
                className={`absolute inset-x-4 bottom-4 bg-[#916b4a]/70 backdrop-blur-xl border border-white/20 rounded-[2rem] flex flex-col ${isMobile ? 'p-6' : 'p-8'} z-10 shadow-2xl`}
                style={{ willChange: 'backdrop-filter' }}
              >
                {/* Two Column Title */}
                <div className="flex justify-between items-end mb-4 gap-4">
                  <h3 className="text-white text-xl md:text-3xl font-serif leading-[1.1]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    Risultati<br />reali
                  </h3>
                  <h3 className="text-white text-xl md:text-3xl font-serif leading-[1.1] text-right" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    Storie di<br />bellezza
                  </h3>
                </div>

                {/* Two Column Subtitle */}
                <div className="flex justify-between items-center text-white/90 text-[11px] font-medium tracking-wide">
                  <span className="flex items-center gap-2 w-1/2 shrink-0"><Calendar size={14} strokeWidth={2.5} /> 12 Settimane</span>
                  <span className="flex items-center gap-2 justify-end w-full"><Sparkles size={14} strokeWidth={2.5} /> Trattamento Acne</span>
                </div>
              </div>
              
              {/* Simulator line */}
              <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/40 flex items-center justify-center -translate-x-1/2 z-20">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-lg">
                  <div className="flex items-center gap-1">
                    <ChevronLeft size={14} color="white" strokeWidth={3} />
                    <ChevronRight size={14} color="white" strokeWidth={3} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Box 2: Skin Analysis */}
            <motion.div 
              variants={bentoItemVariants}
              style={{ willChange: 'transform, opacity' }}
              className="w-full flex-grow rounded-[2.5rem] bg-[#fdfcfb] p-10 flex flex-col items-center justify-center text-center shadow-sm border border-stone-200/50"
            >
              <div className="relative mb-6">
                 {/* Star badge from reference image 2 */}
                 <div className="w-14 h-14 rounded-full bg-[#fcf8f3] border-2 border-[#a67c52]/20 flex items-center justify-center text-[#a67c52] font-bold text-[10px] uppercase tracking-widest shadow-inner">
                   FREE
                 </div>
              </div>

              <h3 className="text-black text-3xl font-serif mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Analisi della pelle
              </h3>
              <p className="text-black/60 text-base mb-8 max-w-[200px] leading-relaxed">
                Consulenza esperta completamente gratuita
              </p>
              
              <button className="group flex items-center gap-3 pl-1.5 pr-6 py-1.5 rounded-full bg-[#f5ede3] border border-black/20 hover:bg-[#6b4226] transition-all duration-300 w-fit shadow-sm">
                <span className="w-9 h-9 rounded-full flex items-center justify-center bg-white group-hover:bg-[#f5ede3] transition-colors duration-300">
                  <ArrowUpRight size={16} strokeWidth={2} className="text-[#6b4226]" />
                </span>
                <span className="text-[13px] font-semibold tracking-wide text-[#6b4226] group-hover:text-white transition-colors duration-300 uppercase">
                  Prenota ora
                </span>
              </button>
            </motion.div>

          </div>

          {/* ================= COLUMN 2 ================= */}
          <div className="flex flex-col gap-6 h-full">

            {/* Box 3: Seamless Client */}
            <motion.div 
              variants={bentoItemVariants}
              style={{ willChange: 'transform, opacity' }}
              className={`w-full rounded-[2.5rem] bg-[#fdfcfb] border border-stone-200/50 pt-5 px-7 pb-7 md:pt-6 md:px-8 md:pb-8 relative overflow-hidden shadow-sm flex flex-col ${isMobile ? 'h-[320px]' : 'h-[180px] md:h-[220px]'}`}
            >
              <h3 className="text-black text-2xl md:text-3xl lg:text-4xl font-serif leading-tight z-10 max-w-[220px] mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Un'esperienza cliente impeccabile
              </h3>
              <div className={`absolute ${isMobile ? '-bottom-4 -right-4 w-64 h-64' : '-bottom-6 -right-6 w-52 h-48'} rounded-[2.2rem] overflow-hidden shadow-2xl border-[6px] border-white transition-transform duration-700 ${isMobile ? 'scale-100' : 'hover:scale-110 opacity-90'}`}>
                <img 
                  src="/hero-2.png" 
                  alt="Trattamento" 
                  loading="lazy" 
                  decoding="async" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </motion.div>

            {/* Box 4: Tailored to vision */}
            <motion.div 
              variants={bentoItemVariants}
              style={{ willChange: 'transform, opacity' }}
              className="w-full flex-grow rounded-[2.5rem] bg-[#fdfcfb] border border-stone-200/50 p-10 flex flex-col items-center justify-center text-center shadow-sm"
            >
              <div className="flex items-center justify-center mb-8">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white z-20 shadow-xl">
                  <img src="/hero-1.png" alt="avatar" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white -ml-4 z-30 shadow-2xl scale-110 transition-transform hover:scale-125 duration-500">
                  <img src="/hero-3.png" alt="avatar" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white -ml-4 z-20 shadow-xl">
                  <img src="/hero-4.png" alt="avatar" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-black text-3xl font-serif mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Su misura per te
              </h3>
              <p className="text-black/60 text-base max-w-xs leading-relaxed">
                Piani di trattamento personalizzati per esaltare la tua bellezza unica.
              </p>
            </motion.div>

            {/* Box 5: Decorative Bottom */}
            <motion.div 
              variants={bentoItemVariants}
              style={{ willChange: 'transform, opacity' }}
              className={`w-full rounded-[2.5rem] bg-[#e6ded5] overflow-hidden shadow-sm ${isMobile ? 'h-[250px]' : 'h-[150px] md:h-[180px]'}`}
            >
              <img src="/hero-4.png" alt="Clinic" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-90 object-center transition-transform duration-[2s] hover:scale-110" />
            </motion.div>

          </div>

          {/* ================= COLUMN 3 ================= */}
          <div className="flex flex-col gap-6 h-full">

            {/* Box 6: 10+ Years */}
            <motion.div 
              variants={bentoItemVariants}
              style={{ willChange: 'transform, opacity' }}
              className={`w-full rounded-[2.5rem] bg-[#fcf8f3] p-10 relative overflow-hidden shadow-sm flex flex-col justify-center border border-[#a67c52]/10 ${isMobile ? 'h-[320px]' : 'h-[180px] md:h-[220px]'}`}
            >
              <div className="absolute text-[10rem] font-serif text-[#a67c52]/[0.05] bottom-[-3rem] right-[-1rem] leading-none whitespace-nowrap select-none pointer-events-none" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                2016
              </div>
              <h3 className="text-[#a67c52] text-6xl font-serif mb-3" style={{ fontFamily: 'Cormorant Garamond, serif' }}>10+</h3>
              <p className="text-black/70 text-[15px] mb-8 max-w-[180px] leading-relaxed">
                Anni di eccellenza nel settore estetico professionale
              </p>
              <div className="flex flex-wrap gap-2.5 z-10">
                <span className="px-4 py-1.5 bg-white/90 border border-[#a67c52]/20 rounded-full text-[11px] font-bold tracking-wider text-[#a67c52] uppercase shadow-sm">500+ Clienti</span>
                <span className="px-4 py-1.5 bg-white/90 border border-[#a67c52]/20 rounded-full text-[11px] font-bold tracking-wider text-[#a67c52] uppercase shadow-sm">50+ Trattamenti</span>
              </div>
            </motion.div>

            {/* Box 7: Looping Reviews */}
            <motion.div 
              variants={bentoItemVariants}
              className="w-full flex-grow rounded-[2rem] bg-[#fdfcfb] border border-stone-200/50 p-8 flex flex-col shadow-sm overflow-hidden h-[350px] md:h-[450px]"
            >
              {/* Header Stats */}
              <div className="flex flex-col items-center text-center mb-6 z-10 bg-[#fdfcfb]">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-[#8c6b4a] text-[#8c6b4a]" />)}
                </div>
                <h3 className="text-black text-4xl font-serif mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>99%</h3>
                <p className="text-black/60 text-sm">Clienti totalmente soddisfatti</p>
              </div>

              {/* Masking Container for Marquee */}
              <div className="relative flex-1 overflow-hidden mask-image-bento" ref={marqueeRef}>
                {/* Due div iterati per creare l'effetto loop continuo */}
                <div 
                  className="flex flex-col gap-4 animate-marquee-vertical"
                  style={{ 
                    animationPlayState: isInView ? 'running' : 'paused',
                    willChange: 'transform'
                  }}
                >
                  {/* Prima iterazione */}
                  {REVIEWS.map((r) => (
                    <div key={`a-${r.id}`} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex flex-col gap-3 shrink-0">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-[#a67c52] text-[#a67c52]" />)}
                      </div>
                      <p className="text-black/80 text-sm leading-relaxed">"{r.text}"</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex flex-col">
                          <span className="text-black font-semibold text-[13px]">{r.author}</span>
                          <span className="text-stone-400 text-xs">{r.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Seconda iterazione (copia per l'effetto infinito) */}
                  {REVIEWS.map((r) => (
                    <div key={`b-${r.id}`} className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm flex flex-col gap-3 shrink-0">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-[#a67c52] text-[#a67c52]" />)}
                      </div>
                      <p className="text-black/80 text-sm leading-relaxed">"{r.text}"</p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex flex-col">
                          <span className="text-black font-semibold text-[13px]">{r.author}</span>
                          <span className="text-stone-400 text-xs">{r.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* CSS inline trick block per lo sbiadimento in alto/basso per le recensioni */}
              <style dangerouslySetInnerHTML={{__html: `
                .mask-image-bento {
                  -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
                  mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
                }
              `}} />

            </motion.div>

          </div>

        </motion.div>
      </div>
    </section>
  );
}
