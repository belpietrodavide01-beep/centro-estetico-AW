import React from 'react';
import { Instagram, Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#faf9f6] pt-16 md:pt-24 pb-12 px-6 lg:px-16 border-t border-stone-200/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Brand & Navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20">
          
          {/* Column 1: Brand */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-start text-left gap-6 border-b border-stone-200/40 pb-12 lg:border-0 lg:pb-0">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); handleScroll('#home'); }}
              className="w-32 h-auto"
            >
              <img 
                src="/logo_Aw.svg" 
                alt="Aesthetic World Logo" 
                className="w-full h-auto object-contain" 
                style={{ filter: 'brightness(0)' }}
              />
            </a>
            <p className="text-stone-500 text-sm leading-relaxed max-w-sm md:max-w-xs">
              L'eccellenza dell'estetica avanzata e del benessere nel cuore della tua città. Trattamenti su misura per una bellezza naturale e senza tempo.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-600 hover:bg-[#a67c52] hover:text-white hover:border-[#a67c52] transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start text-left gap-6">
            <h4 className="text-black font-semibold text-xs tracking-widest uppercase">Navigazione</h4>
            <ul className="flex flex-col gap-4 items-start">
              {['Chi Siamo', 'Servizi', 'Recensioni', 'FAQ', 'Contatti'].map((link) => (
                <li key={link}>
                  <button 
                    onClick={() => handleScroll(`#${link.toLowerCase().replace(' ', '-')}`)}
                    className="text-stone-500 text-sm hover:text-[#a67c52] transition-colors flex items-center gap-2 group"
                  >
                    {link}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-start text-left gap-6">
            <h4 className="text-black font-semibold text-xs tracking-widest uppercase">Contattaci</h4>
            <ul className="flex flex-col gap-5 items-start">
              <li>
                <a href="tel:+390422820820" className="flex items-start gap-3 group">
                  <Phone size={18} className="text-[#a67c52] shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-black font-medium text-sm">0422 820 820</span>
                    <span className="text-stone-400 text-xs">Prenota il tuo appuntamento</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@aestheticworld.it" className="flex items-start gap-3 group">
                  <Mail size={18} className="text-[#a67c52] shrink-0" />
                  <div className="flex flex-col">
                    <span className="text-black font-medium text-sm">info@aestheticworld.it</span>
                    <span className="text-stone-400 text-xs">Inviaci una richiesta</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#a67c52] shrink-0" />
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-black font-medium text-sm">Via Roma, 79</span>
                  <span className="text-stone-400 text-xs">25010 Borgosatollo (BS), Italia</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-start text-left gap-6 pt-12 lg:pt-0 border-t border-stone-200/40 lg:border-0 w-full">
            <h4 className="text-black font-semibold text-xs tracking-widest uppercase">Orari di Apertura</h4>
            <ul className="flex flex-col gap-3 w-full">
              {[
                { d: 'Lun - Dom', h: 'Chiuso' },
                { d: 'Mar - Ven', h: '09:00 - 19:00' },
                { d: 'Sabato', h: '09:00 - 14:00' }
              ].map((item) => (
                <li key={item.d} className="flex justify-between items-center text-sm">
                  <span className="text-stone-500">{item.d}</span>
                  <span className={`font-medium ${item.h === 'Chiuso' ? 'text-stone-400' : 'text-black'}`}>{item.h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-4 rounded-2xl bg-[#fcf8f3] border border-[#a67c52]/10 flex items-start gap-3">
              <Clock size={16} className="text-[#a67c52] mt-0.5" />
              <p className="text-xs text-stone-500 leading-relaxed">
                Si riceve su appuntamento per garantirti la massima cura e attenzione.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section: Legal & Copyright */}
        <div className="pt-12 border-t border-stone-200/60 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-400 text-[11px] tracking-wide uppercase">
            &copy; {currentYear} Aesthetic World — Tutti i diritti riservati
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-stone-400 text-[11px] tracking-wide uppercase hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-stone-400 text-[11px] tracking-wide uppercase hover:text-black transition-colors">Cookies</a>
            <a href="#" className="text-stone-400 text-[11px] tracking-wide uppercase hover:text-black transition-colors">Dati Societari</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
