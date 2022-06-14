
import './App.css';
import NavBar from './components/NavBar.jsx';
import Scripts from './components/scripts';

// const nombre = "Gino"
// const edad = 24
// const trabajos = {
//   maniana: "Profe",
//   tarde: "Entreno",
//   noche: "Duerme",
// }


function App() {
  return (
  <div className='container'>
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
    <><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css"></link><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link></>
    
  <NavBar />
  <Scripts />
  </div>
  );
}

export default App;
