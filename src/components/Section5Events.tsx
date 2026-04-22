import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { MapPin, Clock, CalendarDays } from 'lucide-react';

const events = [
  {
    title: "Haldi",
    date: "10 Dec 2026",
    time: "10:00 AM",
    venue: "The Floral Gardens",
    image: "https://images.unsplash.com/photo-1574345248674-8db92461fe65?auto=format&fit=crop&q=80&w=2070",
    color: "from-yellow-100/50 hover:from-yellow-200/50",
  },
  {
    title: "Mehendi",
    date: "10 Dec 2026",
    time: "4:00 PM",
    venue: "Green Oak Courtyard",
    image: "https://images.unsplash.com/photo-1596701041926-ab0e6cdbada2?auto=format&fit=crop&q=80&w=2070",
    color: "from-green-100/50 hover:from-green-200/50",
  },
  {
    title: "Sangeet",
    date: "11 Dec 2026",
    time: "7:00 PM",
    venue: "The Crystal Ballroom",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1969",
    color: "from-purple-100/50 hover:from-purple-200/50",
  },
  {
    title: "Wedding",
    date: "12 Dec 2026",
    time: "9:00 AM",
    venue: "Royal Palace Grounds",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=2070",
    color: "from-gold-light/30 hover:from-gold-light/50",
  }
];

function EventCard({ event, index }: { event: typeof events[0], index: number }) {
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
      className={`glass rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 bg-white/80 border border-sage p-4 text-center`}
    >
      <div className="h-20 overflow-hidden relative rounded-lg mb-4 bg-gray-100 flex items-center justify-center">
        <motion.img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8 }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-white/20" />
      </div>
      
      <div className="space-y-1">
        <span className="block font-sans text-xs font-semibold uppercase text-sage-dark mb-1">
          {event.title}
        </span>
        <span className="block font-sans text-[10px] text-ink-light">
          {event.time}, {event.date}
        </span>
      </div>
    </motion.div>
  );
}

export default function Section5Events() {
  return (
    <section className="w-full py-32 bg-warm-blush relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-ink italic mb-4">Wedding Itinerary</h2>
          <p className="font-sans text-ink-light tracking-widest text-sm uppercase">Join us for the celebrations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, idx) => (
            <EventCard key={event.title} event={event} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
