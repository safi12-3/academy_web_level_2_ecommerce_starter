import React from 'react'
import HeroSection from '../components/heroSection'
import Categories from '../components/categories'
import Products from '../components/Products'

export default function Home() {
  return (
    <div className='flex flex-col gap-10'>
        <HeroSection/>
        <Categories/>
        <Products/> 
    </div>
  )
}
