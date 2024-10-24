import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="cart-widget">
            <Link to="/cart" className="cart-button">
                🛒 Carrito ({cart.length})
            </Link>
        </div>
    );
};

export default CartWidget;
