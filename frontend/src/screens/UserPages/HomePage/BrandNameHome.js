import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col';
import BrandHomeLayout from '../../../layouts/BrandHomeLayout';

const BrandNameHome = () => {
  return (
    <div>
    <Container className='sercviseTop'>
     <Col className='pb-5'>
     <Row>
               <h3 
                 style={{zindex: 1}} 
                 className='pt-1 text-center text-dark
                 '>Shop By Brand</h3>
               <h6 
                  style={{zindex: 1}} 
                  className='text-center text-dark'>All your favourite brands under one roof.</h6>
            </Row>
    
      <Row className='pt-2'>
        <BrandHomeLayout />
        <BrandHomeLayout />
        <BrandHomeLayout />
       </Row>
     </Col>
    
     <Col className='pb-3'>
      <Row className='pt-3'>
      <BrandHomeLayout />
      <BrandHomeLayout />
      <BrandHomeLayout />
      </Row>
     </Col>
    </Container>
    </div>
  )
}

export default BrandNameHome