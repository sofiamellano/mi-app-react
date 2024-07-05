function Formulario ({onSubmitHandler}) {

    return(
        <form onSubmit={onSubmitHandler} className="form">
            <input text='text' placeholder="Escribe tu tarea"/>
            <button>Crear</button>
        </form>
    );
}
export default Formulario;

//tarea: investugar el evento, prop, metodos y traten de ubicar lo que escribimos en el imput en la consola. como lo extraemos. 
//tip: dentro del form los input se identifican a traves de "name".