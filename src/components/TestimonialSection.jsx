import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const REVIEWS = [
  {
    id: 1,
    text: "L'acne è finalmente scomparsa dopo anni in cui ho provato di tutto. Il piano di trattamento è stato semplice, chiaro e soprattutto efficace.",
    author: "Sofia Hale",
    role: "Attrice",
    avatar: "/hero-1.png"
  },
  {
    id: 2,
    text: "Dal primo consulto fino al follow-up, la cura è stata eccezionale. La consistenza e la luminosità della mia pelle sono migliorate visibilmente.",
    author: "Daniel Brooks",
    role: "Imprenditore",
    avatar: "/hero-3.png"
  },
  {
    id: 3,
    text: "Ho provato molti centri, ma qui la professionalità è di un altro livello. I risultati sui miei problemi di pigmentazione sono incredibili.",
    author: "Elena M.",
    role: "Architetto",
    avatar: "/hero-2.png"
  },
  {
    id: 4,
    text: "Team super preparato. L'analisi della pelle gratuita mi ha aperto gli occhi sugli errori della mia skincare routine precedente.",
    author: "Giulia S.",
    role: "Insegnante",
    avatar: "/hero-4.png"
  },
  {
    id: 5,
    text: "Laser indolore e rapidissimo! L'esperienza più rilassante mai avuta in una clinica estetica. Ci tornerò sicuramente.",
    author: "Martina D.",
    role: "Studentessa",
    avatar: "/hero-1.png"
  },
  {
    id: 6,
    text: "I trattamenti anti-età hanno ridonato compattezza al mio viso. Mi sento ringiovanita e la mia autostima è al massimo.",
    author: "Paola L.",
    role: "Manager",
    avatar: "/hero-2.png"
  },
  {
    id: 7,
    text: "Personale gentilissimo e ambiente super accogliente. Ti senti coccolata fin dal primo momento in cui entri.",
    author: "Chiara B.",
    role: "Freelance",
    avatar: "/hero-4.png"
  }
];

export default function TestimonialSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const cardOffset = scrollRef.current.firstElementChild.offsetWidth + 24; // 24 = gap-6 in pixels
      scrollRef.current.scrollBy({ left: -cardOffset, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current && scrollRef.current.firstElementChild) {
      const cardOffset = scrollRef.current.firstElementChild.offsetWidth + 24;
      scrollRef.current.scrollBy({ left: cardOffset, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full py-20 md:py-48 lg:py-56 px-6 lg:px-16" style={{ backgroundColor: '#faf9f6' }}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch overflow-hidden">
        
        {/* Left Column: Title & Reviews */}
        <div className="w-full lg:w-2/3 flex flex-col justify-between">
          
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row items-center lg:items-end lg:justify-between gap-10 lg:gap-6 mb-16 lg:mb-12 text-center lg:text-left">
            
            {/* Mobile-Only Rating (Image 4) */}
            <div className="flex lg:hidden flex-col items-center gap-4">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-[#a67c52] text-[#a67c52]" />)}
              </div>
              <h3 className="text-6xl font-serif text-black leading-none" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                99%
              </h3>
              <p className="text-[12px] font-bold tracking-[0.15em] text-[#a67c52] uppercase">
                500+ clienti totalmente soddisfatti
              </p>
            </div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-black font-medium"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(3.2rem, 8vw, 7rem)',
                lineHeight: '1.05',
                letterSpacing: '-0.02em'
              }}
            >
              Cosa dicono i <br className="hidden lg:block" /> nostri clienti
            </motion.h2>
            
            {/* Arrows */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center gap-3 pb-2"
            >
              <button 
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-stone-200 hover:bg-stone-50 transition-colors shadow-sm cursor-pointer"
              >
                <ChevronLeft size={20} className="text-[#5c3d2e]" strokeWidth={1.5} />
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-stone-200 hover:bg-stone-50 transition-colors shadow-sm cursor-pointer"
              >
                <ChevronRight size={20} className="text-[#5c3d2e]" strokeWidth={1.5} />
              </button>
            </motion.div>
          </div>

          {/* Cards Row (Carousel Array) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            ref={scrollRef}
            className="flex overflow-x-auto no-scrollbar gap-6 mt-auto snap-x snap-mandatory py-4"
          >
            {REVIEWS.map((review) => (
              <div 
                key={review.id} 
                className="bg-white rounded-[2rem] p-8 shadow-sm flex flex-col justify-between min-h-[250px] shrink-0 snap-center w-[85%] sm:w-[calc(50%-12px)] transition-transform hover:scale-[1.02]"
                style={{ willChange: 'transform, opacity' }}
              >
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#a67c52] text-[#a67c52]" />)}
                  </div>
                  <p className="text-black/80 text-base leading-relaxed h-[100px] overflow-hidden text-ellipsis">
                    {review.text}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-8">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <img src={review.avatar} alt={review.author} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-black font-semibold text-sm">{review.author}</span>
                    <span className="text-stone-400 text-xs">{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Right Column: Large Image & Overlay */}
        <div className="w-full lg:w-1/3 relative flex flex-col">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="w-full h-[400px] md:h-[500px] lg:h-full min-h-[400px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-md relative group"
          >
            <img 
              src="/patient-portrait.png" 
              alt="Pelle radiosa" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-1000 group-hover:scale-110" 
            />
            
            {/* Frosted Glass Overlay Rating (Confined inside) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="absolute inset-x-6 bottom-6 bg-black/40 backdrop-blur-xl border border-white/20 rounded-3xl p-8 flex flex-col items-center justify-center shadow-2xl z-10"
            >
              <h3 className="text-white text-5xl font-serif mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                4.9
              </h3>
              <div className="flex items-center gap-1 mb-2">
                 {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-white text-white" />)}
              </div>
              <p className="text-white text-[10px] font-bold tracking-[0.1em] mb-6">
                VALUTAZIONE CLIENTI
              </p>
              
              {/* Avatars row */}
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/40 z-40 relative shadow-sm">
                   <img src="/hero-2.png" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/40 -ml-2 z-30 relative shadow-sm">
                   <img src="/hero-4.png" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full overflow-hidden border border-white/40 -ml-2 z-20 relative shadow-sm">
                   <img src="/hero-1.png" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
