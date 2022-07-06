import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainers';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './containers/ItemListContainers/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/NotFound'
import Cart from './containers/ItemListContainers/Cart/cart'
import Home from './components/Home/Home';

function App() {

  

  return (
      <BrowserRouter>
    <div className='body'>
      <div className="titulo">
          <h1>MUEBLES DISEÑO CÚBICO</h1>
      </div>
      <NavBar />
    
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/category/:categoryId' element={<ItemListContainer/>} />
      <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
      <Route path='/cart' element={<Cart />} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
    </div>
    </BrowserRouter>
    
    
  );
}

export default App;


//   const [containerVisible, setContainerVisible] = useState(true)    
  
//   const onHideContainer = () => {
//     setContainerVisible(false)
//   }         LO SACO PARA LIMPIAR EL CODIGO

//   {containerVisible ?    CONTAINER VISIBLE ?
//   :
//   null                CIERRO CONTAINER VISIBLE









// EJEMPLOS DE CLASE

// import Input from './components/NavBar/Input';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const nombre = "Gino"                      EJEMPLO CLASE 2
// const edad = 24
// const trabajos = {
//   maniana: "Profe",
//   tarde: "Entreno",
//   noche: "Duerme",
// }

// <Input valorPlaceholder={"Hola"} title={" Como estas?"} />

//  <div className="app">                       EJEMPLO CLASE 2 
//       <p>{nombre}</p>
//       <p>Ancavil</p>
//       <p>Edad: {edad}</p>
//       <h1>Trabajos</h1>
//       <p>{trabajos.maniana}</p>
//       <p>{trabajos.tarde}</p>
//       <p>{trabajos.noche}</p>
//       <input placeHolder='Ingrese lo que quiera' />
//   </div>


//  DESMONTAR ITEMLISTCONTAINER 
//    <button onClick={onHideContainer}>Desmontar ItemListContainer</button>  