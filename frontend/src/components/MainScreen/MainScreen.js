import React, { Children } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row';

const MainScreen = ({title,children}) => {
  return (
    <div>
    <Container>
        <Row>
            <div className='page pt-5'>
                {
                    title && ( <>
                    <h2 className='heading'>{title}</h2>
                    <hr />
                    </>
                )}
                <h4>{children}</h4>
            </div>
        </Row>
    </Container>
</div>
  )
}

export default MainScreen