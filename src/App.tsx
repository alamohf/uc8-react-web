import { useState } from 'react';
import type { Card } from './types/entidades';
import { Cabecalho } from './componentes/Cabecalho';
import { Rodape } from './componentes/Rodape';
import { CartaoCard } from './componentes/CartaoCard';
import { FormularioCard } from './componentes/FormularioCard';

const revisarLayout: Card = {
  id: 1,
  colunaId: 1,
  titulo: 'Revisar layout do quadro',
  descricao: 'Ajustar espaçamento entre colunas',
  posicao: 1,
  criadoEm: new Date('2026-09-01'),
};

const corrigirBug: Card = {
  id: 2,
  colunaId: 1,
  titulo: 'Corrigir bug de arrastar card',
  posicao: 8,
  criadoEm: new Date('2026-09-10'),
};

export default function App() {
  const [cards, setCards] = useState<Card[]>([revisarLayout, corrigirBug]);

  function aoCriarCard(novoCard: Card) {
    setCards((cardsAtuais) => [...cardsAtuais, novoCard]);
  }

  const proximoId = Math.max(...cards.map((card) => card.id)) + 1;

  return (
    <main>
      <Cabecalho />
      <FormularioCard proximoId={proximoId} aoCriarCard={aoCriarCard} />
      {cards.map((card) => (
        <CartaoCard key={card.id} card={card} />
      ))}
      <Rodape />
    </main>
  );
}
