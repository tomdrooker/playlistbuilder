import React from 'react';
import './SearchBar.css';

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.state = {
      term: ''
    }
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  handleTermChange(e) {
    this.setState({
      term: e.target.value
    });
    this.search();
  }

  render() {
    return (
      <div className="SearchBar">
        <input onChange={this.handleTermChange} placeholder="Enter a song, album or artist" />
        <a>SEARCH</a>
      </div>
    )
  }
};
