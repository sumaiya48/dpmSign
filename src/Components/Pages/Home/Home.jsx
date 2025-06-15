
import ContactForm from '../../SharedComponents/ContactForm'
import HomeServices from '../OurServices/HomeServices'
import Banner from './Banner'
import BestSellingProducts from './BestSellingProducts'
import BrandCarousel from './BrandCarousel'
import Materials from './Materials'
import OurProcess from './OurProcess'
import OurSatisfiedClients from './OurSatisfiedClients'
import SuccessStats from './SuccessStats'
import WhoAreWe from './WhoAreWe'
import WhyChooseUs from './WhyChooseUs'

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <BestSellingProducts></BestSellingProducts>
      <HomeServices></HomeServices>
      <Materials></Materials>
      <WhoAreWe></WhoAreWe>
      <OurProcess></OurProcess>
      <WhyChooseUs></WhyChooseUs>
      <SuccessStats></SuccessStats>
      <OurSatisfiedClients></OurSatisfiedClients>
      <BrandCarousel></BrandCarousel>
      <div>
        <div className=" mb-8 w-9/12 mx-auto text-center">
          <h2 className="text-3xl  sm:text-4xl font-bold">Let's Talk!
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

    </div>
  )
}
