import React,{useState} from 'react'
import '../stylesheets/Tareaform.css'



export default function Tareaformulario(props) {
	const [input,setInput] = useState('')

	const handlerCambio = e => {
		setInput(e.target.value)
		console.log(e.target.value)
	}

	const handlerEnvio = e => {
		const tareaNueva = {
			id: '123',
			texto: input,
		}
		e.preventDefault();
		props.agregar([...props.actuales, tareaNueva])
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
