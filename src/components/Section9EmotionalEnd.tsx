import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section9EmotionalEnd() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const { t } = useLanguage();
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={ref} className="w-full h-screen relative overflow-hidden flex flex-col items-center justify-between pb-8">
      <motion.div className="absolute inset-0 z-0" style={{ scale }}>
        <img
          src="/images/ending.jpg"
          alt="Emotional end"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      </motion.div>

      <div className="flex-1" />

      <motion.div 
        className="relative z-10 text-center px-6 mb-20"
        style={{ opacity }}
      >
        <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl text-white italic drop-shadow-xl mb-4 whitespace-pre-line">
          {t('endTitle')}
        </h2>
        <p className="font-sans text-white/90 md:text-lg drop-shadow-md whitespace-pre-line mb-8">
          {t('endSub')}
        </p>
      </motion.div>

      <motion.footer
        className="relative z-10 w-full text-center px-6"
        style={{ opacity }}
      >
        <div className="w-16 h-[1px] bg-white/30 mx-auto mb-6" />
        <p className="font-serif text-lg md:text-2xl text-white/90 whitespace-pre-line leading-relaxed italic">
          {t('footerNames')}
        </p>
      </motion.footer>
    </section>
  );
}
