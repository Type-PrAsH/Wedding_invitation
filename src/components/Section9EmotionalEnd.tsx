import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Section9EmotionalEnd() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section ref={ref} className="w-full h-screen relative overflow-hidden flex items-center justify-center">
      <motion.div className="absolute inset-0 z-0" style={{ scale }}>
        <img
          src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=2070"
          alt="Emotional end"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </motion.div>

      <motion.div 
        className="relative z-10 text-center px-6"
        style={{ opacity }}
      >
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white italic drop-shadow-xl mb-6">
          We can't wait to<br/>celebrate with you
        </h2>
        <p className="font-sans text-white/80 tracking-[0.2em] text-sm uppercase">
          Aayush & Kavya
        </p>
      </motion.div>
    </section>
  );
}
