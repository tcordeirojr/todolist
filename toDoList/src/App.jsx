import './App.css'

import React,{useState} from 'react'

function App() {
  const [texto, setTexto] = useState('');
  const [tarefas, setTarefas] = useState([]);
  
  function adicionarTarefa() {
    if (texto.trim() === '') return;

    const novaTarefa = {
      id: Date.now(),
      texto: texto,
      concluida: false
    };

    setTarefas([...tarefas, novaTarefa]);
    setTexto('');
  }
  function marcarComoFeita(id) {
    const novaLista = tarefas.map((tarefa) => {
      tarefa.id === id ? {...tarefa, feita: !tarefa.feita} : tarefa
    });
    setTarefas(novaLista);
  }
  function apagarTarefa(id) {
    const novaLista = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novaLista);
  }



  return (
    <div style={{maxWidth: '400px', margin: '0 auto', padding: '20px', textAlign: 'center', backgroundColor: '#f0f0f0', borderRadius: '8px'}}>
      <h1>Minhas Tarefas</h1>
      <input value={texto} onChange={(e)=> setTexto(e.target.value)} placeholder='O que você quer fazer?'></input>
      <button onClick={adicionarTarefa}>Adicionar</button>
      <ul style={{listStyle: 'none', padding: 0}}>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <span onClick={()=> marcarComoFeita(tarefa.id)} 
                  style={{textDecoration: tarefa.feita ? 'line-through' : 'none', cursor:"pointer"}}>{tarefa.texto}
                  </span>
                  <button style={{}} onClick={() => apagarTarefa(tarefa.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
