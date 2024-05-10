import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemList from "../../components/ItemList";
import { useParams } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { RevolvingDot } from "react-loader-spinner";

const ItemListContainer = ({greeting, children}) => {
  const [productos, setProductos] = useState([]);

  const {categoryId} = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const q = query(collection(db, "productos"));

        const querySnapshot = await getDocs(q);

        const muebles = [];
    
        querySnapshot.forEach((doc) => {
          muebles.push({id: doc.id, ...doc.data() })
        });
        if (!muebles.length) return setProductos([])
          if (categoryId) {
            setProductos(muebles.filter(item=>item.categoria.toLowerCase() === categoryId));
          } else {
            setProductos(muebles)
          }
      } catch (error) {
      // agregar un sweet alert de error
        }
    }
    getProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);  
      
  return (
      <div>
        {
          productos.length ?
          <ItemList products={productos}/>
          :
          <RevolvingDot color="#00BFFF" height={100} width={100}  ariaLabel='Loading' />
        }
      </div>
    )
  };
  
  export default ItemListContainer;

