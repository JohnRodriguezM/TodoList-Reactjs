import React, { useState } from 'react'



import Tarea from './Tarea'
import Tareaformulario from './Tareaformulario'

//importacion componentes de css

import '../stylesheets/Listatareas.css'

export default function MajorTareas() {
  const [tareas, setTareas] = useState([
  {
    texto: 'hola',
    completada: false,
  },
  {
    texto: 'chao',
    completada: true,
  }
])

const agregarTareas = tarea => {
  console.log('tarea agregada')
  console.log(tarea)}

  return (
    <>
      <Tareaformulario
      agregar = {setTareas}
      actuales = {tareas} />
      <div className='tareas-lista'>
      {/* el lo voy a pasar como un objeto al array */}
        {
          tareas.map(function (el, i) {
            return (
              <Tarea 
              texto={el.texto}
              completada = {el.completada}
              key = {i}

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
