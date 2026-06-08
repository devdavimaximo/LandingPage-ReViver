import { demo } from '../../data/demoContent';

export function RetroChart() {
  const maxMsgs = Math.max(...demo.monthlyActivity.map((m) => m.msgs));

  return (
    <div className="h-full px-4 py-4">
      <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#D4AF37' }}>
        Atividade mensal
      </p>
      <p className="text-[10px] mb-4" style={{ color: '#9a7a80' }}>Mensagens enviadas por mês</p>

      <div className="flex items-end gap-1 h-32">
        {demo.monthlyActivity.map((item) => {
          const pct = (item.msgs / maxMsgs) * 100;
          const isTop = item.msgs === maxMsgs;
          return (
            <div key={item.month} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex items-end" style={{ height: '96px' }}>
                <div
                  className="w-full rounded-t-sm"
                  style={{
                    height: `${pct}%`,
                    background: isTop
                      ? 'linear-gradient(to top, #290916, #6f2232)'
                      : 'rgba(111,34,50,0.4)',
                    minHeight: '4px',
                  }}
                  title={`${item.month}: ${item.msgs.toLocaleString('pt-BR')} mensagens`}
                />
              </div>
              <span className="text-[9px]" style={{ color: '#9a7a80' }}>{item.month}</span>
            </div>
          );
        })}
      </div>

      <div
        className="mt-4 rounded-xl p-3 flex items-center gap-3"
        style={{
          background: 'rgba(41,9,22,0.6)',
          border: '1px solid rgba(212,175,55,0.1)',
        }}
      >
        <span className="text-2xl">🔥</span>
        <div>
          <p className="text-[11px]" style={{ color: '#9a7a80' }}>Maior sequência ativa</p>
          <p className="text-sm font-bold" style={{ color: '#fffaf7' }}>{demo.longestStreak} dias seguidos</p>
        </div>
      </div>
    </div>
  );
}
