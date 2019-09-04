import React, { Component } from 'react';

class searchBar extends Component {
    state = {
        searchTerm: '',
        status: true
    };

    onFormSubmit = (e) => {
        e.preventDefault(e);
        this.props.onSubmit(this.state.searchTerm)
    };


    render() {
        return (
            <div className={'ui segment'}>
                <form className={'ui form'} onSubmit={this.onFormSubmit}>
                    <div className={'field'}>
                        <label>Image Finder</label>
                        <div className="ui icon input">
                            <i className="search icon"></i>
                            <input type="text" placeholder="Search..."
                                onChange={(e) => this.setState({ searchTerm: e.target.value })}
                                value={this.state.searchTerm} />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


export default searchBar;