import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

export default function Section6Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });
  const { t } = useLanguage();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Target date: May 12, 2026
    const targetDate = new Date('2026-05-12T00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: t('days'), value: timeLeft.days },
    { label: t('hours'), value: timeLeft.hours },
    { label: t('minutes'), value: timeLeft.minutes },
    { label: t('seconds'), value: timeLeft.seconds }
  ];

  return (
    <section ref={ref} className="w-full py-32 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&q=80&w=2072"
          alt="Abstract floral"
          className="w-full h-full object-cover filter blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-ink/40 mix-blend-multiply" />
      </div>

      <motion.div
        className="relative z-10 glass p-8 md:p-16 rounded-3xl text-center max-w-4xl mx-auto mx-6 border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
        whileHover={{ boxShadow: '0 0 60px rgba(255,255,255,0.2)' }}
      >
        <h2 className="font-serif text-3xl md:text-5xl text-white italic mb-12 drop-shadow-md whitespace-pre-line leading-relaxed">
          {t('countdownTitle')}
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {timeBlocks.map((block, idx) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-2 border-white/30 flex items-center justify-center mb-4 relative">
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/10"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="font-serif text-3xl md:text-5xl text-white relative z-10">
                  {block.value.toString().padStart(2, '0')}
                </span>
              </div>
              <span className="font-sans text-xs md:text-sm text-white/80 uppercase tracking-widest">
                {block.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
