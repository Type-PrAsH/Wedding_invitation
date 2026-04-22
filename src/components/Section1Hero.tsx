import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Section1Hero() {
  return (
    <section className="relative w-full h-screen px-4 md:px-12 py-12 bg-blush flex flex-col items-center">
      <div className="relative w-full h-full max-w-6xl mx-auto rounded-t-[200px] md:rounded-t-[300px] overflow-hidden bg-warm-blush shadow-[inset_0_0_100px_rgba(0,0,0,0.05)]">
        {/* Background Image with Ken Burns Effect */}
        <motion.div
          className="absolute inset-0 z-0"
          animate={{ scale: [1, 1.1] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        >
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2070"
            alt="Couple"
            className="w-full h-full object-cover mix-blend-overlay opacity-80"
          />
          {/* Soft blur overlay + gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-blush/20 to-gold/10 mix-blend-multiply" />
        </motion.div>

        {/* Content */}
        <div className="absolute bottom-10 md:bottom-16 left-0 right-0 z-10 text-center px-4 flex flex-col items-center">
          <motion.h1
            className="font-serif text-5xl md:text-[72px] leading-none text-white mb-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.2)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            Aayush & Kavya
          </motion.h1>
          
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="font-sans text-xs md:text-sm text-white uppercase tracking-[5px]">
              Save the Date — 12 Dec 2026
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
        <span className="font-sans text-[10px] uppercase tracking-[2px] text-ink-light">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-ink-light" />
        </motion.div>
      </motion.div>
    </section>
  );
}
