import React, { useState } from 'react'



import Tarea from './Tarea'
import Tareaformulario from './Tareaformulario'

//importacion componentes de css
import { v4 as uuidv4 } from  'uuid'

import '../stylesheets/Listatareas.css'

export default function MajorTareas() {
  const [tareas, setTareas] = useState([])

const agregarTareas = tarea => {
  setTareas(tarea)  
}

const eliminarTarea = id => {
  const tareasActualizadas = tareas.filter(el => el.id !== id)
  setTareas(tareasActualizadas)
  console.log(tareasActualizadas)
}

const completada = (id) => {
  const tareasActualizadas = tareas.map(tarea => {
    if(tarea.id === id) {
      tarea.completada = !tarea.completada
    }
    return tarea;
  })
  setTareas(tareasActualizadas)
}




  return (
    <>
      <Tareaformulario
      agregar = {agregarTareas}
      actuales = {tareas}
      filtrarTarea = {''} />
      <div className='tareas-lista'>
      {/* el lo voy a pasar como un objeto al array */}
        {
          tareas.map(function (el, i) {
            return (
              <Tarea 
              texto={el.texto}
              completada = {el.completada}
              key = {el.id}
              id = {el.id}
              completarTarea = {completada}
              eliminarTarea = {eliminarTarea}
              />

            )
          })
        }


      </div>
      {/* <Tarea texto = 'repasar t'
				completada = {true}
			/>
			<Tarea texto = 'repasar t'
				completada = {false}
			/> */}
    </>
  )
}
