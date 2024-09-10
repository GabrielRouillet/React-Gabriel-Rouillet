import './CartWidget.css'
import carrito from '../img/carrito_white.png'

export default function Cart() {
    return (
        <>
        <img src= {carrito} alt="carrito" />
        <p>(7)</p>
        </>
    )
}
