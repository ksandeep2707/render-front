import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
display: flex;
background-color: white;
`
const Left=styled.div`
flex:1;
display:flex;
flex-direction: column;
padding:20px;
`

const Logo=styled.h1`
 font-style: italic;
`
const Des=styled.p`
margin: 15px 0px;

`
const SocialContainer=styled.div`
 display:flex;
`
const SocialIcon=styled.div`
  width: 40px;
  height:40px;
  border-radius:50%;
  color:white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
`

const Center=styled.div`
flex:1;
padding:20px;
`
const Title=styled.h2`
   margin-bottom: 30px;
   font-weight: bold;
`
const List=styled.ul`
   margin: 0;
   padding:0;
   list-style:none;
   display: flex;
   flex-wrap: wrap;
`

const ListItem=styled.li`
   width:50%;
   margin-bottom:8px;
   font-weight: bold;
`


const Right=styled.div`
flex:1;
padding:20px;
`

const ContactItem=styled.div`
 margin-bottom: 15px;
 display:flex;
 align-items: center;
 font-weight: bold;
`

const Payment=styled.img`
width:50%;
`


const Footer = () => {
  return (
    <Container>
        <Left>
             <Logo>
                SHOPIFY
             </Logo>
             <Des>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur magni voluptate error voluptatem tenetur culpa alias a, fuga eius tempora molestiae possimus non illum aperiam vel! Mollitia, sit? Dolorum, error?
             </Des>
             <SocialContainer>
                <SocialIcon color="385999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="385999">
                    <LinkedIn/>
                </SocialIcon>
             </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
             <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Term</ListItem>
             </List>
                
        </Center>
        <Right>
           <Title>Contact</Title>
           <ContactItem><Room style={{marginRight:"10px"}}/> Brahmaputa Hotel,Ashok Rajput ,Patna 800004</ContactItem>
           <ContactItem><Phone style={{marginRight:"10px"}}/> +91 6788946352</ContactItem>
           <ContactItem><MailOutline style={{marginRight:"10px"}}/> contact@gmail.com</ContactItem>
           <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer