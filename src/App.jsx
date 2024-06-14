import MyButton from "./MyButton";

function App() {

  const clickHundler = () => {
    console.log('click');
  }

  return (
    <>
    <h1 onClick={clickHundler}>Hola Mundo</h1>
    <MyButton />
    </>
  );
}

export default App;
