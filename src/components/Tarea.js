import React from 'react'
import '../stylesheets/Tarea.css'
import { FaTrashAlt } from 'react-icons/fa';

// el texto es el valor del elemento
// el prop completada indica si ya fue completada
// el prop completarTarea es una funcion que me permite marcar la tarea como completada
// el prop eliminarTarea es una funcion que me permite elimar la tarea
export default function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div 
    // le paso el id para saber que tarea es que voy a marcar como completada
    onClick={() => completarTarea(id)}
    className={completada ? ' tarea-contenedor  completada' : 'tarea-contenedor' }>
      <ol className='tarea-texto'>
      {texto}
      </ol>
      <div>
        <FaTrashAlt
         // le paso el id para saber que tarea es que voy a eliminar
        onClick = {()=> eliminarTarea(id)}
        className='delete-tareas' />
      </div>
    </div>
  )
}
