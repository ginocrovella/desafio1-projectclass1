import React from 'react';
import { useState } from 'react';
import './styles.css';

const ItemCount = ({handleAdd, initialStock}) => {

    const  [count, setCount] = useState(0);
    const stock = 9;
    const onAdd = () => {
        if (count < stock){
            setCount(count + 1);
        }
    };

    const onDecrement = () => {
        if (count > 0){
            setCount(count - 1);
        } 
    };

  return (
    <div className='row'>
        <div className='col'>
            <div className='card diseño'>
                <h5 className='card-title'>Rack H - Puertas</h5>
                    <img src="../public/mueble 5.jpg" className='card-img-top transicion img-cards-racks' alt="mueble estandar 1" />
                    <div className='card-body'>
                        <label className='card-precio' for="precio">$9000</label>
                            <select name="opciones" id="opciones" className='botones botones-cards'>
                              <option value="Marrón">Marrón</option>
                              <option value="Blanco">Blanco</option>
                              <option value="Negro">Negro</option>
                            </select>
                        <p className='countNumber'>{count + initialStock}</p>
                        <button onClick={onAdd}>+</button>
                        <button onClick={onDecrement}>-</button>
                        <button onClick={handleAdd} id="buttoncart1" className='botones botones-cards'> AGREGAR AL CARRITO </button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default ItemCount;