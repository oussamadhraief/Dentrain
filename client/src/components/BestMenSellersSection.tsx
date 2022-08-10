import confident from '../assets/product2.webp'
import medicalScrub from '../assets/product.webp'
import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const BestMenSellersSection = () => {
    
    const [Items, setItems] = useState([
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
    </div>,])

    function handleDragStart(e: React.FormEvent){ 
        e.preventDefault()
    }

  return (
    <section className='w-full h-fit mb-52 flex flex-col items-center justify-center'>
        <h2 className='text-lg'>MEN'S BEST SELLERS</h2>
        <div className='w-fit h-fit flex flex-nowrap gap-5 text-xl font-bold'>
            <button>
                OPTION 1
            </button>
            <button>
                OPTION 2
            </button>
        </div>
        <div className='w-full h-fit mt-10 flex flex-col items-center justify-center'>
            <div className="w-8/12 h-fit mx-auto">
                <AliceCarousel
                    mouseTracking 
                    items={Items} 
                    responsive={ {
                                0: {
                                    items: 2,
                                },
                                640: {
                                    items: 3
                                },
                                1024: {
                                    items: 4,
                                }
                                }}
                    disableDotsControls
                    animationType="slide"
                />
            </div>
            <button className='mt-10 w-fit h-fit bg-darkgray px-5 py-2 rounded shadow text-white'>
                View all
            </button>
        </div>
    </section>
  )
}

export default BestMenSellersSection