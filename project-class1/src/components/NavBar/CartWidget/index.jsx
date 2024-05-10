import React, { useContext } from "react";
import {CgShoppingCart} from 'react-icons/cg';
import { Link } from "react-router-dom";
import { Shop } from "../../../context/ShopContext";
import './styles.css'

const CartWidget = () => {

    const {cart, getCartItems} = useContext(Shop);

    return (
        <div style={{display: "flex", color: "white"}}>
            <Link to={'/cart'}>
            <CgShoppingCart size={23} className="cartcss"/>
            </Link>
            {cart.length > 0 && <p>{getCartItems()}</p>}
        </div>
   
    );
}

export default CartWidget;