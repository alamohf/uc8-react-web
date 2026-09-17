import type { Card } from '../types/entidades';

interface CartaoCardProps {
  card: Card;
  limitePosicaoAlerta?: number;
}

export function CartaoCard({ card, limitePosicaoAlerta = 5 }: CartaoCardProps) {
  return (
    <article>
      <h2>{card.titulo}</h2>
      <p>{card.descricao ?? 'Sem descrição'}</p>
      <p>Posição {card.posicao}</p>
      {card.posicao > limitePosicaoAlerta && <p>Muito atrás na coluna</p>}
    </article>
  );
}
