import styled from "styled-components"
import { Anouncement } from "../components/Anouncement"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { NewsLetters } from "../components/NewsLetters"


const Container = styled.div``
const Wrapper = styled.div`
padding: 50px;
display: flex;
`
const ImgContainer = styled.div`
flex: 1;

`
const Image = styled.img`
width: 70%;
height: 60vh;
object-fit: cover;
`

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`

const Title = styled.h1`
font-weight: 200;
 
`

const Desc = styled.p`
margin: 20px 0px;
`

const Price = styled.span`
font-weight: 100;
font-size: 40px;

`
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;

`
const Filter = styled.div`
display: flex;
align-items: center;

`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200; 
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
 margin: 0px 5px;
 cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;

`
const FilterSizeOption = styled.option``
const AddContainer = styled.div`
width: 50% ;
display: flex;
align-items: center;
justify-content: space-between;

`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;

`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`
// const Remove = styled.div`
// font-size: 30px;
// `
// const Add = styled.div``


const Button = styled.button`
padding: 10px;
border: 1px solid teal;
background-color: #9df5a5;
cursor: pointer;
font-weight: 500;
:hover{
    background-color: #e91616;
}


`




export const Product = () => {
  return (
   
   <Container>
<Navbar/>
<Anouncement/>
<Wrapper>
    <ImgContainer>
    <Image src="https://cdn.icon-icons.com/icons2/1465/PNG/512/422dress_100789.png" />
    </ImgContainer>
    <InfoContainer>
        <Title>Denim</Title>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum architecto mollitia quisquam dolores quasi doloremque?</Desc>
        <Price>Rs 789</Price>
        <FilterContainer>
            <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color= "black"/>
                <FilterColor color= "blue"/>
                <FilterColor color= "red"/>
            </Filter>
            <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
            </Filter>
        </FilterContainer>
        <AddContainer>
            <AmountContainer>
                <p>-</p>
                <Amount>1</Amount>
                <p>+</p>
            </AmountContainer>
            <Button>Add to cart</Button>
        </AddContainer>
    </InfoContainer>
</Wrapper>
<NewsLetters/>
<Footer/>    
   </Container>
  )
}
