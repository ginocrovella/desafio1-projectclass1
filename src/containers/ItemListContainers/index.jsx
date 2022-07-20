import React from "react";
import { useState } from "react";
import ItemCount from "../../components/ItemCount";
import { useEffect } from "react";
import ItemList from "../../components/ItemList";
import { useParams } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";


const ItemListContainer = ({greeting, children}) => {

  const muebles = [
    { id:1, categoria:"racks", nombre:"Rack H Puertas", precio: 9000, imagen: '/img/mueble 5.jpg'},
    { id:2, categoria:"racks", nombre:"Rack H Simple", precio: 7500, imagen: '/img/estandar 1.jpg'},
    { id:3, categoria:"racks", nombre:"Rack H Plus", precio: 12000, imagen: '/img/rackplus1.jpg'},
    { id:4, categoria:"mesas de luz", nombre:"Escandinava con Puertas", precio: 5500, imagen: '/img/mesadeluz-cocobolo.png'},
    { id:5, categoria:"mesas de luz", nombre:"High Cajones", precio: 9500, imagen: 'img/mesadeluzcajon.png'},
    { id:6, categoria:"mesas de luz", nombre:"Escandinava Simple", precio: 5500, imagen: '/img/mesadeluz-negra.jpg'},
    { id:7, categoria:"cocina", nombre:"Vajillero DC", precio: 11000, imagen: '/img/vajillero1.png'},
    { id:8, categoria:"cocina", nombre:"Combo personalizado 1", precio: 15000, imagen: '/img/cocina 1.jpg'},
    { id:9, categoria:"cocina", nombre:"Combo personalizado 2", precio: 20000, imagen: '/img/cocina5.png'} 
  ];

  const [data, setData] = useState([]);

  const [mueblesFiltrados, setMueblesFiltrados] = useState([]);

  const params = useParams();

  
  useEffect(() => {
    const getProducts = async () => {
      try {
        const q = query(collection(db, "productos"));
        const querySnapshot = await getDocs(q);
        const productos = [];

        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          productos.push({id: doc.id, ...doc.data()})
        });

        // const response = await fetch('/category/');
        // const data = await response.json()
        if (productos.length === 0) {
        setData(productos);
        setMueblesFiltrados(productos);
        }
      } catch (error) {
            console.log(error);
        }
    }
    getProducts();
  }, []);  

  useEffect( () => {
    if (params?.categoryId) {
    const mueblesFiltrados = muebles.filter(product => product.categoria === params.categoryId)
    setMueblesFiltrados(mueblesFiltrados)
    } else {
      setMueblesFiltrados(muebles)
    }
  }, [params]);

  const handleAdd = (count) => {
  console.log(`Se agregaron al carrito ${count} producto/s`)
  };
    
  return (
      <div>
          <ItemList products={mueblesFiltrados}/>
      </div>
    )
  };
  
  export default ItemListContainer;

      // const task = new Promise((res, rej) => {
      //   setTimeout(() => {
      //     res(muebles)
      //   }, 2000);
      // });
    
      // useEffect( () => {
      //   task 
      //     .then(res=> setData(res))
      //     .catch(rej=> console.log(rej))
      //   }, []);