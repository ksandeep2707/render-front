import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
    height: 30px;
    background-color:teal;
    color: white;
    display:flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 500;
    font-family: Verdana, Geneva, Tahoma, sans-serif;

`

const Announcement = () => {
  return (
  
    <Container>
        Super deal! Free Shopping on Orders over ₹5,000
    </Container>
  )
}

export default Announcement