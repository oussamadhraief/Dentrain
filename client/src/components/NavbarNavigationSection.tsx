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
  const [Show, setShow] = useState<boolean>(false)
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
          <button onClick={() => setShow(prev => !prev)} className='relative font-medium text-darkgray hover:cursor-pointer w-fit h-fit flex items-center gap-1 border border-darkgray rounded-full hover:bg-zinc-100 pl-4 pr-2 py-0.5'>
            <span>{Auth?.user?.name}</span>

            <IconContext.Provider value={{ className: 'w-5 h-4 mt-[2px]'}}>

                        <IoIosArrowDown />

                    </IconContext.Provider>
                    
              {Show && <div className='absolute left-1/2 -translate-x-1/2 mx-auto top-[125%] h-fit bg-white shadow-float grid w-52 rounded px-1.5'>
                <Link className='w-full h-fit text-center py-1.5 border-b hover:underline' to='/'>Home</Link>
                <Link className='w-full h-fit text-center py-1.5 border-b hover:underline' to='/account/orders'>My orders</Link>
                <Link className='w-full h-fit text-center py-1.5 border-b hover:underline' to='/account/wishlist'>My wishlist</Link>
                <Link className='w-full h-fit text-center py-1.5 border-b hover:underline' to='/account/settings'>Settings</Link>
                <div onClick={handleLogout} className="w-full h-fit text-center py-1.5 hover:underline text-red-500">Logout</div>
              </div>}
          </button>

        </>
        :
        <>
          <Link to="/login" className='font-medium text-darkgray'>Login</Link>
          <Link to="/register" className='font-medium bg-trendygreen shadow-tgreen text-white rounded px-4 py-1'>Sign up</Link>
        </> 
        }

        {currentLocation.pathname === '/' || Scrolled ? <div className='w-7 h-7'>
          <IconContext.Provider value={{ color: "#383838",className: "w-7 h-7" }}>
            <button onClick={() => setSearching(prev => !prev)}>
              {Searching ? <IoMdClose /> : <AiOutlineSearch />}
            </button>
            {Searching && <form className="w-full h-fit flex flex-nowrap items-center absolute right-0 top-full pl-3 pr-5 py-1 bg-white scale-up-ver-top border-t">
              <input type="text" value="" placeholder='Search a product' className='h-12 w-96 flex-1 px-1 rounded-l-xl outline-none'/>
              <Link to="/search">
                <AiOutlineSearch />
              </Link>
            </form>}
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