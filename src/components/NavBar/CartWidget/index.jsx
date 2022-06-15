import React from "react";
import {CgShoppingCart} from 'react-icons/cg';
import './styles.css'

const CartWidget = () => {
    return (
        <a href="index.html">
        <CgShoppingCart size={23} className="cartcss" />
        </a>
    );
}

export default CartWidget;