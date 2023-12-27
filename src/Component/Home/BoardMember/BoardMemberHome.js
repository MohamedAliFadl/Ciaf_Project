import React, { Fragment } from "react";
import Mahmoud from "../../../images/BOD Members/Mahmoud El-Sakka.jpg";
import Mohamed from "../../../images/BOD Members/Mohamed Heiba.jpg";
import Yehia from "../../../images/BOD Members/Yehia Esmail.jpg";
import mohamed from "../../../images/BOD Members/Mohamed Mohei El-din.jpg";
import Hesham from "../../../images/BOD Members/Hesham Hallouda.jpg";
import Ciaflogo from "../../../images/BOD Members/CIAf_Logo2.png";
import BMItem from "./BMItem";

const BoardMemberHome = () => {
  return (
    <Fragment>
      <div className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>
                  Our <em>Board Members</em>
                </h2>
                {/* <span>testimonials from our greatest clients</span> */}
              </div>
            </div>
            <div className="col-md-12">
              <div className="owl-testimonials owl-carousel">
                <BMItem img={Mohamed} name="Mohamed Heiba" title="Chairman & CEO of CIAF Holding of Civil aviation holding Company " desc="Support & Development Civil Aviation Fund (SADCAF)"/>
                <BMItem img={Yehia} name="Yehia Esmail" title="Board Member" desc="EgyptAir Holding Company"/>
                <BMItem img={mohamed} name="Mohamed Mohei El-din" title="Board Member" desc="Independent Board Member"/>
                <BMItem img={Hesham} name="Hesham Hallouda" title="Board Member" desc="Independent Board Member"/>
                <BMItem img={Mahmoud} name="Mahmoud El-Sakka" title="Board Member" desc="Independent Board Member"/>
                <BMItem img={Ciaflogo} name="Rady Mostafa Rady" title="Board Member" desc="Support & Development Civil Aviation Fund (SADCAF)"/>
                <BMItem img={Ciaflogo} name="Mona El Baiar" title="Board Member" desc="Egyptian Holding Company for Airports and Air Navigation"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BoardMemberHome;
