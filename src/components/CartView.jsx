import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import './CartView.css';

const CartView = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    return (
        <div className="cart-view">
            <h2>Tu Carrito</h2>
            {cart.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <li key={item.id} className="cart-item">
                            <span>{item.nombre}</span> - 
                            <span>${item.precio}</span> - 
                            <span>Cantidad: {item.cantidad}</span>
                            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                        </li>
                    ))}
                </>
            )}
            <div className="cart-total">
                <h3>Total: ${total.toFixed(2)}</h3>
            </div>
        </div>
    );
};

export default CartView;
