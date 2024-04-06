import React from "react";
import Commonbtn from "./Commonbtn";
import ellipes from "../assets/images/ellipes_svg.svg";

const Subscribe = () => {
  return (
    <>
      <div className="bg-grident position-relative">
      <div className="subscribeellipe1"> <img src={ellipes} alt="aboutellipe" /></div>
        <div className=" container container2 pt-150 d-flex justify-content-center">
          <div data-aos="zoom-in" className="subscribe_box footer_box_bg_img">
            <h2 data-aos="zoom-in" className="  mb-0 font-outfit text-center fw-semibold text-48 lh-57 white2 ">
              <span className=" fw-light">Subscribe to our</span> Newsletter!
            </h2>
            <p data-aos="zoom-in" className="mb-0  mt-2 font-exo fw-normal text-16 lh-24 white2 text-center">
              Be the first to get exclusive offers and the latest news.
            </p>

            <div data-aos="zoom-in" className=" d-flex justify-content-center">
              <div className="input_box3 d-flex align-items-center justify-content-between">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="   w-50 bg-transparent  white2 subscribe_input"
                />
               <button className="Subscribe_btn d-none d-sm-block">Subscribe</button>
              </div>
            </div>
            <div className=" d-flex justify-content-center"><button className="Subscribe_btn mt-3 d-sm-none d-block">Subscribe</button></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
