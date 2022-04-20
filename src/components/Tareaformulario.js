// no se necesita importar react

function Tareaformulario({ estado, setEstado,cambio,envio }) {
    return (
        <form
        onSubmit={envio}>
            <input type="text" 
                onChange={cambio}
            />
            <input type='submit' value='Agregar tarea' />
        </form>
    )
}

export default Tareaformulario