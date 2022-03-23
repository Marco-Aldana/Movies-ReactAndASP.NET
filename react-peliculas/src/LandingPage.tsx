import { useEffect, useState } from "react";
import ListadoPeliculas from "./peliculas/ListadoPeliculas";
import { landingPageDTO } from "./peliculas/peliculas.model";

export default function LandingPage() {
    const [peliculas, setPeliculas] = useState<landingPageDTO>({});

    useEffect(() => {
        const timerId = setTimeout(() => {
            setPeliculas({
                enCartelera: [
                    {
                        id: 1, titulo: 'Spiderman: Far from Home', poster: 'https://m.media-amazon.com/images/M/MV5BMGZlNTY1ZWUtYTMzNC00ZjUyLWE0MjQtMTMxN2E3ODYxMWVmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UY720_.jpg'
                    },
                    {
                        id: 2, titulo: 'Terminator', poster: 'https://m.media-amazon.com/images/I/61qCgQZyhOL._AC_SL1024_.jpg'
                    },
                ],
                proximosEstrenos: [
                    {
                        id: 3, titulo: 'Wiplash', poster: 'https://i.pinimg.com/736x/1c/bd/20/1cbd20d682ebdcc56c33a735f7d4b576.jpg'
                    }
                ]
            })
        }, 500);

        return () => clearTimeout(timerId);
    })

    return (
        <>
            <h3>Peliculas En Cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera} />
            <h3>Proximos Estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
        </>
    )
}