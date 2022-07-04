import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './styles.css'
import ItemCount from '../../containers/ItemListContainers/ItemCount'

const Item = ({product}) => {
    const {nombre, precio, imagen} = product
    const handleAdd = (count) => {
        console.log(`Se agrego al carrito ${count} productos`)
        }
    return (
        <Card className={"cards"}>
            <Card.Img className={"images"} variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    Precio:{precio}
                </Card.Text>
            </Card.Body>
            <ItemCount handleAdd={handleAdd} initialStock={1}/>
        </Card>
    )
}

export default Item








// EJEMPLO CLASE
// const Item = ({product}) => {
//   return (
//     <li>{product.title}</li>
//   )
// }

// export default Item