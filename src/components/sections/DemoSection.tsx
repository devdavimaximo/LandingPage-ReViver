import { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';

type TabId = 'dashboard' | 'memorias' | 'datas' | 'mural' | 'compartilhar';

interface Tab {
  id: TabId;
  label: string;
  icon: string;
  src: string;
  fit?: 'cover' | 'contain';
}

const tabs: Tab[] = [
  { id: 'dashboard',    label: 'Dashboard',   icon: '✨', src: '/dashboard.jpeg' },
  { id: 'memorias',     label: 'Memórias',    icon: '📸', src: '/memorias.jpeg' },
  { id: 'datas',        label: 'Datas',       icon: '📅', src: '/datas.jpeg' },
  { id: 'mural',        label: 'Mural',       icon: '🖼️', src: '/mural.jpeg' },
  { id: 'compartilhar', label: 'Compartilhar',icon: '💌', src: '/compartilhar.png', fit: 'contain' },
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
      {/* content panels */}
      <div className="relative" style={{ height: '100%' }}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className="absolute inset-0 panel-transition"
            style={{
              opacity: activeTab === tab.id ? 1 : 0,
              transform: activeTab === tab.id ? 'translateX(0)' : 'translateX(12px)',
              pointerEvents: activeTab === tab.id ? 'auto' : 'none',
              background: tab.fit === 'contain' ? '#160408' : undefined,
            }}
          >
            <img
              src={tab.src}
              alt={tab.label}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: tab.fit ?? 'cover',
                objectPosition: 'top center',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function DemoSection() {
  const [activeTab, setActiveTab] = useState<TabId>('dashboard');
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
            eyebrow="Muito além da retrospectiva"
            headline="A plataforma dos casais apaixonados."
            subheadline="Guardem memórias, celebrem datas importantes, compartilhem momentos e construam juntos a história de vocês."
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
