import React, { Component } from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';



export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [{
        name: 'My Favourite Song',
        artist: 'The Greatest Band',
        album: 'We So Great',
        uri: 'spotify:track:17Yq72h0p15OhCbZ5lJ5gd',
        id: 1
      },
      {
        name: 'Check This',
        artist: 'The Chequers',
        album: 'Get Me My Cheque',
        uri: 'spotify:track:6KBYefIoo7KydImq1uUQlL',
        id: 2
      },
      {
        name: 'Put The Radio On Instead',
        artist: 'Talk About It',
        album: 'I\'m Listening',
        uri: 'spotify:track:2Yl4OmDby9iitgNWZPwxkd',
        id: 3
      }],
      playlistTitle: 'New playlist',
      playlistTracks: [{
        name: 'Paperweight',
        artist: 'So Heavy',
        album: 'Bearing Down On Me',
        uri: 'spotify:track:7p2ewixAShLpjDZrnzZK7c',
        id: 1
      },
      {
        name: 'Lamplight',
        artist: 'Bulb',
        album: 'Bright',
        uri: 'spotify:track:2qcG0nZ6S3zZV0UrkY5nFo',
        id: 2
      }]
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
  }

  search(term) {
    console.log(term);
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
