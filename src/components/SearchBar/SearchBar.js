import React from 'react';
import './SearchBar.css';
import { Spotify } from '../../util/Spotify';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.searchUsingKey = this.searchUsingKey.bind(this);
    this.state = {
      term: '',
      loggedIn: false
    }
  }

  search() {
    this.props.onSearch(this.state.term);
    this.setState({
      loggedIn: true
    })
  }

  searchUsingKey(event) {
    if (event.key == 'Enter') {
      this.props.onSearch(this.state.term);
      this.setState({
        loggedIn: 1
      })
    }
  }

  handleTermChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  login() {
    Spotify.getAccessToken();
  }

  render() {
    let loginCount = this.state.loginCount;
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);

    if (!this.state.loggedIn && !accessTokenMatch) {
      return (
      <div className="SearchBar">
        <a onClick={this.login}>LOG IN</a>
      </div>
      )
    } else {
      return (
        <div className="SearchBar">
          <input onChange={this.handleTermChange} onKeyDown={this.searchUsingKey} placeholder="Enter a song, album or artist" />
          <a onClick={this.search}>SEARCH</a>
        </div>
      )
    }
  }
};
