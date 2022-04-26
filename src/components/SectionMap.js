import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mapImg from '../assets/Group-23944.png'

const SectionMap = () => {
  return (
    <>
      <Container className='map_container'>
          <Row>
            <Col md={12}>
                <h3 className='map_head'>Millions of <b>businesses <span style={{color: '#8DD8D3'}}></span>Worldwide</b> choose E-REC</h3>
            </Col>
            <Col md={12} className='text-center'>
              <img src={mapImg} />
            </Col>
        </Row>
      </Container>
    </>
    
    
  )
}

export default SectionMap
