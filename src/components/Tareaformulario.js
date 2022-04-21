// no se necesita importar react
// importacion de archivos css para estilos
import '../stylesheets/Tareaform.css'
function Tareaformulario({ estado, setEstado, cambio, envio }) {
  return (
    <form
      className="tarea-formulario"
      onSubmit={envio}>
      <input
        className="tarea-input"
        onChange={cambio}
        type="text"
        name = 'texto'
      />
      <input 
      className='tarea-boton' 
      type='submit' 
      value='Agregar tarea' 
      />
    </form>
  )
}

export default Tareaformulario