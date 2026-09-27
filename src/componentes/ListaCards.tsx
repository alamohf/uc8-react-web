import type { Card } from '../types/entidades';
import { CartaoCard } from './CartaoCard';

interface ListaCardsProps {
  cards: Card[];
}

export function ListaCards({ cards }: ListaCardsProps) {
  return (
    <ul>
      {cards.map((card) => (
        <li key={card.id}>
          <CartaoCard card={card} />
        </li>
      ))}
    </ul>
  );
}
