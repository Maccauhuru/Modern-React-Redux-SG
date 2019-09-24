import React, { Component } from "react";
import faker from "faker";
import CommentDetail from "./CommentDetail";

class App extends Component {
  render() {
    return (
      <div className="ui container comments">
        <CommentDetail
          name={"Simon"}
          time={"Today at 11:30PM"}
          avatar={faker.image.avatar()}
          text={"Lets get going!"}
        />
        <CommentDetail
          name={"Wolly"}
          time={"Yesterday at 8:30AM"}
          avatar={faker.image.avatar()}
          text={"Trippy to live"}
        />
        <CommentDetail
          name={"Stunner"}
          time={"Today at 1:30PM"}
          avatar={faker.image.avatar()}
          text={"JSX is ...."}
        />
      </div>
    );
  }
}

export default App;
