import React from 'react'
import './styles.css'
import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

const ItemDetail = ({product}) => {
  return (
    <>
    <Card className="cardProducts">
      <Card.Img variant="top" src={product.imagen} style={{maxWidth:500, height:300}} />
      <Card.Body>
        <Card.Text>
            <h1 className='productTitle'>{product.nombre}</h1>
                <p className='productCategory'>{product.categoria}</p>
                <p className='productDescription'>{product.descripcion}</p>
        </Card.Text>
        <Button variant="primary">Ver detalles</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default ItemDetail
