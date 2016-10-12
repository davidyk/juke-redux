import {connect} from "react-redux";
import Albums from "../components/Albums.js";
import {RECEIVE_ALBUMS_FROM_SERVER} from '../myRedux.js';

const mapStateToProps = function (state, ownProps) {
  return  {
    albums: state.albums
  }
}

//giving us methods on our props within comonent, allow to interact with store
const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    // note that I'm using enhanced object method notation
    loadAlbums (albums) {
      dispatch({ type: RECEIVE_ALBUMS_FROM_SERVER, albums: albums }) // hm, could we shorten this, too?
    },
    loadAlbumImage (album)
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