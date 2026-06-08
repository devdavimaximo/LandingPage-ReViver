import { demo } from '../../data/demoContent';

const stats = [
  { label: 'Mensagens', value: demo.totalMessages.toLocaleString('pt-BR'), icon: '💬' },
  { label: 'Dias juntos', value: demo.daysTogether.toLocaleString('pt-BR'), icon: '📅' },
  { label: '"Eu te amo"', value: demo.loveCount.toLocaleString('pt-BR'), icon: '❤️' },
  { label: 'Mídias', value: demo.mediaCount.toLocaleString('pt-BR'), icon: '📸' },
];

export function RetroStats() {
  const total = demo.messagesP1 + demo.messagesP2;
  const p1Pct = Math.round((demo.messagesP1 / total) * 100);
  const p2Pct = 100 - p1Pct;

  return (
    <div className="h-full overflow-y-auto px-4 py-4">
      <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#D4AF37' }}>
        Estatísticas
      </p>

      <div className="grid grid-cols-2 gap-2 mb-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-3 text-center"
            style={{
              background: 'rgba(111,34,50,0.2)',
              border: '1px solid rgba(212,175,55,0.15)',
            }}
          >
            <span className="text-xl block mb-1">{s.icon}</span>
            <p className="text-base font-bold" style={{ color: '#fffaf7' }}>{s.value}</p>
            <p className="text-[10px]" style={{ color: '#9a7a80' }}>{s.label}</p>
          </div>
        ))}
      </div>

      <div
        className="rounded-xl p-3"
        style={{
          background: 'rgba(41,9,22,0.6)',
          border: '1px solid rgba(212,175,55,0.1)',
        }}
      >
        <p className="text-[10px] mb-2" style={{ color: '#9a7a80' }}>Quem fala mais</p>
        <div className="flex gap-1 rounded-full overflow-hidden h-3 mb-2">
          <div
            className="h-full rounded-l-full"
            style={{
              width: `${p1Pct}%`,
              background: 'linear-gradient(90deg, #6f2232, #D4AF37)',
            }}
          />
          <div
            className="h-full rounded-r-full flex-1"
            style={{ background: 'rgba(255,255,255,0.08)' }}
          />
        </div>
        <div className="flex justify-between text-[10px]">
          <span style={{ color: '#D4AF37' }}>{demo.couple.p1} — {p1Pct}%</span>
          <span style={{ color: '#9a7a80' }}>{demo.couple.p2} — {p2Pct}%</span>
        </div>
      </div>
    </div>
  );
}
