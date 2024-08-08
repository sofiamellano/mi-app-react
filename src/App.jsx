import React, { useState, useEffect } from 'react';
import Container from './components/Container';
import Titulo from './components/Titulo'; 
import Formulario from './components/Formulario';

function App() {

  console.log('Componente App ejecutado');

  const [tasks, setTasks] = useState([]); //estado arranque con el valor que esta en localstorage

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(!event.target.elements.taskName.value) return;

    //reemplazar el string del value por un objeto que contenga el string y el estado finalizado.
    setTasks([...tasks, event.target.elements.taskName.value]);
  }

  useEffect( () => {
    console.log('useEffect ejecutado', [tasks]);
    //Tarea: Agregar el guardado en el localStorage, actualizar tasks en localstorage
  }, [tasks] ); //array = dependencias // dentro del useeffect no puede ir una dependencia del mismo

  return (
    <>
    <Container>
      <Titulo value="ToDo - App" />
      <Formulario onSubmitHandler={onSubmitHandler}/>
      {JSON.stringify(tasks)};
    </Container>
    </>
  ); 
}
export default App;
