import React, { Component } from 'react'

class SearchBar extends Component {
  state = {
    searchTerm: ''
  }
  handleSearchSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  }

  handleSearchBarClick = (term) => {
    this.props.onClick(this.state.searchTerm)
  }

  render() {
    return (
      <div className="ui segment">
        <label>Image Search</label>
        <form className="ui form" onSubmit={this.handleSearchSubmit}>
          <input type="text" className="ui field" placeholder="type here" onChange={(e) => this.setState({ searchTerm: e.target.value })} value={this.state.searchTerm} onClick={this.handleSearchBarClick} />
        </form>
      </div>
    )
  }
}

export default SearchBar
