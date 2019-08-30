import React from 'react';

class searchBar extends React.Component {
state = {
    searchTerm : ''
}
handleFormInput(e){
    e.preventDefault();
    console.log(this.state.searchTerm)
}
    render(){
        return(
            <div className={'ui segment' }>
                <form className={'ui form'} onChange={this.handleFormInput}>
                    <div className={'field'}>
                        <label>Image Finder</label>
                        <div className="ui icon input">
                            <i className="search icon"></i>
                            <input type="text" placeholder="Search..." onChange={(e)=>this.setState({searchTerm:e.target.value})} value={this.state.value}/>
                        </div>
                        </div>
                </form>
            </div>
        )
    }
}

export default searchBar;