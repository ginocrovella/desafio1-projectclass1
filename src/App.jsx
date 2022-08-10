import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopProvider from './context/ShopContext';
import MainNavigator from './navigation/MainNavigator/navigator';

function App() {

  return (
    <ShopProvider>
      <MainNavigator/>
    </ShopProvider>
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