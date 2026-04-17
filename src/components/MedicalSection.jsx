import React from 'react';
import { CheckCircle2, MessageCircle, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MedicalSection() {
  return (
    <section className="w-full py-24 md:py-48 lg:py-56 px-6 lg:px-16" style={{ backgroundColor: '#faf9f6' }}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Column: Text & Checklist */}
        <div className="w-full lg:w-1/2 flex flex-col">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 md:px-5 md:py-2 rounded-full mb-8 self-start shadow-sm"
            style={{ backgroundColor: '#fcf8f3', border: '1px solid rgba(166, 124, 82, 0.15)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#a67c52]" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] text-[#a67c52] uppercase">
              Estetica Avanzata
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-black font-medium mb-10"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              lineHeight: '1.05',
              letterSpacing: '-0.02em'
            }}
          >
            Trattamenti esclusivi per il tuo benessere
          </motion.h2>

          {/* Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-black/80 text-base md:text-lg leading-relaxed mb-10 max-w-xl"
          >
            Dalla biorivitalizzazione alla cura profonda del corpo, offriamo percorsi personalizzati e protocolli innovativi per esaltare la tua naturale armonia.
          </motion.p>

          {/* Checklist */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 lg:gap-y-6 gap-x-4 mb-12 lg:mb-0"
          >
            {[
              "Acne e imperfezioni",
              "Biorivitalizzazione viso",
              "Cura dell'eczema",
              "Correzione discromie"
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                className="flex items-center gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-[#fcf8f3] border border-[#a67c52]/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 size={14} className="text-[#a67c52]" strokeWidth={2.5} />
                </div>
                <span className="text-black/80 font-medium text-[15px] lg:text-base leading-none">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action (Mobile refined) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-4 lg:mt-10"
          >
            <button className="group flex items-center gap-3 pl-1.5 pr-6 py-1.5 rounded-full bg-[#f5ede3] border border-black/20 hover:bg-[#6b4226] transition-all duration-300 w-fit shadow-sm">
              <span className="w-10 h-10 rounded-full flex items-center justify-center bg-white group-hover:bg-[#f5ede3] transition-colors duration-300">
                <ArrowUpRight size={18} strokeWidth={2} className="text-[#6b4226]" />
              </span>
              <span className="text-[13px] font-semibold tracking-wide text-[#6b4226] group-hover:text-white transition-colors duration-300 uppercase">
                Prenota
              </span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Image & Floating Badge */}
        <div className="w-full lg:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-full h-[350px] md:h-[500px] lg:h-[650px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-sm"
            style={{ willChange: 'transform, opacity' }}
          >
            <img 
              src="/medical-dermatology.png" 
              alt="Dermatologa al lavoro" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover" 
            />
          </motion.div>

          {/* Floating Glassmorphism Badge (Reverted style, fixed position) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -bottom-6 -left-4 md:-left-8 lg:-left-12 bg-[#8b6a4b]/80 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 flex flex-col items-start gap-4 shadow-xl w-[85%] md:w-auto max-w-[300px] lg:max-w-[280px]"
          >
             <MessageCircle size={32} className="text-white shrink-0" strokeWidth={1.5} />
             <p className="text-white text-lg md:text-2xl font-serif max-w-full leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Consulenza estetica dedicata sempre a tua disposizione
             </p>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
