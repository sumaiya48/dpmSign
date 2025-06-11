
import Banner from './Banner'
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
      <Materials></Materials>
      <WhoAreWe></WhoAreWe>
      <OurProcess></OurProcess>
      <WhyChooseUs></WhyChooseUs>
      <SuccessStats></SuccessStats>
      <OurSatisfiedClients></OurSatisfiedClients>
      <BrandCarousel></BrandCarousel>
    </div>
  )
}
