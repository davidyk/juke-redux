import React from 'react';
import { Component } from "react";
import AlbumsContainer from "../containers/AlbumsContainer.js";

//don't put a parenthesis after the class!!!
class Albums extends Component {

  componentDidMount () {
    this.props.loadAlbums();

    // fetch('/api/albums/')
    //   .then(res => res.json())
    //   .then(this.props.loadAlbums) //loadAlbums is a callback function so we can pass it like this
    //   .catch(console.error.bind(console))//this is how you catch in the console without a next
      // redux: now we can call load albums function on props this.props.loadAlbums
  }
  render() {
    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
        {console.log("HELLOW!!!", this.props)}
        
          {this.props.albums.map(album =>
           <div key ={album.name} className="col-xs-4">
              <a className="thumbnail" href="#">
                <img src={`/api/albums/${album.id}/image`}/>
                <div className="caption">
                  <h5>
                    <span>{album.name}</span>
                  </h5>
                  <small>Songs {album.songs.length}</small>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Albums;
