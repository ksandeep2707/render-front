import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
  height:100vh;
  width: 100vw;
  background-color: rgb(228,251,185,0.6);
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

margin: 20px;
padding:0px 20px;


`
const Input=styled.input`
 margin:5px;
 flex:1;
 padding:10px;
 font-size: 20px;
 
`
const Agreement=styled.p`
 margin: 5px;
 font-size: 18px;
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
     transform: scale(1.1);
  }

`
const ImgContainer=styled.div`
 flex:1;
 display: flex;
 align-items: center;
 justify-content: center;

`
const Image=styled.img`
    width: 60%;
    min-width:500px;
`

const FormContainer=styled.div`
 flex:0.4;
 margin-right:100px;
 margin-left:5px;
 margin-top: 10px;
 border:3px solid teal;
 padding:40px;
 display:flex;
 flex-wrap: wrap;
 width:50%;
 align-items: center;
 justify-content: center;
 background-color: #FBEBF9;
`

const Register = () => {
  return (
   <Container>
       <Wrapper>
          <ImgContainer>
            <Image src={require('../img/9reg.png')}/>
          </ImgContainer>
          <FormContainer>
           <FormTitle>CREATE AN ACCOUNT</FormTitle>
           <Form>
                <Input placeholder="First Name"></Input>
                <Input placeholder="Last Name"></Input>
                <Input placeholder="Username"></Input>
                <Input placeholder="Email"></Input>
                <Input placeholder="Password" type="password"></Input>
                <Input placeholder="Confirm Password" type="password"></Input>
                <Agreement> <Input type="checkbox"/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vitae facilis culpa deserunt .</Agreement>
                <Button>CREATE</Button>
           </Form>  
           </FormContainer>      
       </Wrapper>
   </Container>
  )
}

export default Register