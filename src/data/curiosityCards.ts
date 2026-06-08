export interface CuriosityCardData {
  icon: string;
  title: string;
  example: string;
}

export const curiosityCards: CuriosityCardData[] = [
  {
    icon: '💬',
    title: 'Total de mensagens',
    example: 'Ex: 38.429 mensagens enviadas',
  },
  {
    icon: '❤️',
    title: 'Primeiro "eu te amo"',
    example: 'Ex: Dito às 23h47 num sábado',
  },
  {
    icon: '😂',
    title: 'Emoji mais usado',
    example: 'Ex: 😂 apareceu 1.203 vezes',
  },
  {
    icon: '📅',
    title: 'Dia mais intenso',
    example: 'Ex: 14 de fev — 847 mensagens',
  },
  {
    icon: '🌙',
    title: 'Hora preferida',
    example: 'Ex: Vocês conversam mais às 22h',
  },
  {
    icon: '📸',
    title: 'Mídias enviadas',
    example: 'Ex: 2.140 fotos e vídeos',
  },
  {
    icon: '🔥',
    title: 'Maior sequência',
    example: 'Ex: 180 dias sem parar',
  },
  {
    icon: '✍️',
    title: 'Quem escreve mais',
    example: 'Ex: Ela enviou 58% das mensagens',
  },
];
