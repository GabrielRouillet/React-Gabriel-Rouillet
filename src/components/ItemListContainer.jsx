import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from './ProductList';

const ItemListContainer = () => {
    const { categoria } = useParams();

    return (
        <div>
            <h1>{categoria ? categoria.replace(/([A-Z])/g, ' $1') : 'Todos los Productos'}</h1>
            <ProductList categoryId={categoria} />
        </div>
    );
};

export default ItemListContainer;
