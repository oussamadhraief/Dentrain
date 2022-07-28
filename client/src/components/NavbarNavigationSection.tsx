import { FiMenu } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { IconContext } from "react-icons";
import { Link, useLocation } from 'react-router-dom'
import Modal from './Modal';
import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import { IoIosArrowDown } from 'react-icons/io'
import { useNavigate } from 'react-router-dom';

const NavbarNavigationSection = ({ Scrolled } : {Scrolled: boolean}) => {

  const { Auth,setAuth } = useAuth()
  const navigate = useNavigate()

  const [Open, setOpen] = useState<boolean>(false)
  const [Searching, setSearching] = useState<boolean>(false)
  const [MenSectionOpen, setMenSectionOpen] = useState<boolean>(false)
  const [WomenSectionOpen, setWomenSectionOpen] = useState<boolean>(false)
  const currentLocation = useLocation()
  
  const handleLogout = () => {
    axios.get('/api/user/logout',{
      withCredentials: true
    }).then(() => {
        setAuth(null)
        navigate('/login')
    })
  }

  const handleOpenMenSection = (e: React.MouseEvent) => {
    e.stopPropagation()
    setMenSectionOpen(prev => !prev)
    setWomenSectionOpen(false)
  }

  const handleOpenWomenSection = (e: React.MouseEvent) => {
    e.stopPropagation()
    setWomenSectionOpen(prev => !prev)
    setMenSectionOpen(false)
  }

  return (
    <div className='w-fit h-fit flex flex-nowrap gap-7 items-center'>

        {Auth?.user ? 
        <>
          <p className='font-medium text-darkgray'>{Auth?.user?.name}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
        :
        <>
          <Link to="/login" className='font-medium text-darkgray'>Login</Link>
          <Link to="/register" className='font-medium bg-trendygreen shadow-tgreen text-white rounded px-4 py-1'>Sign up</Link>
        </> 
        }

        {currentLocation.pathname === '/' || Scrolled ? <div className='relative w-7 h-7'>
          <IconContext.Provider value={{ color: "#383838",className: "w-7 h-7" }}>
            <button onClick={() => setSearching(prev => !prev)}>
              {Searching ? <IoMdClose /> : <AiOutlineSearch />}
            </button>
            {Searching ? <form className="slide-bl w-fit h-fit flex flex-nowrap items-center absolute right-0 top-[125%] shadow-xxxl rounded bg-white before:absolute before:content-[''] before:-top-[5px] before:right-2 before:w-3 before:h-3 before:rotate-45 before:bg-white">
              <input type="text" value="" placeholder='Search a product' className='h-10 w-72 flex-1 px-1 rounded-l-xl outline-none'/>
              <Link to="/search">
                <AiOutlineSearch />
              </Link>
            </form> : null}
          </IconContext.Provider>
        </div> : null}
        
        <IconContext.Provider value={{ color: "#383838",className: "w-7 h-7" }}>
        <Link to="/cart">
            <AiOutlineShoppingCart />
        </Link>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "#383838",className: "w-7 h-7" }}>
            <button onClick={() => setOpen(true)}>
                <FiMenu />
            </button>
        </IconContext.Provider>
        <Modal open={Open} children={(
          <>
            <Link className='w-full h-fit py-3 hover:underline font-medium mt-3 border-t border-zinc-300 text-center' to="/">
              Home
            </Link>

            {Auth?.user?.role === 'admin' && <Link className='w-full h-fit py-3 hover:underline font-medium border-t border-zinc-300 text-center' to="/admin-dashboard">
              Admin dashboard
            </Link>}

            <div className={MenSectionOpen ? "w-full h-fit pt-3  font-medium border-t border-zinc-300 text-center hover:cursor-pointer" : "w-full h-fit py-3 hover:underline font-medium border-t border-zinc-300 text-center hover:cursor-pointer" } onClick={handleOpenMenSection}>
              <div className='w-20 mx-auto justify-center h-fit flex flex-nowrap items-center gap-2 relative '>
                <Link to="/collections/men" className='hover:underline' onClick={e => e.stopPropagation()}>
                Men
                </Link>
                <IconContext.Provider value={{ className: MenSectionOpen ? 'absolute right-0 top-1.5 rotate-180 transition-all' : 'absolute right-0 top-1.5 transition-all'}}>
                  <IoIosArrowDown />  
                </IconContext.Provider>
              </div>
           
              <div className={MenSectionOpen ? "w-full h-fit transition-all grid place-items-start mx-auto mt-2 bg-zinc-100 px-2 rounded relative" : "w-full h-fit border-0 transition-all grid place-items-start mx-auto mt-0 group-hover:mt-2 bg-zinc-100 px-2 rounded shadow relative" }>
                  <Link className={MenSectionOpen ? 'w-full h-12 py-3 hover:underline font-medium text-center transition-all border-b border-zinc-300' : 'w-full h-0 overflow-hidden py-0 hover:underline font-medium text-center border-b-0 transition-all border-zinc-300'} to="/collections/men/stylish">Stylish</Link>
                  <Link className={MenSectionOpen ? 'w-full h-12 py-3 hover:underline font-medium text-center transition-all border-b border-zinc-300' : 'w-full h-0 overflow-hidden py-0 hover:underline font-medium text-center border-b-0 transition-all border-zinc-300'} to="/collections/men/fall">Fall</Link>
                  <Link className={MenSectionOpen ? 'w-full h-12 py-3 hover:underline font-medium text-center transition-all border-b border-zinc-300' : 'w-full h-0 overflow-hidden py-0 hover:underline font-medium text-center border-b-0 transition-all border-zinc-300'} to="/collections/men/summer">Summer</Link>
                  <Link className={MenSectionOpen ? 'w-full h-12 py-3 hover:underline font-medium text-center transition-all' : 'w-full h-0 overflow-hidden py-0 hover:underline font-medium text-center transition-all'} to="/collections/men/whitecoats">White coats</Link>
              </div>
            </div>
            <div className={WomenSectionOpen ? "w-full h-fit pt-3 font-medium border-t border-zinc-300 text-center hover:cursor-pointer" : "w-full h-fit py-3 hover:underline font-medium border-t border-zinc-300 text-center hover:cursor-pointer" } onClick={handleOpenWomenSection}>
              <div className='w-24 mx-auto justify-center h-fit flex flex-nowrap items-center gap-2 relative '>
                <Link to="/collections/women" className='hover:underline' onClick={e => e.stopPropagation()}>
                Women
                </Link>
                <IconContext.Provider value={{ className: WomenSectionOpen ? 'absolute right-0 top-1.5 rotate-180 transition-all' : 'absolute right-0 top-1.5 transition-all'}}>
                  <IoIosArrowDown />  
                </IconContext.Provider>
              </div>
           
              <div className={WomenSectionOpen ? "w-full h-fit transition-all grid place-items-start mx-auto mt-2 bg-zinc-100 px-2 rounded relative" : "w-full h-fit border-0 transition-all grid place-items-start mx-auto mt-0 group-hover:mt-2 bg-zinc-100 px-2 rounded shadow relative" }>
                  <Link className={WomenSectionOpen ? 'w-full h-12 py-3 hover:underline font-medium text-center transition-all border-b border-zinc-300' : 'w-full h-0 overflow-hidden py-0 hover:underline font-medium text-center border-b-0 transition-all border-zinc-300'} to="/collections/women/stylish">Stylish</Link>
                  <Link className={WomenSectionOpen ? 'w-full h-12 py-3 hover:underline font-medium text-center transition-all border-b border-zinc-300' : 'w-full h-0 overflow-hidden py-0 hover:underline font-medium text-center border-b-0 transition-all border-zinc-300'} to="/collections/women/fall">Fall</Link>
                  <Link className={WomenSectionOpen ? 'w-full h-12 py-3 hover:underline font-medium text-center transition-all border-b border-zinc-300' : 'w-full h-0 overflow-hidden py-0 hover:underline font-medium text-center border-b-0 transition-all border-zinc-300'} to="/collections/women/summer">Summer</Link>
                  <Link className={WomenSectionOpen ? 'w-full h-12 py-3 hover:underline font-medium text-center transition-all' : 'w-full h-0 overflow-hidden py-0 hover:underline font-medium text-center transition-all'} to="/collections/men/whitecoats">White coats</Link>
              </div>
            </div>
            <Link className='w-full h-fit py-3 hover:underline font-medium border-t border-zinc-300 text-center' to="/collections/accessories">
              Accessories
            </Link>
            <Link className='w-full h-fit py-3 hover:underline font-medium border-t border-zinc-300 text-center' to="/about">
              About us
            </Link>
            <Link className='w-full h-fit py-3 hover:underline font-medium border-y border-zinc-300 text-center' to="/contact">
              Contact us
            </Link>
          </>
        )} onClose={() => setOpen(false)} />
    </div>
  )
}

export default NavbarNavigationSection