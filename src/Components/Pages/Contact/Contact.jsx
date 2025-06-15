import React from 'react'
import HeroBanner from '../../SharedComponents/HeroBanner'
import OurLocations from './OurLocations'
import FindUsOnGoogleMaps from './FindUsOnGoogleMaps'
import ContactForm from '../../SharedComponents/ContactForm'
import Newsletter from './Newsletter'

export default function Contact() {
  return (
    <div>
      <HeroBanner
        title="Contact Dhaka Plastic & Metal - Your Trusted Branding Partner"
        description="We're Here to Assist You - Reach Out for Inquiries, Orders, and Support."
        path={[
          { label: "Home", link: "/" },
          { label: "Contact" }
        ]}
      />
      <OurLocations></OurLocations>
      <FindUsOnGoogleMaps></FindUsOnGoogleMaps>
<div>
        <div className=" mb-8 w-9/12 mx-auto text-center">
          <h2 className="text-3xl  sm:text-4xl font-bold">Get In Touch
          </h2>
          <p className="text-sm text-gray-600 font-semibold mt-2 w-10/12 mx-auto">
            Fill out the form below or call us directly. We'll respond within 24 hours to assist you with inquiries, bulk orders, or support.


          </p>
          <hr
            className="h-1 w-3/12 md:w-1/12 bg-[#45B6E7] mx-auto mt-3 rounded"
            style={{ height: "6px" }}
          />
        </div>
        <ContactForm></ContactForm>
      </div>
      <Newsletter></Newsletter>

    </div>
  )
}
