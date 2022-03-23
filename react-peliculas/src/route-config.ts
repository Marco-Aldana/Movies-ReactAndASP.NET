import IndiceGeneros from './Generos/IndiceGeneros';
import LandingPage from './LandingPage';
import CrearGenero from './Generos/CrearGenero';
import EditarGenero from './Generos/EditarGenero';
import CrearActores from './actores/CrearActores';
import EditarActores from './actores/EditarActores';
import IndiceActores from './actores/IndiceActores';
import IndiceCines from './cines/IndiceCines';
import CrearCines from './cines/CrearCines';
import EditarCines from './cines/EditarCines';
import CrearPeliculas from './peliculas/CrearPeliculas';
import EditarPeliculas from './peliculas/EditarPeliculas';
import FiltroPeliculas from './peliculas/FiltroPeliculas';
import RedireccionarALanding from './utils/RedireccionarALanding';

const rutas = [
    { path: '/', componente: LandingPage, exact: true },
    { path: '/generos', componente: IndiceGeneros, exact: true },
    { path: '/generos/crear', componente: CrearGenero },
    { path: '/generos/editar/:id(\\d+)', componente: EditarGenero },
    { path: '/actores', componente: IndiceActores, exact: true },
    { path: '/actores/crear', componente: CrearActores },
    { path: '/actores/editar/:id(\\d+)', componente: EditarActores },
    { path: '/cines', componente: IndiceCines, exact: true },
    { path: '/cines/crear', componente: CrearCines },
    { path: '/cines/editar/:id(\\d+)', componente: EditarCines },
    { path: '/peliculas/filtrar', componente: FiltroPeliculas, exact: true },
    { path: '/peliculas/crear', componente: CrearPeliculas },
    { path: '/peliculas/editar/:id(\\d+)', componente: EditarPeliculas },
    { path:'*', componente: RedireccionarALanding}
];

export default rutas