import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends Component {
  handleSearchSubmission = (term) => {
    console.log(term);
  }

  handleSearchBarClick = (term) => {
    alert(" You searched for : " + term)
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSubmit={this.handleSearchSubmission} onClick={this.handleSearchBarClick} />
        <ImageList />
      </div>
    )
  }
}

export default App;
