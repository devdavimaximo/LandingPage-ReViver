import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { HeroSection } from '../sections/HeroSection';
import { CuriositySection } from '../sections/CuriositySection';

export function HeroScrollWrapper() {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);

  // Hooks sempre chamados — regra do React
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.84]);
  const heroRotate = useTransform(scrollYProgress, [0, 1], [0, -4]);
  const curiosityScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const curiosityRotate = useTransform(scrollYProgress, [0, 1], [3, 0]);

  // Mobile: sem scroll transform — layout simples e liso
  if (isMobile) {
    return (
      <>
        <HeroSection />
        <CuriositySection />
      </>
    );
  }

  // Desktop: efeito scroll completo
  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <motion.div
        style={{ scale: heroScale, rotate: heroRotate, transformOrigin: 'top center' }}
        className="sticky top-0 h-screen overflow-hidden"
      >
        <HeroSection />
      </motion.div>

      <motion.div
        style={{ scale: curiosityScale, rotate: curiosityRotate, transformOrigin: 'top center' }}
        className="relative z-10 overflow-hidden rounded-t-3xl"
      >
        <CuriositySection />
      </motion.div>
    </div>
  );
}
