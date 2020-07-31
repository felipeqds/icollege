import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './css/bootstrap.css'
import './style.css'
import './css/dark.css'
import './css/font-icons.css'
import './css/animate.css'
import './css/magnific-popup.css'
import './css/responsive.css'
import './css/components/bs-datatable.css'
import './css/components/bs-filestyle.css'
import './css/summernote.css'
import './css/imports/shortcodes/tabs.css'



if ((window.location.pathname === '/login') || (window.location.pathname === '/')) {
  ReactDOM.render(<App />, document.getElementById('login'));
  }else{
    ReactDOM.render(<App />, document.getElementById('wrapper'));
  }