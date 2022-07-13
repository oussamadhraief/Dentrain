import FeaturedSection from "./FeaturedSection"
import NewestProductsSection from "./NewestProductsSection"
import LatestCollectionSection from "./LatestCollectionSection"
import BestWomenSellersSection from "./BestWomenSellersSection"
import BestMenSellersSection from "./BestMenSellersSection"

const MainSection = () => {
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

export default MainSection