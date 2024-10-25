import React, { useEffect, useState } from 'react';
import { fetchProducts } from './mockApi';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = ({ categoryId }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            const products = await fetchProducts();
            const filteredProducts = categoryId ? products.filter(product => product.categoria === categoryId) : products;
            setItems(filteredProducts);
            setLoading(false);
        };

        loadProducts();
    }, [categoryId]);

    if (loading) {
        return <div>Cargando productos...</div>;
    }

    if (items.length === 0) {
        return <div>No se encontraron productos en esta categoría.</div>;
    }

    return (
        <div>
            <article className="product-list">
                {items.map((product) => (
                    <div key={product.id} className="product-card">
                        <Link to={`/item/${product.id}`} className="card-link">
                            <h2 className="product-name">{product.nombre}</h2>
                            <img src={product.img} alt={product.nombre} className="product-image" />
                            <p className="product-price">Precio: ${product.precio}</p>
                        </Link>
                    </div>
                ))}
            </article>
        </div>
    );
};

export default ProductList;
