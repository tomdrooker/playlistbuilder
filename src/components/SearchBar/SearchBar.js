import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.searchUsingKey = this.searchUsingKey.bind(this);
    this.state = {
      term: ''
    }
  }

  search() {
    this.props.onSearch(this.state.term);
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
  }

  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} onKeyDown={this.searchUsingKey} placeholder="Enter a song, album or artist" />
        <a onClick={this.search}>SEARCH</a>
      </div>
    )
  }
};
