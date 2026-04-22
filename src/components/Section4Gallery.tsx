import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { X } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1974",
  "https://images.unsplash.com/photo-1543885994-013626e95262?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1542042161784-26ab9e041e89?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=2070",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=2070"
];

function GalleryItem({ src, index, onClick }: { src: string; index: number; onClick: (src: string) => void }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-[20px] shadow-[0_10px_30px_rgba(230,173,173,0.15)] bg-white p-2 border border-warm-blush cursor-pointer group aspect-[4/5] sm:aspect-square md:aspect-[3/4]"
      onClick={() => onClick(src)}
    >
      <div className="w-full h-full overflow-hidden rounded-[14px] relative">
        <motion.img
          src={src}
          alt={`Gallery image ${index + 1}`}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
}

export default function Section4Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="w-full py-24 bg-blush relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl text-gold-light italic mb-2 font-normal">Gallery</h2>
          <p className="font-sans text-ink-light tracking-[2px] text-[11px] uppercase">Cherished Moments</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {images.map((src, idx) => (
            <GalleryItem key={src} src={src} index={idx} onClick={setSelectedImg} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImg}
              alt="Fullscreen gallery view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
