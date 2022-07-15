import whiteCoat from '../assets/whiteCoat.jpg'
import { Link } from 'react-router-dom'

const FeaturedSection = () => {
  return (
    <div className='mb-32 py-20 w-full h-fit flex flex-nowrap justify-center gap-10 items-center bg-verylighttrendygreen'>
        <img src={whiteCoat} alt="" className="w-1/3 h-auto" />
        <div className="w-1/4 h-fit grid">
            <h1 className="text-2xl font-bold text-darkgray">SNOW WHITE</h1>
            <h2 className="text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magni praesentium perspiciatis velit libero, voluptate nesciunt veniam ad commodi provident.</h2>
            <Link to="/product" className="bg-trendygreen rounded shadow-tgreen px-5 py-2 mt-5 w-fit h-fit text-white font-medium">View Product</Link>
        </div>
    </div>
  )
}

export default FeaturedSection