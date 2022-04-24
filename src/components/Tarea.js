// no es necesario importar react

// se importa dependencia para iconos -- react-icons
import { FaTimes } from "react-icons/fa"



function Tarea({ estado, setEstado, texto, id, completed, tareaCompleta, eliminarTarea }) {
  return (
    <div
      className={completed ? 'tarea-contenedor completada' : 'tarea-contenedor'}
      onClickCapture = {()=> tareaCompleta(id)}
      >
      <li className='tarea-texto'>{texto}</li>

      <FaTimes 
      className='delete-tareas'
      onClick = {()=> eliminarTarea(id)} />

    </div>
  )
}

export default Tarea