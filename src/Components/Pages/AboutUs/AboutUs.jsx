import React from 'react'
import HeroBanner from '../../SharedComponents/HeroBanner'
import OurJourney from './OurJourney'
import OurExpertise from './OurExpertise'
import MeetOurManagementTeam from './MeetOurManagementTeam'
import OurSatisfiedClients from '../Home/OurSatisfiedClients'

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
    
          <OurJourney></OurJourney>
          <OurExpertise></OurExpertise>
          <OurSatisfiedClients></OurSatisfiedClients>
          <MeetOurManagementTeam></MeetOurManagementTeam>
        </div>
  )
}
