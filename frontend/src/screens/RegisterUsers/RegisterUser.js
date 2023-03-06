import React,{ useState,useEffect} from 'react'
import MainScreen from '../../components/MainScreen/MainScreen'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ErrorMessages from '../../components/Errormeesages/ErrorMessages';
import LoadingPages from '../../components/LoadingPages/LoadingPages';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/UserActions';

const RegisterUser = ({history}) => {

 const [email,setEmail] = useState("");
 const [name,setName]= useState("");
 const [pic,setPic] = useState(null);
 const [password,setPassword]= useState("");
 const [confirmpassword,setConfirmPassword]= useState("");
 const [message,setMessage]= useState(null);
 const [picMessage,setPicMessage]= useState(null); 
 

//  const [loading,setLoading] = useState(false)  
//  const [error,setError] = useState(false) 

const dispatch = useDispatch();
 const user_Registar= useSelector((state)=> state.user_Registar);
 const { loading,error,userInfo}= user_Registar;


 //back to mynotepage
//  useEffect(() => {
//    if(userInfo){
//   history.push('/category')
//  }
//  }, [history,userInfo])
 

 const registerHandler= async (e)=>{
   e.preventDefault();
    
   if(password !== confirmpassword){
    setMessage('Password do not match')
   }else{
    dispatch(register(name,email,password,pic))
   }
 }



  //image upload function
  const postDetails =(pic)=>{
    setPicMessage(null)
    if(!pic){
      return setPicMessage('Please select the image')
    }
    setPicMessage(null);

    if(pic.type ==='image/jpg' || pic.type ==='image/png'){
      const data = new FormData();
      data.append('file',pic)
      data.append('upload_preset','Ayurvita');
      data.append('cloud_name','flocktogether');
      fetch("https://api.cloudinary.com/v1_1/flocktogether/image/upload",{
        method:"post",
        body: data
      }).then((res)=>res.json()).then((data)=>{
        console.log(data);
        setPic(data.url.toString())
      }).catch((err)=>{
        console.log(err);
      })
    }else{
      return setPicMessage('Pleace select .PNG or .JPGE images');  
     }
  }


  return (
    <MainScreen>
    <hr />
 
  {error && <ErrorMessages variant='danger'>{error}</ErrorMessages>}
  {message && <ErrorMessages variant='danger'>{message}</ErrorMessages>}
  {loading && <LoadingPages />}
  
 <Form onSubmit={registerHandler}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" 
     value={name}
    onChange={(e)=> setName(e.target.value)}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" placeholder="Enter Email"
     value={email}
    onChange={(e)=> setEmail(e.target.value)}
    />
  </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Enter Password"
     value={password}
    onChange={(e)=> setPassword(e.target.value)}
    />
  </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Enter confirmed Password"
     value={confirmpassword}
    onChange={(e)=> setConfirmPassword(e.target.value)}
    />
  </Form.Group>
{picMessage && (
  <ErrorMessages variant='danger'>{picMessage}</ErrorMessages>
)

}
<Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file"
             onChange={(e)=> postDetails(e.target.files[0])}
             lable='Upload profile iamge'
             custom
        />
</Form.Group>


  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </MainScreen>
  )
}

export default RegisterUser