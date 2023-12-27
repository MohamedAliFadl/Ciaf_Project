import React from "react";
import SlideItem from "./SlideItem";

const SlideShow = () => {
  return (
    <div>
      {/* <!-- Banner Starts Here --> */}
      <div className="main-banner header-text" id="top">
        <div className="Modern-Slider">
          {/* <!-- Item --> */}
          <div className="item item-1">
            <SlideItem
              title="we are ready to help you"
              name="Financial Analysis"
              title2="Consulting"
              desc="This finance HTML template is 100% free of charge provided by TemplateMo for everyone. This is a multiple-page version with different HTML pages. "
              button="contact us"
              link="ContactUS"
            />
          </div>
          {/* <!-- // Item --> */}
          {/* <!-- Item --> */}
          <div className="item item-2">
            <SlideItem
              title="we are ready to help you"
              name="Accounting"
              title2="Management"
              desc="You are allowed to use this template for your company
              websites. You are NOT allowed to re-distribute this template
              ZIP file on any template download website. Please contact
              TemplateMo for more detail."
              button="our services"
              link="/services"
            />
          </div>
          {/* <!-- // Item --> */}
          {/* <!-- Item --> */}
          <div className="item item-3">
            <SlideItem
              title="we have a solid background"
              name="Market Analysis"
              title2="Statistics"
              desc="You can download, edit and use this layout for your business
              website. Phasellus lacinia ac sapien vitae dapibus. Mauris ut
              dapibus velit cras interdum nisl ac urna tempor mollis."
              button="About US"
              link = "AboutUS"
            />
          </div>
          {/* <!-- // Item --> */}
          {/* <!-- Item --> */}
          <div className="item item-4">
            <SlideItem
              title="we are ready to help you"
              name="Financial Analysis"
              title2="Consulting"
              desc="This finance HTML template is 100% free of charge provided by TemplateMo for everyone. This is a multiple-page version with different HTML pages. "
              button="contact us"
            />
          </div>
        </div>
      </div>
      {/* <!-- Banner Ends Here --> */}
    </div>
  );
};

export default SlideShow;
