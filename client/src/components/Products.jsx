import React, { useState ,useEffect} from 'react'
import styled from 'styled-components'
import { popular } from '../data'
import { Product } from './Product'
import axios from 'axios'


const Container = styled.div`
     padding: 20px;
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
    
`

export const Products = ({cat,filter,sort}) => {
   
const [products,setProducts] = useState([])
// const [filterdProducts,setFilterdProducts] = useState([])

useEffect(()=>{
  const getProduct = async()=>{
    try {
      const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat} ` : "http://localhost:5000/api/products")
       setProducts(res.data)
    } catch (error) {
      
    }
  }
  getProduct()
},[cat])

useEffect(()=>{
try {
  //  cat && setFilterdProducts(
  //   products.filter((item)=>{
  //     Objectct.entries(filter).every([key,value]) => item[key].includes(value)
  //   })
   
} catch (error) {
  
}
},[cat,filter])

  return (
   <Container>
{popular.map((item)=>{
    return(
        <Product item={item} key={item.id}/>
    )
})}
   </Container>
  )
}
