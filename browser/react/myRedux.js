
import { createStore, applyMiddleware, combineReducers } from "redux";
import initialState from "./initialState.js";
import createLogger from "redux-logger";
import thunkMiddleware from "redux-thunk";

const RECEIVE_ALBUMS_FROM_SERVER = 'RECEIVE_ALBUMS_FROM_SERVER';
const START_PLAYING = "START_PLAYING";
const STOP_PLAYING = "PAUSE_PLAYING";
const SET_CURRENT_SONG = 'SET_CURRENT_SONG';

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

export function startPlaying () {
  return {
    type: START_PLAYING
  }
};

export function stopPlaying () {
  return {
    type: STOP_PLAYING
  }
};

export setCurrentSong = (currentSong, currentSongList) => ({ 
  type: SET_CURRENT_SONG,
  currentSong,
  currentSongList
});

//ASYNC FUNCTIONS
export const fetchAlbumsFromServer = () => {
  return dispatch => {
    fetch('/api/albums')
      .then(res => res.json())
      // use the dispatch method the thunkMiddleware gave us
      .then(albums => dispatch(receiveAlbums(albums)));
  }
}

//REDUCER FUNCTIONS 
const isPlaying = (state = false, action) => {
  switch (action.type) {
    case START_PLAYING: return true;
    case STOP_PLAYING: return false;
    default: return state;
  }
};

const currentSong = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG: return action.currentSong;
    default: return state;
  }
};

const currentSongList = (state = [], action) => {
  switch (action.type) {
    case SET_CURRENT_SONG: return action.currentSongList;
    default: return state;
  }
};


//state = value of albums field
function albums (state = initialState.albums, action){
   switch (action.type) {
    case RECEIVE_ALBUMS_FROM_SERVER:
      return action.albums; // albums field is now equal to action.albums
    default: return state;
  }
}

//each reducer we give to rootReducer, we give a key (name on our state)
//state in the receiveAlbum reducer refers to what's being held at that field
const rootReducer = combineReducers({
  albums,
  isPlaying,
  currentSong,
  currentSongList
})

 
const logger = createLogger();

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger)); //make logger the last middleware to be passed otherwise you wont log everything

export default store;

