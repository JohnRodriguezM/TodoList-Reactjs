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

// se realiza importacion de dependencias
import { v4 as uuidv4 } from 'uuid';


function App() {
  // luego puedo pasar los estado a los componentes para usarlos directamente allí
  const [input, setInput] = useState('')
  const [array, setArray] = useState([])
  // funciones para el componente del formulario
  const cambio = e => {
    let valorInput = e.target.value;
    setInput(valorInput)
  }

  const envio = e => {
    e.preventDefault()
    const nuevoElemento = {
      texto: input, id: uuidv4(), completed: false
    }
    /* console.log(nuevoElemento) */
    nuevoElemento.texto.length > 0 ? setArray([...array, nuevoElemento]) : alert('agg texto')
    // con la declaracion del setTimeout permito que el dato alcance a ingresar al valor del estado input pero luego limpio el valor del input para que los elementos puedan ser filtrados de manera adecuada
    setTimeout(() => setInput(''),0)
    e.target.reset()
    e.target.focus()
    return nuevoElemento;
  }
  // funcion para eliminar todo
  const eliminar = id => {
    const filtro = array.filter(el => el.id !== id)
    setArray(filtro)
  }
  // funcion para marcar como completado el todo
  const marcarComplete = id => {
    const completado = array.map(el => {
      if (el.id === id) {
        el.completed = !el.completed
      }
      return el;
    })
    setArray(completado)
  }

// todos completado

const tareasCompletadas = array.filter(el => el.completed).length;
const totalTareas = array.length



  let todosSearch = []

  if (!input.length === 1) {
    todosSearch = array;
    console.log(todosSearch)
  } else {
    todosSearch = array.filter(el => {
      const texto = el.texto.toLowerCase()
      console.log(texto)
      const textoBuscado = input.toLowerCase()
      console.log(textoBuscado)

      return texto.includes(textoBuscado)
    })
  }





  return (
    <main className="App">
      <div className='tareas-lista-principal'>
        <h1>Lista de tareas</h1>
        <Tareaformulario
          cambio={cambio}
          envio={envio}
          estado={input}
          setEstado={setInput}

        />
        <h2>haz completado {tareasCompletadas} de {totalTareas}</h2>
        {
          input.length === 0 ? 
            array.map((el, i) => {
            return (
              <Tarea
                estado={array}
                setEstado={setArray}
                texto={el.texto}
                id={el.id}
                completed={el.completed}
                key={el.id}
                eliminarTarea={eliminar}
                tareaCompleta={marcarComplete}
              />
            )
          })
          : todosSearch.map((el, i) => {
            return (
              <Tarea
                estado={array}
                setEstado={setArray}
                texto={el.texto}
                id={el.id}
                completed={el.completed}
                key={el.id}
                eliminarTarea={eliminar}
                tareaCompleta={marcarComplete}
              />
            )
          })

          }

      </div>
    </main>
  );
}

export default App;
