import medicalScrub from "../assets/product2.webp"
import { Link } from 'react-router-dom'


const NewestProductsSection = () => {
  return (
    <div className='mt-20 mb-32 w-full h-fit flex flex-nowrap justify-center gap-10 items-center'>
        <div className="w-1/4 h-fit grid">
            <h1 className="text-2xl font-bold text-darkgray">PISTACHIO</h1>
            <h2 className="text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magni praesentium perspiciatis velit libero, voluptate nesciunt veniam ad commodi provident.</h2>
            <Link to="/products/product-name" className="bg-trendygreen px-5 py-2 mt-5 w-fit h-fit text-white font-medium rounded shadow-tgreen">View Product</Link>
        </div>
        <img src={medicalScrub} alt="" className="w-1/5 h-auto" />
    </div>
  )
}

export default NewestProductsSection