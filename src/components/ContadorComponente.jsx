import { useState } from "react";

export default function ContadorComponente() {
    const [numero, setNumero] = useState(0);

    const handleClickResta = () => {
        setNumero(numero - 1)
    }

    const handleClickSuma = () => {
        setNumero(numero + 1)
        console.log(numero)
    }

    return (
        <>
        <p>{numero}</p>
        <button onClick={handleClickResta}>-</button>
        <button onClick={handleClickSuma} >+</button>
        </>
    )
}
