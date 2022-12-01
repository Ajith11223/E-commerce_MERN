import React from 'react'
import styled from 'styled-components'
import {category} from '../data'
import { CategoryItem } from './CategoryItem'
import { mobile } from '../Responsive'

const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({height : "0px" ,flexDirection:"colum" })}

`

export const Categories = () => {
  return (
    < Container>
 {category.map((item)=>{
    return(
        <CategoryItem  item={item} key={item.id}/>
    )
 })}
    </Container>
  )
}
