import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'
import styled from 'styled-components'
import Newsletter from '../components/Newsletter'

const Container=styled.div`
background-color: #FBE1FD;
`

const Home = () => {
  return (
    <Container>
       <Announcement/>
       <Navbar/>
       <Slider/>
       <Categories/>
       <Products/>
       <Newsletter/>
       <Footer/>
    </Container> 
  )
}

export default Home