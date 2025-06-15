import React from 'react'
import HeroBanner from '../../SharedComponents/HeroBanner'
import BrandCarousel from '../Home/BrandCarousel'
import OurSatisfiedClients from '../Home/OurSatisfiedClients'
import IndustriesWeServe from './IndustriesWeServe'
import OurValuedClients from './OurValuedClients'
import WorkTogether from './WorkTogether'
import ProjectShowcase from './ProjectShowcase/ProjectShowcase'

export default function Clients() {
  return (
    <div>
          <HeroBanner
      title="Trusted by Leading Organizations Across Bangladesh"
      description="At Dhaka Plastic & Metal, we take pride in partnering with businesses, educational institutions, government organizations, and individuals to deliver high-quality 3D signage, award plaques, and corporate branding solutions. Our commitment to craftsmanship, innovation, and customer satisfaction has earned us the trust of a diverse range of clients."
      path={[
        { label: "Home", link: "/" },
        { label: "Our Clients" }
      ]}
    />
    <OurValuedClients></OurValuedClients>
    {/* Small Business & Retail */}
          <div>
            <div className="text-center mt-10 w-9/12 mx-auto">
        <h2 className=" text-xl text-[#45B6E7] font-bold">Small Business & Retail</h2>
        <p className="text-xs w-10/12 mx-auto text-[#45B6E7] font-semibold mt-2">
          Numerous small businesses, retail outlets, and hospitality brands across the country have trusted us for their branding solutions.
        </p>
        <hr
          className="h-1 w-3/12 md:w-1/12 bg-[#45B6E7] mx-auto mt-3 rounded"
          style={{ height: "6px" }}
        />
      </div>
      <BrandCarousel></BrandCarousel>
          </div>
          <OurSatisfiedClients></OurSatisfiedClients>
          <IndustriesWeServe></IndustriesWeServe>
          <ProjectShowcase></ProjectShowcase>
          <WorkTogether></WorkTogether>
        </div>
  )
}
