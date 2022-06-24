import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainers';
import { useState } from 'react';


function App() {
  const [containerVisible, setContainerVisible] = useState(true)
  
  const onHideContainer = () => {
    setContainerVisible(false)
  }
  return (
  <div className='body'>
    <div className="titulo">
        <h1>MUEBLES DISEÑO CÚBICO</h1>
    </div>

  <NavBar />

    <div className='imgprincipal'>
      <img src="/assets/render.jpg" alt="render principal" />
    </div>
    {containerVisible ?    // CONTAINER VISIBLE ?
      <ItemListContainer greeting={""}>    
        <div class="boton-registro">
        <div id="registrar">
          <button class="btn btn-dark btn-registration" type="submit" id="btnRegistrar">Clickeá y registrate</button>
        </div>
        </div>
      </ItemListContainer>
      :
      null                 // CIERRO CONTAINER VISIBLE
  }
          
  </div>
  );
}

export default App;













 {/*  EJEMPLOS DE CLASE

// import Input from './components/NavBar/Input';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const nombre = "Gino"                      EJEMPLO CLASE 2
// const edad = 24
// const trabajos = {
//   maniana: "Profe",
//   tarde: "Entreno",
//   noche: "Duerme",
// }

<Input valorPlaceholder={"Hola"} title={" Como estas?"} />

 <div className="app">                       EJEMPLO CLASE 2 
      <p>{nombre}</p>
      <p>Ancavil</p>
      <p>Edad: {edad}</p>
      <h1>Trabajos</h1>
      <p>{trabajos.maniana}</p>
      <p>{trabajos.tarde}</p>
      <p>{trabajos.noche}</p>
      <input placeHolder='Ingrese lo que quiera' />
  </div>


 DESMONTAR ITEMLISTCONTAINER 
   <button onClick={onHideContainer}>Desmontar ItemListContainer</button> */}