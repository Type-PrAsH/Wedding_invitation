import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';

function EventCard({ event, index, labels }: { event: any, index: number, labels: any }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: 20 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, type: 'spring', damping: 20 }}
      whileHover={{ y: -10 }}
      className={`glass rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(230,173,173,0.15)] bg-white border border-warm-blush p-5 text-center flex flex-col h-full`}
    >
      <div className="h-40 overflow-hidden relative rounded-[12px] mb-5 bg-gray-100 flex items-center justify-center shrink-0">
        <motion.img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8 }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gold/0 hover:bg-gold/10 transition-colors duration-500 pointer-events-none" />
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="font-serif text-xl md:text-2xl italic text-gold-light mb-1">
          {event.title}
        </h3>
        <p className="font-sans text-[10px] text-ink-light tracking-widest uppercase mb-4 min-h-[30px]">
          {event.subtitle}
        </p>

        <div className="mt-auto space-y-2 text-xs font-sans text-ink mx-auto text-left w-max">
          <p><span className="font-semibold text-sage-dark min-w-[50px] inline-block">{labels.date}</span> {event.date}</p>
          <p><span className="font-semibold text-sage-dark min-w-[50px] inline-block">{labels.time}</span> {event.time}</p>
          <p><span className="font-semibold text-sage-dark min-w-[50px] inline-block">{labels.venue}</span> {event.venue}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Section5Events() {
  const { t } = useLanguage();

  const labels = {
    date: t('dateLabel'),
    time: t('timeLabel'),
    venue: t('venueLabel'),
  };

  const events = [
    {
      title: t('haldi'),
      subtitle: t('haldiSub'),
      date: t('haldiDate'),
      time: "10:00 AM",
      venue: t('floralVenue'),
      image: "/images/haldi.jpg",
    },
    {
      title: t('mehendi'),
      subtitle: t('mehendiSub'),
      date: t('mehendiDate'),
      time: "4:00 PM",
      venue: t('oakVenue'),
      image: "/images/mehendi.jpg",
    },
    {
      title: t('sangeet'),
      subtitle: t('sangeetSub'),
      date: t('sangeetDate'),
      time: "7:00 PM",
      venue: t('crystalVenue'),
      image: "/images/sangeet.jpg",
    },
    {
      title: t('wedding'),
      subtitle: t('weddingSub'),
      date: t('weddingDate'),
      time: "9:00 PM",
      venue: t('royalVenue'),
      image: "/images/wedding.jpg",
    }
  ];

  return (
    <section className="w-full py-32 bg-blush relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-sage/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-peach/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-gold-light italic mb-4 font-normal">{t('eventsTitle')}</h2>
          <p className="font-sans text-ink-light tracking-[2px] text-[11px] uppercase">{t('eventsSub')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, idx) => (
            <EventCard key={idx} event={event} index={idx} labels={labels} />
          ))}
        </div>
      </div>
    </section>
  );
}
