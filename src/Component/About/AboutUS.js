import React, { Fragment } from "react";
import "./AboutUS.css";
import AboutSection2 from "./AboutSection2";
import AboutSection1 from "./AboutSection1";
import AboutHeader from "./AboutHeader";

function AboutUS() {
  return (
    <Fragment>
      <AboutHeader />
      <AboutSection1 />
      <AboutSection2 />
    </Fragment>
  );
}

export default AboutUS;
