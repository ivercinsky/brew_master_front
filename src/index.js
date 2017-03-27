import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import recipeApp from './reducers/index.js'


let recipeStore = createStore(recipeApp);

console.log("State", recipeStore.getState());

ReactDOM.render(
  <Provider store={recipeStore}>
    <App  />
  </Provider>,
  document.getElementById('root')
);
