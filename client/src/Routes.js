import React from 'react';
import './App.css';
import { Route , Switch } from 'react-router';
import HomePage from './pages/HomePage';
import PlacesContainer from './pages/PlacesContainer';
import PlacesProvider from './context/PlacesContext';


function Routes() {
  return (
  <div className="App">
    <PlacesProvider>
    <Switch>
        <Route exact path = '/'>
          <HomePage/>
        </Route>
        <Route exact path = 'places'>
          {/* places */}
        </Route>
        <Route exact path = '/aboutUs'>
          {/* aboutUs */}
        </Route>
        <Route exact path = '/:id'>
          <PlacesContainer/>
        </Route>
    </Switch>
    </PlacesProvider>
  </div>
  );
}

export default Routes;