import React, { useRef } from 'react';



function Formulario ({onSubmitHandler}) {
    const taskInput = useRef();

    const onSubmitHandlerEvent = (event) => {
        onSubmitHandler(event);
        taskInput.current.value = '';
    }

    return(
        <Formulario onSubmit={onSubmitHandlerEvent} className="form">
            <input ref={taskInput} name="taskName" text='text' placeholder="Escribe tu tarea"/>
            <button>Crear</button>
        </Formulario>
    );
}



export default Formulario;