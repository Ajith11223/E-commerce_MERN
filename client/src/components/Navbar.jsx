import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'



const Container = styled.div`
height:60px;
color:green;
${mobile({height : "50px" })}
`

const Wrapper = styled.div`
display:flex;
align-items: center;
justify-content:space-between;
padding: 10px 20px;
${mobile({padding : "10px 0px" })}

`
const Left = styled.div`flex:1;
display: flex;

`
const Right = styled.div`flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({flex:2,justifyContent : "center" })}

`
const Center = styled.div`flex:1;
text-align: center;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize : "12px" ,marginLeft:"10px"})}

`
const Language = styled.nav`
font-size:14px;
cursor:pointer;
${mobile({display : "none" })}

`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({width : "50px" })}

`
const Logo = styled.h1`
font-weight: bold;
${mobile({fontSize : "24px" })}

`


export const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>Eng</Language>
                    <SearchContainer>
                        <Input placeholder='search'/>
                        search
                    </SearchContainer>

                </Left>
                <Center><Logo>SHOP </Logo></Center>
                <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign</MenuItem>
                <MenuItem>
                 Cart 
                </MenuItem>
                </Right>
            </Wrapper>

        </Container>
    )
}
