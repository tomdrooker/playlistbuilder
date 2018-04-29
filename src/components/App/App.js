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
      }]
    };
  }

  render() {
    return (
      <div>
        <h1>Playlist<span className="highlight">Builder</span></h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults="this.state.searchResults"/>
            <Playlist />
          </div>
        </div>
      </div>
    );
  }
}
