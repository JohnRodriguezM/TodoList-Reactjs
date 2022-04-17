import React from 'react'
import '../stylesheets/Tarea.css'
import { FaTrashAlt } from 'react-icons/fa';

export default function Tarea({ texto, completada }) {
  return (
    <div className={completada ? ' tarea-contenedor  completada' : 'tarea-contenedor' }>
      <ol className='tarea-texto'>
      {texto}
      </ol>
      <div>
        <FaTrashAlt className='delete-tareas' />
      </div>
    </div>
  )
}
