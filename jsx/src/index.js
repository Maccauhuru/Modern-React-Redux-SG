import React from 'react';
import ReactDOM from 'react-dom';

const showBtnText = {text : 'Click Me!!!'};
const style = {backgroundColor:'blue',color:'white',fontSize:'18px'}

const App = () =>{
    return(
        <div>
            <label htmlFor="name" className="label">Enter Name</label>
            <input id="name" type="text"/>
            <button style={style}>{showBtnText.text}</button>
        </div>
    )
}


ReactDOM.render(<App />,document.querySelector('#root'))