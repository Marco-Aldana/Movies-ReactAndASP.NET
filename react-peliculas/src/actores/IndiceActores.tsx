import { Link } from "react-router-dom";

export default function IndiceActores(){
    return (
        <>
        <h3>Indice Actores</h3>
        <Link to='actores/crear'>Crear Actores</Link>
        <Link to='actores/editar'>Editar Actores</Link>
        </>
    ) 
}