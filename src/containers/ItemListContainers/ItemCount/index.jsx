import React from 'react';
import { useState } from 'react';
import './styles.css';

const ItemCount = ({handleAdd, initialStock}) => {

    const  [count, setCount] = useState(initialStock);
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
    <div>          
        <select name="opciones" id="opciones" className='botones botones-cards'>
            <option value="Marrón">Marrón</option>
            <option value="Blanco">Blanco</option>
            <option value="Negro">Negro</option>
        </select>
        <p className='countNumber'>{count}</p>
            <button onClick={onAdd}>+</button>
            <button onClick={onDecrement}>-</button>
            <button onClick={()=> handleAdd(count)} id="buttoncart1" className='botones botones-cards'> AGREGAR AL CARRITO </button>
    </div>                    
            
        
    
  )
}

export default ItemCount;