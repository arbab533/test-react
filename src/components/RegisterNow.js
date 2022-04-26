import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import registerImg from '../assets/img-re.png';
import arrowImg from '../assets/Icon-feather-arrow-right.png'

const RegisterNow = () => {
  return (
    <>
      <Container className='register_con'>
          <Row>
              <Col md={6} className='left '>
                  <img src={registerImg} />
              </Col>
              <Col md={6} className='right my-auto'>
                  <h3 className='sub_head'>+1 Million Users</h3>
                  <h2 className='main_head'>Register Now</h2>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                  <a href='/' className='banner_btn'>
                    <p>Start your</p>
                    <img src={arrowImg} />
                    <p>journey</p>
                </a>
              </Col>
          </Row>
      </Container>
    </>
  )
}

export default RegisterNow
