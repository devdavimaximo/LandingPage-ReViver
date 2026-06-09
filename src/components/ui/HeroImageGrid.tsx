// Canto cortado = canto INTERNO de cada célula (voltado para o centro da grid)
// top-left  → corta bottom-right | top-right  → corta bottom-left
// bottom-left → corta top-right  | bottom-right → corta top-left
const CELLS = [
  { corner: 'bottom-right', src: '/hero3.jpeg', alt: 'Casal 3' },
  { corner: 'bottom-left',  src: '/hero4.jpeg', alt: 'Casal 4' },
  { corner: 'top-right',    src: '/hero2.jpeg', alt: 'Casal 2' },
  { corner: 'top-left',     src: '/hero1.jpeg', alt: 'Casal 1' },
] as const;

export function HeroImageGrid() {
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
      {CELLS.map(({ corner, src, alt }) => (
        <div
          key={corner}
          style={{
            position: 'relative',
            width: '100%',
            paddingBottom: '100%',
            overflow: 'hidden',
            borderRadius: '20px',
          }}
        >
          <img
            src={src}
            alt={alt}
            className={`hero-grid-img hero-grid-img--${corner}`}
          />
        </div>
      ))}
    </div>
  );
}
