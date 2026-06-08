export interface HeroImage {
  src: string;
  alt: string;
}

interface HeroImageGridProps {
  images?: HeroImage[];
}

// Posição de cada célula na grid 2×2 e qual canto interno é cortado
const CELLS = [
  { corner: 'top-left',     placeholder: 'linear-gradient(135deg, #6f2232 0%, #290916 100%)' },
  { corner: 'top-right',    placeholder: 'linear-gradient(135deg, #290916 0%, #9a7a80 100%)' },
  { corner: 'bottom-left',  placeholder: 'linear-gradient(135deg, #9a7a80 0%, #6f2232 100%)' },
  { corner: 'bottom-right', placeholder: 'linear-gradient(135deg, #160408 0%, #6f2232 100%)' },
] as const;

export function HeroImageGrid({ images }: HeroImageGridProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '14px',
        width: '100%',
        aspectRatio: '1 / 1',
        maxWidth: '480px',
      }}
    >
      {CELLS.map(({ corner, placeholder }, i) => {
        const img = images?.[i];
        return (
          <div
            key={i}
            style={{
              position: 'relative',
              width: '100%',
              paddingBottom: '100%',
              overflow: 'hidden',
              borderRadius: '20px',
            }}
          >
            {img?.src ? (
              <img
                src={img.src}
                alt={img.alt}
                className={`hero-grid-img hero-grid-img--${corner}`}
              />
            ) : (
              /* Placeholder até as imagens reais chegarem */
              <div
                className={`hero-grid-img hero-grid-img--${corner}`}
                style={{ background: placeholder }}
                role="img"
                aria-label={`Foto ${i + 1}`}
              >
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                }}>
                  <span style={{ fontSize: '2rem', opacity: 0.5 }}>📷</span>
                  <span style={{ fontSize: '11px', color: 'rgba(255,250,247,0.4)', fontFamily: 'inherit' }}>
                    Foto {i + 1}
                  </span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
