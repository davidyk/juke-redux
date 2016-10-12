import {connect} from "react-redux";
import Albums from "../components/Albums.js";
import { receiveAlbums } from '../myRedux.js';

const mapStateToProps = function (state, ownProps) {
  return  {
    albums: state.albums
  }
}

const fetchAlbumsFromServer = () => {
  return dispatch => {
    fetch('/api/albums')
      .then(res => res.json())
      // use the dispatch method the thunkMiddleware gave us
      .then(albums => dispatch(receiveAlbums(albums)));
  }
}
// var temp = receiveAlbums(1);
// console.log("temp.type", temp.type)

//giving us methods on our props within comonent, allow to interact with store
const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    // note that I'm using enhanced object method notation
    loadAlbums () {
      dispatch(fetchAlbumsFromServer());
    }
  }
}

// we are now able to call this.props.loadAlbums in our component, and dispatch into store
//connect is creating a new component, export it, import it where we render it
//AlbumsContainer is like a component




const AlbumsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
  )(Albums);

export default AlbumsContainer;
