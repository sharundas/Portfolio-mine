import React from "react";
import "../styles/projects.css";
import calculator from "../assets/calculator.jpg";
import hotel from "../assets/hotel.jpg";
import passwordgenerator from "../assets/passwordgenarator.jpg";
import tiktoe from "../assets/tik-toe.jpg";
import blog from "../assets/blog.png";
import validationform from "../assets/validationform.webp";
import uiux1 from "../assets/uiux1.jpg";
import uiux2 from "../assets/uiux2.jpg";
import { Card, Button } from "react-bootstrap";

const cards = [
  {
    title: "Card 1",
    image: calculator,
    description: "CALCULATOR PROJECT",
    buttonLabel: "SEE",
    buttonUrl: "#",
  },
  {
    title: "Card 2",
    image: hotel,
    description: "RESTUARANT PROJECT",
    buttonLabel: "SEE",
    buttonUrl: "#",
  },
  {
    title: "Card 3",
    image: passwordgenerator,
    description: "PASSWORD CHECKER PROJECT",
    buttonLabel: "SEE",
    buttonUrl: "#",
  },
  {
    title: "Card 4",
    image: blog,
    description: "STATIC BLOG PROJECT",
    buttonLabel: "SEE",
    buttonUrl: "#",
  },
  {
    title: "Card 5",
    image: tiktoe,
    description: "TICTACTOE GAME PROJECT",
    buttonLabel: "SEE",
    buttonUrl: "#",
  },
  {
    title: "Card 6",
    image: validationform,
    description: "FORM VALIDATION PROJECT",
    buttonLabel: "SEE",
    buttonUrl: "#",
  },
  {
    title: "Card 7",
    image: uiux1,
    description: "UI/UX DESIGN PROJECT",
    buttonLabel: "SEE",
    buttonUrl: "#",
  },
  {
    title: "Card 8",
    image: uiux2,
    description: "UI/UX DESIGN PROJECT",
    buttonLabel: "SEE",
    buttonUrl: "#",
  },
];

function Projects() {
  return (
    <section id="latestworks" className="project-section ">
      <div className="text-center my-5">
        <h2>LATEST WORK</h2>
      </div>
      <div className="container-fluid">
        <div className="row text-align center d-flex justify-content-center">
          {cards.map((card, index) => (
            <div
              className=" col-lg-4  col-sm-6 mb-4 text-align center d-flex justify-content-center"
              key={index}
            >
              <Card style={{ width: "75%" }} className="project-cards">
                <Card.Img
                  variant="top"
                  src={card.image}
                  className="project-img"
                />
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text className="text-center d-flex align-item-center justify-content-center">
                    {card.description}
                  </Card.Text>

                  <Button
                    href={card.buttonUrl}
                    className="text-center d-flex align-item-center justify-content-center button-project"
                  >
                    {card.buttonLabel}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
