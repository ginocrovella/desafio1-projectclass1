import React from 'react'
import Item from '../Item'
import './styles.css'

const ItemList = ({products}) => {
  return (
    <ul>
        {products?.map(producto => {
          return <Item product={producto} key={producto.id}/>
        })}
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