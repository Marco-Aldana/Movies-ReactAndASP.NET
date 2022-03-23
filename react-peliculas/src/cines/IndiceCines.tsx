import { Link } from "react-router-dom";

export default function IndiceCines(){
    return (
        <>
        <h3>Indice Cines</h3>
        <Link to='cines/crear'>Crear Cines</Link>
        <Link to='cines/editar'>Editar Cines</Link>
        </>
    ) 
}