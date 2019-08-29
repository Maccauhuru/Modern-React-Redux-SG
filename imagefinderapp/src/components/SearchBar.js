import React from 'react';

class searchBar extends React.Component {
    handleInputChange (e) {
        e.preventDefault()
        console.log(e.target.value)
    }
    handleInputClick(){
        console.log("input was clicked!")
    }
    render(){
        return(
            <div className={'ui segment' }>
                <form className={'ui form'}>
                    <div className={'field'}>
                        <label>Image Finder</label>
                        <div className="ui icon input">
                            <i className="search icon"></i>
                            <input type="text" placeholder="Search..." onChange={this.handleInputChange} onClick={this.handleInputClick}/>
                        </div>
                        </div>
                </form>
            </div>
        )
    }
}

export default searchBar;