import medicalScrub from "../assets/medicalScrub.jpg"
import { Link } from 'react-router-dom'

const LatestCollectionSection = () => {
  return (
    <div className='mb-32 pb-20 w-full h-fit flex flex-nowrap justify-center gap-10 items-center border-b border-zinc-300'>
        <img src={medicalScrub} alt="" className="w-1/5 h-auto" />
        <div className="w-1/4 h-fit grid">
            <h1 className="text-2xl font-bold text-darkgray">2022 COLLECTION</h1>
            <h2 className="text-sm text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magni praesentium perspiciatis velit libero, voluptate nesciunt veniam ad commodi provident.</h2>
            <div className="w-fit h-fit flex flex-nowrap gap-3">
                <Link to="/product" className="bg-trendygreen rounded shadow-tgreen px-5 py-2 mt-5 w-fit h-fit text-white font-medium">View Men's Collection</Link>
                <Link to="/product" className="bg-trendygreen rounded shadow-tgreen px-5 py-2 mt-5 w-fit h-fit text-white font-medium">View Women's Collection</Link>
            </div>
        </div>
    </div>
  )
}

export default LatestCollectionSection