import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter a song, album or artist" />
        <a>SEARCH</a>
      </div>
    )
  }
};
