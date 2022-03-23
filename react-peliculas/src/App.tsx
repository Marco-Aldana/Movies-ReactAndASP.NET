import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import IndiceGeneros from './Generos/IndiceGeneros';
import LandingPage from './LandingPage';
import ListadoPeliculas from './peliculas/ListadoPeliculas';
import { landingPageDTO } from './peliculas/peliculas.model';
import Button from './utils/Button';
import Menu from './utils/Menu';
import rutas from './route-config';

function App() {


  return (
    <>
      <BrowserRouter>
        <Menu />
        <div className='container'>
          <Switch>
            {rutas.map(ruta =>
              <Route
                key={ruta.path}
                path={ruta.path}
                exact={ruta.exact}
              >
                <ruta.componente />
              </Route>
            )}
          </Switch>
        </div>
      </BrowserRouter>
    </>

  );
}

export default App;
