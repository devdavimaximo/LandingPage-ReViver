interface PhoneVideoFrameProps {
  src: string;
}

export function PhoneVideoFrame({ src }: PhoneVideoFrameProps) {
  return (
    <div className="phone-float relative" style={{ width: '260px' }}>
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-50px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '180px',
          height: '90px',
          background: 'rgba(111,34,50,0.55)',
          filter: 'blur(50px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-30px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '130px',
          height: '60px',
          background: 'rgba(212,175,55,0.18)',
          filter: 'blur(32px)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Phone shell */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          borderRadius: '2.75rem',
          background: 'linear-gradient(160deg, #220a10 0%, #0d0303 45%, #1c0709 100%)',
          border: '1.5px solid rgba(212,175,55,0.28)',
          boxShadow: [
            '0 0 0 1px rgba(0,0,0,0.85)',
            'inset 0 1px 0 rgba(255,255,255,0.07)',
            'inset 0 -1px 0 rgba(0,0,0,0.4)',
            '0 0 40px rgba(212,175,55,0.07)',
            '0 0 80px rgba(111,34,50,0.14)',
            '0 50px 100px rgba(0,0,0,0.8)',
          ].join(', '),
          padding: '10px',
        }}
      >
        {/* Left: mute toggle */}
        <div style={{ position: 'absolute', left: '-3px', top: '82px', width: '3px', height: '28px', background: '#160408', borderRadius: '2px 0 0 2px', boxShadow: '-1px 0 3px rgba(0,0,0,0.7)' }} />
        {/* Left: volume up */}
        <div style={{ position: 'absolute', left: '-3px', top: '124px', width: '3px', height: '36px', background: '#160408', borderRadius: '2px 0 0 2px', boxShadow: '-1px 0 3px rgba(0,0,0,0.7)' }} />
        {/* Left: volume down */}
        <div style={{ position: 'absolute', left: '-3px', top: '172px', width: '3px', height: '36px', background: '#160408', borderRadius: '2px 0 0 2px', boxShadow: '-1px 0 3px rgba(0,0,0,0.7)' }} />
        {/* Right: power */}
        <div style={{ position: 'absolute', right: '-3px', top: '134px', width: '3px', height: '64px', background: '#160408', borderRadius: '0 2px 2px 0', boxShadow: '1px 0 3px rgba(0,0,0,0.7)' }} />

        {/* Screen area */}
        <div
          style={{
            borderRadius: '2.25rem',
            overflow: 'hidden',
            background: '#000',
            position: 'relative',
            aspectRatio: '9 / 19.5',
          }}
        >
          {/* Dynamic island */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '13px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '92px',
              height: '28px',
              background: '#000',
              borderRadius: '14px',
              zIndex: 10,
            }}
          />

          <video
            src={src}
            autoPlay
            muted
            loop
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />

          {/* Home indicator */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: '9px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100px',
              height: '5px',
              background: 'rgba(255,255,255,0.32)',
              borderRadius: '3px',
              zIndex: 10,
            }}
          />

          {/* Subtle screen glare */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '30%',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)',
              pointerEvents: 'none',
              zIndex: 5,
            }}
          />
        </div>
      </div>
    </div>
  );
}
