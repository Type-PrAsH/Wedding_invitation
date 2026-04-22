import { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Section8RSVP() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="w-full py-24 bg-blush relative flex items-center justify-center">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-sage/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-peach/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-lg mx-6"
      >
        <div className="bg-white/40 backdrop-blur-[10px] border border-gold-pale p-8 md:p-10 rounded-[20px] shadow-sm text-center relative z-20">
          
          <div className="mb-8">
            <h2 className="font-sans text-[11px] uppercase tracking-[2px] text-gold mb-4">RSVP & Countdown</h2>
            <p className="font-serif text-2xl md:text-3xl text-ink font-normal mb-8">Can't wait to see you!</p>
          </div>

          {!isSubmitted ? (
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-4 relative z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  required
                  className="w-full px-4 py-3 bg-white/60 border border-warm-blush rounded-lg font-sans text-xs text-ink focus:outline-none focus:ring-1 focus:ring-gold transition-all placeholder:text-ink/40"
                />
              </div>
              <div className="flex gap-4">
                <input 
                  type="number" 
                  placeholder="Guests Count" 
                  min="1"
                  max="10"
                  required
                  className="w-full px-4 py-3 bg-white/60 border border-warm-blush rounded-lg font-sans text-xs text-ink focus:outline-none focus:ring-1 focus:ring-gold transition-all placeholder:text-ink/40"
                />
              </div>
              <div>
                <select 
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 bg-white/60 border border-warm-blush rounded-lg font-sans text-xs text-ink focus:outline-none focus:ring-1 focus:ring-gold transition-all appearance-none"
                >
                  <option value="" disabled>Will you attend?</option>
                  <option value="yes">Joyfully Accept</option>
                  <option value="no">Regretfully Decline</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-auto px-8 py-3 mx-auto mt-6 bg-gold text-white rounded-[30px] font-sans text-xs tracking-[1px] uppercase hover:bg-gold-light transition-colors flex items-center justify-center shadow-md cursor-none"
              >
                Kindly Respond
              </motion.button>
            </motion.form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 space-y-4"
            >
              <div className="flex justify-center mb-4">
                <CheckCircle2 size={48} className="text-sage-dark" />
              </div>
              <h3 className="font-serif text-2xl text-ink italic">Thank You!</h3>
              <p className="font-sans text-xs text-ink-light">We have received your response.</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
