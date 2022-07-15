import FeaturedSection from "../components/FeaturedSection"
import NewestProductsSection from "../components/NewestProductsSection"
import LatestCollectionSection from "../components/LatestCollectionSection"
import BestWomenSellersSection from "../components/BestWomenSellersSection"
import BestMenSellersSection from "../components/BestMenSellersSection"

const Home = () => {
  return (
    <main>
        <NewestProductsSection />
        <FeaturedSection />
        <LatestCollectionSection />
        <BestWomenSellersSection />
        <BestMenSellersSection />
    </main>
  )
}

export default Home