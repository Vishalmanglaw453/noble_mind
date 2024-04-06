"use client";
import React from "react";
import Navbaar from "../common/Navbaar";


const Hero = () => {
  
  return (
    <>
      <header className="  hero_bg d-flex flex-column">
       <div>
        <Navbaar/>
       </div>
   
        <div id="hero"  className="container container2 w-100 d-flex flex-column flex-grow-1 justify-content-center  ">
          <div data-aos="zoom-in" className=" d-flex gap-1 align-items-center">
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
              AI With Noble Mind
            </p>
          </div>
          <h1 data-aos="zoom-in" className=" pt-2 hero_heading  font-outfit fw-light text-64 mb-0  lh-70">
            Inspiring Innovation, Elevating Solutions –{" "}
            <span className=" fw-semibold font-outfit text-48 lh-57">
              Noble Mind"
            </span>
          </h1>
          <p data-aos="zoom-in" className=" font-exo fw-normal text-16 lh-24 hero_heading pt-3">At Noble Mind is a forward-thinking AI specialised company dedicated to reshaping the future of how we live, work, and learn. Our mission is to create ground-breaking AI solutions for Healthcare, Education, and beyond, aligning with Saudi Arabia’s Vision 2030.”</p>
        </div>
      </header>
    </>
  );
};

export default Hero;
