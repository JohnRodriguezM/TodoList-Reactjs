// no se necesita importar react
// importacion de archivos css para estilos
import '../stylesheets/Tareaform.css'
function Tareaformulario({ estadoArray,setEstadoArray,estadoInput, setEstadoInput, cambio, envio,buscarTarea }) {
  // intento de renderizar con window.localStorage
  
  return (
    <form
      className="tarea-formulario"
      onSubmit={envio}
      >
      <input
      autoComplete='off'
        className="tarea-input"
        onInput={cambio}
        onChange = {buscarTarea}
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