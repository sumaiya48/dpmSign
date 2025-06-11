import React from 'react'
import HeroBanner from '../../SharedComponents/HeroBanner'

export default function AboutUs() {
  return (
    <div>
          <HeroBanner
      title="About Dhaka Plastic & Metal"
      description="Crafting Excellence in Signage, Awards, and Corporate Gifts."
      path={[
        { label: "Home", link: "/" },
        { label: "About" }
      ]}
      buttonText="Explore Our Products"
      buttonLink="/ourproducts"
    />
    
          contsct
        </div>
  )
}
