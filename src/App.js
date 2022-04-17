// importacion de componentes para trabajar
import Tarea from './components/Tarea'


import './App.css';

function App() {
  return (
    <main className="App">
      <div className='tareas-lista-principal'>
        <h1>Lista de tareas</h1>
        <Tarea texto = 'Aprender react'/>
      </div>
    </main>
  );
}

export default App;
