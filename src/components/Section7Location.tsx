import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { MapPin, Navigation } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Section7Location() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="w-full py-24 bg-blush relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-gold-light italic mb-2 font-normal">{t('location')}</h2>
          <p className="font-sans text-ink-light tracking-[2px] text-[11px] uppercase">{t('locationSub')}</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="relative rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(230,173,173,0.15)] bg-white p-3 border border-warm-blush aspect-[4/3] w-full max-w-lg">
              <div className="w-full h-full overflow-hidden rounded-[10px]">
                <img
                  src="/images/venue.jpg"
                  alt="Wedding Venue"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="bg-white p-8 rounded-[20px] shadow-[0_10px_30px_rgba(230,173,173,0.15)] border border-warm-blush">
              <h3 className="font-serif text-2xl text-gold-light italic mb-2">{t('royalVenue')}</h3>
              <p className="font-sans text-sm text-ink-light leading-relaxed flex items-center gap-2 mb-6">
                <MapPin size={16} className="text-sage-dark" />
                {t('venueAddress')}
              </p>

              <div className="w-full h-48 rounded-[12px] overflow-hidden bg-gray-100 border border-sage mb-6">
                {/* Fallback to simple iframe map for demo purposes */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.877283914113!2d80.9346001150435!3d26.84385518315733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0a0b2d71d3%3A0xed435c4da17bdc0!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1655963286576!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Venue Map"
                ></iframe>
              </div>

              <motion.a
                href="#"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-white rounded-[30px] font-sans text-xs tracking-[1px] text-center uppercase hover:bg-gold-light transition-colors shadow-sm cursor-none"
              >
                <Navigation size={14} />
                {t('getDirections')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
