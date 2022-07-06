import React from 'react'
import './styles.css'
import Card from 'react-bootstrap/Card'
import ItemCount from '../ItemCount'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const ItemDetail = ({product, mueble}) => {

  const navigate = useNavigate();

  // const handleAdd = (count) => {
  //   console.log(`Se agrego al carrito ${count} productos`)
  //   }

  product.stock = 10;

  const [qtyAdded, setQtyAdded] = useState();

  const handleConfirm = (qty) => {
    setQtyAdded(qty);
  }

  const handleTerminate = () => {
    navigate('/cart')
  }

  console.log("Se agregó " + qtyAdded + " producto/s al carrito");
  
  return (
    <>
    <Card className="cardProducts">
      <Card.Img variant="top" src={product.imagen} style={{maxWidth:500, height:300}} />
      <div className='cardproductscolum'>
      <Card.Body>
        <Card.Text>
            <h1 className='productTitle'>{product.nombre}</h1>
                <p className='productDescription'>{product.descripcion}</p>
                <p className='productPrecio'> $ {product.precio}</p>
        </Card.Text>     
      </Card.Body>
      <div className='itemcount'>
      {!qtyAdded ?     // Operador ternario
        <ItemCount onConfirm={handleConfirm} initialStock={1} maxQuantity={product.stock}/>
        :
        <div className='terminate'>
        <Button onClick={handleTerminate} className='btn-dark btn-terminate'>Terminar compra</Button>
        <br />
        <Button onClick={() => navigate(-1)} className='btn-dark btn-keep'>Seguir comprando</Button>
      </div>
      } 
      </div>
      </div>
    </Card>
    </>
  )
}

export default ItemDetail
