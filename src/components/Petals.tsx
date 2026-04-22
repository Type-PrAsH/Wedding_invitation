import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface Petal {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
  speed: number;
  delay: number;
  opacity: number;
}

export default function Petals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    // Generate random petals
    const newPetals = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -20 - Math.random() * 100,
      size: 10 + Math.random() * 15,
      rotation: Math.random() * 360,
      speed: 15 + Math.random() * 20,
      delay: Math.random() * 20,
      opacity: 0.3 + Math.random() * 0.5,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute bg-gradient-to-br from-warm-blush to-peach rounded-tl-full rounded-br-full opacity-60 shadow-sm"
          style={{
            width: petal.size,
            height: petal.size,
            left: `${petal.x}%`,
            top: `${petal.y}%`,
          }}
          animate={{
            y: ['0vh', '120vh'],
            x: [`${petal.x}%`, `${petal.x + (Math.random() * 20 - 10)}%`],
            rotate: [petal.rotation, petal.rotation + 360],
          }}
          transition={{
            duration: petal.speed,
            repeat: Infinity,
            delay: petal.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
