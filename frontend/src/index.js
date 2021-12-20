import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configureStore} from "@reduxjs/toolkit"
import {Provider} from "react-redux"
import blogReducer from "./utils/store"
const store = configureStore({
  reducer:{
    blog:blogReducer
  }
})
ReactDOM.render(
  <Provider store = {store}>
    <App />
    </Provider>
    ,
  document.getElementById('root')
);

