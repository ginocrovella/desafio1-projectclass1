import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from '../../../components/ItemDetail'

//Obtener los datos de un producto especifico
const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})
    const [error, setError] = useState(" ")

    // useEffect(() => {
    //   const getProducts = async () => {
    //     try {
    //         const response = await fetch('https://fakestoreapi.com/products/3')
    //         const data = await response.json();
    //         setProductDetail(data);
    //     } catch (error) {
    //         console.log(error)
    //         setError(error.message)
    //     }
    //   }
    //   getProducts();
    // }, [])

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
          .then(res=> setProductDetail(res.find(item=>item.id === 1)))
          .catch(rej=> console.log(rej))
      }, [])

    return (
        <ItemDetail product={productDetail}/>
    )

}

export default ItemDetailContainer