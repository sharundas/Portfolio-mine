import React from 'react'
import '../styles/resume.css'
import {Row , Col , Container} from 'react-bootstrap'



function Resume() {
  return (
   <section id='resume' className="timeline-section">
    
   <Container className="resume-container">
   <div className="text-center resume-first-head"><h2>RESUME</h2></div>
    <Row className='resume-row'>
      <Col>
      <header className="title-resume">
        <h2 className='title-resume'>EDUCATION</h2>
      </header>
      <div className="content-resume">
      <div className="box-resume">
        <h4 className='heading-resume'>2019-2020</h4>
        <h3 className='heading-resume2'>p r william hss</h3>
        <p className='resume-paragraph'>
          My 10 th Education was a remarkable achievment as i passed with full A+ ,shocasing my dedication and hard work towards academics.
          </p>
      </div>

      <div className="box-resume">
        <h4 className='heading-resume'>2020-2022</h4>
        <h3  className='heading-resume2'>p r william hss</h3>
        <p className='resume-paragraph'>
          My Higher Secondary education , where l secured an impression 94% marks , reflecting my commitment to excellence ,love for learning .
          </p>
      </div>

      <div className="box-resume">
        <h4 className='heading-resume'>2022-2025</h4>
        <h3  className='heading-resume2'>christian college kattakada</h3>
        <p className='resume-paragraph'>
          I am graduating in christian college in BSC Mathematics . it was a challenging program that providing me critical thinking ,problem solving ,algorithms.
          </p>
      </div>

      </div>
      </Col>
      <Col>
       <header className="title-resume">
        <h2 className='title-resume'>experience</h2>
      </header>
      <div className="content-resume">
      <div className="box-resume">
        <h4 className='heading-resume'>2023-2024</h4>
        <h3  className='heading-resume2'>Front end developer</h3>
        <p className='resume-paragraph'>
          I  spended freelance on frontend while the time of i learning Full stack web development i gained valuable problem solving skill and expertise .
        
          </p>
      </div>

      <div className="box-resume">
        <h4 className='heading-resume'>2022-2023</h4>
        <h3  className='heading-resume2'>fullstack learned time</h3>
        <p className='resume-paragraph'>
          On my learning time i done so many large projects  like youtube clone instagram clone it  helped me gain so many knowledge about webdevelopment.
          
          
          </p>
      </div>

      <div className="box-resume">
        <h4 className='heading-resume'>2023-2024</h4>
        <h3  className='heading-resume2'>ui/ux designer</h3>
        <p className='resume-paragraph'>
            At the some time of frontend freelancing i worked as freelance ui/ux designer and it allowed me to develop and design this  portfolio.
          </p>
      </div>
      
      </div>
      </Col>
    </Row>
   </Container>
   </section>
  )
}

export default Resume
