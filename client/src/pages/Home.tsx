import FeaturedSection from "../components/FeaturedSection"
import NewestProductsSection from "../components/NewestProductsSection"
import LatestCollectionSection from "../components/LatestCollectionSection"
import BestWomenSellersSection from "../components/BestWomenSellersSection"
import BestMenSellersSection from "../components/BestMenSellersSection"
import confident from '../assets/confident.jpg'
import medicalScrub from '../assets/medicalScrub.jpg'
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const Home = () => {

  const handleDragStart = (e: React.FormEvent) => e.preventDefault();


  
const items = [
  <div onDragStart={handleDragStart} role="presentation" className='px-3'>
        <img src={confident}  />
        <h1 className='font-medium hover:underline mt-1.5 mb-1'>Product name</h1>
        <h2>80$</h2>
    </div>,
  <div onDragStart={handleDragStart} role="presentation" className='px-3'>
  <img src={medicalScrub}  />
  <h1 className='font-medium hover:underline mt-1.5 mb-1'>Product name</h1>
  <h2>80$</h2>
</div>,
  <div onDragStart={handleDragStart} role="presentation" className='px-3'>
  <img src={confident}  />
  <h1 className='font-medium hover:underline mt-1.5 mb-1'>Product name</h1>
  <h2>80$</h2>
</div>,
<div onDragStart={handleDragStart} role="presentation" className='px-3'>
<img src={medicalScrub}  />
<h1 className='font-medium hover:underline mt-1.5 mb-1'>Product name</h1>
<h2>80$</h2>
</div>,<div onDragStart={handleDragStart} role="presentation" className='px-3'>
        <img src={confident}  />
        <h1 className='font-medium hover:underline mt-1.5 mb-1'>Product name</h1>
        <h2>80$</h2>
    </div>,
  <div onDragStart={handleDragStart} role="presentation" className='px-3'>
  <img src={medicalScrub}  />
  <h1 className='font-medium hover:underline mt-1.5 mb-1'>Product name</h1>
  <h2>80$</h2>
</div>,
];

  return (
    <main>
        <NewestProductsSection />
        <FeaturedSection />
        <LatestCollectionSection />
        <BestWomenSellersSection />

        {/* Products On sale !!!! */}
        {/* Products On sale !!!! */}
        {/* Products On sale !!!! */}
        {/* Products On sale !!!! hot deals */}
        {/* Products On sale !!!! */}
        {/* Products On sale !!!! */}
        <BestMenSellersSection />
    </main>
  )
}

export default Home