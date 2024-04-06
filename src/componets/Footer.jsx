import React from "react";
import logo from "../assets/images/footer-logo.svg";
import {Facebook} from "../common/Icon"
import {Instagram} from "../common/Icon"
import {Twiter} from "../common/Icon"
import {Inded} from "../common/Icon"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className=" bg-black">
        <div className="container container2 pt-52">
          <div className=" row justify-content-between">
            <div className="col-md-4 col-12 d-flex flex-column align-items-center align-items-md-start">
              <img  src={logo} alt="logo" />
              <p  className=" font-exo fw-normal pt-28 pb-2 mb-0 text-16  lh-24 text-white">
                Follow Us
              </p>
              <div  className=" d-flex align-items-center gap-3">
                <a href="https://www.facebook.com/" target="blank">
                  <div className="svg_box">
                 <Facebook/>
                  </div>
                </a>
                <a href="https://www.instagram.com/" target="blank">
                  <div className="svg_box">
                  <Instagram/>
                  </div>
                </a>
                <a href="https://twitter.com/?lang=en" target="blank">
                  <div className="svg_box">
                  <Twiter/>
                  </div>
                </a>
                <a href="https://in.indeed.com/" target="blank">
                  <div className="svg_box">
                 <Inded/>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-5 col-12 pt-md-0 pt-4">
              <div className="row ">
                <div  className="col-6 d-flex justify-content-end">
                  <ul className=" d-flex flex-column gap-14">
                    <li className=" font-outfit fw-semibold text-16 lh-24 text-white">
                      Maine
                    </li>
                    <li>
                      <a
                        href=""
                        className=" font-exo fw-normal text-16 lh-24  white2 op_7"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className=" font-exo fw-normal text-16 lh-24  white2 op_7"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className=" font-exo fw-normal text-16 lh-24  white2 op_7"
                      >
                        services
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className=" font-exo fw-normal text-16 lh-24  white2 op_7"
                      >
                        Why Choose Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div  className="col-6 d-flex justify-content-end">
                  <ul className=" d-flex flex-column gap-14">
                    <li className=" font-outfit fw-semibold text-16 lh-24 text-white">
                      Legal
                    </li>
                    <li>
                      <a
                        href=""
                        className=" font-exo fw-normal text-16 lh-24  white2 op_7"
                      >
                        Term & Conduction
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className=" font-exo fw-normal text-16 lh-24  white2 op_7"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className=" font-exo fw-normal text-16 lh-24  white2 op_7"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className=" font-exo fw-normal text-16 lh-24  white2 op_7"
                      >
                        (629) 555-0129
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" pt-52"></div>
        <div  className="footer_line"></div>
        <div  className="container container2">
          <p className=" font-exo fw-normal mb-0 text-14 lh-21 text-white op_7 text-center pt-3 pb-35">© Copyright {new Date().getFullYear()} Noble Mind | All rights reserved. </p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
