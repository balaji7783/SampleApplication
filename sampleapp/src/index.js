import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {  BrowserRouter , Route } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
import SearchGridComponents from './Components/SearchGridComponents';

ReactDOM.render(
  <React.StrictMode>
    
      <App />
      <BrowserRouter>
         <Route path="/SearchGridComponents" component={SearchGridComponents} />
         <Route path="/ProductDetails" component={ProductDetails} />
      </BrowserRouter>
     
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
