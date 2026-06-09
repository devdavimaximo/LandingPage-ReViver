import type { CuriosityCardData } from '../../data/curiosityCards';

interface CuriosityCardProps {
  card: CuriosityCardData;
}

export function CuriosityCard({ card }: CuriosityCardProps) {
  return (
    <div
      className="group rounded-xl cursor-default flex items-start gap-3"
      style={{
        padding: '18px 16px',
        background: 'linear-gradient(145deg, rgba(111,34,50,0.1) 0%, rgba(41,9,22,0.18) 100%)',
        border: '1px solid rgba(212,175,55,0.12)',
        transition: 'border-color 0.25s ease, background 0.25s ease, transform 0.25s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = 'rgba(212,175,55,0.3)';
        el.style.transform = 'translateY(-2px)';
        el.style.background = 'linear-gradient(145deg, rgba(111,34,50,0.18) 0%, rgba(41,9,22,0.26) 100%)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = 'rgba(212,175,55,0.12)';
        el.style.transform = 'translateY(0)';
        el.style.background = 'linear-gradient(145deg, rgba(111,34,50,0.1) 0%, rgba(41,9,22,0.18) 100%)';
      }}
    >
      {/* Icon container */}
      <div
        className="shrink-0 flex items-center justify-center rounded-lg"
        style={{
          width: '36px',
          height: '36px',
          background: 'rgba(212,175,55,0.07)',
          border: '1px solid rgba(212,175,55,0.14)',
          fontSize: '1.1rem',
        }}
        role="img"
        aria-label={card.title}
      >
        {card.icon}
      </div>

      {/* Text */}
      <div className="min-w-0">
        <h3
          className="font-semibold leading-snug mb-1.5"
          style={{ color: '#fffaf7', fontSize: '0.8rem' }}
        >
          {card.title}
        </h3>
        <p
          style={{
            color: '#9a7a80',
            fontSize: '0.75rem',
            fontStyle: 'italic',
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            lineHeight: '1.5',
          }}
        >
          {card.example}
        </p>
      </div>
    </div>
  );
}
