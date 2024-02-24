import React from "react";
import "../styles/skill.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import css from "../assets/css.jpg";
import bootstrap from "../assets/bootstrap-icon.jpg";
import express from "../assets/express.png";
import framer from "../assets/framer.webp";
import git from "../assets/git1.png";
import html1 from "../assets/html.icon.jpg";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.jpg";
import node from "../assets/node.png";
import react1 from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import threejs from "../assets/threejs.png";

function Skills() {
  return (
    <section id="skill" className="skill-section">
      <div className="text-center my-5">
        <h1>
          {" "}
          <a href="http://Skill.js">skill</a>
        </h1>
      </div>

      {/* MY <span className="skill-span"  > SKILLS</span> */}

      <Container className="skill-container">
        <Row className="text-center">
          <Col sm={12} lg={6} className="">
            <h2 className="skill-heading my-3">TECH-SKILLS</h2>
            <hr className="skill-hr" />
            <div className="my-3">
              <img
                src={html1}
                alt="logo"
                height={60}
                width={80}
                className="skill-icon"
              />
              <img
                src={css}
                alt="logo"
                height={60}
                width={80}
                className="skill-icon"
              />
              <img
                src={bootstrap}
                alt="logo"
                height={60}
                width={80}
                className="skill-icon"
              />
              <img
                src={javascript}
                alt="logo"
                height={60}
                width={80}
                className="skill-icon"
              />
            </div>
            <div className="my-3">
              <img
                src={node}
                alt="logo"
                height={60}
                width={80}
                className="skill-icon"
              />
              <img
                src={react1}
                alt="logo"
                height={60}
                width={80}
                className="skill-icon"
              />
              <img
                src={express}
                alt="logo"
                height={60}
                width={80}
                className="skill-icon"
              />
              <img
                src={mongodb}
                alt="logo"
                height={60}
                width={80}
                className="skill-icon"
              />
            </div>
            <div className="my-3">
              <img
                src={tailwind}
                alt="logo"
                height={60}
                width={80}
                className="skill-icon"
              />
              <img
                src={framer}
                alt="logo"
                height={60}
                width={80}
                className="skill-icon"
              />
              <img
                src={git}
                alt="logo"
                height={60}
                width={80}
                className="skill-icon"
              />
              <img
                src={threejs}
                alt="logo"
                height={60}
                width={80}
                className="skill-icon"
              />
            </div>
            {/* <h3 className="skill-heading">01 COMMUNICATIVE</h3>
        <p className="skill-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos incidunt dolorem, a alias asperiores explicabo?</p>
         */}
            <Form.Label className="skill-range">javascript [80%]</Form.Label>
            <Form.Range className="skill-range" />
            <Form.Label className="skill-range">HTML CSS [90%]</Form.Label>
            <Form.Range className="skill-range" />
            <Form.Label className="skill-range">React JS [85%]</Form.Label>
            <Form.Range className="skill-range" />
          </Col>
          <Col sm={12} lg={6}>
            <h2 className="skill-heading my-3">SOFT AND OTHER SKILLS</h2>
            <hr className="skill-hr" />
            <h3 className="skill-heading">02 COMMUNICATIVE</h3>
            <p className="skill-paragraph">
              As a good communicator , i am skilled in conveying ideas clearly
              and listening actively.
            </p>
            <h3 className="skill-heading">03 INNOVATIVE</h3>
            <p className="skill-paragraph">
              As a innovative individual , i enjoy exploring solution to complex
              problems.{" "}
            </p>
            <h3 className="skill-heading">04 CREATIVE</h3>
            <p className="skill-paragraph">
              As a creative , i possess a unique blend of imagination and
              practicality enable me to produce effective solution
            </p>
            <h3 className="skill-heading">04 SELF LEARNER</h3>
            <p className="skill-paragraph">
              As a good self learner i have a natural curiosity and drive to
              continously develop new skill and knowledge
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
