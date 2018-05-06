import React, { Component } from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import { Spotify } from '../../util/Spotify';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistTitle: 'New playlist',
      playlistTracks: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistTitle = this.updatePlaylistTitle.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return
    }

    tracks.push(track);
    this.setState({playlistTracks: tracks});
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    let trackToRemove = tracks.filter(savedTrack => savedTrack.id === track.id);
    tracks.splice(track, 1);
    this.setState({playlistTracks: tracks});
  }

  updatePlaylistTitle(newTitle) {
    this.setState({playlistTitle: newTitle});
  }

  savePlaylist() {
    let tracks = this.state.playlistTracks;
    let uriArray = tracks.map(track => track.uri);
    let playlistTitle = this.state.playlistTitle;
    Spotify.savePlaylist(playlistTitle, uriArray);
    this.setState({
      playlistTracks: [],
      playlistTitle: 'New playlist'      
    });
  }

  search(term) {
    Spotify.search(term).then(track => {
      console.log(track);
      this.setState({
        searchResults: track
      });
    })
  }

  render() {
    return (
      <div>
        <h1>Playlist<span className="highlight">Builder</span></h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} isRemoval={false}/>
            <Playlist playlistTitle={this.state.playlistTitle} playlistTracks={this.state.playlistTracks}
            onRemove={this.removeTrack} onChange={this.updatePlaylistTitle}
            onSave={this.savePlaylist}/>
          </div>
        </div>
      </div>
    );
  }
}
