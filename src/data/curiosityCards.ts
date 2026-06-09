export interface CuriosityCardData {
  icon: string;
  title: string;
  example: string;
}

export const curiosityCards: CuriosityCardData[] = [
  {
    icon: '💬',
    title: 'Total de mensagens',
    example: '38.429 mensagens trocadas ao longo do relacionamento',
  },
  {
    icon: '❤️',
    title: 'Primeiro "eu te amo"',
    example: 'Dito às 23h47 de um sábado chuvoso',
  },
  {
    icon: '😂',
    title: 'Emoji mais usado',
    example: '😂 repetido 1.203 vezes — vocês riem muito juntos',
  },
  {
    icon: '🌙',
    title: 'Hora preferida',
    example: 'A conversa flui mais às 22h, quando o dia acaba',
  },
];
