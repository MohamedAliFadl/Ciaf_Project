import React, { Fragment } from "react";

function SlideItem(props) {
  return (
    <Fragment>
      <div className="img-fill">
        <div className="text-content">
          <h6>{props.title}</h6>
          <h4>
            {props.name}
            <br />
            &amp; {props.title2}
          </h4>
          <p>{props.desc}</p>
          <a href={`${props.link}`} className="filled-button">
            {props.button}
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default SlideItem;
