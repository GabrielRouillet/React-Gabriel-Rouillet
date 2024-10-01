import { Link } from "react-router-dom"
import { useParams } from "react-router-dom";
import {getProduct} from '../../asyncMocks'
export default function CardComponente({producto}){

    return(
        <article>
        <img>{producto.img}</img>
        <h4>{producto.nombre}</h4>
        <p>{producto.precio}</p>
        <Button>Detalles</Button>
        </article>
    )
}