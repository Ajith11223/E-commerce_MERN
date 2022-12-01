import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'


const Container = styled.div`
height: 60vh;
 background-color: #b6eda9;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
`
const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${mobile({textAlign : "center" })}

 

`
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: #fef8f8;
display: flex;
justify-content: space-between;
border: 1px solid lawngreen;
${mobile({width : "50px" })}



`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`
const Button = styled.button`
flex: 0.5;
border: none;
background-color: #263526;
color: white;

`

export const NewsLetters = () => {
  return (

    <Container>
        <Title>News letter</Title>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, magni.</Desc >
        <InputContainer>
        <Input placeholder='your are email'/>
        <Button>
            <h3>send</h3>
        </Button>
        </InputContainer>
    </Container>
  )
}
