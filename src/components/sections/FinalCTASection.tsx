import { CTAButton } from '../ui/CTAButton';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function FinalCTASection() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      className="py-24 sm:py-32 px-5 sm:px-8 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(111,34,50,0.35) 0%, rgba(41,9,22,0.25) 45%, transparent 75%)',
      }}
    >
      {/* decorative rings */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        {[400, 600, 800].map((size) => (
          <div
            key={size}
            className="absolute rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              border: '1px solid rgba(212,175,55,0.07)',
            }}
          />
        ))}
      </div>

      {/* gold shimmer line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }}
        aria-hidden="true"
      />

      <div ref={ref} className="relative max-w-3xl mx-auto text-center">
        <div className="text-3xl mb-6" role="img" aria-label="coração dourado">
          💛
        </div>

        <h2
          className="text-3xl sm:text-5xl font-bold italic leading-tight mb-6"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            color: '#fffaf7',
          }}
        >
          Vocês já escreveram uma história.{' '}
          <span style={{ color: '#D4AF37' }}>Agora descubram ela.</span>
        </h2>

        <p className="text-base sm:text-lg leading-relaxed mb-4 max-w-xl mx-auto" style={{ color: '#9a7a80' }}>
          Sua retrospectiva está escondida em milhares de mensagens trocadas ao longo dos anos.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: '#9a7a80' }}>
          A ReViver organiza tudo para que vocês possam reviver cada capítulo.
        </p>

        <CTAButton label="Gerar minha retrospectiva agora" size="lg" />

        <p className="mt-4 text-sm" style={{ color: '#9a7a80' }}>
          Gratuito para começar · Sem cadastro obrigatório
        </p>
      </div>
    </section>
  );
}
