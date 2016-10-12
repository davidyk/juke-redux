
import { createStore, applyMiddleware } from "redux";
import initialState from "./initialState.js";
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";

const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE_ALBUMS_FROM_SERVER';

// export const receiveAlbums = function  (albums) {
//   return {
//     type: RECEIVE_ALBUMS_FROM_SERVER,
//     albums
//   }
// };

export function receiveAlbums (albums) {
  return {
    type: RECEIVE_ALBUMS_FROM_SERVER,
    albums
  }
};




function reducer(state = initialState, action) {

  switch (action.type) {
    case RECEIVE_ALBUMS_FROM_SERVER:
      return Object.assign({}, state, {albums: action.albums});
      default: return state;
  }

  return newState;
}


const logger = createLogger();

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger)); //make logger the last middleware to be passed otherwise you wont log everything

export default store;
// export {receiveAlbums };
