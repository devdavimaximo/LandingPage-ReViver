import { AuroraBackground } from '../ui/AuroraBackground';
import { CTAButton } from '../ui/CTAButton';
import { WhatsAppBubble } from '../ui/WhatsAppBubble';

function PhoneMockup() {
  return (
    <div
      className="relative flex justify-center items-center"
      style={{ animation: 'fadeUpIn 0.9s cubic-bezier(0.22,1,0.36,1) 0.5s both' }}
    >
      {/* glow behind phone */}
      <div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(ellipse, rgba(212,175,55,0.2) 0%, rgba(111,34,50,0.15) 50%, transparent 70%)',
        }}
      />

      {/* phone frame */}
      <div
        className="phone-float relative w-[200px] sm:w-[240px] rounded-[2rem] overflow-hidden"
        style={{
          background: '#1e060d',
          border: '2px solid rgba(212,175,55,0.3)',
          boxShadow:
            '0 0 60px rgba(212,175,55,0.15), 0 0 120px rgba(111,34,50,0.2), 0 40px 80px rgba(0,0,0,0.7)',
          height: '380px',
        }}
      >
        {/* status bar */}
        <div
          className="flex justify-between px-4 py-2 text-[10px]"
          style={{ background: '#160408', color: '#9a7a80' }}
        >
          <span>ReViver</span>
          <span>💛</span>
        </div>

        {/* chat header */}
        <div
          className="flex items-center gap-2 px-3 py-2"
          style={{ background: '#290916', borderBottom: '1px solid rgba(212,175,55,0.1)' }}
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
            style={{ background: 'linear-gradient(135deg, #6f2232, #290916)', color: '#fffaf7' }}
          >
            A
          </div>
          <div>
            <p className="text-[11px] font-semibold" style={{ color: '#fffaf7' }}>
              Ana & Lucas
            </p>
            <p className="text-[9px]" style={{ color: '#9a7a80' }}>
              Desde 14/02/2021
            </p>
          </div>
        </div>

        {/* messages */}
        <div className="px-3 pt-3 space-y-1">
          <WhatsAppBubble sender="me" text="Oi! Finalmente te achei aqui 😊" time="19:42" />
          <WhatsAppBubble sender="them" text="Oi!! Que bom!! Estava esperando haha" time="19:43" />
          <WhatsAppBubble sender="me" text="Queria muito falar contigo ❤️" time="19:44" />
          <WhatsAppBubble sender="them" text="Eu também 🥰🥰" time="19:45" />
        </div>

        {/* stat bar */}
        <div
          className="absolute bottom-0 left-0 right-0 px-3 py-2.5 flex justify-around text-center"
          style={{ background: 'rgba(22,4,8,0.96)', borderTop: '1px solid rgba(212,175,55,0.15)' }}
        >
          <div>
            <p className="text-[11px] font-bold" style={{ color: '#D4AF37' }}>38.4k</p>
            <p className="text-[9px]" style={{ color: '#9a7a80' }}>mensagens</p>
          </div>
          <div>
            <p className="text-[11px] font-bold" style={{ color: '#fffaf7' }}>1.576</p>
            <p className="text-[9px]" style={{ color: '#9a7a80' }}>dias</p>
          </div>
          <div>
            <p className="text-[11px] font-bold" style={{ color: '#fffaf7' }}>612</p>
            <p className="text-[9px]" style={{ color: '#9a7a80' }}>"te amo"</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <AuroraBackground className="min-h-screen" showRadialGradient>
      {/* subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,175,55,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.8) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-5 sm:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen lg:min-h-0 lg:py-24">
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
                fontFamily: "'Playfair Display', Georgia, serif",
                color: '#fffaf7',
                animation: 'fadeUpIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s both',
              }}
            >
              Transforme anos de conversas em uma{' '}
              <span style={{ color: '#D4AF37' }}>retrospectiva</span> do seu relacionamento.
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
                  <p className="text-sm font-bold" style={{ color: '#fffaf7' }}>
                    {s.n}
                  </p>
                  <p className="text-[11px]" style={{ color: '#9a7a80' }}>
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* visual */}
          <div className="order-1 lg:order-2 flex justify-center">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
