import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data'
import { mobile } from '../Responsive'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display : "none" })}

`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #faf6f6;
    border-radius: 50%;
    display: flex; align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && "10px"} ;
    right: ${props => props.direction === 'right' && "10px"} ;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;const handleClick 

    z-index: 2;
`
const Wrapper = styled.div`
display: flex;
height: 100%;
transform: translateX(${props => props.slide * -100}vw);
transition: all 1.5s ease;
`
const Slide = styled.div` 
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props => props.bg};
`
const ImgContainer = styled.div` 
margin : 15px;
height: 100%;
flex: 1;
`
const Img = styled.img`
margin: 15px;
height: 80%;
`
const InfoContainer = styled.div`
flex: 1;
`
const Title = styled.h1` font-size:70px;`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`

export const Slider = () => {
    const [slide, setSlide] = useState(0)

    const handleClick = (direction) => {
          
        if(direction === 'left'){
            setSlide(slide > 0 ? slide -1 : 2)
        }else{
            setSlide(slide < 2 ? setSlide +1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick("left")}>
                <h3> L </h3>
            </Arrow>
            <Wrapper slide={slide} >
                {sliderItems.map((item)=>{
                    return(

                        <Slide bg={item.bg} key={item.id} >
                    <ImgContainer>
                        <Img src={item.img} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>SHOP NOW </Button>
                    </InfoContainer>
                </Slide>
                    ) })}
               
            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick("left")}>
                <h3> R </h3>
            </Arrow>
        </Container>
    )
}
