import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import dataReducer from './store/reducers';



import reportWebVitals from './reportWebVitals';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";



const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(dataReducer, applyMiddleware(thunk));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
