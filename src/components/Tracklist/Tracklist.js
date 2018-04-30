import React from 'react';
import './Tracklist.css';
import { Track } from '../Track/Track';

export class Tracklist extends React.Component {
  render() {
    if (typeof this.props.tracks === 'undefined') {
           let track = [{
               name: 'Search did not return results',
               artist: 'Try some different Search Terms',
               album: ' '
           }];
         };
    return (
      <div className="TrackList">
        // You will add a map method that renders a set of Track components
        console.log(this.props.tracks);
        {
          this.props.tracks.map(track => {
            return <Track track={track} key={track.id} />
          })
        }
      </div>
    )
  }

};
