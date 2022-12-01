import React from 'react'
import { Anouncement } from '../components/Anouncement'
import { Categories } from '../components/Categories'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { NewsLetters } from '../components/NewsLetters'
import { Products } from '../components/Products'
import { Slider } from '../components/Slider'

export const Home = () => {
  return (
    <div>
        <Anouncement/>
           <Navbar/>
           <Slider/>
           <Categories/>
           <Products/>
           <NewsLetters/>
           <Footer/>
    </div>
  )
}
