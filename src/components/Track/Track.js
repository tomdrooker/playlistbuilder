import React from 'react';
import './Track.css';

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack() {

  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3 className="trackName">{this.props.track.name}</h3>
          <p className="artistNameAlbumName">{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        <a className="Track-action" onClick={this.addTrack}>+</a>
      </div>
    )
  }
};
