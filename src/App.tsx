import type { Card } from './types/entidades';
import { Cabecalho } from './componentes/Cabecalho';
import { Rodape } from './componentes/Rodape';
import { CartaoCard } from './componentes/CartaoCard';

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
  return (
    <main>
      <Cabecalho />
      <CartaoCard card={revisarLayout} />
      <CartaoCard card={corrigirBug} />
      <Rodape />
    </main>
  );
}
