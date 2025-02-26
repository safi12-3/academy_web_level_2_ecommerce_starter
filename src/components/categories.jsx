import React from 'react'
import { featured_categories } from '../lib/data'
import Title from './UI/title'

export default function Categories() {
  return (
    <div id="categories" className=" flex flex-col gap-5 ">
<Title text={"  Featured Categories"}/>

    {/* Grid Layout for Categories */}
    <div className="flex justify-center gap-10">
      {featured_categories.map((category) => (
        <div
          key={category.id}
          className="relative rounded-lg overflow-hidden shadow-md"
        >
          {/* Category Image */}
          <img
            src={category.image_src}
            alt={category.name}
            className="w-full h-64 object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
            <h2 className="text-white text-2xl font-semibold">
              {category.name}
            </h2>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}
