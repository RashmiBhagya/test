import React from 'react'
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'

const ProductHomeLayout = () => {
  return (
    <Card 
    className='text-center' 
    style={{ width: '18rem',display:'flex', marginLeft:'20px',border:'none' }}>
     <Card.Body>
     <Image 
               src="https://i.ibb.co/st4Y6Dc/IMG-20180822-183103.jpg" 
               class="rounded " 
               style={{width: '110%', height:'100%'}} 
               alt="image" />

               <h4>Cream</h4>
     </Card.Body>
   </Card>
  )
}

export default ProductHomeLayout