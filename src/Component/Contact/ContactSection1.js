import React, { Fragment } from "react";

function ContactSection1() {
  return (
    <Fragment>
      <div className="contact-information">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-item">
                <i className="fa fa-phone"></i>
                <h4>Phone</h4>
                <p>You can contact us via phone</p>
                <a href="/">Landline : +0222688360</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-item">
                <i className="fa fa-envelope"></i>
                <h4>Email</h4>
                <p>you can contact with us via mail as the below</p>
                <a href="/">Ciaf@ciaf-holding.com</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-item">
                <i className="fa fa-map-marker"></i>
                <h4>Location</h4>
                <p>
                  Ministry of Civil Aviation building, Floor 4
                  <br />
                  Airplan root, Cairo
                </p>
                <a href="#map">View on Google Maps</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ContactSection1;
