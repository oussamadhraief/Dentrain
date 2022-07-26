import { FiMenu } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { IconContext } from "react-icons";
import { Link, useLocation } from 'react-router-dom'
import Modal from './Modal';
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NavbarNavigationSection = ({ Scrolled } : {Scrolled: boolean}) => {

  const { Auth,setAuth } = useAuth()
  const navigate = useNavigate()

  const [Open, setOpen] = useState<boolean>(false)
  const [Searching, setSearching] = useState<boolean>(false)
  const currentLocation = useLocation()
  
  const handleLogout = () => {
    axios.get('/api/user/logout',{
      withCredentials: true
    }).then(() => {
        setAuth(null)
        navigate('/login')
    })
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
            <div className="w-full h-fit py-3 hover:underline font-medium border-t border-zinc-300 text-center group hover:cursor-pointer ">
              Men
              <div className="w-11/12 h-0 overflow-hidden border-0 group-hover:h-52 group-hover:overflow-visible transition-all grid place-items-start mx-auto mt-0 group-hover:mt-2 bg-verylighttrendygreen rounded shadow px-1 relative before:absolute before:content-[''] before:-top-[7px] group-hover:border border-trendygreen before:border-t before:border-l before:border-trendygreen before:left-[49%] before:right-1/2 before:w-3 before:h-3 before:rotate-45 before:bg-verylighttrendygreen">
                  <Link className='w-full h-fit py-3 hover:underline font-medium text-center border-b border-trendygreen' to="/collections/men/stylish">Stylish</Link>
                  <Link className='w-full h-fit py-3 hover:underline font-medium text-center border-b border-trendygreen' to="/collections/men/fall">Fall</Link>
                  <Link className='w-full h-fit py-3 hover:underline font-medium text-center border-b border-trendygreen' to="/collections/men/summer">Summer</Link>
                  <Link className='w-full h-fit py-3 hover:underline font-medium text-center' to="/collections/men/whitecoats">White coats</Link>
              </div>
            </div>
            <div className="w-full h-fit py-3 hover:underline font-medium border-t border-zinc-300 text-center group hover:cursor-pointer ">
              Women
              <div className="w-11/12 h-0 overflow-hidden border-0 group-hover:h-52 group-hover:overflow-visible transition-all grid place-items-start mx-auto mt-0 group-hover:mt-2 bg-verylighttrendygreen rounded shadow px-1 relative before:absolute before:content-[''] before:-top-[7px] group-hover:border border-trendygreen before:border-t before:border-l before:border-trendygreen before:left-1/2 before:right-1/2 before:w-3 before:h-3 before:rotate-45 before:bg-verylighttrendygreen">
                  <Link className='w-full h-fit py-3 hover:underline font-medium text-center border-b border-trendygreen' to="/collections/men/stylish">Stylish</Link>
                  <Link className='w-full h-fit py-3 hover:underline font-medium text-center border-b border-trendygreen' to="/collections/men/fall">Fall</Link>
                  <Link className='w-full h-fit py-3 hover:underline font-medium text-center border-b border-trendygreen' to="/collections/men/summer">Summer</Link>
                  <Link className='w-full h-fit py-3 hover:underline font-medium text-center' to="/collections/men/whitecoats">White coats</Link>
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