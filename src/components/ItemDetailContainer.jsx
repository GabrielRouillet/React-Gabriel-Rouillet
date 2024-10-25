import React, { useState, useContext, useEffect } from 'react';
import './ItemDetailContainer.css';
import { useParams } from 'react-router-dom';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';
import { CartContext } from './CartContext';
import { products } from '/asyncMock';
import Swal from 'sweetalert2';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const [producto, setProducto] = useState(null);
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        const foundProduct = products.find(prod => prod.id === parseInt(id));
        setProducto(foundProduct);
    }, [id]);

    const handleAdd = () => {
        if (producto) {
            addToCart(producto, cantidad);
            setCantidad(1);
            
            Swal.fire({
                title: '¡Producto agregado al carrito!',
                icon: 'success',
                showConfirmButton: false,
                timer: 1500
            });
        };
    };

    if (!producto) {
        return <p>Cargando...</p>;
    }

    return (
        <div className="item-detail-container">
            <h2>{producto.nombre}</h2>
            <img src={producto.img} alt={producto.nombre} />
            <h3>{producto.descripcion}</h3>
            <p>Precio: ${producto.precio}</p>
            <ItemQuantitySelector cantidad={cantidad} setCantidad={setCantidad} />
            <AddItemButton onAdd={handleAdd} />
        </div>
    );
};

export default ItemDetailContainer;


