import { demo } from '../../data/demoContent';

export function RetroEmojis() {
  const maxCount = demo.topEmojis[0].count;

  return (
    <div className="h-full px-4 py-4">
      <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#D4AF37' }}>
        Emojis mais usados
      </p>
      <div className="space-y-3">
        {demo.topEmojis.map((item, i) => {
          const pct = Math.round((item.count / maxCount) * 100);
          return (
            <div key={i} className="flex items-center gap-3">
              <span className="text-xl w-7 text-center shrink-0">{item.emoji}</span>
              <div className="flex-1">
                <div className="flex justify-between text-[11px] mb-1">
                  <span style={{ color: '#9a7a80' }}>{i === 0 ? '🏆 Favorito' : `#${i + 1}`}</span>
                  <span style={{ color: '#9a7a80' }}>{item.count.toLocaleString('pt-BR')}x</span>
                </div>
                <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${pct}%`,
                      background:
                        i === 0
                          ? 'linear-gradient(90deg, #6f2232, #D4AF37)'
                          : 'rgba(111,34,50,0.45)',
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="mt-5 rounded-xl p-3 text-center"
        style={{
          background: 'rgba(212,175,55,0.07)',
          border: '1px solid rgba(212,175,55,0.18)',
        }}
      >
        <p className="text-[11px]" style={{ color: '#9a7a80' }}>Dia mais intenso</p>
        <p className="text-sm font-bold mt-0.5" style={{ color: '#fffaf7' }}>{demo.mostActiveDay.date}</p>
        <p className="text-xs" style={{ color: '#9a7a80' }}>{demo.mostActiveDay.count} mensagens em 1 dia</p>
      </div>
    </div>
  );
}
