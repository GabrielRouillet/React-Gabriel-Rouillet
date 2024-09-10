import './BotonComponente.css';

export default function BotonComponente({titulo}){
    return (
        <>
        <button type="button" className="boton btn btn-dark">{titulo}</button>
        </>
    )
};

