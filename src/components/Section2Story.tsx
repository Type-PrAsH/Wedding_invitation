import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { clsx } from 'clsx';

interface StoryBlockProps {
  text: string;
  subtext: string;
  image: string;
  reverse?: boolean;
}

function StoryBlock({ text, subtext, image, reverse = false }: StoryBlockProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={clsx(
        "flex flex-col gap-8 md:gap-16 items-center w-full my-16 md:my-24 max-w-6xl mx-auto px-6",
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      )}
    >
      <motion.div
        className="w-full md:w-1/2 flex justify-center md:justify-start"
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="bg-white p-8 md:p-10 rounded-[20px] shadow-[0_10px_30px_rgba(230,173,173,0.15)] border border-warm-blush max-w-md w-full relative z-10">
          <h3 className="font-serif text-2xl md:text-3xl text-gold-light italic mb-4 font-normal">
            {text}
          </h3>
          <p className="font-sans text-sm outline-none leading-relaxed text-ink-light">
            {subtext}
          </p>
        </div>
      </motion.div>
      
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
      >
        <div className="relative rounded-t-[100px] rounded-b-[20px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] group w-full max-w-sm mx-auto md:max-w-none">
          <motion.div
            className="w-full h-[500px]"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={image}
              alt="Story moment"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <div className="absolute inset-0 border border-white/30 rounded-t-[100px] rounded-b-[20px] pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
}

export default function Section2Story() {
  return (
    <section className="w-full py-24 bg-blush relative overflow-hidden">
      {/* Decorative background elements can go here */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-warm-blush rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-peach rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-1/3 -translate-x-1/4" />

      <StoryBlock
        text="It all started with a smile..."
        subtext="From a chance encounter to endless conversations, every moment felt like a piece of a puzzle falling into place. We knew there was something special from day one."
        image="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=2070"
      />
      <StoryBlock
        text="From strangers to soulmates..."
        subtext="Through every season, our bond only grew stronger. Now, we are ready to step into our forever, hand in hand, hearts full of love."
        image="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=2069"
        reverse
      />
    </section>
  );
}
