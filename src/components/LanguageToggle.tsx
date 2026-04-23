import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-6 right-6 z-[200] glass px-4 py-2 rounded-full font-sans text-sm font-semibold uppercase tracking-widest text-ink flex items-center justify-center cursor-none transition-all hover:bg-white/60 shadow-[0_4px_20px_rgba(212,175,87,0.2)]"
    >
      <div className="relative w-[3ch] text-center overflow-hidden h-[1.2rem]">
        <AnimatePresence mode="popLayout">
          {lang === 'en' ? (
            <motion.span
              key="en"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="absolute left-0 right-0"
            >
              EN
            </motion.span>
          ) : (
            <motion.span
              key="hi"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="absolute left-0 right-0 origin-center scale-125"
            >
              हि
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
}
