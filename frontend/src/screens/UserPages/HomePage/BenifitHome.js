import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';

const BenifitHome = () => {
  return (
    <div>
    <Row>
        <Col>
           <h2 className='p-5 mx-5'>About Us</h2>
           <p className='px-5 mx-5'>The advertisers and user guarantees that his or her Content do
              The advertisers and user guarantees that his or her Content do 
              The advertisers and user guarantees that his or her Content do The
              advertisers and user guarantees that his or her Content do The
              advertisers and user guarantees that his or her Content do </p>
           <Button className='px-5' style={{marginLeft:'90px'}}>Learn More</Button>
         </Col>
         <Col className='p-5 text-center'>
         <Image 
          src="https://i.ibb.co/GRjFMyM/1629350854-2v-Ov-GH-aaa.jpg" 
          class="rounded float-right w-100" 
          style={{width: '80%'}} 
          alt="image" />
         </Col>
      </Row>
</div>
  )
}

export default BenifitHome