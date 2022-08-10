import React, { useContext } from 'react'
import { Shop } from '../../../context/ShopContext'
import Card from 'react-bootstrap/Card'
import { BsTrashFill } from 'react-icons/bs'
import './styles.css'
import { useNavigate } from 'react-router-dom'
import ordenGenerada from '../../../utils/generarOrden'
import { Button } from 'react-bootstrap'
import guardarOrden from '../../../utils/guardarOrden'
import Swal from 'sweetalert2'

const Cart = ({id}) => {

  const {cart, removeItem, cleanUp, getTotalPrice} = useContext(Shop);

  const navigate = useNavigate();
  const confirmarOrden = async () => {
    const orden = ordenGenerada(`${nombre}`, `${email}`, cart);
    guardarOrden(cart, orden)
  }

  const registro = () => {
    Swal.fire({
      title: 'Registrate y estaremos en contacto!',
      html: `<input type="text" id="nombre" class="swal2-input" placeholder="Nombre y apellido">
      <input type="text" id="email" class="swal2-input" placeholder="Email">`,
      confirmButtonText: 'Listo!',
      focusConfirm: false,
      preConfirm: () => {
        export const nombre = Swal.getPopup().querySelector('#nombre').value
        export const email = Swal.getPopup().querySelector('#email').value
        if (!nombre || !email) {
          Swal.showValidationMessage(`Por favor introduce tus datos, y podremos estar en contacto!`)
        }
        return { nombre: nombre, email: email }
      }
    }).then((result) => {
      Swal.fire(`
        Nombre: ${result.value.nombre}
        Email: ${result.value.email}
      `.trim())
    })
    registro();
  }

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
        <Button onConfirm={confirmarOrden} onClick={()=>registro()}>Confirmar compra</Button>
        <BsTrashFill size={20} onClick={()=>removeItem(producto.id)} />
      </Card.Body>
      </Card>
      )}
      )}
      <h2 style={{color: "black"}}>Total: ${getTotalPrice()}</h2>
      <Button onClick={cleanUp} className="btn-dark">Vaciar carrito</Button>
      </div>
      :
      <>
      <h1>Carrito vacío</h1>
      <Button onClick={()=> navigate('/home')} className="btn-dark">Volver al Home</Button>
      </>
    }
    </div>
    )
  }


export default Cart;
