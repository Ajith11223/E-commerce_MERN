import { useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { Anouncement } from "../components/Anouncement"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { NewsLetters } from "../components/NewsLetters"
import { Products } from "../components/Products"
import { mobile } from "../Responsive"


const Container = styled.div``
const FilterContainer = styled.div`
display: flex;
justify-content: space-between ;
`
const Filter = styled.div`
margin: 20px;
${mobile({flexDirection: "0px 20px",display:"flex",flexDirection:"colum" })}

`
const Title = styled.h1`
margin: 20px;
`
const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({marginRight: "0px" })}

`
const Select = styled.select`
padding: 7px;
margin-right: 20px;
${mobile({margin: "10px" })}

`
const Optin = styled.option``

export const ProductList = () => {
const location = useLocation()
const cat = location.pathname.split("/")[2]
const [filter,serFilter] = useState({})
const [sort,setSort] = useState("newest")

const handleFilters = (e) =>{
    const value = e.target.value
    serFilter({
        ...filter,
        [e.target.name] : value
    })
}
    return (
        <Container>


            <Navbar />
            <Anouncement />

            <Title>{cat}</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products</FilterText>
                    <Select name="color" onChange={handleFilters}>
                        <Optin desabled selected >
                            color
                        </Optin>
                     <Optin>White</Optin>
                     <Optin>Black</Optin>
                     <Optin>Red</Optin>
                     <Optin>Blue</Optin>
                     <Optin>Green</Optin>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Optin desabled selected >
                            Size
                        </Optin>
                     <Optin>Small</Optin>
                     <Optin>Medium</Optin>
                     <Optin>Large</Optin>
                     <Optin>Extra Large</Optin>
                

                    </Select>
                </Filter>
                <Filter><FilterText>Sort products</FilterText>
                <Select onChange={e => setSort(e.target.value)}>
                    <Optin value={"newest"} >Newest</Optin>
                    <Optin value={"ace"}>Price L to H</Optin>
                    <Optin value={"desc"}>Price H to L</Optin>
                </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat}  filter={filter} sort={sort}/>
            <NewsLetters />
            <Footer />
        </Container>
    )
}
