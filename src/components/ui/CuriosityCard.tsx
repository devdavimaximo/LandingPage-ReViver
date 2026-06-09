import type { CuriosityCardData } from '../../data/curiosityCards';

interface CuriosityCardProps {
  card: CuriosityCardData;
}

export function CuriosityCard({ card }: CuriosityCardProps) {
  return (
    <div
      className="card-glass group rounded-2xl p-5 transition-all duration-300 cursor-default"
      style={{
        background: 'rgba(111, 34, 50, 0.12)',
        border: '1px solid rgba(212, 175, 55, 0.2)',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = 'rgba(212, 175, 55, 0.5)';
        el.style.transform = 'translateY(-4px)';
        el.style.background = 'rgba(111, 34, 50, 0.22)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.borderColor = 'rgba(212, 175, 55, 0.2)';
        el.style.transform = 'translateY(0)';
        el.style.background = 'rgba(111, 34, 50, 0.12)';
      }}
    >
      <span className="text-3xl block mb-3" role="img" aria-label={card.title}>
        {card.icon}
      </span>
      <h3 className="font-semibold text-sm mb-1.5 leading-snug" style={{ color: '#fffaf7' }}>
        {card.title}
      </h3>
      <p className="text-[13px] leading-relaxed" style={{ color: '#9a7a80' }}>{card.example}</p>
    </div>
  );
}
