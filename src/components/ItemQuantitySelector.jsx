import { useState } from "react";
import './ItemQuantitySelector.css';

export default function ItemQuantitySelector({ cantidad, setCantidad }) {
    const handleClickResta = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    const handleClickSuma = () => {
        setCantidad(cantidad + 1);
    };

    return (
        <div className="container">
            <button onClick={handleClickResta}>-</button>
            <p>{cantidad}</p>
            <button onClick={handleClickSuma}>+</button>
        </div>
    );
}
