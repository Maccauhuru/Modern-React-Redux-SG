import unsplash from '../api/unsplash';
import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {
    state = {
        images: [],
        total: 0
    }
    onSearchSubmit = async term => {
        const res = await unsplash
            .get('search/photos', {
                params: {
                    query: term
                },

            })
        this.setState({
            images: res.data.results,
            total: res.data.total
        });
    }
    render() {
        return (<div className={'ui-container'} style={{ marginTop: '10px' }}>
            <SearchBar onSubmit={this.onSearchSubmit} />
            <ImageList data={this.state} />
        </div>
        )
    }
}

export default App;