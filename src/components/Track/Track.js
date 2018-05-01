import React from 'react';
import './Track.css';

export class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  removeTrack() {
    this.props.onRemove(this.props.track);
  }

  render() {
    let sign;
    if (this.props.isRemoval) {
      sign = <a className="Track-action" onClick={this.removeTrack}>-</a>;
    } else {
      sign = <a className="Track-action" onClick={this.addTrack}>+</a>;
    }

    return (
      <div className="Track">
        <div className="Track-information">
          <h3 className="trackName">{this.props.track.name}</h3>
          <p className="artistNameAlbumName">{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {sign}
      </div>
    )
  }
};
