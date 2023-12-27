const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-item">
            <h4>Ciaf Holding</h4>
            <p>
              is a company that contributes to the establishment or
              participation in the establishment of companies, private equity,
              securitization, and the issuance and subscription of securities.
            </p>
            <ul className="social-icons">
              <li>
                <a rel="nofollow" href="https://fb.com/templatemo">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 footer-item">
            <h4>Additional Pages</h4>
            <ul className="menu-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/AboutUS">AboutUS</a>
              </li>
              <li>
                <a href="/ContactUS">Contact Us</a>
              </li>
              <li>
                <a href="/Services">Our Services</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 footer-item last-item">
            <h4>Contact Us</h4>
            <div className="contact-form">
              <form id="contact footer-contact" action="" method="post">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12">
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
                  <div className="col-lg-12 col-md-12 col-sm-12">
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
    </footer>
  );
};

export default Footer;
