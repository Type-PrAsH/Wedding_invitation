import { motion, useScroll } from 'motion/react';
import CustomCursor from './components/CustomCursor';
import Petals from './components/Petals';
import AudioController from './components/AudioController';
import Section1Hero from './components/Section1Hero';
import Section2Story from './components/Section2Story';
import Section3ImageBreak from './components/Section3ImageBreak';
import Section4Gallery from './components/Section4Gallery';
import Section5Events from './components/Section5Events';
import Section6Countdown from './components/Section6Countdown';
import Section7Location from './components/Section7Location';
import Section8RSVP from './components/Section8RSVP';
import Section9EmotionalEnd from './components/Section9EmotionalEnd';

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="relative w-full min-h-screen bg-blush overflow-hidden text-ink font-sans selection:bg-peach selection:text-ink">
      <CustomCursor />
      <Petals />
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-sage z-[200] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
      <main>
        <Section1Hero />
        <Section2Story />
        <Section3ImageBreak />
        <Section4Gallery />
        <Section5Events />
        <Section6Countdown />
        <Section7Location />
        <Section8RSVP />
        <Section9EmotionalEnd />
      </main>

      <AudioController />
    </div>
  );
}
