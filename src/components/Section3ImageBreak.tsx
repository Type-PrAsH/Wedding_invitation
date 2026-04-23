import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Section3ImageBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const { t } = useLanguage();
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden flex items-center justify-center">
      <motion.div className="absolute inset-0 z-0 w-full h-[120%]" style={{ y }}>
        <img
          src="/images/parallax.jpg"
          alt="Wide romantic moment"
          className="w-full h-full object-cover object-bottom"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/20 mix-blend-multiply" />
      </motion.div>

      <motion.div
        className="relative z-10 px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        <h2 className="font-serif text-3xl md:text-5xl lg:text-7xl text-white italic drop-shadow-md whitespace-pre-line leading-snug">
          {t('breakTitle')}
        </h2>
      </motion.div>
    </section>
  );
}
