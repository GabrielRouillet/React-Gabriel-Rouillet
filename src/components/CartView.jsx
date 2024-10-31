import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import Swal from 'sweetalert2';
import './CartView.css';

const CartView = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        emailConfirm: ''
    });
    const [error, setError] = useState('');
    const [codigoCompra, setCodigoCompra] = useState('');

    const total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.nombre || !formData.apellido || !formData.telefono || !formData.email || !formData.emailConfirm) {
            setError('Por favor, completa todos los campos.');
            return;
        }

        if (formData.email !== formData.emailConfirm) {
            setError('Los correos electrónicos no coinciden.');
            return;
        }

        const codigo = `CÓDIGO-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
        setCodigoCompra(codigo);
        
        localStorage.setItem('codigoCompra', codigo);

        setFormData({
            nombre: '',
            apellido: '',
            telefono: '',
            email: '',
            emailConfirm: ''
        });
        setError('');

        await Swal.fire({
            title: 'Compra finalizada!',
            text: `Tu código es: ${codigo}`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    };

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

            <h2>Finalizar Compra</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Apellido:
                        <input
                            type="text"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Teléfono:
                        <input
                            type="tel"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Confirmar Email:
                        <input
                            type="email"
                            name="emailConfirm"
                            value={formData.emailConfirm}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Finalizar Compra</button>
            </form>
            {codigoCompra && <p>Tu código de compra es: {codigoCompra}</p>}
        </div>
    );
};

export default CartView;
