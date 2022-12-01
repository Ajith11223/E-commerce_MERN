import styled from "styled-components"
import { Anouncement } from "../components/Anouncement"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"


const Container = styled.div``
const Wrapper = styled.div`
padding: 20px;
`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
`
const TopButton = styled.button`
    pad: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=> props.type === "filled" && "none"  };
    background-color: ${props=> props.type === "filled" && "black"};
    color: ${props=> props.type === "filled" && "white"  };

`
const TopTexts = styled.div``
const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`
const Bottum = styled.div`
display: flex;
justify-content: space-between;
`
const Info = styled.div`
flex:3;
`
const Product = styled.div`
display: flex;
justify-content: space-between;

`
const ProductDetails = styled.div`
flex: 2;
display: flex;

`
const PriceDetails = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Image = styled.img`
width: 200px;

`
const ProductName = styled.span``
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductId = styled.span``
const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color };

`
const ProductSize = styled.span``

const Summery = styled.div`
flex: 1;
background-color: white;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;

`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;

`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: 200;

`
const SummeryTitle = styled.h1`
font-weight: 200;

`
const SemmeryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: 500;
font-size: 25px;
`
const SemmeryItemTotal = styled.span``
const SemmeryItemPrice = styled.span``
const Button= styled.button`
width: 100%;
padding: 10px;
background-color: #060606;
color: white;
font-weight: 600;
`



export const Cart = () => {
  return (
    <Container>
<Navbar/>
<Anouncement/>
<Wrapper>
    <Title>Your Bag</Title>
    <Top>
        <TopButton>Continue Show</TopButton>
        <TopTexts>
            <TopText>Shopping Bag(3)</TopText>
            <TopText>Wishlist(4)</TopText>
        </TopTexts>
        <TopButton type="filled ">Check Out Now</TopButton>
    </Top>
    <Bottum>
<Info>
    <Product>
        <ProductDetails>
            <Image src="https://cdn.icon-icons.com/icons2/1465/PNG/512/422dress_100789.png"/>
            <Details>
                <ProductName><b>Product : </b>jacket</ProductName>
                <ProductId><b>ProductId : </b>4567788</ProductId>
                <ProductColor color="black"/>
                <ProductSize><b>ProductSize : </b>M</ProductSize>

            </Details>
        </ProductDetails>

        <PriceDetails>
            <ProductAmountContainer>
                <p>+</p>
                <ProductAmount>2</ProductAmount>
                <p>-</p>
            </ProductAmountContainer>
            <ProductPrice>Rs 30</ProductPrice>
        </PriceDetails>
    </Product>
    <hr />
</Info>
<Summery>
    <SummeryTitle>Order Summary</SummeryTitle>
    <SemmeryItem type="total">
        <SemmeryItemTotal>Sub Total</SemmeryItemTotal>
        <SemmeryItemPrice>Rs 500</SemmeryItemPrice>
    </SemmeryItem>
    <SemmeryItem>
        <SemmeryItemTotal>Estimated Shipping</SemmeryItemTotal>
        <SemmeryItemPrice>Rs 5.90</SemmeryItemPrice>
    </SemmeryItem>
    <SemmeryItem>
        <SemmeryItemTotal>Shipping Discount</SemmeryItemTotal>
        <SemmeryItemPrice>Rs -5.90</SemmeryItemPrice>
    </SemmeryItem>
    <SemmeryItem>
        <SemmeryItemTotal > Total</SemmeryItemTotal>
        <SemmeryItemPrice>Rs 500</SemmeryItemPrice>
    </SemmeryItem>
    <Button>Checkout Now</Button>
</Summery>

    </Bottum>
</Wrapper>
<Footer/>
    </Container>
  )
}
