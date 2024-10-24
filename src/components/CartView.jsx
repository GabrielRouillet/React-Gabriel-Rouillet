// CartView.jsx
import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './CartView.css';

const CartView = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="cart-view">
            <h2>Tu Carrito</h2>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id} className="cart-item">
                            <span>{item.nombre}</span> - 
                            <span>${item.precio}</span> - 
                            <span>Cantidad: {item.cantidad}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartView;
