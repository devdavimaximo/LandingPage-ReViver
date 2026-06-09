import { useEffect, useRef, useState } from 'react';
import { curiosityCards } from '../../data/curiosityCards';
import { CuriosityCard } from '../ui/CuriosityCard';
import { SectionHeading } from '../ui/SectionHeading';
import { PhoneVideoFrame } from '../demo/PhoneVideoFrame';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function CuriositySection() {
  const headingRef = useScrollReveal<HTMLDivElement>();
  const videoRef = useScrollReveal<HTMLDivElement>();
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const el = cardsContainerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="descobrir" className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="mb-12">
          <SectionHeading
            eyebrow="Sua conversa revela muito"
            headline="O que sua conversa revela sobre vocês?"
            subheadline="Cada mensagem esconde uma história. Descubra os números por trás do relacionamento de vocês."
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">

          {/* Video phone — mobile: primeiro, desktop: direita */}
          <div ref={videoRef} className="order-1 lg:order-2 shrink-0">
            <PhoneVideoFrame src="/videoreviver.webm" />
          </div>

          {/* Cards grid — mobile: segundo, desktop: esquerda */}
          <div ref={cardsContainerRef} className="order-2 lg:order-1 flex-1 min-w-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {curiosityCards.map((card, i) => (
                <div
                  key={card.title}
                  style={{
                    opacity: cardsVisible ? undefined : 0,
                    animation: cardsVisible
                      ? `fadeUpIn 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 0.07}s both`
                      : 'none',
                  }}
                >
                  <CuriosityCard card={card} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
