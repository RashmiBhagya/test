import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

const BrandHomeLayout = () => {
  return (
    <Card 
    className='text-center' 
    style={{ width: '23rem',display:'flex', marginLeft:'50px',border:'none' }}>
     <Card.Body>
     <Image 
               src="https://i.ibb.co/t8jwyJ1/charak-pharmaceuticals-ayurveda-official-logo.png" 
               class="rounded " 
               style={{width: '110%', height:'100%'}} 
               alt="image" />
     </Card.Body>
   </Card>
  )
}

export default BrandHomeLayout