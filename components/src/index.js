import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () =>{
return (
    <div className="ui container comments">
        <CommentDetail />
        <CommentDetail />
        <CommentDetail />

    </div>
)
}


const root = document.querySelector('#root');
ReactDOM.render(<App />,root);