import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import {useState} from 'react'
import Categories from '../components/Categories'
const Container=styled.div`

`
const Title=styled.h1`
 margin:20px;
 font-weight: bold;
 align-items: center;
 display: flex;
 justify-content: center;
 background-color: #FFE4E1;
`
const FilterContainer=styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter=styled.div`
 margin:20px;
`
const FilterText=styled.span`
  font-size:20px;
  font-weight:bold;
`
const Select=styled.select`
   padding :10px;
   margin: 0px 20px;
   font-weight: bold;
   font-size: 100%;
`
const Option=styled.option`
  font-weight: bold;
  font-size:100%;
`

const ProductList = () => {
  const Location=useLocation();
  const categories=Location.pathname.split("/")[2];
  const [Filters, setFilters] = useState({});
  const [Sort, setSort] = useState("newest");

  const handleFilters = (e)=>{
    const value=e.target.value;
    setFilters({...Filters,[e.target.name]:value});
  }

  //console.log(categories,Filters,Sort);

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>
            {categories}
        </Title>
         <FilterContainer>
               <Filter>
               <FilterText>Filter Products</FilterText>
               <Select name="color" onChange={handleFilters}>
                   <Option disabled selected>
                    Color
                   </Option>
                   <Option>White</Option>
                   <Option>Black</Option>
                   <Option>Red</Option>
                   <Option>Blue</Option>
                   <Option>Yellow</Option>
                   <Option>Green</Option>                  
               </Select>
               <Select name="size" onChange={handleFilters}>
                   <Option disabled selected>
                    Size
                   </Option>
                   <Option>XS</Option>
                   <Option>S</Option>
                   <Option>M</Option>
                   <Option>L</Option>
                   <Option>XL</Option>                
               </Select>
               </Filter>
               <Filter>
               <FilterText>Sort Product</FilterText>
               <Select name="sort" onChange={(e)=>setSort(e.target.value)}>
                   <Option selected  value="newest">Newest</Option>
                   <Option value="asc">Price (asc)</Option>
                   <Option value="desc">Price (desc)</Option>              
               </Select>
               </Filter>
         </FilterContainer>
         <Products categories={categories} Filters={Filters} Sort={Sort}/>
         <Newsletter/>
         <Footer/>
    </Container>
  )
}

export default ProductList