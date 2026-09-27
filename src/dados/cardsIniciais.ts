import type { Card } from '../types/entidades';

const cardsIniciais: Card[] = [
  {
    id: 1,
    colunaId: 1,
    titulo: 'Revisar layout do quadro',
    descricao: 'Ajustar espaçamento entre colunas',
    posicao: 1,
    criadoEm: new Date('2026-09-01'),
  },
  {
    id: 2,
    colunaId: 1,
    titulo: 'Corrigir bug de arrastar card',
    posicao: 8,
    criadoEm: new Date('2026-09-10'),
  },
];

export function buscarCards(): Promise<Card[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(cardsIniciais), 300);
  });
}
