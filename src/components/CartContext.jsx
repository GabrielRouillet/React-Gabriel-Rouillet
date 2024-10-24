// CartContext.jsx
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (producto, cantidad) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.producto.id === producto.id);
            if (existingProduct) {
                return prevCart.map(item => 
                    item.producto.id === producto.id 
                        ? { ...item, cantidad: item.cantidad + cantidad } 
                        : item
                );
            }
            return [...prevCart, { producto, cantidad }];
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
