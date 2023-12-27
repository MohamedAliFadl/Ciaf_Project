import React from "react";

function BMItem(props) {
  return (
    <div>
      <div className="testimonial-item">
        <img src={props.img} alt="" />
        <div className="inner-content">
          <h4>{props.name}</h4>
          <span>{props.title}</span>
          <p>
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BMItem;
