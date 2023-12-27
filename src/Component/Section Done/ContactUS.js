import React, { Fragment } from "react";

function ContactUS() {
  return (
    <Fragment>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Contact Us</h1>
              <span>feel free to send us a message now!</span>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-information">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="contact-item">
                <i className="fa fa-phone"></i>
                <h4>Phone</h4>
                <p>
                  You can contact us via phone 
                </p>
                <a href="/">Landline : +0222688360</a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-item">
                <i className="fa fa-envelope"></i>
                <h4>Email</h4>
                <p>
                  you can contact with us via mail as the below
                </p>
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

      <div className="callback-form contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>
                  Send us a <em>message</em>
                </h2>
                <span>you can send us a message now </span>
              </div>
            </div>
            <div className="col-md-12">
              <div className="contact-form">
                <form id="contact" action="" method="get">
                  <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="name"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Full Name"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="email"
                          type="text"
                          className="form-control"
                          id="email"
                          pattern="[^ @]*@[^ @]*"
                          placeholder="E-Mail Address"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                      <fieldset>
                        <input
                          name="subject"
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          required=""
                        />
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea
                          name="message"
                          rows="6"
                          className="form-control"
                          id="message"
                          placeholder="Your Message"
                          required=""></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button
                          type="submit"
                          id="form-submit"
                          className="filled-button">
                          Send Message
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="map">
        {/*<!-- How to change your own map point
1. Go to Google Maps
2. Click on your location point
3. Click "Share" and choose "Embed map" tab
4. Copy only URL and paste it within the src="" field below
  -->*/}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2052.0672412496365!2d31.388480794954063!3d30.1184644959663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145816f819888c9f%3A0x2fae42885c218dd7!2z2YjYstin2LHZhyDYp9mE2LfZitix2KfZhiDYp9mE2YXYr9mG2Yo!5e0!3m2!1sen!2seg!4v1701862539302!5m2!1sen!2seg"
          width="100%"
          height="500px"
          frameborder="0"
          style={{border:"0"}}
          allowfullscreen
          title="map"
          ></iframe>
      </div>
    </Fragment>
  );
}

export default ContactUS;
