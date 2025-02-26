import React from 'react'
import { initialProducts } from '../lib/data'
import Title from './UI/title'

export default function Products() {
  return (
    <div id="products" className="">
 <Title text={"  Featured Products"}/>
 
    <div id="featured-products" className="flex justify-around">
      {initialProducts.map((product)=>(
        <div id="product-card" key={product.id}>
          <img src={product.image_url}></img>
          <h1>{product.name}</h1>
        </div>
      ))}
    </div>
  </div>
  )
}
