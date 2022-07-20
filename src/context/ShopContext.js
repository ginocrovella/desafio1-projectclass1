import React, { Children, createContext, useState } from 'react'

export const Shop = createContext();

const ShopProvider = ({children}) => {

    // const [estadoA, setEstadoA] = useState("Valor por defecto")

    const [cart, setCart] = useState([]);

    // Agregar item al carrito, acorde a la cantidad
    const addItem = (producto, cantidad) => { 
        console.log(producto, cantidad);

        const productoRepetido = isInCart(producto);
        console.log(productoRepetido);

        if (productoRepetido) {
            productoRepetido.quantity += cantidad
            setCart([...cart])
        } else {
            // Es util cuando el producto no esta presente en el carrito
            setCart([...cart, {...producto, quantity: cantidad}])   
        }
    };

    const removeItem = (id) => {    
        setCart(cart.filter(prod=>prod.id !== id))
    }; 

    const cleanUp = () => {
        setCart([]);
    };

    const getCartItems = () => {
        return cart.reduce((acum, item)=>acum=acum+item.quantity, 0)
    };

    const getTotalPrice = () => {
        return cart.reduce((acum,item)=>acum+(item.precio*item.quantity), 0)
    }

    const isInCart = (producto) => {
        return cart.find(elemento => elemento.id === producto.id)
    }

  return (
    <Shop.Provider value={{addItem, cart, removeItem, cleanUp, getTotalPrice, getCartItems}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider