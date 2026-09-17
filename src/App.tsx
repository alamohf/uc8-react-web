function Cabecalho() {
  return (
    <header>
      <h1>Kanban Desktop</h1>
      <p>Gerencia suas tarefas de forma eficiente</p>
    </header>
  );
}


function Rodape() {
  return (
    <footer>
      <p>&copy; 2023 Kanban Desktop. Todos os direitos reservados.</p>
    </footer>
  );
}

export default function App() {
  return (
    <main>
      <Cabecalho />
      <Rodape />
    </main>
  );
}
