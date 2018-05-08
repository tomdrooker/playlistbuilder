import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.searchPrevious = this.searchPrevious.bind(this);
    this.searchPreviousUsingKey = this.searchPreviousUsingKey.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.searchUsingKey = this.searchUsingKey.bind(this);
    this.state = {
      term: ''
    }
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  searchPrevious() {
    let searchTerm = localStorage.getItem('searchTerm');
    this.props.onSearch(searchTerm);
  }

  searchPreviousUsingKey(event) {
   let searchTerm = localStorage.getItem('searchTerm');

    if (event.key == 'Enter') {
      this.props.onSearch(searchTerm);
    }
  }

  searchUsingKey(event) {
    if (event.key == 'Enter') {
      this.props.onSearch(this.state.term);
    }
  }

  handleTermChange(e) {
    this.setState({
      term: e.target.value
    });
    localStorage.setItem('searchTerm', e.target.value);
  }

  recallTerm(e) {
    let searchTerm = localStorage.getItem('searchTerm');
    e.target.value = searchTerm;
  }

  render() {
    let accessTokenMatch = window.location.href.match('access_token');

    if (accessTokenMatch) {
      return (
        <div className="SearchBar">
          <input onFocus={this.recallTerm} onKeyDown={this.searchPreviousUsingKey} placeholder="Enter a song, album or artist" />
          <a onClick={this.searchPrevious}>SEARCH</a>
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
