import React from "react";
import "../styles/services.css";
import { ArrowUpRightCircle } from "react-bootstrap-icons";
import imagelaptop from "../assets/person.laptop.jpg";
import { Container, Row, Col } from "react-bootstrap";
import ScrollIntoView from "react-scroll-into-view";

const services = [
  {
    name: "FULL STACK DEVELOPER",
    description:
      "Expert In Front-End and Back End Development create and maintain complex web system",
    links: "Learn more",
  },
  {
    name: "UI/UX DESIGNER",
    description:
      "Create engaging digital experience that enhance user satisfaction and functionality.",
    links: "Learn more",
  },

  {
    name: "GRAPHIC DESIGNING",
    description:
      "Graphic design is an art form that fuses aesthetics with funcrtionality to create designs",
    links: "Learn more",
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className=" service-heading">
        <h1 className="flex text-center my-5">SERVICES</h1>
      </div>
      <hr />
      <Container className="service-container">
        <Row className="text-center">
          <Col sm={12} md={6} className="service-div  ">
            <h2 className="service-heading1">WHAT I DO ?</h2>
            <hr />
            <h3 className="service-heading1">
              I'M a Freelance Full Stack Web Developer with over 1 year of
              experience.
            </h3>
            <hr />
            <div>
              <img src={imagelaptop} alt="laptop" className="image-laptop" />
            </div>
            <ScrollIntoView selector="#latestworks">
              <button className="service-button">
                SEE MY WORK <ArrowUpRightCircle size={25} />
              </button>
            </ScrollIntoView>
            <ScrollIntoView selector="#contact">
              <button className="service-button1">
                HIRE ME <ArrowUpRightCircle size={25} />
              </button>
            </ScrollIntoView>
          </Col>

          <Col sm={12} md={6} className="service-div">
            <div>
              {services.map((services, index) => {
                const { name, description, links } = services;
                return (
                  <div>
                    <div key={index}>
                      <h4 className="service-heading">{name}</h4>
                      <p className="service-paragraph">{description}</p>
                      <button className="service-button">{links}</button>
                    </div>
                    <div></div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Services;
