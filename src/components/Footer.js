import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LogoFoo from '../assets/LOGO-Foo.png'
import Facebook from '../assets/facebook.png'
import Twitter from '../assets/twitter.png'
import LinkdInImg from '../assets/linkedIn.png'
import GoogleImg from '../assets/google+.png'

const Footer = () => {
  return (
    <Container fluid className='footer_con'>
        <Container>
            <Row className='footer_wrapper'>
                <Col md={5} >
                    <img src={LogoFoo} />
                </Col>
                <Col md={5}>
                    <ul className='foo_details'>
                        <li><i className='fas fa-map-marker-alt' style={{fontSize: '22px',}}></i> 8819 Street Village NA, 90280</li>
                        <li><i className='fas fa-phone-volume' style={{fontSize: '22px',}}></i> +7 386-418-6395</li>
                        <li><i className="fa fa-envelope" style={{fontSize: '22px',}}></i> hello@vulus.io</li>
                    </ul>
                </Col>
                <Col md={2}>
                    <h4 className='social_head'>Follow Social Media</h4>
                    <ul className='social'>
                        <li><img src={Facebook} /></li>
                        <li><img src={Twitter} /></li>
                        <li><img src={GoogleImg} /></li>
                        <li><img src={LinkdInImg} /></li>
                    </ul>
                </Col>
            </Row>
            <Row className='footer_copy'>
                <Col md={6}>
                    <p>@Copyrights reserved</p>
                </Col>

                <Col md={6}>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </Col>
            </Row>
        </Container>
    </Container>
  )
}

export default Footer
