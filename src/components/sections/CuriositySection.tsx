import { useEffect, useRef, useState } from 'react';
import { curiosityCards } from '../../data/curiosityCards';
import { CuriosityCard } from '../ui/CuriosityCard';
import { SectionHeading } from '../ui/SectionHeading';
import { PhoneVideoFrame } from '../demo/PhoneVideoFrame';
import { CTAButton } from '../ui/CTAButton';
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
    <section id="descobrir" className="pt-6 pb-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-center lg:items-start">

          {/* Video phone — mobile: primeiro, desktop: direita */}
          <div ref={videoRef} className="order-1 lg:order-2 shrink-0">
            <PhoneVideoFrame src="/videoreviver.webm" />
          </div>

          {/* Coluna esquerda: heading + cards + CTA */}
          <div className="order-2 lg:order-1 flex-1 min-w-0 flex flex-col">

            {/* Heading — alinhado à esquerda no desktop */}
            <div ref={headingRef} className="mb-8">
              <SectionHeading
                eyebrow="Sua conversa revela muito"
                headline="O que sua conversa revela sobre vocês?"
                subheadline="Cada mensagem esconde uma história. Descubra os números por trás do relacionamento de vocês."
                centered={false}
              />
            </div>

            {/* Cards */}
            <div ref={cardsContainerRef} className="grid grid-cols-2 gap-3 mb-8">
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

            {/* CTA + social proof */}
            <div
              className="flex flex-col gap-4"
              style={{
                opacity: cardsVisible ? undefined : 0,
                animation: cardsVisible
                  ? 'fadeUpIn 0.65s cubic-bezier(0.22,1,0.36,1) 0.32s both'
                  : 'none',
              }}
            >
              <CTAButton label="Gerar minha retrospectiva" />

              <p
                className="text-sm"
                style={{
                  color: '#9a7a80',
                  fontStyle: 'italic',
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}
              >
                Sem cadastro, sem cartão. Só a história de vocês. ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
