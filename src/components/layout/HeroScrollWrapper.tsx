import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import { HeroSection } from '../sections/HeroSection';
import { CuriositySection } from '../sections/CuriositySection';

export function HeroScrollWrapper() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.84]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const curiosityScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const curiosityRotate = useTransform(scrollYProgress, [0, 1], [3, 0]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Hero encolhe e rotaciona ao sair */}
      <motion.div
        style={{ scale: heroScale, rotate: heroRotate, transformOrigin: 'top center' }}
        className="sticky top-0 h-screen overflow-hidden"
      >
        <HeroSection />
      </motion.div>

      {/* Curiosity cresce e endireita ao entrar */}
      <motion.div
        style={{ scale: curiosityScale, rotate: curiosityRotate, transformOrigin: 'top center' }}
        className="relative z-10 overflow-hidden rounded-t-3xl"
      >
        <CuriositySection />
      </motion.div>
    </div>
  );
}
