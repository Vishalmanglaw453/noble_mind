import React from "react";
import ellipes from "../assets/images/ellipes_svg.svg";
import Accordion from "react-bootstrap/Accordion";
import { useEffect } from "react";
const Frequently = () => {
  return (
    <>
      <div className=" position-relative" id="faq">
        <div data-aos="zoom-in" className="frequentyellipe1">
          {" "}
          <img src={ellipes} alt="aboutellipe" />
        </div>
        <div data-aos="zoom-in" className="frequentyellipe2">
          {" "}
          <img src={ellipes} alt="aboutellipe" />
        </div>

        <div className="container container2 pt-150">
          <h2 data-aos="zoom-in" className=" font-outfit mb-0 text-center fw-semibold text-48 lh-57 lite-black">
            <span className=" fw-light"> Frequently</span>
            Asked Questions
          </h2>
          <p data-aos="zoom-in" className=" font-exo mt-2   fw-normal text-16 lh-24 text-center mb-0 lite-black op_7">
            Lorem ipsum dolor sit amet consectetur. Orci augue mollis eu{" "}
            <span className=" d-block">
              volutpat mi leo. Nibh nisl consequat metus.
            </span>
          </p>

          <Accordion data-aos="zoom-in">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What is Artificial Intelligence (AI)?
              </Accordion.Header>
              <Accordion.Body className="max_w_acc">
                Artificial Intelligence refers to the development of computer
                systems that can perform tasks that typically require human
                intelligence. These tasks include learning, reasoning,
                problem-solving, perception, and language understanding.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                How does AI benefit our company?
              </Accordion.Header>
              <Accordion.Body>
                Artificial Intelligence refers to the development of computer
                systems that can perform tasks that typically require human
                intelligence. These tasks include learning, reasoning,
                problem-solving, perception, and language understanding.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What types of AI technologies are relevant to our industry?
              </Accordion.Header>
              <Accordion.Body>
                Artificial Intelligence refers to the development of computer
                systems that can perform tasks that typically require human
                intelligence. These tasks include learning, reasoning,
                problem-solving, perception, and language understanding.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                How can our employees adapt to AI integration?
              </Accordion.Header>
              <Accordion.Body>
                Artificial Intelligence refers to the development of computer
                systems that can perform tasks that typically require human
                intelligence. These tasks include learning, reasoning,
                problem-solving, perception, and language understanding.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                How can our company ensure data security with AI?
              </Accordion.Header>
              <Accordion.Body>
                Artificial Intelligence refers to the development of computer
                systems that can perform tasks that typically require human
                intelligence. These tasks include learning, reasoning,
                problem-solving, perception, and language understanding.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Frequently;
