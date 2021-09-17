import React from 'react';
import './App.css';
import { Route , Switch } from 'react-router';
import HomePage from './pages/HomePage';
import PlacesContainer from './pages/PlacesContainer';
import PlacesProvider from './context/PlacesContext';
import Contacto from './pages/Contacto';
import Blog from './pages/Blog';
import Cultura from './pages/Clutura';


function Routes() {
  return (
  <div className="App">
    <PlacesProvider>
    <Switch>
    <Route exact path = '/'>
          <HomePage/>
        </Route>
        <Route exact path = '/contacto'>
          <Contacto/>
        </Route>
        <Route exact path = '/blog'>
          <Blog/>
        </Route>
        <Route exact path = '/cultura'>
          <Cultura/>
        </Route>
        <Route exact path = '/:id' component={PlacesContainer}>
          <PlacesContainer/>
        </Route>
    </Switch>
    </PlacesProvider>
  </div>
  );
}

export default Routes;