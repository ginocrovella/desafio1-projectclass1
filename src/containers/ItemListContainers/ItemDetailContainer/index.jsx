import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../../components/ItemDetail'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import { RevolvingDot } from  'react-loader-spinner'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../../firebase/config'

//Obtener los datos de un producto especifico
const ItemDetailContainer = () => {

  // const muebles = [
  //   { id:1, categoria:"Racks", nombre:"Escandinavo H", precio: 9000, imagen: '/img/mueble 5.jpg', descripcion:"Mueble de sofisticado diseño, pensado para la comodidad de cualquier espacio de tu hogar. Tu dormitorio, comedor, living, ya no serán los mismos.."},
  //   { id:2, categoria:"Racks", nombre:"H Simple", precio: 7500, imagen: '/img/estandar 1.jpg', descripcion:"Mueble de simple diseño,  pensado para la comodidad de cualquier espacio de tu hogar. Sin puertas"},
  //   { id:3, categoria:"Racks", nombre:"H Plus", precio: 12000, imagen: '/img/rackplus1.jpg', descripcion:"Mueble diseñado especialmente para tu TV"},
  //   { id:4, categoria:"mesas de luz", nombre:"Escandinava", precio: 5500, imagen: '/img/mesadeluz-cocobolo.png', descripcion:"Diseño Nórdico simple"},
  //   { id:5, categoria:"mesas de luz", nombre:"High", precio: 9500, imagen: '/img/mesadeluzcajon.png', descripcion:"Diseño Nórdico simple"},
  //   { id:6, categoria:"mesasE de luz", nombre:"E Simple", precio: 5500, imagen: '/img/mesadeluz-negra.jpg', descripcion:"Diseño Nórdico simple"},
  //   { id:7, categoria:"cocina", nombre:"Vajillero DC", precio: 11000, imagen: '/img/vajillero1.png', descripcion:"Diseño Nórdico simple"},
  //   { id:8, categoria:"cocina", nombre:"Combo personalizado 1", precio: 15000, imagen: '/img/cocina 1.jpg', descripcion:"Diseño Nórdico simple"},
  //   { id:9, categoria:"cocina", nombre:"Combo personalizado 2", precio: 20000, imagen: '/img/cocina5.png', descripcion:"Diseño Nórdico simple"} 
  // ];
      
    const [productDetail, setProductDetail] = useState({})
    
    const {productId} = useParams();
    console.log(productId)

    const params = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        // Llamo a la referencia del documento
        const docRef = doc(db, "productos", '');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log(docSnap.id);
          console.log("Document data:", docSnap.data());
          const productDetail = {id: docSnap.id, ...docSnap.data()}
          setProductDetail(productDetail)
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
        // const response = await fetch(`/productos/${params.productId}`);
        // const data = await response.json();
        // setProductDetail(data)
      }
      catch (error) {
        console.log(error)
        }
    }
    getProducts();
  }, [productId])  

  return (
      Object.keys(productDetail).length !== 0 ?
        <ItemDetail product={productDetail}/>
        :
        <RevolvingDot color="#00BFFF" height={100} width={100}  ariaLabel='Loading' />
    )
}

export default ItemDetailContainer;




    // useEffect(() => {
    //   const getProducts = async () => {
    //     try {
    //   const docRef = doc(db, "cities", "SF");
    //   const docSnap = await getDoc(docRef);
    //   if (docSnap.exists()) {
    //     console.log("Document data:", docSnap.data());
    //     const productDetail = {id: docSnap.id, ...docSnap.data()}
    //     setProductDetail(productDetail)
    //   } else {
    //     // doc.data() will be undefined in this case
    //     console.log("No such document!");
    //   }
 
    //     } catch (error) {
    //         console.log(error)
    //         setError(error.message)
    //     }
    //   }
    //   getProducts();
    // }, [])

      // const task = new Promise((res, rej) => {
  //   setTimeout(() => {
  //     res(muebles)
  //   }, 2000);
  //     })

  // useEffect(() => {
  //   task 
  //     .then(res=> {res
  //       const docRef = doc(db, "productos", productId);
  //       const docSnap = await getDoc(docRef);
  //       if (docSnap.exists()) {
  //         console.log("Document data:", docSnap.data());
  //         const productDetail = {id: docSnap.id, ...docSnap.data()}
  //         setProductDetail(productDetail)
  //       } else {
  //         // doc.data() will be undefined in this case
  //         console.log("No such document!");
  //       }
  //     })
  //     .catch(rej=> console.log(rej))
  //     }, [])