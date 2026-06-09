interface CTAButtonProps {
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function CTAButton({ label = 'Gerar minha retrospectiva', size = 'md', className = '' }: CTAButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer no-underline select-none';
  const sizes =
    size === 'lg' ? 'px-8 py-4 text-lg' :
    size === 'sm' ? 'px-4 py-2 text-sm' :
    'px-6 py-3 text-base';
  const style = {
    background: 'linear-gradient(135deg, #6f2232 0%, #290916 100%)',
    boxShadow: '0 4px 24px rgba(111, 34, 50, 0.5)',
    color: '#fffaf7',
  };

  return (
    <a
      href="https://reviveroficial.com.br"
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes} ${className} hover:scale-105 active:scale-100`}
      style={style}
      aria-label={label}
    >
      {label}
      <span aria-hidden="true">→</span>
    </a>
  );
}
