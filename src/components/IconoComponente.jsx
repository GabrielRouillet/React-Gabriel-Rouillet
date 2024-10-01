import './IconoComponente.css'
import icono from "../../public/img/gorra1.png"

export default function Icono() {
    return (
        <>
        <img className='iconoComp' src= {icono} alt="icono" />
        <p className='iconoparrafo'>Gabby Blinders</p>
        </>
    )
}
