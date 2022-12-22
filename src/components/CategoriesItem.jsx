import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container=styled.div`
  flex:1;
  min-width: 450px;
  margin: 5px;
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position:relative;

`
const Image=styled.img`
 width:100%;
 height: 100%;
 object-fit: cover;

`
const Info=styled.div`
position: absolute;
top:0;
left:0;
width:100%;
height:100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: rgb(0,0,0,0.3);
`
const Title=styled.h1`
 color:white;
 font-weight: bold;
 margin-bottom: 20px;
`
const Button=styled.button`
  border:none;
  padding:10px;  
  background-color: lightgrey;
  color:black;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  transition:all 0.5s ease ;
  &:hover{
     background-color: teal;
     color:white;
     transform: scale(1.08);
  }

`
const LinkStyle=
{
  textDecoration:"none",
  
}

const CategoriesItem = ({item}) => {
  return (
    <Container>
         <Image src={item.img}/>
         <Info>
             <Title>{item.title}</Title>
    <Link to={`/products/${item.categories}`} style={LinkStyle}>
             <Button>SHOP NOW</Button>
     </Link>
         </Info>

    </Container>
  )
}

export default CategoriesItem