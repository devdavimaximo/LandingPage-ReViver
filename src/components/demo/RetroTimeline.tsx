import { demo } from '../../data/demoContent';

export function RetroTimeline() {
  return (
    <div className="h-full overflow-y-auto px-4 py-4">
      <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#D4AF37' }}>
        Linha do tempo
      </p>
      <div className="relative">
        <div
          className="absolute left-4 top-0 bottom-0 w-px"
          style={{ background: 'linear-gradient(to bottom, #D4AF37, transparent)' }}
        />
        <div className="space-y-5 pl-10">
          {demo.timeline.map((item, i) => (
            <div key={i} className="relative">
              <div
                className="absolute -left-6.5 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                style={{ background: '#1e060d', border: '2px solid #D4AF37' }}
              >
                {item.icon}
              </div>
              <p className="text-[10px] mb-0.5" style={{ color: '#9a7a80' }}>{item.date}</p>
              <p className="text-xs font-semibold leading-snug" style={{ color: '#fffaf7' }}>{item.label}</p>
              <p className="text-[11px] mt-0.5" style={{ color: '#9a7a80' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
