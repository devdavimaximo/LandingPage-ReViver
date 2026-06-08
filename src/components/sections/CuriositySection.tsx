import { curiosityCards } from '../../data/curiosityCards';
import { CuriosityCard } from '../ui/CuriosityCard';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function CuriositySection() {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-20 sm:py-28 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="mb-12">
          <SectionHeading
            eyebrow="Sua conversa revela muito"
            headline="O que sua conversa revela sobre vocês?"
            subheadline="Cada mensagem esconde uma história. Descubra os números por trás do relacionamento de vocês."
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {curiosityCards.map((card, i) => (
            <CuriosityCard
              key={card.title}
              card={card}
              delay={i * 0.07}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
