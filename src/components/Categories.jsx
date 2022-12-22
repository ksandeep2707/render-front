import React from 'react';
import styled from 'styled-components';
import { categories } from "../data";
import CategoriesItem from './CategoriesItem';

const Container=styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;

`
const Categories = () => {
  return (
    <Container>
         {categories.map(item=>(
            <CategoriesItem item={item}/>
         ))}
    </Container>
  )
}

export default Categories