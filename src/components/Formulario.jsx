function Formulario ({onSubmitHandler}) {

    return(
        <form onSubmit={onSubmitHandler} className="form">
            <input text='text' placeholder="Escribe tu tarea"/>
            <button>Crear</button>
        </form>
    );
}
export default Formulario;

