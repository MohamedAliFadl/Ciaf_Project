import React, { Fragment } from "react";
import "./Contact.css";
import ContactHeader from "./ContactHeader";
import ContactCallbackSection from "./ContactCallbackSection";
import ContactSection1 from "./ContactSection1";
import ContactLocation from "./ContactLocation";

function ContactUS() {
  return (
    <Fragment>
      <ContactHeader />
      <ContactSection1 />
      <ContactCallbackSection />
      <ContactLocation />
    </Fragment>
  );
}

export default ContactUS;
