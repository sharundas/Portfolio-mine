import React from 'react';
import { ArrowUpRightCircle ,Linkedin ,Github ,Instagram } from 'react-bootstrap-icons';
import '../styles/home.css';
import { Container, Col , Row } from "react-bootstrap";
import image from '../assets/profile.gif';
import { Link } from 'react-router-dom'; 

function Home() {
  return (
    <section className="banner" id="home">
     <Container>
      <Row className="align-item-center">
        <Col xs={12} lg={6}  xl={7}>
          <span className="tagline">WELCOME TO MY DIGITAL PLAYGROUND</span>
          <h1 className="name-1">{`I AM SHARUN DAS`} <span className='wrap'> FULL-STACK-WEB-DEVELOPER</span></h1>
          <p className=""> with creative mind and a knack for coding.Take a see too my portfolio and contact me if you need</p>

          
          <Link to="/contact" className="button-home">LET'S CONNECT <ArrowUpRightCircle  size={25} /> </Link>

          <br />
          <div className="home-icon-div">
            <a href="https://linkedin.com" target={"_blank"} rel='noopener noreferrer'>
              <Linkedin className='my-5 mx-4 home-icon'></Linkedin>
            </a>
            <a href="https://github.com" target={"_blank"} rel='noopener noreferrer'>
              <Github className='my-5 mx-4 home-icon'></Github>
            </a>
            <a href="https://instagram.com" target={"_blank"} rel='noopener noreferrer'>
              <Instagram className='my-5 mx-4 home-icon'></Instagram>
            </a>
          </div>
        </Col>

         <Col xs={12} lg={6}  xl={5}>
            <div className="hexagon">
              <img className="person-1" src={image} alt="" />
            </div>
          </Col>
      </Row>
     </Container>
    </section>
  )
}

export default Home;
