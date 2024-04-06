import React from "react";
import aboutimg from "../assets/images/about-img.png";
import Commonbtn from "./Commonbtn";
import ellipes from "../assets/images/ellipes_svg.svg";

const About = () => {
  return (
    <>
      <div  id="about" className=" position-relative">
        <div data-aos="zoom-in" className="aboutellipe1">
          {" "}
          <img src={ellipes} alt="aboutellipe" />
        </div>
        <div data-aos="zoom-in" className="aboutellipe2">
          <img src={ellipes} alt="aboutellipe" />
        </div>
        <div className="container container2 pt-150 pb-150">
          <div className="row">
            <div data-aos="zoom-in" className="col-lg-6 col-12 d-flex justify-content-center">
              <img className="" src={aboutimg} alt="aboutimg" />
            </div>
            <div data-aos="zoom-in" className="col-lg-6 col-12  d-flex justify-content-lg-end justify-content-center">
              <div className=" pt-17 about_pera">
                <div  className=" d-flex gap-1 align-items-center">
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.9187 6.87573L11.1603 14.2314L3.80469 16.9897L11.1603 19.7481L13.9187 27.1037L16.677 19.7481L24.0327 16.9897L16.677 14.2314L13.9187 6.87573Z"
                        fill="#00EAEC"
                      />
                      <path
                        d="M13.9187 6.87573L11.1603 14.2314L3.80469 16.9897L11.1603 19.7481L13.9187 27.1037L16.677 19.7481L24.0327 16.9897L16.677 14.2314L13.9187 6.87573Z"
                        fill="url(#paint0_linear_101_304)"
                      />
                      <path
                        d="M5.60149 1.11942L4.23608 5.25408L0.223112 6.94403L4.35777 8.30944L6.04772 12.3224L7.41314 8.18774L11.4261 6.4978L7.29144 5.13238L5.60149 1.11942Z"
                        fill="#00EAEC"
                      />
                      <path
                        d="M5.60149 1.11942L4.23608 5.25408L0.223112 6.94403L4.35777 8.30944L6.04772 12.3224L7.41314 8.18774L11.4261 6.4978L7.29144 5.13238L5.60149 1.11942Z"
                        fill="url(#paint1_linear_101_304)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_101_304"
                          x1="6.11235"
                          y1="0.224727"
                          x2="69.1736"
                          y2="54.8026"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#A854E9" />
                          <stop offset="1" stop-color="#4F91FC" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_101_304"
                          x1="1.13135"
                          y1="-2.39195"
                          x2="37.2609"
                          y2="26.4442"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#A854E9" />
                          <stop offset="1" stop-color="#4F91FC" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <p className=" mb-0 font-exo fw-normal text-16 lh-24 lite-black">
                    About Us
                  </p>
                </div>
                <h2 className=" pt-2 about_heading  font-outfit fw-light text-48 mb-0  lh-57">
                  Pioneering Vision & Mission-{" "}
                  <span className=" fw-semibold font-outfit text-48 lh-57">
                    Driven Sectoral Innovation
                  </span>
                </h2>
                <p className=" pb-42 pt-3 mb-0 font-exo fw-normal text-16 lh-24  op_7 text-black ">
                  Imagine a future in Saudi Arabia influenced by the potential
                  of Al, with Noble Mind at the forefront of this
                  transformation. Healthcare stands to gain with the promise of
                  enhanced data precision. In education, there's the potential
                  for individualized learning experiences. Finance could witness
                  seamless transactions, and entertainment may revel in
                  customized experiences. Through Al's promise, transportation
                  could innovate and cities might adapt smarter infrastructures.
                  In every domain, the vision of Noble Mind hints at a brighter,
                  more efficient nation.
                </p>
                <Commonbtn text="Read More" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
