import React from "react";
import faker from "faker";

const CommentDetail = props => {
  console.log(props);
  return (
      <div className="ui cards">
          <div className="card">
              <div className="content">
                  <img className="left floated mini ui image"  alt={'image display'}src={props.avatar} />
                      <div className="ui right floated header">
                          {props.name}
                      </div>
                      <div className="description">
                  {props.text}
              </div>
              </div>
              <div className="extra content">
                  <div className="ui two buttons">
                      <div className="ui basic green button">Approve</div>
                      <div className="ui basic red button">Decline</div>
                  </div>
              </div>
          </div>

      </div>
  );
};

export default CommentDetail;
