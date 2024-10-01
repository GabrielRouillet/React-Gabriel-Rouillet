import './CartWidget.css'
import carrito from '../../public/img/carrito_white.png'

export default function Cart() {
    return (
        <div className='carro'>
        <img src= {carrito} alt="carrito" />
        <p>(7)</p>
        </div>
    )
}
