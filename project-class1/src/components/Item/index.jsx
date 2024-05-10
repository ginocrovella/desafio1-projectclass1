import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './styles.css'
import { useNavigate } from 'react-router-dom'

const Item = ({product}) => {

    const navigate = useNavigate();

    const handleDetail = () => {
        navigate(`/detail/${product.id}`)
    };

    const {nombre, imagen} = product

    return (
        <div>
            <Card className={"cards"}>
                <Card.Img className='itemimages' variant="top" src={imagen}  />
                <Card.Body className='cardbody'>
                    <Card.Title className='cardtitle'>{nombre}</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <div onClick={handleDetail}>
                        <Button variant="primary" className='btn-dark'>Ver detalles</Button>  
                    </div> 
                </Card.Body>  
            </Card>
        </div>
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