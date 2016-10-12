'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import store from "./myRedux.js";
import { RECEIVE_ALBUMS_FROM_SERVER } from "./myRedux.js";
import {Provider } from "react-redux";

ReactDOM.render(
  <Provider store = {store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);

// console.log("store.getState()", store.getState());
// console.log("Receive value", RECEIVE_ALBUMS_FROM_SERVER );

// console.log("Dispatch", store.dispatch({type: RECEIVE_ALBUMS_FROM_SERVER, albums: [1,2,3]}));

// console.log("store.getState()", store.getState());
