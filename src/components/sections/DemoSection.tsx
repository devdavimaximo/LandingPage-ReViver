import { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { RetroTimeline } from '../demo/RetroTimeline';
import { RetroFirstMessage } from '../demo/RetroFirstMessage';
import { RetroStats } from '../demo/RetroStats';
import { RetroEmojis } from '../demo/RetroEmojis';
import { RetroChart } from '../demo/RetroChart';
import { useScrollReveal } from '../../hooks/useScrollReveal';

type TabId = 'timeline' | 'primeira' | 'stats' | 'emojis' | 'grafico';

interface Tab {
  id: TabId;
  label: string;
  icon: string;
}

const tabs: Tab[] = [
  { id: 'timeline', label: 'Timeline', icon: '📅' },
  { id: 'primeira', label: '1ª Mensagem', icon: '💬' },
  { id: 'stats', label: 'Stats', icon: '📊' },
  { id: 'emojis', label: 'Emojis', icon: '😍' },
  { id: 'grafico', label: 'Gráfico', icon: '📈' },
];

function DemoFrame({ activeTab }: { activeTab: TabId }) {
  return (
    <div
      className="relative mx-auto"
      style={{
        width: '320px',
        height: '580px',
        borderRadius: '2.25rem',
        border: '2px solid rgba(212,175,55,0.3)',
        background: '#1e060d',
        boxShadow:
          '0 0 60px rgba(212,175,55,0.12), 0 0 120px rgba(111,34,50,0.2), 0 40px 80px rgba(0,0,0,0.7)',
        overflow: 'hidden',
      }}
    >
      {/* header */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: '#160408', borderBottom: '1px solid rgba(212,175,55,0.1)' }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
          style={{ background: 'linear-gradient(135deg, #6f2232, #290916)', color: '#fffaf7' }}
        >
          R
        </div>
        <div>
          <p className="text-xs font-semibold" style={{ color: '#fffaf7' }}>Ana & Lucas</p>
          <p className="text-[9px]" style={{ color: '#9a7a80' }}>Retrospectiva · 1.576 dias</p>
        </div>
        <span className="ml-auto text-sm">✨</span>
      </div>

      {/* content panels */}
      <div className="relative" style={{ height: 'calc(100% - 56px)' }}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="absolute inset-0 panel-transition"
            style={{
              opacity: activeTab === tab.id ? 1 : 0,
              transform: activeTab === tab.id ? 'translateX(0)' : 'translateX(12px)',
              pointerEvents: activeTab === tab.id ? 'auto' : 'none',
            }}
          >
            {tab.id === 'timeline' && <RetroTimeline />}
            {tab.id === 'primeira' && <RetroFirstMessage />}
            {tab.id === 'stats' && <RetroStats />}
            {tab.id === 'emojis' && <RetroEmojis />}
            {tab.id === 'grafico' && <RetroChart />}
          </div>
        ))}
      </div>
    </div>
  );
}

export function DemoSection() {
  const [activeTab, setActiveTab] = useState<TabId>('timeline');
  const headingRef = useScrollReveal<HTMLDivElement>();
  const frameRef = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="demo"
      className="py-20 sm:py-28 px-5 sm:px-8"
      style={{
        background:
          'linear-gradient(180deg, transparent 0%, rgba(111,34,50,0.08) 30%, rgba(41,9,22,0.15) 60%, transparent 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="mb-12">
          <SectionHeading
            eyebrow="Veja como fica"
            headline="Sua história, transformada em uma retrospectiva interativa."
            subheadline="Em poucos minutos, a ReViver transforma milhares de mensagens em uma experiência única para reviver a trajetória de vocês."
          />
        </div>

        {/* tab selector */}
        <div className="flex justify-center mb-8">
          <div
            className="flex gap-1 p-1 rounded-full flex-wrap justify-center"
            style={{
              background: 'rgba(41,9,22,0.6)',
              border: '1px solid rgba(212,175,55,0.15)',
            }}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
                style={{
                  background:
                    activeTab === tab.id
                      ? 'linear-gradient(135deg, #6f2232, #290916)'
                      : 'transparent',
                  color: activeTab === tab.id ? '#fffaf7' : '#9a7a80',
                }}
                aria-pressed={activeTab === tab.id}
              >
                <span>{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* phone frame */}
        <div ref={frameRef}>
          <DemoFrame activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
}
