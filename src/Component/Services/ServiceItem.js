import React from "react";

function ServiceItem(props) {
  return (
    <div className="col-md-3">
      <div className="service-item">
        <img src={props.img} alt={props.name} />
        <div className="down-content">
          <h4>{props.name}</h4>
          <p>{props.desc}</p>
          <a href="/" className="filled-button">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
function Invesment(props) {
  return (
    <div className="col-md-6">
      <div className="service-item">
        <img src={props.img} alt={props.name} />
        <div className="down-content">
          <h4>{props.name}</h4>
          <p>{props.desc}</p>
          <a href="/" className="filled-button">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
export {Invesment};
