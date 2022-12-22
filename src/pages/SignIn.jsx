import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";

const Container=styled.div`
  height:100vh;
  width: 100vw;
  background-color: rgb(228,251,185,0.3);
  align-items: center;
  justify-content: center;
  
`
const Wrapper=styled.div`
 display:flex;
 height:100%;
  width: 100%;
 
 align-items: center;
 justify-content: center;
 flex-wrap: wrap;
 
`
const FormTitle=styled.h1`
  color:teal;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Form=styled.form`
display:flex;
flex-direction: column;
width:100%;
margin: 20px;
padding:0px 10px;


`
const Input=styled.input`
 margin:5px;
 flex:1;
 padding:10px;
 font-size: 20px;
 
`

const Button=styled.button`
padding: 10px;
  font-size: 20px;
  font-weight: bold;
  border: 3px solid teal;
  color:teal;
  background-color: transparent;
  cursor: pointer;
  transition:all 0.5s ease ;
  &:hover{
     background-color: teal;
     color:white;
     transform: scale(1.05);
  }
  margin: 10px;
  &:disabled {
    color: teal;
    cursor: not-allowed;
    opacity: 0.6;
  }
`
const ImgContainer=styled.div`
 flex:1;
 display: flex;
 align-items: center;
 justify-content: center;
 opacity:0.7;

`
const Image=styled.img`
    width: 100%;
    min-width:500px;
`

const FormContainer=styled.div`
 flex:0.4;
 margin-right:100px;
 margin-left:5px;
 margin-top: 10px;
 margin-bottom: 10px;
 border:3px solid teal;
 padding:40px;
 display:flex;
 flex-wrap: wrap;
 align-items: center;
 justify-content: center;
 background-color: #FBEBF9;
`

const Link = styled.a`
  margin: 5px;
  font-size: 20px;
  color:teal;
  text-decoration: underline;
  cursor: pointer;

`;

const Error = styled.span`
  color: red;
`;


const SignIn = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };


  return (
   <Container>
    <Announcement/>
       <Wrapper>
          <ImgContainer>
            <Image src={require('../img/10sig.png')}/>
          </ImgContainer>
          <FormContainer>
           <FormTitle>SIGN IN</FormTitle>
           <Form>
                <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)}></Input>
                <Input placeholder="Password" type="password"
            onChange={(e) => setPassword(e.target.value)}></Input>
                <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                {error && <Error>Authentication Failed...</Error>}
            <Link>FORGOT PASSWORD</Link>
            <Link>CREATE A NEW ACCOUNT</Link>
           </Form>  
           
           </FormContainer>      
       </Wrapper>
   </Container>
  )
}

export default SignIn