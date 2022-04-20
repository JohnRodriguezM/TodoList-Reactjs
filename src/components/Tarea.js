// no es necesario importar react

// se importa dependencia para iconos
import { AiFillDelete } from "react-icons/ai";


function Tarea({estado,setEstado,texto,id,completed}) {
  return (
      <>
      <div className= {completed? 'tarea-contenedor completada' : 'tarea-contenedor'}>
    <li className = 'tarea-texto'>{texto}</li>

        <AiFillDelete className = 'delete-tareas'/>
    
      </div>
   
      </>
  )
}

export default Tarea