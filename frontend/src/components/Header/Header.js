import React from 'react'
import {Button, Badge,Dropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux';
// import { adminLogout } from '../../actions/userActions'
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {

  // const dispatch = useDispatch();

  // const admin_Login= useSelector((state)=> state.admin_Login);

  // const { adminInfo } = admin_Login;

  // const logoutHandler=()=>{
  //   dispatch(adminLogout());
  // }
 
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container >
        <Navbar.Brand href="/home">Ayurvedic</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="/sellerCategoryAdd">Product</Nav.Link>
            <Nav.Link href="#action2">Clinic</Nav.Link>
            <Nav.Link href="#">Blog</Nav.Link>
            
          </Nav>
         
          <i class="bi bi-bell px-2"></i>
          {/* <i class="bi bi-cart px-5"></i> */}
          <Dropdown alignRight className='px-3'>
            <Dropdown.Toggle variant="dark">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge>0</Badge>
            </Dropdown.Toggle>
          </Dropdown>

              {/* <Badge>{cart.length}</Badge> */}
          <NavDropdown title="navodapiumi691@gmail.com" id="navbarScrollingDropdown">
             
              <NavDropdown.Item  >
                Logout
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/adminhome">
                Login
              </NavDropdown.Item>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header