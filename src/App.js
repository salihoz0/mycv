import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import {BrowserRouter as Routes,Route,/*switch*/ } from 'react-router-dom';
import Home from './components/Home';
import Yetenekler from './components/Yetenekler';
import Deneyimler from './components/Deneyimler';
import Egitimler from './components/Egitimler';
import Portföyler from './components/Portföyler';
function App() {
  return (
    <Routes>
      <>
      <Route Eexact path='/' component= {Home}/>
      <switch>
        <Route path ="/yetenekler" component ={Yetenekler}/> 
        <Route path ="/egitimler" component ={Egitimler}/> 
        <Route path ="/deneyimler" component ={Deneyimler}/> 
        <Route path ="/portföyler" component ={Portföyler}/> 
      </switch>
      </>
    </Routes>
  );
}

export default App;
