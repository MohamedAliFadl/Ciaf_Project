import React, { Fragment } from "react";
import "./Contact.css";

function ContactCallbackSection() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default ContactCallbackSection;
