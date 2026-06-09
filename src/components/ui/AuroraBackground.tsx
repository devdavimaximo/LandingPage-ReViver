import React, { type ReactNode } from 'react';
import { useIsMobile } from '../../hooks/useIsMobile';

interface AuroraBackgroundProps {
  children: ReactNode;
  className?: string;
  showRadialGradient?: boolean;
  id?: string;
}

const DARK_STRIPE =
  'repeating-linear-gradient(100deg,#160408 0%,#160408 7%,transparent 10%,transparent 12%,#160408 16%)';

const AURORA =
  'repeating-linear-gradient(100deg,#6f2232 10%,#a07828 15%,#9a7a80 20%,#c49a30 25%,#290916 30%)';

export function AuroraBackground({
  children,
  className = '',
  showRadialGradient = true,
  id,
}: AuroraBackgroundProps) {
  const isMobile = useIsMobile();

  const mask = showRadialGradient
    ? 'radial-gradient(ellipse at 80% 0%, black 20%, transparent 70%)'
    : undefined;

  const layerBase: React.CSSProperties = {
    backgroundImage: `${DARK_STRIPE}, ${AURORA}`,
    backgroundSize: '300%, 200%',
    filter: 'blur(10px)',
    animation: 'aurora 60s linear infinite',
    maskImage: mask,
    WebkitMaskImage: mask,
  };

  const layerBlend: React.CSSProperties = {
    backgroundImage: `${DARK_STRIPE}, ${AURORA}`,
    backgroundSize: '200%, 100%',
    filter: 'blur(10px)',
    animation: 'aurora 60s linear infinite',
    animationDelay: '-8s',
    mixBlendMode: 'screen',
    maskImage: mask,
    WebkitMaskImage: mask,
  };

  return (
    <div id={id} className={`relative overflow-hidden ${className}`}>
      {/* Aurora layers: desativado no mobile — blur animado custa muito na GPU */}
      {!isMobile && (
        <div className="absolute inset-0" aria-hidden="true">
          <div
            className="aurora-layer absolute -inset-2.5 opacity-30 will-change-transform pointer-events-none"
            style={layerBase}
          />
          <div
            className="aurora-layer absolute -inset-2.5 opacity-20 will-change-transform pointer-events-none"
            style={layerBlend}
          />
        </div>
      )}
      {children}
    </div>
  );
}
