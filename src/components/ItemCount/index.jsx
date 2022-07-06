import React from 'react';
import { useState } from 'react';
import './styles.css';
import { Button } from 'react-bootstrap';
import { BsPlusSquare } from "react-icons/bs";
import { BsDashSquare } from "react-icons/bs";


const ItemCount = ({handleAdd, initialStock, onConfirm, maxQuantity}) => {

    const  [count, setCount] = useState(initialStock);

    const stock = 10;

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

    const handleConfirm = () => {
        if(count <= maxQuantity) {
            onConfirm(count)
        } else {
            alert("Count > maxQuantity")
        }
    }

  return (
    <div>          
        <p className='countNumber'>{count}</p>
        <div className='btn-ad-dc'>
            <BsPlusSquare size={'30'} className=' add'
            onClick={() => onAdd(count)} />  

            <BsDashSquare size={'30'} className=' dec'
            onClick={() => onDecrement(count)} />
        </div>
            <Button onClick={()=> handleConfirm(count)} id="buttoncart1" className='btn btn-dark'> AGREGAR AL CARRITO </Button>
    </div>                    
            
        
    
  )
}

export default ItemCount;