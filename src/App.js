// importacion de componentes para trabajar
import Tarea from './components/Tarea'
import Tareaformulario from './components/Tareaformulario';


import './App.css';

function App() {
  return (
    <main className="App">
      <div className='tareas-lista-principal'>
        <h1>Lista de tareas</h1>
        <Tareaformulario/>
        <Tarea texto = 'Aprender react'
          completada = {true}
        />
        <Tarea texto = 'hacer'/>
      </div>
    </main>
  );
}

export default App;
