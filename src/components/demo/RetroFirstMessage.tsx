import { demo } from '../../data/demoContent';
import { WhatsAppBubble } from '../ui/WhatsAppBubble';

export function RetroFirstMessage() {
  return (
    <div className="h-full flex flex-col px-4 py-4">
      <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: '#D4AF37' }}>
        Primeira mensagem
      </p>
      <p className="text-[11px] mb-4" style={{ color: '#9a7a80' }}>{demo.firstMessage.date}</p>

      <div className="rounded-2xl p-3 mb-4 flex-1" style={{ background: '#160408' }}>
        <div className="mb-3">
          <div
            className="text-[10px] font-semibold mb-1 px-2 py-0.5 rounded-full inline-block"
            style={{ background: 'rgba(212,175,55,0.15)', color: '#D4AF37' }}
          >
            {demo.couple.p1}
          </div>
          <WhatsAppBubble sender="me" text={demo.firstMessage.text} time={demo.firstMessage.time} />
        </div>
        <div>
          <div
            className="text-[10px] font-semibold mb-1 px-2 py-0.5 rounded-full inline-block"
            style={{ background: 'rgba(255,250,247,0.08)', color: '#fffaf7' }}
          >
            {demo.couple.p2}
          </div>
          <WhatsAppBubble sender="them" text={demo.firstReply.text} time={demo.firstReply.time} />
        </div>
      </div>

      <div
        className="rounded-xl p-3 text-center"
        style={{
          background: 'rgba(212,175,55,0.07)',
          border: '1px solid rgba(212,175,55,0.2)',
        }}
      >
        <p className="text-[11px]" style={{ color: '#9a7a80' }}>Tudo começou em</p>
        <p className="text-sm font-bold mt-0.5" style={{ color: '#fffaf7' }}>{demo.startDate}</p>
        <p className="text-xs mt-1" style={{ color: '#9a7a80' }}>
          {demo.daysTogether.toLocaleString('pt-BR')} dias juntos
        </p>
      </div>
    </div>
  );
}
