import styled from "styled-components"
import { mobile } from "../Responsive"



const Container = styled.div`
display: flex;
${mobile({flexDirection: "colum" })}


`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1``
const Desc = styled.p`
margin: 20px 0px;
`
const SocialContainer = styled.div`
display: flex;

`
const SocialIcon = styled.div`
width: 20px;
height: 20px;
font-weight: bold;
display: flex;
align-items: center;
justify-content: center;
margin-left: 40px;
`

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({display: "none" })}

`
const Title = styled.h3`margin-bottom: 30px;`
const List = styled.ul`
padding: 0; 
margin: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
width: 50%;
margin-bottom: 5px;
`

const Right = styled.div`
flex: 1;
padding: 20px; 


`
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`
const Payment = styled.img`
width: 80px;
height: 60px;
`

export const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>SHOP</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere numquam cumque sit in consectetur, corporis qui vel voluptatem quidem!</Desc>
                <SocialContainer>
                    <SocialIcon>
                        <h4>facebook</h4>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    malappuram,kerala,india
                </ContactItem>
                <ContactItem>
                    +91 2353 677 3848
                </ContactItem>
                <ContactItem>
                    gggg@gmail.com
                </ContactItem>
                <Payment src='https://cdn.icon-icons.com/icons2/1455/PNG/256/paypal_99451.png'></Payment>
            </Right>
        </Container>
    )
}
