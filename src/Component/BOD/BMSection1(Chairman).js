import React, { Fragment } from "react";
import Mohamed from "../../images/BOD Members/Mohamed Heiba.jpg";
import "./BoardMember.css";

function BMSection1() {
  return (
    <Fragment>
      <section class="team-section py-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-md-12">
              <div class="card border-0 shadow-lg pt-5 my-5 position-relative">
                <div class="card-body p-4">
                  <div class="member-profile position-absolute w-100 text-center">
                    <img
                      class="rounded-circle mx-auto d-inline-block shadow-sm"
                      src={Mohamed}
                      alt=""
                    />
                  </div>
                  <div class="card-text pt-1">
                    <h5 class="member-name mb-0 text-center text-primary font-weight-bold">
                      Mr. Mohamed Heiba
                    </h5>
                    <div class="mb-3 text-center">
                      Chairman of Ciaf Holding finance
                    </div>
                    <div>
                      I am pleased to share some of my views herein. Despite the
                      fact that there is relatively good revenue realized, the
                      consolidated financials may be impacted by the application
                      of some new accounting standards, in addition to the
                      harmful effect of the pandemic of Covid-19 on our equity
                      investments However, as a forward-thinking company, we are
                      focused on strengthening our investment portfolio, in
                      order to add value in the long-term to our shareholders.
                      We do have the courage to challenge convention and adopt
                      new strategies, find opportunities and take calculated
                      risks to reach our goals. We believe in our ability to
                      accomplish great results, by continuously striving for
                      excellence and capitalize on our expertise & the
                      collective achievement of our qualified team members.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default BMSection1;
