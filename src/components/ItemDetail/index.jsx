import React from 'react'

const ItemDetail = ({product}) => {
  return (
    <div>
        <h1>{product.nombre}</h1>
        <img src={product.imagen} style={{maxWidth:500, maxHeight:500}}/>
        <p>{product.categoria}</p>
    </div>
  )
}

export default ItemDetail