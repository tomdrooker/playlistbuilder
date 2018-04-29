import React from 'react';
import './Tracklist.css';
import { Track } from '../Track/Track';

export class Tracklist extends React.Component {
  render() {
      console.log(this.props.tracks);
    return (
      <div className="TrackList">
        // You will add a map method that renders a set of Track components
        {
          this.props.tracks.map(track => {
            return <Track track={track} key={track.id} />
          })
        }
      </div>
    )
  }

};
