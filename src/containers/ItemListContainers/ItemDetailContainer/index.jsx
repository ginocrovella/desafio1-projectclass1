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
    const [productDetail, setProductDetail] = useState({})
    
    const {productId} = useParams();
    console.log(productId)

    const params = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        // Llamo a la referencia del documento
        const docRef = doc(db, "productos", productId);
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
      }
      catch (error) {
        // SWEET ALERT ERROR
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