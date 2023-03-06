import React,{ useState,useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import Row from 'react-bootstrap/esm/Row';
import {Link} from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import MainScreen from '../../components/MainScreen/MainScreen';
import Col from 'react-bootstrap/esm/Col';
import axios from 'axios';
import LoadingPages from '../../components/LoadingPages/LoadingPages';
import ErrorMessages from '../../components/Errormeesages/ErrorMessages';
import { userLogin } from '../../actions/UserActions'

const UserLogin = () => {

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");
 //const [error,setError] = useState(false);
 //const [loading,setLoading] = useState(false);

  const dispatch = useDispatch();

 const user_Login = useSelector((state) => state.user_Login);
 const { loading, error } = user_Login;

const submitHandler = (e) => {
  e.preventDefault();
  dispatch(userLogin(email, password));
};


  return (
    <MainScreen>
    <div className='m-5'>
    {error && <ErrorMessages variant='danger'>{error}</ErrorMessages>}
    {loading && <LoadingPages />}
    <h1>Login</h1>
    <hr />
    <Form onSubmit={submitHandler}>
     <Form.Group className="mb-3" controlId="formBasicEmail">
     <Form.Label>Email address</Form.Label>
     <Form.Control 
      type="email" 
      placeholder="Enter email"
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
    type="password" 
    placeholder="Password" 
    value={password}
    onChange={(e)=> setPassword(e.target.value)}
    />
  </Form.Group>
  <Button variant="primary" type="submit" className='p-2'>
    Submit
  </Button>
</Form>
<Row className='my-3'>
    <Col>
     New Customer ? <Link to='/userregister'>Register Here</Link>
    </Col>
</Row>
</div>
</MainScreen>
  )
}

export default UserLogin