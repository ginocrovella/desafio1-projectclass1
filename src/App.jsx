
import './App.css';
// import Input from './components/NavBar/Input';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainers';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const nombre = "Gino"
// const edad = 24
// const trabajos = {
//   maniana: "Profe",
//   tarde: "Entreno",
//   noche: "Duerme",
// }


function App() {
  return (
  <div className='body'>
    <div className="titulo">
        <h1>MUEBLES DISEÑO CÚBICO</h1>
    </div>
      {/* <div className="app">
      <p>{nombre}</p>
      <p>Ancavil</p>
      <p>Edad: {edad}</p>
      <h1>Trabajos</h1>
      <p>{trabajos.maniana}</p>
      <p>{trabajos.tarde}</p>
      <p>{trabajos.noche}</p>
      <input placeHolder='Ingrese lo que quiera' />
  </div> */}
      <></>


  <NavBar />
    <div className='imgprincipal'>
      {/* IMG */}
      <img src="/assets/render.jpg" alt="render principal" />
      {/* <Input valorPlaceholder={"Hola"} title={" Como estas?"} /> */}
    </div>
  <ItemListContainer greeting={"Acá esta el greeting, children"}>
    <h2>Este es el item list container</h2>
  </ItemListContainer>
  </div>
  );
}

export default App;
