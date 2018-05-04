import React from 'react';
import './Playlist.css';
import { Tracklist } from '../Tracklist/Tracklist';
import { Spotify } from '../../util/Spotify';

export class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const title = e.target.value;
    this.props.onChange(title);
  }

  render() {
    return (
      <div className="Playlist">
        <input defaultValue={this.props.playlistTitle} onChange={this.handleChange}/>
        <Tracklist playlistTitle={this.props.playlistTitle} tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
        <a className="Playlist-save" onClick={this.props.onSave} onClick={Spotify.getAccessToken}>SAVE TO SPOTIFY</a>
      </div>
    )
  }
};
