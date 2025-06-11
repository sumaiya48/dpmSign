import img from '/assets/working-DA7imo4n.jpg'

export default function WhoAreWe() {
    return (
        <div className='mb-10'>
            <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold">
                    Who Are We
                </h2>
                <hr className="h-1 w-3/12 md:w-1/12 bg-[#45B6E7] mx-auto mt-3 rounded" style={{ height: '6px' }} />

            </div>
            <div  className='w-11/12 mx-auto lg:flex  gap-28'>
                <p className='text-gray-800 text-lg font-semibold'>
                    Dhaka Plastic & Metal started its journey in 2013 as a small shop in the Dhaka University Market, Katabon, with a vision to deliver high-quality signage and branding solutions in Bangladesh. Over the years, we have grown into a leading manufacturer and retailer, setting benchmarks in the industry with premium 3D signage, award plaques, corporate gifts, and branding products. Our expertise in custom designs and innovative craftsmanship has made us the go-to partner for corporates, educational institutions, and government organizations across Bangladesh. From LED acrylic signboards to engraved plaques and nameplates, we turn ideas into impactful visual solutions that boost brand visibility and recognition.
                        <br />
                        <br />
                    Driven by a passion for quality, precision, and customer satisfaction, we continue to lead the market with tailor-made designs, cutting-edge technology, and affordable pricing. Whether you need dynamic signage for your storefront, recognition plaques for achievements, or branded corporate accessories, we offer end-to-end solutions—from design to delivery. Join Dhaka Plastic & Metal in elevating your brand identity and creating lasting impressions that stand out in Bangladesh's growing business landscape.
                </p>
                <img className=' w-[600px] lg:h-[400px] border-2 border-blue-400 rounded' src={img} alt="" />
            </div>
        </div>
    )
}
