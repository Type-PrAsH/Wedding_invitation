import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Section1Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-screen px-4 md:px-12 py-12 bg-blush flex flex-col items-center">
      <div className="relative w-full h-full max-w-6xl mx-auto rounded-t-[200px] md:rounded-t-[300px] overflow-hidden bg-warm-blush shadow-[inset_0_0_100px_rgba(0,0,0,0.05)]">
        {/* Background Image with Ken Burns Effect */}
        <motion.div
          className="absolute inset-0 z-0"
        >
          <img
            src="/images/hero.jpg"
            alt="Ganesh"
            className="w-full h-full object-contain pb-[280px] md:pb-[320px] pt-12 px-8 opacity-95 drop-shadow-xl"
          />
          {/* Soft blur overlay + gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-warm-blush/10 to-warm-blush/30 pointer-events-none" />
        </motion.div>

        {/* Content */}
        <div className="absolute bottom-10 md:bottom-16 left-0 right-0 z-10 text-center px-4 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <p className="font-serif text-3xl md:text-5xl text-gold-light mb-2">{t('heroOm')}</p>
            <p className="font-sans text-[10px] md:text-xs text-ink-light uppercase tracking-[3px] md:tracking-[5px] whitespace-pre-line text-center mb-4 md:mb-6 leading-relaxed">
              {t('heroTop')}
            </p>
          </motion.div>

          <motion.h1
            className="font-serif text-5xl md:text-[72px] leading-none text-gold-light mb-6 drop-shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            {t('heroNames')}
          </motion.h1>

          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="font-serif text-xl md:text-2xl text-ink italic tracking-wide whitespace-pre-line text-center font-normal mb-8 leading-relaxed">
              {t('heroInv')}
            </p>
            <p className="font-sans text-xs md:text-sm text-sage-dark font-semibold tracking-[3px] md:tracking-[5px]">
              {t('heroDate')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <span className="font-sans text-[10px] uppercase tracking-[2px] text-ink-light whitespace-pre">
          {t('scroll')}
        </span>
      </motion.div>
    </section>
  );
}
