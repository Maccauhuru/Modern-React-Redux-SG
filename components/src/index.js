import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author={"Sammy"}
          date={"Today at 14:00PM"}
          message={"Love this tutorial!"}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={"Tally"}
          date={"Today at 03:05AM"}
          message={"Just what i needed"}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={"Jade"}
          date={"Today at 12:07PM"}
          message={"Great work!"}
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
