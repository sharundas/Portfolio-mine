import React from 'react'
import '../styles/footer.css'
import {Linkedin , Twitter ,Instagram , Facebook , ArrowUpCircleFill} from "react-bootstrap-icons"
import ScrollIntoView  from 'react-scroll-into-view'

function Footer() {
  return (
  <section className="footer-section">
    <div className="container align-item-center text-center border footer-container">
        <div className="row d-flex align-item-center justify-content-center p-4">
        <div className="col-lg-3 col-md-6 col-sm-12 border footer-border-div ">
          <h1 className='footer-heading'>lets talk !</h1>
          <h3 className='footer-heading'>contact info</h3>
          <p className='footer-paragraph1'>sharund034@gmail.com</p>
          <p className='footer-paragraph1'>Kerala ,Trivandrum KL-74</p>
          <p className='footer-paragraph1'>+91 9683383983</p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 border border footer-border-div ">
        <h3 className='footer-heading'>what i do?</h3>
          <p className='footer-paragraph'>The Studio</p>
          <p className='footer-paragraph'>Sponsoring</p>
          <p className='footer-paragraph'>Newsletter</p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 border border footer-border-div">
        <h3 className='footer-heading'>News</h3>
          <p className='footer-paragraph'>Hot Stuff</p>
          <p className='footer-paragraph'>Vintage</p>
          <p className='footer-paragraph'>Products</p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 border border footer-border-div">
        <h3 className='footer-heading'>Quick Link</h3>
          <p className='footer-paragraph'>Style</p>
          <p className='footer-paragraph'>Health</p>
          <p className='footer-paragraph'>Relationship</p>
        </div>
      </div>
    </div>
    <hr />
    <div className="text-center">
      <Linkedin className='mx-3 footer-icon '></Linkedin>
      <Twitter className='mx-3 footer-icon'></Twitter>
      <Instagram className='mx-3 footer-icon'></Instagram>
      <Facebook className='mx-3 footer-icon'></Facebook>
      <ScrollIntoView selector='#home' >
      <ArrowUpCircleFill className='mx-5 footer-icon1'></ArrowUpCircleFill>
      </ScrollIntoView>
      <p className='my-3'>All Rights reserved by @ SD Portfolio 2024</p>
      <hr />
    </div>
 </section>             
                 
                   
  )
}

export default Footer
