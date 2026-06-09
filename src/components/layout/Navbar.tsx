import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Home, Sparkles, Smartphone } from 'lucide-react';
import { CTAButton } from '../ui/CTAButton';

const NAV_ITEMS = [
  { name: 'Início',       url: '#inicio',    icon: Home       },
  { name: 'Descubra',     url: '#descobrir', icon: Sparkles   },
  { name: 'Demonstração', url: '#demo',      icon: Smartphone },
];

export function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [activeTab, setActiveTab] = useState('Início');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background:    scrolled ? 'rgba(22,4,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom:  scrolled ? '1px solid rgba(212,175,55,0.12)' : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center no-underline" aria-label="ReViver — início">
          <img src="/logo.png" alt="ReViver" className="h-8 w-auto" />
        </a>

        {/* Tubelight nav links — visível só no desktop */}
        <nav className="hidden sm:flex items-center gap-1" aria-label="Navegação principal">
          {NAV_ITEMS.map(({ name, url, icon: Icon }) => {
            const isActive = activeTab === name;
            return (
              <a
                key={name}
                href={url}
                onClick={() => setActiveTab(name)}
                className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors no-underline"
                style={{ color: isActive ? '#D4AF37' : '#9a7a80' }}
              >
                {/* Texto no desktop, ícone no tablet */}
                <span className="hidden lg:inline">{name}</span>
                <span className="lg:hidden flex items-center justify-center w-5 h-5">
                  <Icon size={16} strokeWidth={2} />
                </span>

                {isActive && (
                  <motion.div
                    layoutId="navbar-lamp"
                    className="absolute inset-0 rounded-full -z-10"
                    style={{ background: 'rgba(111,34,50,0.25)' }}
                    initial={false}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    {/* Barra dourada abaixo do item ativo */}
                    <div
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-b-full"
                      style={{ background: '#D4AF37' }}
                    >
                      <div
                        className="absolute w-12 h-5 rounded-full blur-md -bottom-1 -left-2"
                        style={{ background: 'rgba(212,175,55,0.2)' }}
                      />
                      <div
                        className="absolute w-6 h-4 rounded-full blur-sm -bottom-0.5 left-1"
                        style={{ background: 'rgba(212,175,55,0.15)' }}
                      />
                    </div>
                  </motion.div>
                )}
              </a>
            );
          })}
        </nav>

        <CTAButton label="Começar agora" size="md" />
      </div>
    </header>
  );
}
