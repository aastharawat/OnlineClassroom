
import React from 'react';
import './App.css';
import {BrowserRouter, Route } from 'react-router-dom';
import Home from './HomePage/Home';
import Profile from './Profile/ProfileRoutes';


function App() {

  return (
   <React.Fragment>
     <BrowserRouter>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/profile" >
          <Profile/>
        </Route>

      </BrowserRouter>
   </React.Fragment>
  );
}

export default App;
