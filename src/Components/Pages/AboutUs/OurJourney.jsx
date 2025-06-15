import React from 'react';
import { FaRegDotCircle, FaIndustry, FaGlobe, FaWrench, FaCheckCircle } from 'react-icons/fa';

export default function OurJourney() {
  const timeline = [
    {
      year: '15 April 2013',
      title: 'Point of Beginning',
      icon: <FaRegDotCircle />,
      heading: 'Company Story',
      text: `We started our journey in 2013 as a small shop in Dhaka University Market, Dhaka, with a passion for creating innovative and attractive signage and gift items. We realized that there was a huge demand for such products in the market, especially from corporate clients...`,
      image: '/assets/journey-2013.jpg'
    },
    {
      year: '15 April 2015',
      title: 'Continuously Growing',
      icon: <FaRegDotCircle />,
      heading: 'Mission and Vision',
      text: `Our mission is to provide our customers with the best signage and gift solutions that suit their budget and requirements...`,
      image: '/assets/journey-2015.jpg'
    },
    {
      year: '2016',
      title: 'Established Headoffice',
      icon: <FaIndustry />,
      heading: 'Values and Principles',
      text: `We believe in the following values and principles that guide our work and behavior. Quality, Creativity, Commitment, and Customer Satisfaction...`,
      image: '/assets/journey-2016.jpg'
    },
    {
      year: '2021',
      title: 'Opening our Workshop',
      icon: <FaWrench />,
      heading: 'Customer-Centric Approach',
      text: `We are a customer-centric company that puts our customers at the center of everything we do. We understand that our customers are the reason for our existence and success...`,
      image: '/assets/journey-2021.jpg'
    },
    {
      year: '2023',
      title: 'Launched our Website',
      icon: <FaGlobe />,
      heading: '',
      text: '',
      image: ''
    },
    {
      year: '2025',
      title: 'Still Growing',
      icon: <FaCheckCircle />,
      heading: '',
      text: '',
      image: ''
    }
  ];
console.log(timeline)
  return (
    <div className="w-11/12 mx-auto py-10">

      {/* Who We are */}
         <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Who We Are
        </h2>
        <p className=" sm:text-lg text-gray-600 font-semibold mt-2 w-9/12 mx-auto">
          At Dhaka Plastic & Metal, we bring your vision to life through innovative branding solutions. Specializing in 3D signage, award plaques (crests), and custom corporate gifts, we take pride in delivering products that resonate with quality, craftsmanship, and creativity. From small businesses to large organizations, we help clients across Bangladesh make a lasting impact.
        </p>
        <hr
          className="h-1 w-3/12 md:w-1/12 bg-[#45B6E7] mx-auto mt-3 rounded"
          style={{ height: "6px" }}
        />
      </div>
      {/* our journey */}
      <h2 className="text-xl lg:text-4xl font-bold text-center mb-10">Our Journey</h2>
      
    </div>
  );
}