import type { Card } from '../types/entidades';

interface CartaoCardProps {
  card: Card;
}

export function CartaoCard({ card }: CartaoCardProps) {
  return (
    <article>
      <h2>{card.titulo}</h2>
      <p>{card.descricao ?? 'Sem descrição'}</p>
      <p>Posição {card.posicao}</p>
    </article>
  );
}
