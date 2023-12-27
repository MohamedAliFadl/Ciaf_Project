import React, { Fragment } from "react";
import img1 from "../../images/team_01.jpg";
import img2 from "../../images/team_02.jpg";
import img3 from "../../images/team_03.jpg";
import OurTeamItem from "./OurTeamItem";

function AboutSection2() {
  return (
    <Fragment>
      <div className="team mb-3 ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>
                  Our team <em>Members</em>
                </h2>
                <span>Head of Departments</span>
              </div>
            </div>
            <OurTeamItem
              img={img1}
              name="Mr.Khaled Mosad"
              title="Finance Manager"
            />
            <OurTeamItem
              img={img2}
              name="Miss Rehab ElAbd"
              title="CEO Office Manager"
            />
            <OurTeamItem
              img={img3}
              name="Mr.Ahmed Taha"
              title="Legal affairs manager"
            />
            <OurTeamItem img={img2} name="Diana El-Sawy" title="HR Manager" />
            <OurTeamItem img={img2} name="Heba Mostafa" title="Admin Manager" />
            <OurTeamItem
              img={img2}
              name="Walaa Sayed"
              title="Purchising Manager"
            />
            <OurTeamItem img={img3} name="Mohamed Ali" title="IT Manager" />
            <OurTeamItem
              img={img3}
              name="Ahmed Metwally"
              title="Internal Auditor"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AboutSection2;
