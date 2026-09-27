import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import type { Card } from '../types/entidades';

interface FormularioCardProps {
  proximoId: number;
  aoCriarCard: (card: Card) => void;
}

export function FormularioCard({ proximoId, aoCriarCard }: FormularioCardProps) {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  function aoDigitarTitulo(evento: ChangeEvent<HTMLInputElement>) {
    setTitulo(evento.target.value);
  }

  function aoDigitarDescricao(evento: ChangeEvent<HTMLTextAreaElement>) {
    setDescricao(evento.target.value);
  }

  function aoEnviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    if (titulo.trim() === '') return;

    aoCriarCard({
      id: proximoId,
      colunaId: 1,
      titulo,
      descricao: descricao.trim() === '' ? undefined : descricao,
      posicao: proximoId,
      criadoEm: new Date(),
    });

    setTitulo('');
    setDescricao('');
  }

  return (
    <form onSubmit={aoEnviar}>
      <h2>Novo card</h2>
      <label>
        Título
        <input type="text" value={titulo} onChange={aoDigitarTitulo} />
      </label>
      <label>
        Descrição
        <textarea value={descricao} onChange={aoDigitarDescricao} />
      </label>
      <button type="submit">Adicionar card</button>
      <p>Pré-visualização: {titulo === '' ? 'sem título' : titulo}</p>
    </form>
  );
}
