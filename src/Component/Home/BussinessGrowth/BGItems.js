import React from "react";

function BGItems(props) {
  return (
    <div className="col-md-6">
      <div className="count-area-content">
        <div className="count-digit">{props.count}</div>
        <div className="count-title">{props.title}</div>
      </div>
    </div>
  );
}

export default BGItems;
