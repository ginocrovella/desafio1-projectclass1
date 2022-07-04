import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainers';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './containers/ItemListContainers/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
  // <BrowserRouter>
    <div className='body'>
      <div className="titulo">
          <h1>MUEBLES DISEÑO CÚBICO</h1>
      </div>

    <NavBar />
    {/* <Routes>
      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/category/:categoryId' element={<ItemListContainer/>} /> 
      <Route path='/detail/:productId' element={<ItemDetailContainer/>}></Route>
      <Route path='*' element={<NotFound/>} />
    </Routes> */}
    <div className='imgprincipal'>
        <img src="/assets/render.jpg" alt="render principal" />
    </div>
      
     
    <div className="boton-registro">
      <div id="registrar">
        <button className="btn btn-dark btn-registration" type="submit" id="btnRegistrar">Clickeá y registrate</button>
      </div>
    </div>

        <ItemDetailContainer/>  
    </div>
  // </BrowserRouter>
  );
}

export default App;


  // const [containerVisible, setContainerVisible] = useState(true)    
  
  // const onHideContainer = () => {
  //   setContainerVisible(false)
  // }         LO SACO PARA LIMPIAR EL CODIGO

  // {containerVisible ?    CONTAINER VISIBLE ?
  // :
  // null                CIERRO CONTAINER VISIBLE









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