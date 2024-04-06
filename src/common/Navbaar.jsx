"use client";
import React from "react";
import logo from "../assets/images/logo.svg";
import { useState } from "react";
import Commonbtn from "../componets/Commonbtn";
const Navbaar = () => {
  const [nav, setNav] = useState(false);
  function show() {
    setNav(!nav);
  }
  if (nav === true) {
    document.body.classList.add("overflow_hidden");
  } else {
    document.body.classList.remove("overflow_hidden");
  }

  return (
    <div>
      <div className="container container2 w-100 py-19">
        <nav className=" d-flex align-items-center justify-content-between pt-24 pb-23    ">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <ul
            className={`${
              nav ? "start-0" : "start_100"
            } mb-0 ps-0 d-flex align-items-center gap-24 mobile_view `}
          >
            <li>
              <a
                onClick={show}
                href="#home"
                className="   font-exo fw-normal text-16 lh-24  nav_text "
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={show}
                href="#about"
                className="   font-exo fw-normal text-16 lh-24  nav_text "
              >
                About Us
              </a>
            </li>
            <li>
              <a
                onClick={show}
                href="#serviec"
                className="   font-exo fw-normal text-16 lh-24  nav_text "
              >
                Services
              </a>
            </li>
            <li>
              <a
                onClick={show}
                href="#choose"
                className="   font-exo fw-normal text-16 lh-24  nav_text "
              >
                Why Choose Us
              </a>
            </li>
            <li>
              <a
                onClick={show}
                href="#blogs"
                className="   font-exo fw-normal text-16 lh-24  nav_text "
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                onClick={show}
                href="#faq"
                className="   font-exo fw-normal text-16 lh-24  nav_text "
              >
                FAQ
              </a>
            </li>
            <Commonbtn text="Contact Us" />
          </ul>
          <div
            onClick={show}
            className="menu d-block d-lg-none position-relative  z-3"
          >
            <span></span>
            <span className="my-2"></span>
            <span></span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbaar;
