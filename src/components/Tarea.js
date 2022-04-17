import React from 'react'
import '../stylesheets/Tarea.css'
import { FaTrashAlt } from 'react-icons/fa';

export default function Tarea({ texto }) {
  return (
    <div className='tarea-contenedor'>
      <ol className='tarea-texto'>
      {texto}
      </ol>
      <div>
        <FaTrashAlt className='delete-tareas' />
      </div>
    </div>
  )
}
