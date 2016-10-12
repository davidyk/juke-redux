import { connect} from "react-redux";
import Albums from "./Albums.js"

const mapStatetoProps = function (state, ownProps) {
  return  {
    albums: state.albums
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    // note that I'm using enhanced object method notation
    loadAlbums (albums) {
      dispatch({ type: RECEIVE_ALBUMS_FROM_SERVER, albums: albums }); // hm, could we shorten this, too?
    }
  }
}

const AlbumsContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
  )(Albums);
