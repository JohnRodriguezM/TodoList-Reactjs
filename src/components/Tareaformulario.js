import React, { useState } from 'react'
import '../stylesheets/Tareaform.css'
// paquete para generar un id único
import { v4 as uuidv4 } from 'uuid'


export default function Tareaformulario(props) {
	const [input, setInput] = useState('')

	const handlerCambio = e => {
		setInput(e.target.value)
	}

	/* const completada = (id) => {
		const tareasActualizadas = tareas.map(tarea => {
		  if(tarea.id === id) {
			tarea.completada = !tarea.completada
		  }
		  return tarea;
		})
		setTareas(tareasActualizadas)
	  }
 */

	const handlerEnvio = e => {
		e.preventDefault();
		const tareaNueva = {
			// se genera un identificador único
			id: uuidv4(),
			texto: input,
			completada: false
		}
		// esta prop.agregar es el setestado de MajorTareas (el array)
		// props.actuales es el array del estado
		if (tareaNueva.texto.length === 0) {
			alert('agg texto')
		} else {
			props.agregar([tareaNueva, ...props.actuales])
		}
		e.target.reset()
		e.target.focus()
		return tareaNueva;
	}

	return (
		<form className="tarea-formulario"
			onSubmit={handlerEnvio}
		>
			<input
				className="tarea-input"
				type="text"
				placeholder="Escribe Una Tarea"
				name="texto"
				onChange={handlerCambio}
			/>
			<button className="tarea-boton">
				Agregar Tarea
			</button>
		</form>
	)
}
