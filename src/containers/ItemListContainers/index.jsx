import React from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import { useEffect } from "react";
import ItemList from "../../components/ItemList";


const ItemListContainer = ({greeting, children}) => {

  const muebles = [
    { id:1, categoria:"racks", nombre:"Rack H Puertas", precio: 9000, imagen: '/img/mueble 5.jpg'},
    { id:2, categoria:"racks", nombre:"Rack H Simple", precio: 7500, imagen: '/img/estandar 1.jpg'},
    { id:3, categoria:"racks", nombre:"Rack H Plus", precio: 12000, imagen: '/img/rackplus1.jpg'},
    // { id:4, categoria:"mesas de luz", nombre:"Escandinava con Puertas", precio: 5500, imagen: '/mesadeluz-cocobolo.png'},
    // { id:5, categoria:"mesas de luz", nombre:"High Cajones", precio: 9500, imagen: '/mesadeluz-cajon.png'},
    // { id:6, categoria:"mesas de luz", nombre:"Escandinava Simple", precio: 5500, imagen: '/mesadeluz-negra.jpg'},
    // { id:7, categoria:"cocina", nombre:"Vajillero DC", precio: 11000, imagen: '/vajillero1.png'},
    // { id:8, categoria:"cocina", nombre:"Combo personalizado 1", precio: 15000, imagen: '/cocina 4.jpg'},
    // { id:9, categoria:"cocina", nombre:"Combo personalizado 2", precio: 20000, imagen: '/cocina5.png'} 
  ]

  const [data, setData] = useState([]);
  
  const task = new Promise((res, rej) => {
    setTimeout(() => {
      res(muebles)
    }, 2000);
  })

  useEffect(() => {
    task 
      .then(res=> setData(res))
      .catch(rej=> console.log(rej))
  }, [])

  const handleAdd = (count) => {
  console.log(`Se agrego al carrito ${count} productos`)
}
  console.log(data);
  return (
    <div>
      {children}
      {/* <p>{greeting}</p> */}
    <ItemList products={data}/>
    <ItemCount handleAdd={handleAdd} initialStock={1}/>
    </div>
    
  )
};

export default ItemListContainer;



// EJEMPLO DE LA CLASE 6 ASYNC - AWAIT - FETCH
// OBTENGO TODOS LOS PRODUCTOS

// const ItemListContainer = ({greeting}) => {

//   const [productos, setProductos] = useState(null)

//   useEffect(() => {
//     const getProductos = async() => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');

//         const data = await response.json();
//         console.log(data);
//         setProductos(data);
//       } catch (error) {
//         console.log("Hubo un error: ");
//         console.log(error);
//       }
//     }
//     getProductos()
//   }, [])      Si saco los corchetes se renderiza constantemente!!!
//   console.log(productos);

//   return (
//     <div>
//       <p>{greeting}</p>
//       <ItemList products={productos}/>
//     </div>
//   )
// };

// export default ItemListContainer;


// OBTENGO PRODUCTOS INDIVIDUALES 
//   useEffect(() => {
//     const getProductos = async() => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products/1');

// ADD NEW PRODUCT 
// useEffect(() => {
//     const getProductos = async() => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products' , {
        //     method: "POST",
        //     body: JSON.stringify(
        //         {
        //             title: 'Producto de Coder',
        //             price: 13.5,
        //             description: 'lorem ipsum set',
        //             image: 'https://i.pravatar.cc',
        //             category: 'electronic'
        //         }
        //     )
        // })


// ACTIVIDAD CLASE 6 CON APIs

//   const PokemonContainer = () => {
//     const [products, setProducts] = useState(null);
//   }

//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//       const response = await fetch(
//         'https://fakestoreapi.com/products?limit=10'
//         );
//         const data = await response.json();
//         setProducts(data);
//       } catch {}
//     };
//     getProducts();
//   }, []);

//   return (
//     <div>
//       (products &&
//         products.map((product) => {
//           return <p key={product.id}>{product.title}</p>;
//         })
//     </div>
//       );
//     };

// export default PokemonsContainer;
      



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
//     setTimeOut(() => {
//       res(productos)
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