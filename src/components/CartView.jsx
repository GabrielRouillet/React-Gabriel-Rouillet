import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './CartView.css';

const CartView = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="cart-container">
            <h2>Contenido del Carrito</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index} className="cart-item">
                            <span>{item.producto.nombre}</span> - 
                            <span> ${item.producto.precio}</span> - 
                            <span> Cantidad: {item.cantidad}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartView;
