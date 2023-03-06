import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col';
import ProductHomeLayout from '../../../layouts/ProductHomeLayout';

const ProductHome = () => {
  return (
    <div>
<Container className='sercviseTop'>
 <Col className='pb-5'>
 <Row>
           <h3 
             style={{zindex: 1}} 
             className='pt-1 text-center text-dark
             '>Our Services</h3>
           <h6 
              style={{zindex: 1}} 
              className='text-center text-dark'>What will get the energy of group workout</h6>
        </Row>

  <Row className='pt-2'>
    <ProductHomeLayout />
    <ProductHomeLayout />
    <ProductHomeLayout />
    <ProductHomeLayout />
   </Row>
 </Col>

 <Col className='pb-3'>
  <Row className='pt-3'>
  <ProductHomeLayout />
  <ProductHomeLayout />
  <ProductHomeLayout />
  <ProductHomeLayout />
  </Row>
 </Col>
</Container>
</div>
  )
}

export default ProductHome