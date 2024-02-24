import React from 'react'
import "../styles/contact.css"
import {Container, Row , Col, Form ,Button } from 'react-bootstrap'
import phone from '../assets/phone.png'
import email from '../assets/email.png'
import location from '../assets/location.jpg'
import '../styles/contact.css'
function Contacts() {
  return (
    <section id="contact" className="">
      <div id='section-contact' className="text-center my-5"><h2 className="contact-heading">CONTACT ME</h2></div>
      <Container className="contact-container">
         <Row className="">
          <Col sm ={12} lg ={6} className="contact-col1">
            <div className="contact-information-div">
            <h4 className="contact-paragraph-left">CONTACT INFORMATION </h4>
            <p className="contact-paragraph-left">
              The contact page on my portfolio provides a direct means for visitors to connect with me.
             </p>
             </div>
            
            <div className="contactfrom-div">
            <img src= {phone} height={60} width={60} alt=""className="icon-contact" />
            <div className="contactfrom-div2">
            <p className="contact-paragraph-left">Contact phone</p>
            <p className="contact-paragraph-left">38737383993 </p>
            <p className="contact-paragraph-left">34665456536</p>
            </div>
            </div>
            <hr />
            <div className="contactfrom-div22">
            <img src= {email} height={60} width={60} alt=""className="icon-contact" />
            <div className="contactfrom-div2">
            <p className="contact-paragraph-left">Contact Email</p>
            <p className="contact-paragraph-left">sharundas@gmail.com</p>
            <p className="contact-paragraph-left">sharujnd034@gmail.com</p>
            </div>
            </div>
            <hr />
            <div className="contactfrom-div">
            <img src= {location} height={60} width={60} alt="" className="icon-contact"/>
            <div className="contactfrom-div2">
            <p className="contact-paragraph-left">Contact Address</p>
            <p className="contact-paragraph-left">INDIA , KERALA</p>
            <p className="contact-paragraph-left">Trivandrum , kattakada</p>
            </div>
            </div>

          </Col>
          <Col sm ={12} lg ={6} className="col-contact"> 
          <Form>
      <Form.Group className="mb-3 formgroup-contact" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3 formgroup-contact" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3 formgroup-contact" controlId="formBasicCheckbox">
      
      <Form.Group className="mb-3 formgroup-contact" controlId="formBasicPassword">
        <Form.Label>Type The Subject</Form.Label>
        <Form.Control type="Message" placeholder="Enter Subject" />
      </Form.Group>
      <Form.Group className="mb-3 formgroup-contact" controlId="formBasicCheckbox"></Form.Group>

      <Form.Group className="mb-3 formgroup-contact" controlId="formBasicPassword">
        <Form.Label>Write the needs</Form.Label>
        <Form.Control type="Message" placeholder="Message" />
      </Form.Group>
      <Form.Group className="mb-3 formgroup-contact" controlId="formBasicCheckbox"></Form.Group>


      </Form.Group>
      <Button variant="primary" type="submit" className="contact-button">
        Submit
      </Button>
    </Form>
          </Col>
         </Row>
      </Container>
    </section>                
  )
}

export default Contacts
    