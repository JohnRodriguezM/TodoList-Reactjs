// importacion de componentes para trabajar

import { useState } from 'react';

// se importan los componentes de react
import Tarea from './components/Tarea'
import Tareaformulario from './components/Tareaformulario';

// se importan los archivos css para los estílos
import './App.css';
import './stylesheets/Listatareas.css'
import './stylesheets/Tarea.css'

// se importan helpers para estilos de css
/* import {ol} from './stylesheets/helpersEstilos' */

function App() {
  // luego puedo pasar los estado a los componentes para usarlos directamente allí
  const [input,setInput] = useState('')
  const [array,setArray] = useState([])
  // funciones para el componente del formulario

  const cambio = e => {
    let valorInput = e.target.value;
    setInput(valorInput)
  }

  const envio = e => {
    e.preventDefault()
    const nuevoElemento = {
      texto: input,
      id: '123',
      completed: false,
    }
    setArray([...array,nuevoElemento])
    e.target.reset()
    e.target.focus()
    return nuevoElemento
  }


  return (
    <main className="App">
      <div className='tareas-lista-principal'>
        <h1>Lista de tareas</h1>
        <Tareaformulario
          cambio = {cambio}
          envio = {envio}
          estado = {input}
          setEstado = {setInput}
        />
        {
          array.map((el,i) => {
            return(
              <Tarea
                  texto = {el.texto}
                  id = {el.id}
                  completed = {el.completed}
              />
            )
          })
        }

      </div>
    </main>
  );
}

export default App;
