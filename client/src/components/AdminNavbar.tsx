import { AiOutlineSearch } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import { IconContext } from 'react-icons'
import axios from 'axios'
import useAuth from '../hooks/useAuth'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

type Props = {
    SideBarOpen: boolean;
    setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminNavbar = ({ SideBarOpen, setSideBarOpen}: Props) => {

    const { Auth,setAuth } = useAuth()
    const navigate = useNavigate()

    const [Open, setOpen] = useState(false)
    
    const handleLogout = () => {
        axios.get('/api/user/logout',{
          withCredentials: true
        }).then(() => {
            setAuth(null)
            navigate('/login')
        })
      }

  return (
    <nav className='h-14 py-2 w-full bg-darkertrendygreen shadow-form flex justify-between px-10 items-center flex-nowrap z-50'>

            <IconContext.Provider value={{ className: `w-7 h-8`}}>
                <button className={SideBarOpen ? "text-pinky" : "text-white"} onClick={() => setSideBarOpen(prev => !prev)}>
                    <FiMenu />
                </button>
            </IconContext.Provider>

            <form className='h-fit w-fit flex items-center rounded-xl bg-lighterdarktrendygreen'>
                <input type="text" name="" id="" placeholder='Search' className='h-9 w-96 bg-transparent rounded-l-xl px-3 outline-none text-white placeholder:text-white' />

                <IconContext.Provider value={{ className: 'w-7 h-7 text-white'}}>
                    <button className='px-2'>
                        <AiOutlineSearch />
                    </button>
                </IconContext.Provider>
            </form>
            <div className='w-fit h-fit relative'>

                <button className='w-fit h-fit flex flex-nowrap items-center gap-2 text-white bg-lighterdarktrendygreen px-2 py-1 rounded-xl font-medium' onClick={() => setOpen(prev => !prev)}>
                    <span>{Auth?.user?.name}</span>

                    <IconContext.Provider value={{ className: 'w-5 h-4'}}>

                        <IoIosArrowDown />

                    </IconContext.Provider>

                </button>

                {Open && 
                    <div className='absolute top-[110%] right-0 w-40 h-fit bg-white rounded shadow-float grid px-2 font-medium'>
                        
                        <Link className='w-full h-fit text-center py-1 border-b hover:underline' to='/'>Home</Link>
                        <Link className='w-full h-fit text-center py-1 border-b hover:underline' to='/account/orders'>My orders</Link>
                        <Link className='w-full h-fit text-center py-1 border-b hover:underline' to='/account/wishlist'>My wishlist</Link>
                        <Link className='w-full h-fit text-center py-1 border-b hover:underline' to='/account/settings'>Settings</Link>
                        <button className='w-full h-fit text-center py-1 hover:underline text-red-500' onClick={handleLogout}>Logout</button>

                    </div>
                }
            </div>

    </nav>
  )
}

export default AdminNavbar