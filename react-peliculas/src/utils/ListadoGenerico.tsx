import React, {ReactElement} from "react";
import Cargando from "./cargando";

export default function ListadoGenerico( props: listadoGenerico){
    if (!props.listado){
        if(props.cargandoUI){
            return props.cargandoUI;
        }
        return <Cargando/>
    } else if (props.listado.length === 0){
        if (props.listadoVacioUI){
            return props.listadoVacioUI;
        }
        return <>No hay elementos para mostrar</>
    } else{
        return props.children
    }

}

interface listadoGenerico{
    listado: any;
    children: ReactElement;
    cargandoUI?: ReactElement;
    listadoVacioUI?: ReactElement;
}