interface WhatsAppBubbleProps {
  sender: 'me' | 'them';
  text: string;
  time: string;
  read?: boolean;
}

export function WhatsAppBubble({ sender, text, time, read = true }: WhatsAppBubbleProps) {
  const isMe = sender === 'me';

  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'} mb-1`}>
      <div
        className="relative max-w-[75%] px-3 py-2 rounded-2xl text-sm leading-snug"
        style={{
          backgroundColor: isMe ? '#25d366' : '#1a1030',
          color: isMe ? '#0a1f0a' : '#ede8f5',
          borderBottomRightRadius: isMe ? '4px' : undefined,
          borderBottomLeftRadius: !isMe ? '4px' : undefined,
        }}
      >
        <p className="m-0 text-[13px]">{text}</p>
        <div className="flex items-center gap-1 justify-end mt-0.5">
          <span className="text-[10px] opacity-60">{time}</span>
          {isMe && read && (
            <span className="text-[10px] opacity-70">✓✓</span>
          )}
        </div>
      </div>
    </div>
  );
}
