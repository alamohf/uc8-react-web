import { useEffect, useState } from 'react';
import type { Card } from './types/entidades';
import { Cabecalho } from './componentes/Cabecalho';
import { Rodape } from './componentes/Rodape';
import { FormularioCard } from './componentes/FormularioCard';
import { ListaCards } from './componentes/ListaCards';
import { buscarCards } from './dados/cardsIniciais';

export default function App() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    buscarCards().then(setCards);
  }, []);

  function aoCriarCard(novoCard: Card) {
    setCards((cardsAtuais) => [...cardsAtuais, novoCard]);
  }

  const proximoId = cards.length === 0 ? 1 : Math.max(...cards.map((card) => card.id)) + 1;

  return (
    <main>
      <Cabecalho />
      <FormularioCard proximoId={proximoId} aoCriarCard={aoCriarCard} />
      <ListaCards cards={cards} />
      <Rodape />
    </main>
  );
}
