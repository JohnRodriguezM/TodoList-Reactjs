// importacion de componentes para trabajar


import MajorTareas from './components/MajorTareas'

import './App.css';

function App() {
  return (
    <main className="App">
      <div className='tareas-lista-principal'>
        <h1>Lista de tareas</h1>
        <MajorTareas/>
      </div>
    </main>
  );
}

export default App;
