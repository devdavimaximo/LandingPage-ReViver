import { AuroraBackground } from '../ui/AuroraBackground';
import { CTAButton } from '../ui/CTAButton';
import { HeroImageGrid } from '../ui/HeroImageGrid';

export function HeroSection() {
  return (
    <AuroraBackground className="min-h-screen flex items-center" showRadialGradient>
      {/* subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,175,55,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.8) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-5 sm:px-8 py-12 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-4 pb-4 lg:py-24">
          {/* text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
              style={{
                background: 'rgba(212,175,55,0.1)',
                border: '1px solid rgba(212,175,55,0.3)',
                color: '#D4AF37',
                animation: 'fadeUpIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s both',
              }}
            >
              <span>✨</span>
              <span>Retrospectiva de relacionamento</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold italic leading-tight mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                color: '#fffaf7',
                animation: 'fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s both',
              }}
            >
              Anos de conversas em uma{' '}
              <span style={{ color: '#D4AF37' }}>retrospectiva</span>.
            </h1>

            <p
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
              style={{
                color: '#9a7a80',
                animation: 'fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.5s both',
              }}
            >
              Descubra momentos esquecidos, estatísticas surpreendentes e a história que vocês
              construíram juntos através do WhatsApp.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              style={{ animation: 'fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.65s both' }}
            >
              <CTAButton label="Gerar minha retrospectiva" size="lg" />
            </div>

            <div
              className="flex items-center gap-6 mt-8 justify-center lg:justify-start"
              style={{ animation: 'fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.85s both' }}
            >
              {[
                { n: '100k+', l: 'retrospectivas' },
                { n: '4.9★', l: 'avaliação' },
                { n: 'Grátis', l: 'para começar' },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="text-xl font-bold" style={{ color: '#fffaf7' }}>
                    {s.n}
                  </p>
                  <p className="text-base" style={{ color: '#9a7a80' }}>
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* visual — grid 2×2 com cantos internos cortados (desktop only) */}
          <div
            className="order-1 lg:order-2 hidden lg:flex justify-center items-center"
            style={{ animation: 'fadeUpIn 0.9s cubic-bezier(0.22,1,0.36,1) 0.4s both' }}
          >
            <HeroImageGrid />
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
