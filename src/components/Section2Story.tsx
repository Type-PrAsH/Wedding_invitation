import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { clsx } from 'clsx';
import { useLanguage } from '../context/LanguageContext';

interface StoryBlockProps {
  text: string;
  subtext: string;
  image: string;
  reverse?: boolean;
  imagePosition?: string;
}

function StoryBlock({ text, subtext, image, reverse = false, imagePosition = "object-center" }: StoryBlockProps) {
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
          <h3 className="font-serif text-2xl md:text-3xl text-gold-light italic mb-4 font-normal whitespace-pre-line">
            {text}
          </h3>
          <p className="font-sans text-sm outline-none leading-relaxed text-ink-light whitespace-pre-line">
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
              className={clsx("w-full h-full object-cover", imagePosition)}
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
  const { t } = useLanguage();

  return (
    <section className="w-full py-24 bg-blush relative overflow-hidden">
      {/* Decorative background elements can go here */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-warm-blush rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-peach rounded-full mix-blend-multiply filter blur-3xl opacity-30 translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-4xl mx-auto px-6 text-center mt-8 mb-24 relative z-10">
        <h2 className="font-serif text-2xl md:text-4xl text-gold-light font-normal mb-8 whitespace-pre-line leading-relaxed">
          {t('mantra')}
        </h2>
      </div>

      <StoryBlock
        text={t('story1Title')}
        subtext={t('story1Text')}
        image="/images/story1.jpg"
      />
      <StoryBlock
        text={t('story2Title')}
        subtext={t('story2Text')}
        image="/images/story2.jpg"
        imagePosition="object-bottom"
        reverse
      />
    </section>
  );
}
