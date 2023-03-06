import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <div>
        <footer style={{
        width : "100%",
        position: "relative",
        bottom: 0,
        backgroundColor:'#afb0ae',
        display:"flex",
        justifyContent:"center",
    }
    }>
     <Container>
        <Row>
           <Col className='text-center py-3'>
            Copyright &copy; Ayurvita
           </Col>
        </Row>
     </Container>
    </footer>
    </div>
  )
}

export default Footer