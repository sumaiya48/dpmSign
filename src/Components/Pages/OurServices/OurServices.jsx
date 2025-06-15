import React from 'react';
import HeroBanner from '../../SharedComponents/HeroBanner';
import OurProcess from '../Home/OurProcess';
import ServiceCard from './ServiceCard';

import signageImg from '/assets/services1.jpg';
import awardImg from '/assets/services2.jpg';
import WhyChooseDpm from './WhyChooseDpm';
import ContactForm from '../../SharedComponents/ContactForm';

export default function OurServices() {
  return (
    <div>
      <HeroBanner
        title="Our Services"
        path={[{ label: "Home", link: "/" }, { label: "Our Services" }]}
      />

      <OurProcess />
   {/*core service */}
    <div>
       {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Core Services
        </h2>
        <p className=" text-sm text-gray-600 font-semibold mt-2">
          Customized Branding, Recognition, and Signage Solutions.
        </p>
        <hr
          className="h-1 w-3/12 md:w-1/12 bg-[#45B6E7] mx-auto mt-3 rounded"
          style={{ height: "6px" }}
        />
      </div>
      <div className="w-11/12 mx-auto grid gap-8 py-10">
        <ServiceCard
          title="3D Signage Solutions"
          subtitle="Make your brand stand out!"
          description="Our premium 3D signage services help businesses create impactful brand visibility. Using modern techniques and quality materials, we design and manufacture signage solutions that grab attention."
          listItems={[
            "LED Acrylic Signboards",
            "Neon Signs",
            "Lightbox Signage"
          ]}
          industries="Retail, Hospitality, Corporate Offices, and Small Businesses."
          buttonText="Get a Free Consultation"
          image={signageImg}
        />

        <ServiceCard
          title="Award Plaques (Crests)"
          subtitle="Celebrate Achievements with Elegance"
          description="We design and craft elegant award plaques to recognize excellence and honor accomplishments. Whether for corporate events, schools, or government organizations, our plaques reflect quality and prestige."
          listItems={[
            "Corporate Crests",
            "Event Plaques",
            "Customization Options"
          ]}
          industries="Schools, Corporates, NGOs, Sports, and Government Bodies."
          buttonText="Design your Award Plaque"
          image={awardImg}
        />
      </div>
    </div>
      <WhyChooseDpm></WhyChooseDpm>

      {/* get in touch */}
      <div>
        {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Get In Touch
          </h2>
        <p className=" text-sm text-gray-600 font-semibold mt-2">
          Fill out the form below or call us directly. We'll respond within 24 hours to assist you with inquiries, bulk orders, or support.
        </p>
        <hr
          className="h-1 w-3/12 md:w-1/12 bg-[#45B6E7] mx-auto mt-3 rounded"
          style={{ height: "6px" }}
        />
      </div>
      <ContactForm></ContactForm>
      </div>
    </div>
  );
}
