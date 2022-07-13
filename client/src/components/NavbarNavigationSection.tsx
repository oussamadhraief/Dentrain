import { FiMenu } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { IconContext } from "react-icons";

const NavbarNavigationSection = () => {
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
            <button>
                <FiMenu />
            </button>
        </IconContext.Provider>
    </div>
  )
}

export default NavbarNavigationSection