import React from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = ({greeting, children}) => {

  const handleAdd = () => {
  console.log("Se agregó al carrito")
}

  return (
    <div>
      {children}
      <p>{greeting}</p>
    <ItemCount handleAdd={handleAdd} initialStock={1} />
    </div>
    
  )
};

export default ItemListContainer;





















// import React from "react";
// import { useState } from "react";
// import { CgMoveTask } from "react-icons/cg";
// import ItemCount from "./ItemCount";

// const ItemListContainer = () => {

//   const [data, setData] = useState([])
//   const productos = [
//     {id:1 , nombre: 'producto1', precio:200},
//     {id:2 , nombre: 'producto2', precio:300},
//     {id:3 , nombre: 'producto3', precio:400},
//   ]
//   const task = new Promise((res, rej) => {
//     setTimeout(() => {
//       resolve(productos)
//     }, 2000);
//   })

//   // const fetchData = async () => {
//   //   try {
//   //     let res = await task
//   //     setData(res)
//   //   } catch (error) {
//   //     console.log(error)
//   //   }
//   // }

//   useEffect(() => {
//     task
//     .then(res => setData(res))
//     .catch (error => console.log(error))
//     // fetchData()
//   },[])

//   console.log(data)
  

//   return (
//     <div>
//       {children}
//       {/* <p>{greeting}</p> */}
//     <ItemCount handleAdd={handleAdd} initialStock={1} />
//     </div>
    
//   )
// };

// export default ItemListContainer;



/* EJEMPLO CLASE 4 - CAMBIAR DE COLOR UN DIV */
/* 
const ItemListContainer = ({greeting, children}) => {

  // let color = "blue"; COMO ESTA NO FUNCIONA, VAMOS A STATE
  // AHORA VAMOS A DECLARAR ESTADOS
   const [color, setColor] = useState ("blue");

   const cambiarColor = () => {
    // color = "red"; LO SACO COMO LET COLOR, Y USO STATE
    // CADA VEZ QUE ACTUALIZO UN ESTADO SE RE-RENDERIZA UN ESTADO
    // METEMOS LOGICA
    if (color === "blue") setColor("red")
    else setColor("blue");
  }

  return (
    <div style={{backgroundColor: color}}>
        {children}
        <p>{greeting}</p>
        <p>{color}</p>
        <button onClick={cambiarColor}>
        {/* button onClick={() => cambiarColor (parametro)}>     PARA PASAR UN PARAMETRO!!!  }
        Cambiar color a red
        </button>
    </div>
  )
}

/* 
const ItemListContainer = ({greeting, children}) => {

  // let color = "blue"; COMO ESTA NO FUNCIONA, VAMOS A STATE
  // AHORA VAMOS A DECLARAR ESTADOS
   const [color, setColor] = useState ("blue");

   const cambiarColor = () => {
    // color = "red"; LO SACO COMO LET COLOR, Y USO STATE
    // CADA VEZ QUE ACTUALIZO UN ESTADO SE RE-RENDERIZA UN ESTADO
    // METEMOS LOGICA
    if (color === "blue") setColor("red")
    else setColor("blue");
  }

- EJEMPLO CICLO DE VIDA
useEffect(() => {                   
  console.log("se monto/actualizo el componente") 
}, [color])      
                  // LOS DOS CORCHETES VACIOS ACLARAN QUE ES UN  "MONTAJE" Y SE PRODUCE UNA UNICA VEZ   
                  // SI LE PONGO DEPENDENCIAS DENTRO DE LOS CORCHETES-> EJEMPLO ([color]) SE VA A "ACTUALIZAR" EN CONSOLA CADA VEZ QUE APRIETE EL BOTON DE CAMBIAR DE COLOR.


  return (
    <div style={{backgroundColor: color}}>
        {children}
        <p>{greeting}</p>
        <p>{color}</p>
        <button onClick={cambiarColor}>
        {/* button onClick={() => cambiarColor (parametro)}>     PARA PASAR UN PARAMETRO!!!  }
        Cambiar color a red
        </button>
    </div>
  )
}


/* EJEMPLO 1 CLASE 4 - ACTIVIDAD - CREAR UN CLICK CON CONTADOR
 export default function App() {
  const [count, setCount] = useState(0);

  const stock = 10;

  const handleClick = () => {
    if {count < stock{
    setCount(count + 1);
    }
  };
  }
  
    return (
      <div>
        <p>Count: {count}</p>
  
        <button onClick={handleClick}>Count</button>
      </div>
    );

    */ 

/* EJEMPLO 2 - ACTIVIDAD - CREAR UN CONTADOR DE CLICK + FECHA + STOCK
export default function App() {
  const [contador, setContador] = useState({clicks: 0, fecha: ''});

  const sumaContador = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState('');

    const countClick = () ={
      setCount{count + 1};
      setDate(new Date().toLocaleString());
    }
  };

  return (
    <div>
      <p>Clicks: {count}</p>
      <p>Last click date: {date}</p>
        <button onClick={countClick}> Click </button>
        
       
      </div>
  );
  }


EJEMPLOS USEEFFECT

 MONTAR-ACTUALIZAR COMPONENTE
  useEffect(() => {
    console.log("Se montó/actualizó un componente")
  }, []);

 DESMONTAR COMPONENTE
  useEffect(() => {
    return () => {
      console.log("Se está desmontando el ItemListContainer")
    }
  }, []);

 EJECUTAR SIEMPRE QUE ACTUALIZO PAGINA - NO SE USA
 useEffect(() => {
   console.log("Se ejecuta cada vez que renderizo el estado")
 }); 


 FUNCION DE LIMPIEZA            CADA RENDER LIMPIA MIS ACCIONES
  useEffect(() => {
    accion; 
    return cleanup-fn
  })
*/