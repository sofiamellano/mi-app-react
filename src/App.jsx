import React, { useState } from 'react';
import Container from './components/Container';
import Titulo from './components/Titulo'; 
import Formulario from './components/Formulario';

function App() {

  const [tasks, setTasks] = useState([]);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(!event.target.elements.taskName.value) return;
    setTasks([...tasks, event.target.elements.taskName.value]);
  }

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
