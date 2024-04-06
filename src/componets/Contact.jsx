import React from "react";
import contact from "../assets/images/contact-img.png";
import Commonbtn from "./Commonbtn";

const Contact = () => {
  return (
    <>
      <React.Fragment>
        <div className="container container2" id="blogs">
          <div className="row">
            <div className="col-lg-6 col-12 order-2 order-lg-1 d-flex justify-content-center justify-content-lg-start">
              <div>
              <h2 data-aos="zoom-in" className=" font-outfit fw-semibold text-48 lh-57 lite-black">
                Contact <span className=" fw-light"> Us</span>
              </h2>
              <p data-aos="zoom-in" className=" font-exo contact_pera fw-normal text-16 lh-24 lite-black op_7">
                Feel free to contact us any time . We will get back to you as
                soon as we can!{" "}
              </p>
              <div >
              <form action="/action_page.php" data-aos="zoom-in">
                <div data-aos="zoom-in" className=" d-flex max-w-478  flex-xl-row flex-column align-items-center gap-11 w-100">
                  <div className=" d-flex w-100 flex-column">
                    <label for="name"  className=" mb-0 pb-1 font-exo fw-normal text-16 lh-24">
                      Name
                    </label>
                    <input
                      type="text" id="name"
                      className="input_box1  font-exo  lite-black"
                    />
                  </div>
                  <div className=" d-flex w-100 flex-column">
                    <label for="fname" className=" mb-0 pb-1 font-exo fw-normal text-16 lh-24">
                      Last Name
                    </label>
                    <input id="fname"
                      type="text"
                      className="input_box1  font-exo  lite-black"
                    />
                  </div>
                </div>
                <div data-aos="zoom-in" className=" pt-3 max-w-478">
                  <p className=" mb-0 pb-1 font-exo fw-normal text-16 lh-24"></p>
                  <label for="email"  className=" mb-0 pb-1 font-exo fw-normal text-16 lh-24">
                    Email
                  </label>
                  <input id="email" 
                    type="email"
                    className="input_box2  font-exo  lite-black"
                  />
                </div>
                <div data-aos="zoom-in" className=" pb-24 pt-3 max-w-478">
                  <label for="Message"  className=" mb-0 pb-1 font-exo fw-normal text-16 lh-24">
                    Message
                  </label>
                  <textarea
                    type="text" id="Message" 
                    className="input_box2  font-exo resize lite-black"
                  ></textarea>
                </div>
                <Commonbtn text="Submit" />
              </form>
              </div>
              </div>
            </div>
            <div data-aos="zoom-in" className="col-lg-6 col-12  order-1 order-lg-2 d-flex justify-content-center justify-content-lg-start">
              <img src={contact} alt="contact" />
            </div>
          </div>
        </div>
      </React.Fragment>
    </>
  );
};

export default Contact;
