import { useEffect, useState } from 'react';
import { CTAButton } from '../ui/CTAButton';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(22,4,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,175,55,0.12)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        <a href="/" className="flex items-center no-underline" aria-label="ReViver — início">
          <img src="/logo.png" alt="ReViver" className="h-8 w-auto" />
        </a>

        <CTAButton label="Começar agora" size="md" />
      </div>
    </header>
  );
}
