import React from 'react';


const CardApproval = () => {
  return (
    <div className="ui card">
      <div className="content">
        Are you sure?
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Approve</div>
            <div className="ui basic red button">Reject</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardApproval;
