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
        id: 1
      },
      {
        name: 'Check This',
        artist: 'The Chequers',
        album: 'Get Me My Cheque',
        id: 2
      },
      {
        name: 'Put The Radio On Instead',
        artist: 'Talk About It',
        album: 'I\'m Listening',
        id: 3
      }],
      playlistTitle: 'Great Playlist',
      playlistTracks: [{
        name: 'Paperweight',
        artist: 'So Heavy',
        album: 'Bearing Down On Me',
        id: 1
      },
      {
        name: 'Lamplight',
        artist: 'Bulb',
        album: 'Bright',
        id: 2
      }]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
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

  render() {
    return (
      <div>
        <h1>Playlist<span className="highlight">Builder</span></h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} isRemoval={false}/>
            <Playlist playlistTitle={this.state.playlistTitle} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    );
  }
}
