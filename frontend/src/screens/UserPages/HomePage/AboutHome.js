import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';


function AboutHome() {
  return (
    <div>
          <Row>
              <Col>
                 <h2 className='p-5 mx-5'>Benefit From Choosing the best</h2>
                 <p className='px-5 mx-5'>Over 10,000 branded products serving all your needs.Over 
10,000 branded products serving all your needs. </p>
                 <Button className='px-5' style={{marginLeft:'90px'}}>Learn More</Button>
               </Col>
               <Col className='p-1 text-center'>
               <Image 
                src="https://i.ibb.co/kXMdLTx/pngtree-neem-branch-leaf-ayurveda-green-png-image-5320051-png.png" 
                class="rounded float-right w-100" 
                style={{width: '80%'}} 
                alt="image" />
               </Col>
            </Row>
    </div>
  )
}

export default AboutHome