import React from 'react';
import './AddItemButton.css';

const AddItemButton = ({ onAdd }) => {
    return (
        <button className="add-item-button" onClick={onAdd}>
            Agregar (+)
        </button>
    );
};

export default AddItemButton;
