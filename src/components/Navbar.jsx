import React from 'react'
import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import ShopRoundedIcon from '@material-ui/icons/ShopRounded';
import { Badge } from '@material-ui/core';
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';


const Container =styled.div`
        height: 65px;
        font-size: 30px;
        font-weight: bold;
        background-color: white;
    
`
const Wrapper= styled.div`
        padding: 10px 20px;   
        display: flex;
        justify-content: space-between;
` 
const Left=styled.div`
 flex: 1;
 display: flex;
 align-items: center;
`
const Center=styled.div`
 flex: 2;
 text-align: center;
`
const Right=styled.div`
 flex: 1;
 display:flex;
 align-items:center ;
 justify-content: flex-end;
`

const Language =styled.div`
 font-size: 20px;
 cursor: pointer;
`
const SearchContainer=styled.div`
    flex:1;
    border: 3px solid teal;
    display: flex;
    align-items: center;
    margin-left: 40px;
     height:75%;
     
`

const Input=styled.input`
 flex:8;
 font-size:80%;
 border: none;
 height:100%;
 weight:100%;

`
const Logo =styled.h1`
    flex:1;
    font-size: 40px;
    font-weight: 5000px;
    font-style: italic;
    font-family: monospace;
    display:flex;
    padding-left: 30%;

`


const MenuItem= styled.div`
   font-size: 20px;
   cursor: pointer;
   margin-left: 25px;
`

const Logoicon={
    fontSize:"50px",
    color :"teal",
    marginRight:"10px",
    textAlign: "center"
}

const Navbar = () => {

  const quantity=useSelector(state=>state.cart.quantity)
 

  return (
      <Container>
      <Wrapper>
         <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input/>
                <Search style={{color:"teal",border:"teal"}}/>
            </SearchContainer>
         </Left>
         <Center>
            <Logo>
            <ShopRoundedIcon style={Logoicon}/>
               
               SHOPIFY
            
            </Logo>
         </Center>
         <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <Link to='/cart'>
            <MenuItem>
            <Badge badgeContent={quantity} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
            </MenuItem>
            </Link>
         </Right>
      </Wrapper>
         
      </Container>    
     

  )
}

export default Navbar