import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:#faf7f2;
    position: relative;
`
const Circle = styled.div`
width: 200px;
height: 200px;
/* border-radius: 50%; */
/* background-color: white; */
position: absolute;

`
const Image = styled.img`
height: 75%;
/* z-index: 2; */
`
const Info = styled.div`
width: 100%;
height: 100px;
position: absolute;
top: 0;
left: 0;
background-color:rgba(0,0,0,0.2);
/* z-index: 2; */
display: flex;
align-items: center;
justify-content: center;
 
`
const Icon = styled.div`

border-radius: 20%;
/* background-color: white; */
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
button:hover{
    background-color: #8afd8a;
    transform: scale(2.1);
    transition: all 0.5s ease;

}
`
    


export const Product = ({item}) => {
  return (
   <Container>
         <Circle/>
         <Image src={item.img}/>
         <Info>
            <Icon>
                <button>cart</button>
            </Icon>
            <Icon>
                <button>fav</button>
            </Icon>
            {/* <Icon>
                <h3>search</h3>
            </Icon> */}
         </Info>

   </Container>
  )
}
