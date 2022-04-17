import React from 'react'
import '../stylesheets/Tareaform.css'



export default function Tareaformulario(props) {
	return (
		<form className="tarea-formulario">
			<input
				className="tarea-input"
				type="text"
				placeholder="Escribe Una Tarea"
				name="texto"
			/>
			<button className="tarea-boton">
				Agregar Tarea
			</button>
		</form>
	)
}
