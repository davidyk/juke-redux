
import { createStore } from "redux";


export const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE_ALBUMS_FROM_SERVER';
import initialState from "./initialState.js";


function reducer(state = initialState, action) {

  switch (action.type) {
    case RECEIVE_ALBUMS_FROM_SERVER:
      return Object.assign({}, state, {albums: action.albums});
      default: return state;
  }

  return newState;
}

const store = createStore(reducer);

export default store;
