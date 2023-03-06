import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Card from 'react-bootstrap/Card';
import './ChooseHome.css'

const ChooseHome = () => {
  return (
    <div>
<div>
<Row className='pt-3'>
     <Card 
     className='text-center p-3' 
     style={{ width: '18rem',display:'flex', marginLeft:'160px',color:'' }}>
      <Card.Body>
        {/* <i class="bi bi-gear fs-3" style={{color: 'rgb(20, 131, 235)'}} ></i> */}
        <Card.Img  src="https://i.ibb.co/3TYT3jy/medical-icon-1.png"  />
        {/* <Card.Title className='pb-2'>Card Title</Card.Title> */}
        <Card.Subtitle className="mb-2 mt-2 pt-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text className='pt-3' style={{fontSize:' 15px',color: 'rgb(20, 131, 235)'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card 
    className='text-center p-3 '
    style={{ width: '18rem',display:'flex', marginLeft:'100px' }}>
      <Card.Body>
      <Card.Img  src="https://i.ibb.co/3TYT3jy/medical-icon-1.png"  />
        {/* <Card.Title className='pb-2'>Card Title</Card.Title> */}
        <Card.Subtitle className="mb-2 mt-2 pt-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text className='pt-3' style={{fontSize:' 15px',color: 'rgb(20, 131, 235)'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card 
    className='text-center p-3'
    style={{ width: '18rem',display:'flex', marginLeft:'100px' }}>
      <Card.Body>
      <Card.Img  src="https://i.ibb.co/3TYT3jy/medical-icon-1.png"  />
        {/* <Card.Title className='pb-2'>Card Title</Card.Title> */}
        <Card.Subtitle className="mb-2 mt-2 pt-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text className='pt-3' style={{fontSize:' 15px',color: 'rgb(20, 131, 235)'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text >
      </Card.Body>
    </Card>
    
 </Row>

    </div>
    </div>
  )
}

export default ChooseHome