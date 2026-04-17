import React, { useRef } from 'react';
import { Phone, Mail, Asterisk, MessageCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function ContactSection() {
  const mapRef = useRef(null);
  const isInView = useInView(mapRef, { once: true, margin: "200px" });

  const handleWhatsApp = () => {
    const phoneNumber = "390422820820";
    const text = "Ciao! Vorrei richiedere informazioni per un appuntamento.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contatti" className="w-full py-20 md:py-48 lg:py-56 px-6 lg:px-16" style={{ backgroundColor: '#faf9f6' }}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center overflow-hidden">
        
        {/* Left Column: Direct Call to Action */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-black font-medium mb-6"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3.2rem, 8vw, 7rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}
          >
            Inizia il tuo <br /> percorso con noi
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-stone-500 text-base md:text-xl mb-12 max-w-lg leading-relaxed"
          >
            Siamo pronti ad accoglierti. Contattaci direttamente per una consulenza personalizzata o per prenotare il tuo prossimo trattamento.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
          >
            <button 
              onClick={handleWhatsApp}
              className="w-full sm:w-auto px-8 py-5 md:px-10 md:py-6 bg-[#25D366] text-white rounded-[2rem] font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-[#128C7E] transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 active:scale-95 cursor-pointer"
            >
              <MessageCircle size={22} />
              Prenota su WhatsApp
            </button>
            
            <a 
              href="tel:+390422820820"
              className="w-full sm:w-auto group flex items-center gap-3 pl-2 pr-8 py-2 rounded-full bg-[#f5ede3] border border-black/20 hover:bg-[#6b4226] transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95"
            >
              <span className="w-12 h-12 rounded-full flex items-center justify-center bg-white group-hover:bg-[#f5ede3] transition-colors duration-300">
                <Phone size={20} className="text-[#6b4226]" />
              </span>
              <span className="text-[13px] font-bold tracking-widest text-[#6b4226] group-hover:text-white transition-colors duration-300 uppercase">
                Chiamaci Ora
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Image and Info Box */}
        <div className="w-full lg:w-1/2 flex flex-col relative" ref={mapRef}>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-full aspect-square md:aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative"
            style={{ willChange: 'transform, opacity' }}
          >
            {isInView ? (
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.674590430407!2d10.2520!3d45.4745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47819f5d10fa9043%3A0x5fbfa1c27c5b0917!2sVia%20Roma%2C%2079%2C%2025010%20Borgosatollo%20BS!5e0!3m2!1sit!2sit!4v1776161147000!5m2!1sit!2sit"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa di Aesthetic World"
              ></iframe>
            ) : (
              <div className="w-full h-full bg-[#fcf8f3] animate-pulse" />
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
