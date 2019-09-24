import React from 'react';
import ReactDOM from 'react-dom';

const App = () =>{
    const btnText = () => "Self Destruct";
    const style = {background:'blue',color:'white',fontSize:'18px',border:'1px solid red'}
    return(
        <div>
            <label className="labelcss" htmlFor="fname"></label>
            Name : <input name="fname" type="text"/>
            <label className="labelcss" htmlFor="age"></label>
            Age : <input name="age" type="number"/>
            <br /><br />
                <button style={style}>{btnText()}</button>
        </div>
    );
};

ReactDOM.render(<App />,document.querySelector('#root'))