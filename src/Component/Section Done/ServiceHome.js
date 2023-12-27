import React, { Fragment } from "react";
import pic1 from "../../images/leasing.jpg";
import pic2 from "../../images/smart.jpg";
import pic3 from "../../images/Iskan.png";
import pic4 from "../../images/Ciaf Health Care.jpg";
// import Afaq from '../../images/Afaaq.jpg'
import ServiceItem, { Invesment } from "../Container/ServiceItem";
import "./CSS/Services.css";
const ServiceHome = () => {
  return (
    <Fragment>
      <div>
        <div className="services">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>
                    Our <em>Subsidiaries</em>
                  </h2>
                  <span>Our Subsidiaries company</span>
                </div>
              </div>
              <ServiceItem
                img={pic1}
                name="Ciaf Leasing"
                desc="CIAF LEASING is a joint venture that was established on June 16, 2009 at the Paris Air Show, between ‘CIAF Finance Holding’  and other Egyptian state-owned"
              />
              <ServiceItem
                img={pic2}
                name="Smart Aviation"
                desc="The company was established in 2007 to be the first corporate jet operator in the country to cater for businessmen, politicians and executive air travellers"
              />
              <ServiceItem
                img={pic3}
                name="Iskan Insurance"
                desc="ISKAN Insurance was established in December 2008 The Company’s authorized Capital is EGP 500 million and the paid-in Capital is EGP 100 million"
              />
              <ServiceItem
                img={pic4}
                name="Ciaf Consulting"
                desc="ISKAN Insurance was established in December 2008 The Company’s authorized Capital is EGP 500 million and the paid-in Capital is EGP 100 million"
              />
            </div>
          </div>
        </div>
      </div>
{/*      <div>
        <div className="services">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="section-heading">
                  <h2>
                    Our <em>Subsidiaries</em>
                  </h2>
                  <span>Our Subsidiaries company</span>
                </div>
              </div>
              <Invesment
                img={Afaq}
                name="Afaaq Fund"
                desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
              />
              <Invesment
                img={Afaq}
                name="Sarwaty Fund"
                desc="CIAF LEASING is a joint venture that was established on June 16, 2009 at the Paris Air Show, between ‘CIAF Finance Holding’  and other Egyptian state-owned"
              />
            </div>
          </div>
        </div>
  </div>*/}
    </Fragment>
  );
};

export default ServiceHome;
