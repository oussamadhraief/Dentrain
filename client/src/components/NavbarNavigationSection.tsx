import { FiMenu } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { IconContext } from "react-icons";
import Modal from './Modal';
import { useState } from 'react';

const NavbarNavigationSection = () => {

  const [Open, setOpen] = useState<boolean>(false)

  return (
    <div className='w-fit h-fit flex flex-nowrap gap-7 items-center'>
        <a href="/login" className='font-medium text-darkgray'>Login</a>
        <a href="/signup" className='font-medium bg-trendygreen shadow-tgreen text-white rounded px-4 py-1'>Sign up</a>
        <IconContext.Provider value={{ color: "#383838",className: "w-7 h-7" }}>
        <button>
          <AiOutlineSearch />
        </button>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "#383838",className: "w-7 h-7" }}>
        <a href="/cart">
            <AiOutlineShoppingCart />
        </a>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "#383838",className: "w-7 h-7" }}>
            <button onClick={() => setOpen(true)}>
                <FiMenu />
            </button>
        </IconContext.Provider>
        <Modal open={Open} children={(
          <>
            <a className='w-full h-fit py-3 hover:underline font-medium mt-3 border-t border-zinc-300 text-center' href="/">
              Home
            </a>
            <a className='w-full h-fit py-3 hover:underline font-medium border-t border-zinc-300 text-center' href="/collections/men">
              Men
            </a>
            <a className='w-full h-fit py-3 hover:underline font-medium border-t border-zinc-300 text-center' href="/collections/women">
              Women
            </a>
            <a className='w-full h-fit py-3 hover:underline font-medium border-t border-zinc-300 text-center' href="/collections/accessories">
              Accessories
            </a>
            <a className='w-full h-fit py-3 hover:underline font-medium border-t border-zinc-300 text-center' href="/about">
              About us
            </a>
            <a className='w-full h-fit py-3 hover:underline font-medium border-y border-zinc-300 text-center' href="/contact">
              Contact us
            </a>
          </>
        )} onClose={() => setOpen(false)} />
    </div>
  )
}

export default NavbarNavigationSection