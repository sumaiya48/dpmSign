import React from 'react'
import HeroBanner from '../../SharedComponents/HeroBanner'
import ProductsPage from './ProductsPage'

export default function OurProducts() {
  return (
    <div>
          <HeroBanner
      title="Our Products"
      path={[
        { label: "Home", link: "/" },
        { label: "About" }
      ]}
      buttonText="Explore Our Products"
      buttonLink="/ourproducts"
    />
    
         <ProductsPage></ProductsPage>
        </div>
  )
}
