import React from 'react';

import '../styles/about.css'
import {Container, Row , Col} from 'react-bootstrap'


function About() {
  return (
  <section id='about' className="about-section">
    <div  >
      <a href="About" className="about-me">ABOUT ME</a>
    </div>
      <Container  className="container-about " >
     
        <Row className="align-item-center ">
          <Col   md ={6} className="col-about1" >
          
            <h1 className="about-h1">who am i?</h1>
            <hr />
            <p className="about-p">Hi there! My name is SHARUNDAS, and I am a Full stack web developer with over 1 years of experience in the field
             I have a passion for creating clean, functional, and user-friendly websites that provide an exceptional user experience.
             I am committed to staying up-to-date with the latest trends and technologies in web development. I regularly attend conferences and workshops to
             learn new skills and expand my knowledge. This helps me stay ahead of the curve and provide the best possible solutions to my clients.
             </p>
          
          </Col>
          <Col   md ={6}  className="col-about2" >
          
          <h1 className="about-h1" >get to know</h1>
          <hr />
          
          <h4 className="about-p1">Full Name  : <span className='span-about-p1'>SHARUNDAS Y</span>  </h4>
          <h4 className="about-p1">Age : <span className="span-about-p1"> 20YEARS</span> </h4>
          <h4 className="about-p1">Nationality : <span className="span-about-p1">INDIA</span> </h4>
          <h4 className="about-p1">Languages Known: <span className="span-about-p1"> ENGLISH , MALAYALAM , </span></h4>
          <h4 className="about-p1">Address : <span className="span-about-p1"> SHARON BHAVAN MYLAKKARA PO</span></h4>
          <h4 className="about-p1">Freelance : <span className="span-about-p1"> Available </span></h4>
          <h4 className="about-p1">job : <span className="span-about-p1 ">searching</span> </h4>
          

        
          </Col>
        </Row>
       
      </Container>
  </section>
  )
}

export default About
