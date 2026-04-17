import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ_DATA = [
  {
    question: "L'epilazione laser è davvero un trattamento definitivo?",
    answer: "Si parla correttamente di epilazione permanente o progressivamente definitiva. Il laser distrugge il bulbo pilifero in fase di crescita attiva. Poiché il corpo può sviluppare nuovi bulbi dormienti nel tempo per fattori ormonali, potrebbero essere necessari dei trattamenti di mantenimento sporadici."
  },
  {
    question: "I trattamenti laser sono dolorosi?",
    answer: "Assolutamente no. Grazie alle moderne tecnologie dotate di sistemi di raffreddamento integrati, la sensazione percepita è paragonabile a un leggero pizzicore o calore. È molto più confortevole rispetto alla tradizionale ceretta."
  },
  {
    question: "Quali sono i benefici di un massaggio professionale e ogni quanto dovrei farlo?",
    answer: "I massaggi professionali non solo riducono lo stress, ma migliorano la circolazione, favoriscono il drenaggio dei liquidi e alleviano le tensioni muscolari. Per benefici duraturi, consigliamo una seduta ogni 1-2 settimane, a seconda che l'obiettivo sia il relax o il rimodellamento corporeo."
  },
  {
    question: "È sicuro utilizzare il solarium per l'abbronzatura? Quali precauzioni devo prendere?",
    answer: "Il solarium è sicuro se utilizzato con moderazione e nel rispetto del proprio fototipo. Seguiamo protocolli rigidi: è fondamentale indossare gli occhialini protettivi, non esporsi al sole naturale lo stesso giorno e attendere almeno 48 ore tra una seduta e l'altra per permettere alla pelle di rigenerarsi."
  },
  {
    question: "Come posso scegliere il trattamento corpo più adatto alle mie esigenze?",
    answer: "Ogni corpo è unico. Durante la consulenza iniziale gratuita, analizziamo i tuoi inestetismi (cellulite, adipe localizzato, atonia) per creare un protocollo personalizzato che può combinare tecnologie avanzate e tecniche manuali per massimizzare il risultato."
  },
  {
    question: "Perché è necessaria una consulenza iniziale prima di iniziare un percorso?",
    answer: "La consulenza (Anamnesi) è fondamentale per garantire la tua sicurezza e l'efficacia del trattamento. Valutiamo il tuo stato di salute, le tue abitudini e verifichiamo l'assenza di controindicazioni, fornendoti aspettative reali sui risultati."
  },
  {
    question: "Quante sedute sono necessarie per vedere risultati concreti?",
    answer: "I primi risultati sono spesso visibili già dalle prime sedute. Per un miglioramento profondo e duraturo (specialmente per laser o rimodellamento corpo), mediamente si consiglia un ciclo completo di 6-10 sedute, a seconda del punto di partenza."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // JSON-LD Schema for SEO & AI (ChatGPT/SearchGPT/Perplexity)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id="faq" className="w-full pt-14 pb-20 md:pt-24 md:pb-48 lg:pt-32 lg:pb-56 px-6 lg:px-16" style={{ backgroundColor: '#faf9f6' }}>
      {/* Schema Markup Injection */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 px-6 py-2 rounded-full mb-8 shadow-sm"
            style={{ backgroundColor: '#fcf8f3', border: '1px solid rgba(166, 124, 82, 0.1)' }}
          >
            <HelpCircle size={14} className="text-[#a67c52]" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#a67c52] uppercase">
              Supporto & Informazioni
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-black font-medium mb-4"
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}
          >
            Domande frequenti
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-stone-500 text-lg max-w-2xl"
          >
            Tutto quello che c'è da sapere sui nostri trattamenti per la tua bellezza e sicurezza.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-[1.5rem] border border-stone-200/60 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-6 text-left cursor-pointer group"
                >
                  <span className="text-black font-medium text-base md:text-xl group-hover:text-[#a67c52] transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#a67c52]' : ''}`}>
                    <ChevronDown size={20} className={isOpen ? 'text-white' : 'text-[#a67c52]'} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 text-stone-600 leading-relaxed text-sm md:text-lg max-w-[95%] md:max-w-[90%]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
