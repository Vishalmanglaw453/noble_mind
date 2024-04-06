import React from "react";
import Slider from "react-slick";
import { drving } from "../common/Helper";
import ellipes from "../assets/images/ellipes_svg.svg";

import choose from "../assets/images/choose-img.png";
const Choose = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" position-relative" id="choose">
        <div data-aos="zoom-in" className="chooseellipe1">
          {" "}
          <img src={ellipes} alt="aboutellipe" />
        </div>
        <div data-aos="zoom-in" className="chooseellipe2">
          {" "}
          <img src={ellipes} alt="aboutellipe" />
        </div>
        <div className="container container2">
          <div data-aos="zoom-in" className=" d-flex gap-1 align-items-center justify-content-center">
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
              Why Choose Us
            </p>
          </div>
          <h2 data-aos="zoom-in" className=" pt-2  text-center   font-outfit fw-light text-48 mb-0  lh-57">
            Driving Innovation &
            <span className=" d-block fw-semibold font-outfit text-48 lh-57">
              Transforming Industries
            </span>
          </h2>

          <Slider  {...settings} className="pt-52">
            {drving.map((data, index) => (
              <>
                <div data-aos="zoom-in"  className=" d-flex justify-content-center align-items-center">
                  <div className="Driving_card">
                    <div className="number_box  bg-opacity-50 mb-1 d-flex justify-content-center align-items-center">
                      <span className=" text_grident  font-outfit text-20 fw-bold">
                        {data.number}
                      </span>
                    </div>
                    <h3 className=" mb-0 font-outfit   fw-normal text-20 pt-2   lh-25 lite-black">
                      {data.heading}
                    </h3>
                    <p className="Driving_pera font-exo fw-normal pt-1 mb-0 text-16 lh-24 lite-black op_7">
                      {data.pera}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </Slider>

          <div data-aos="zoom-in" className="pb-150">
            <img src={choose} alt="choose" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;
