import React, { Fragment } from "react";
import OurTeamItem from "../Container/OurTeamItem";
import img1 from "../../images/team_01.jpg";
import img2 from "../../images/team_02.jpg";
import img3 from "../../images/team_03.jpg";

function AboutUS() {
  return (
    <Fragment>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>About Us</h1>
              <span>We have over 15 years of experience</span>
            </div>
          </div>
        </div>
      </div>

      <div className="more-info about-info">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="more-info-content">
                <div className="row">
                  <div className="col-md-6 align-self-center">
                    <div className="right-content">
                      {/*<span>our solid background on finance</span>*/}
                      <h2>
                        Get to know about <em>Ciaf Holding</em>
                      </h2>
                      <p>
                        ‘CIAF Finance Holding’ was established in October, 2008
                        as a joint stock company under the law No.95 of 1992 of
                        the Capital Market. The Company’s authorized Capital is
                        EGP 2.5 billion and the paid-in Capital is EGP 500
                        million. ‘CIAF Finance Holding’ acts as the investment
                        arm of the Egyptian civil aviation sector.
                      </p>
                      <a href="/" className="filled-button">
                        Read More
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="left-image">
                      <img src="assets/images/about-image.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team mb-3 ">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>
                  Our team <em>members</em>
                </h2>
                <span>Suspendisse a ante in neque iaculis lacinia</span>
              </div>
            </div>
            <OurTeamItem
              img={img1}
              name="Mr. Mohamed"
              title="Co-Founder"
              desc="In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis."
            />
            <OurTeamItem
              img={img2}
              name="Mary Houston"
              title="Chief Marketing Officer"
              desc="In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis."
            />
            <OurTeamItem
              img={img3}
              name="Robert Walker"
              title="Business Development Representative"
              desc="In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis."
            />
            <OurTeamItem
              img={img1}
              name="John Doe"
              title="Accountant"
              desc="In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis."
            />
            <OurTeamItem
              img={img2}
              name="Richardavis"
              title="Finance Manager"
              desc="In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis."
            />
            <OurTeamItem
              img={img3}
              name="Kevin Martin"
              title="Business Development Representative"
              desc="In sem sem, dapibus non lacus auctor, ornare sollicitudin lacus. Aliquam ipsum urna, semper quis."
            />
          </div>
        </div>
      </div>

      {/*<div className="fun-facts">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="left-content">
                <span>Lorem ipsum dolor sit amet</span>
                <h2>
                  Our solutions for your <em>business growth</em>
                </h2>
                <p>
                  Pellentesque ultrices at turpis in vestibulum. Aenean pretium
                  elit nec congue elementum. Nulla luctus laoreet porta.
                  Maecenas at nisi tempus, porta metus vitae, faucibus augue.
                  <br />
                  <br />
                  Fusce et venenatis ex. Quisque varius, velit quis dictum
                  sagittis, odio velit molestie nunc, ut posuere ante tortor ut
                  neque.
                </p>
                <a href="/" className="filled-button">
                  Read More
                </a>
              </div>
            </div>
            <div className="col-md-6 align-self-center">
              <div className="row">
                <div className="col-md-6">
                  <div className="count-area-content">
                    <div className="count-digit">945</div>
                    <div className="count-title">Work Hours</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="count-area-content">
                    <div className="count-digit">1280</div>
                    <div className="count-title">Great Reviews</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="count-area-content">
                    <div className="count-digit">578</div>
                    <div className="count-title">Projects Done</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="count-area-content">
                    <div className="count-digit">26</div>
                    <div className="count-title">Awards Won</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  */}
      {/*<div className="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>
                  What they say <em>about us</em>
                </h2>
                <span>testimonials from our greatest clients</span>
              </div>
            </div>
            <div className="col-md-12">
              <div className="owl-testimonials owl-carousel">
                <div className="testimonial-item">
                  <div className="inner-content">
                    <h4>George Walker</h4>
                    <span>Chief Financial Analyst</span>
                    <p>
                      "Nulla ullamcorper, ipsum vel condimentum congue, mi odio
                      vehicula tellus, sit amet malesuada justo sem sit amet
                      quam. Pellentesque in sagittis lacus."
                    </p>
                  </div>
                  <img src="http://placehold.it/60x60" alt="" />
                </div>

                <div className="testimonial-item">
                  <div className="inner-content">
                    <h4>John Smith</h4>
                    <span>Market Specialist</span>
                    <p>
                      "In eget leo ante. Sed nibh leo, laoreet accumsan euismod
                      quis, scelerisque a nunc. Mauris accumsan, arcu id ornare
                      malesuada, est nulla luctus nisi."
                    </p>
                  </div>
                  <img src="http://placehold.it/60x60" alt="" />
                </div>

                <div className="testimonial-item">
                  <div className="inner-content">
                    <h4>David Wood</h4>
                    <span>Chief Accountant</span>
                    <p>
                      "Ut ultricies maximus turpis, in sollicitudin ligula
                      posuere vel. Donec finibus maximus neque, vitae egestas
                      quam imperdiet nec. Proin nec mauris eu tortor consectetur
                      tristique."
                    </p>
                  </div>
                  <img src="http://placehold.it/60x60" alt="" />
                </div>

                <div className="testimonial-item">
                  <div className="inner-content">
                    <h4>Andrew Boom</h4>
                    <span>Marketing Head</span>
                    <p>
                      "Curabitur sollicitudin, tortor at suscipit volutpat, nisi
                      arcu aliquet dui, vitae semper sem turpis quis libero.
                      Quisque vulputate lacinia nisl ac lobortis."
                    </p>
                  </div>
                  <img src="http://placehold.it/60x60" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
</div>*/}
    </Fragment>
  );
}

export default AboutUS;
