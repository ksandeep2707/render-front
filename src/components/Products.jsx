import React from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import Product from './Product';
import axios from 'axios';
import {useState,useEffect} from 'react';

const Container=styled.div`
  padding:20px;
  display: flex;
  flex-wrap: wrap ;
  justify-content:space-between;
`



const Products = ({categories,Filters,Sort}) => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
  const getProducts=async ()=>
  {
      try
        {
           const Response=await axios.get( categories
                      ?`https://ecom-sr1.onrender.com/api/products?category=${categories}`
                     : "https://ecom-sr1.onrender.com/api/products/");
           console.log(Response.data);
           setProducts(Response.data);          
        }
        catch(err)
        {
            console.log(err);
        }
  };
  getProducts();
},[categories]);


useEffect(() => {
  categories &&
    setFilteredProducts(
      products.filter((item) =>
        Object.entries(Filters).every(([key, value]) =>
          item[key].includes(value)
        )
      )
    );
}, [products, categories, Filters]);


useEffect(() => {
  if (Sort === "newest") {
    setFilteredProducts((prev) =>
      [...prev].sort((a, b) => a.createdAt - b.createdAt)
    );
  } else if (Sort === "asc") {
    setFilteredProducts((prev) =>
      [...prev].sort((a, b) => a.price - b.price)
    );
  } else {
    setFilteredProducts((prev) =>
      [...prev].sort((a, b) => b.price - a.price)
    );
  }
}, [Sort]);


  console.log({"FilteredProduct":filteredProducts});

  return (
    <Container>
       {categories
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products.slice(0, 8).map((item) => <Product item={item} key={item.id} />)}
    </Container>
  )
}

export default Products