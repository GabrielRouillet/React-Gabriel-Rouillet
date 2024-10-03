import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from './mockApi';
import './ItemDetailContainer.css';
import ContadorComponente from './ContadorComponente';


const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProduct = async () => {
            const products = await fetchProducts();
            const foundProduct = products.find((product) => product.id === parseInt(id));
            setProduct(foundProduct);
            setLoading(false);
        };

        loadProduct();
    }, [id]);

    if (loading) {
        return <div>Cargando detalles del producto...</div>;
    }

    return (
        <div className="detail-container">
            <h1 className="product-name">{product.nombre}</h1>
            <div className="image-container">
                <img src={product.img} alt={product.nombre} className="product-image" />
            </div>
            <p className="product-price">Precio: ${product.precio}</p>
            <p className="product-description">{product.descripcion}</p>
            <div><ContadorComponente></ContadorComponente></div>
        </div>
    );
};

export default ItemDetailContainer;