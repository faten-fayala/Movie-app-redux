import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./store";
import {Provider} from "react-redux";
import {BrowserRouter,Route} from "react-router-dom";
import DescriptionMovies  from './descriptionMovies'
ReactDOM.render(<Provider store={store}>
  <BrowserRouter>
  <Route exact path='/' component={App} />
  <Route exact path='/movies/:id' component={DescriptionMovies} />
  </BrowserRouter>
   </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
