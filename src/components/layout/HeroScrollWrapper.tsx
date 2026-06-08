import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'motion/react';
import { useIsMobile } from '../../hooks/useIsMobile';
import { HeroSection } from '../sections/HeroSection';
import { CuriositySection } from '../sections/CuriositySection';

export function HeroScrollWrapper() {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Hero: recua suavemente, começa a animar depois de 5% de scroll
  const heroScale = useTransform(scrollYProgress, [0.05, 0.9], [1, 0.9]);
  const heroRotate = useTransform(scrollYProgress, [0.05, 0.9], [0, -3]);
  const heroFilter = useTransform(
    scrollYProgress,
    [0.05, 0.9],
    ['brightness(1)', 'brightness(0.55)']
  );

  // Card: sobe com leve translateY — sem rotação, sem scale
  const curiosityY = useTransform(scrollYProgress, [0, 1], [40, 0]);

  if (isMobile) {
    return (
      <>
        <HeroSection />
        <CuriositySection />
      </>
    );
  }

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Hero recua, escurece e se inclina levemente */}
      <motion.div
        style={{ scale: heroScale, rotate: heroRotate, filter: heroFilter, transformOrigin: 'top center' }}
        className="sticky top-0 h-screen overflow-hidden"
      >
        <HeroSection />
      </motion.div>

      {/* Card sobe sobre o hero — fundo sólido + sombra de profundidade */}
      <motion.div
        style={{
          y: curiosityY,
          boxShadow: '0 -40px 80px rgba(0,0,0,0.7)',
        }}
        className="relative z-10 rounded-t-3xl overflow-hidden"
      >
        <div style={{ background: '#160408' }}>
          <CuriositySection />
        </div>
      </motion.div>
    </div>
  );
}
