// importacion de componentes para trabajar

import { useState,useEffect } from 'react';

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
  const [array, setArray] = useState(
     JSON.parse(localStorage.getItem('array')) || []
  )

  // se realiza la implementation del localStorage, la funcion toma dos paramaetros 
  // el elemento es el array
  // valor es el equivalente al nuevoElemento(obj que se agrega al array) creado dentro de la funcion envio
  const setLocalStorage = (elemento,valor) => {
    try{
      // modifico el array con el nuevo elemento, añadiendoselo
      valor.texto.length > 0 ? setArray([...elemento,valor]) : alert('agg txt')
      // envio el array al localStorage
      window.localStorage.setItem('array', JSON.stringify([...elemento,valor]))
    }
    catch(err){
      console.error(err)
    }
  }




  // funciones para el componente del formulario
  const cambio = e => {
    // recibo el valor del input
    let valorInput = e.target.value;
    // se modifica el estado del input, el cual se va a usar para ser enviado como texto al array que se mapea
    setInput(valorInput)
  }

  const envio = e => {
    e.preventDefault()
    const nuevoElemento = {
      texto: input, id: uuidv4(), completed: false
    }
    setLocalStorage(array, nuevoElemento)
    /* console.log(nuevoElemento) */


    // YA CREADO EL LOCAL STORAGE SE HACE INNECSARIO LLAMAR A SETARRAY DE NUEVO
   /*  nuevoElemento.texto.length > 0 ? setArray([...array, nuevoElemento]) : alert('agg texto') */
    // con la declaracion del setTimeout permito que el dato alcance a ingresar al valor del estado input pero luego limpio el valor del input para que los elementos puedan ser filtrados de manera adecuada
    setTimeout(() => setInput(''), 100)
    e.target.reset()
    e.target.focus()
    return nuevoElemento;
  }
  // funcion para eliminar todo
  const eliminar = id => {
    // si el.id es diferente del id del elemento al que le hago click, filtrame esos elementos y siguelos dejando como no completados
    const filtro = array.filter(el => el.id !== id)
    setArray(filtro)
    // aqui vuelvo a hacer uso del localStorage para que se elimine el elemento, y en el array que traiga al refrescar la página ya esté actualizado y no solo en el momento que tengo sin rfrescar la pagina, PARA ESA FUNCION HAGO USO DEL SETARRAY(FILTRO)
    window.localStorage.setItem('array', JSON.stringify(filtro))
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
       // aqui vuelvo a hacer uso del localStorage para que se filtren los elementos completados, y en el array que traiga al refrescar la página ya esté actualizado y no solo en el momento que tengo sin rfrescar la pagina, PARA ESA FUNCION HAGO USO DEL SETARRAY(COMPLEATADO)
    window.localStorage.setItem('array', JSON.stringify(completado))
  }

  // todos completado

  const tareasCompletadas = array.filter(el => el.completed).length;
  const totalTareas = array.length
  
  // se crea un arreglo vacio para almacenar los elementos que sean filtrados,
  //funcion apra filtrar las tareas en la busqueda
  
 /*  let todosSearch = []
  const buscarTarea = () => {
    if (!input.length === 0) {
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
  } */
  return (
    <main className="App">
      <div className='tareas-lista-principal'>
      {/* se desiste del buscador de tareas momentaneamente, (buscarTarea = {buscarTarea}) */}
        <h1>Lista de tareas</h1>
        <Tareaformulario
          cambio={cambio}
          envio={envio}
          estadoInput={input}
          setEstadoInput={setInput}
          estadoArray = {array}
          setEstadoArray={setArray}

        />
        <h2>haz completado {tareasCompletadas} de {totalTareas}</h2>
       {/*  si el valor de el estado input, que en realidad es el e.targer.value es 0 se filtra se mapea el estado original */}
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
            
            : array.map((el, i) => {
               // eslint-disable-next-line no-lone-blocks
               {/* en vez de array.map deberia ir todosSearch pero se reemplaza de manerea temporal */}
               // eslint-disable-next-line no-lone-blocks
               {/*  si el valor de el estado input, que en realidad es el e.targer.value es > 0 se mapea el array "copiado", para buscar tarea en el onchange del input*/}
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
