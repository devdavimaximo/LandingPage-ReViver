interface SectionHeadingProps {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  centered?: boolean;
  headingStyle?: 'serif' | 'sans';
}

export function SectionHeading({
  eyebrow,
  headline,
  subheadline,
  centered = true,
  headingStyle = 'serif',
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} max-w-2xl ${centered ? 'mx-auto' : ''}`}>
      {eyebrow && (
        <span
          className="inline-block text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
          style={{
            color: '#D4AF37',
            background: 'rgba(212,175,55,0.1)',
            border: '1px solid rgba(212,175,55,0.3)',
          }}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-bold leading-tight mb-4 ${headingStyle === 'serif' ? 'italic' : ''}`}
        style={{
          fontFamily: headingStyle === 'serif' ? "'Playfair Display', Georgia, serif" : undefined,
          color: '#fffaf7',
        }}
      >
        {headline}
      </h2>
      {subheadline && (
        <p className="text-base sm:text-lg leading-relaxed" style={{ color: '#9a7a80' }}>
          {subheadline}
        </p>
      )}
    </div>
  );
}
