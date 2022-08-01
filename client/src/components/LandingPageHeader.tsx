import scrubDoctor from '../assets/profession.png'
import { GrInstagram } from 'react-icons/gr'
import { FaTwitterSquare } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { IconContext } from 'react-icons'

const LandingPageHeader = () => {
  return (
    <div className="relative w-full h-fit mt-16 flex justify-around bg-trendygreen py-10">
        <div className='relative grid place-content-center'>
            <h1 className='w-fit h-fit text-white font-bold text-4xl poppinsFont'>DRESS DIFFERENT, LOOK CONFIDENT</h1>
            <div className='w-full h-fit flex justify-center mt-5 flex-nowrap items-center text-white gap-3'> 
            <IconContext.Provider value={{ className: 'w-7 h-7'}}>
              <a className='hover:scale-125 transition-all' target='_blank' href="https://www.instagram.com/dentrain.uae/">
                <GrInstagram />
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: 'w-8 h-8 mr-1'}}>
              <a className='hover:scale-125 transition-all' target='_blank' href="https://twitter.com/dentrain_uae">
                <FaTwitterSquare />
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: 'w-7 h-7'}}>
              <a className='hover:scale-125 transition-all' target='_blank' href="https://www.linkedin.com/in/oussama-dhraief/">
                <BsLinkedin />
              </a>
            </IconContext.Provider>
            </div>
            <div className='w-full h-fit px-10 py-2 flex flex-nowrap justify-center items-center gap-5 mt-12'>
              <button className='w-fit h-fit px-5 py-2 text-trendygreen font-medium border-2 border-white bg-white rounded hover:scale-110 transition-all'>visit something</button>
              <button className='w-fit h-fit px-5 py-2 text-white font-medium border-2 border-white rounded hover:scale-110 transition-all'>
                visit something <span className='font-bold'> &#x279D; </span>
              </button>
            </div>
        </div>
        <div className='w-[36%] drop-shadow-2xl'>
            <img src={scrubDoctor} alt="doctor" className='w-full h-auto' />
        </div>
        
    </div>
  )
}

export default LandingPageHeader