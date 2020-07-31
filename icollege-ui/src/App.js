import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'
import Header from './components/header'


function App() {
  
  if ((window.location.pathname === '/login') || (window.location.pathname === '/')) {
    return (
      <BrowserRouter>      
        <Routes />
      </BrowserRouter>
    );
  }else{
    return (
      <BrowserRouter>
        <Header />  
        <Routes />
      </BrowserRouter>
    );
  }
  
}

export default App;
