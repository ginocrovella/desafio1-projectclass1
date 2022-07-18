import React, { useContext } from 'react'
import { Shop } from '../../context/ShopContext'
import Item from '../Item'
import './styles.css'

const ItemList = ({products}) => {

  // const {setEstadoA} = useContext(Shop);

  // const handleChangeState = () => {
  //   setEstadoA("Otro valor")
  // }

  return (
    <ul>
        {products?.map(producto => {
          return <Item product={producto} key={producto.id}/>
        })}
        {/* <button onClick={handleChangeState}>Cambio estado A</button> */}
        {/* {info?.map(prod => <Item key={prod.id} prod={prod}/>)}  OTRA VARIANTE */} 
    </ul>
  )
}

export default ItemList












// const ItemList = ({products}) => {
//   return (
//     <ul>
//         {products.map(producto => {
//             return <Item product={producto} key={producto.id}/>
//         })}
//     </ul>
//   )
// }

// export default ItemList