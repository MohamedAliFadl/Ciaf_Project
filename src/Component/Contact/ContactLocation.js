import React, { Fragment } from "react";

function ContactLocation() {
  return (
    <Fragment>
      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2052.0672412496365!2d31.388480794954063!3d30.1184644959663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145816f819888c9f%3A0x2fae42885c218dd7!2z2YjYstin2LHZhyDYp9mE2LfZitix2KfZhiDYp9mE2YXYr9mG2Yo!5e0!3m2!1sen!2seg!4v1701862539302!5m2!1sen!2seg"
          width="100%"
          height="500px"
          frameBorder="0"
          style={{ border: "0" }}
          allowFullScreen
          title="map"></iframe>
      </div>
    </Fragment>
  );
}

export default ContactLocation;
