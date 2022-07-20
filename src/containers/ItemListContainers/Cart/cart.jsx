import React, { useContext } from 'react'
import { Shop } from '../../../context/ShopContext'
import Card from 'react-bootstrap/Card'
import { BsTrashFill } from 'react-icons/bs'
import './styles.css'
import { useNavigate } from 'react-router-dom'

const Cart = ({id}) => {

  const {cart, removeItem, cleanUp, getTotalPrice} = useContext(Shop);
  
  console.log(getTotalPrice());

  const navigate = useNavigate();

  return (
    <div className='carts'>
    {cart.length > 0 ? 
    <div>
      {cart.map(producto => {
      return (  
        <Card key={producto.id} style={{ width: '18rem'}}>
        <Card.Img variant="top" src={producto.imagen} alt={producto.nombre} /> 
        <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text> <p>Cantidad: {producto.quantity} </p></Card.Text>
        <BsTrashFill size={20} onClick={()=>removeItem(producto.id)} />
      </Card.Body>
      </Card>
      )}
      )}
      <h2 style={{color: "black"}}>Total: ${getTotalPrice()}</h2>
      <button onClick={cleanUp}>VACIAR CARRITO</button>
      </div>
      :
      <>
      <h1>Carrito vacío</h1>
      <button onClick={()=> navigate('/home')}>Volver al Home</button>
      </>
    }
    </div>
    )
  }


export default Cart;
