import { useState } from "react"
import { IconContext } from "react-icons"
import { BsLinkedin } from "react-icons/bs"
import { FaTwitterSquare } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"

const Footer = () => {
  
  const [isNewsLetterActive, setisNewsLetterActive] = useState<boolean>(false)
  const [newsLetterEmail,setNewsLetterEmail] = useState<string>('')

  return (
    <footer className='w-full h-96 bg-darkertrendygreen shadow-xxxl shadow-darkertrendygreen/50 flex justify-around items-start py-10'>
        <div>
          <h3 className="text-white font-medium w-full text-center">Visit us at :</h3>
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
        </div>
        <div>
            
        </div>
        <div>
          <h3 className="w-full text-white font-medium">Subscribe to our news letter</h3>
          <h3 className="w-full text-white wsFont text-sm mt-1">Stay up-to-date with all the news, offers and new products</h3>
          <form className='w-full h-fit flex items-center gap-2 mt-5'>

            <div className="flex flex-col floatingLabel w-full relative">
                <input type="text" name="newsLetter" id="newsLetter" onChange={e => {
                  const target = e.target as HTMLInputElement
                  setNewsLetterEmail(target.value)
                  
                  if (target.value !== '') {
                    setisNewsLetterActive(true);
                  } else {
                    setisNewsLetterActive(false);
                  }
                }} className='flex-1 min-w-[280px]' />
                <label htmlFor="newsLetter" className={ isNewsLetterActive ? "Active" : ""}>Please enter your email</label>
            </div>

            <button type='submit' className='w-fit h-[42px] px-3 bg-trendygreen font-medium text-sm text-white rounded'>Subscribe</button>

          </form>
        </div>
    </footer>
  )
}

export default Footer