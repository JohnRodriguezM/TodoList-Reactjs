import React,{useState} from 'react'
import '../stylesheets/Tareaform.css'

// paquete para generar un id único
import { v4 as uuidv4 } from  'uuid'


export default function Tareaformulario(props) {
	const [input,setInput] = useState('')

	const handlerCambio = e => {
		setInput(e.target.value)
		console.log(e.target.value)
	}

	const handlerEnvio = e => {
		const tareaNueva = {
			// se genera un identificador único
			id: uuidv4(),
			texto: input,
			completada: false
		}
		e.preventDefault();
		// esta prop.agregar es el setestado de MajorTareas (el array)
		// props.actuales es el array del estado
		props.agregar([...props.actuales, tareaNueva])
		console.log(tareaNueva)
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
