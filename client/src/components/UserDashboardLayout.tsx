import axios from 'axios'
import { NavLink, Outlet, useNavigate, Link, useLocation } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { IconContext } from 'react-icons'
import { RiDashboardFill } from 'react-icons/ri'
import { RiFileList2Fill } from 'react-icons/ri'
import { FaHeart } from 'react-icons/fa'
import { CgLogOut } from 'react-icons/cg'
import { IoMdSettings } from 'react-icons/io'

const UserDashboardLayout = () => {

    const { setAuth } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const handleLogout = () => {
        axios.get('/api/user/logout',{
          withCredentials: true
        }).then(() => {
            setAuth(null)
            navigate('/login')
        })
    }

  return (
    <main className='w-full h-fit py-20 flex items-start flex-nowrap gap-10 px-10'>

        <aside className='w-60 h-fit grid border-r border-zinc-300'>
            <Link to='/account' className={location?.pathname === '/account' ? 'w-[98%] h-fit py-3 whitespace-nowrap flex items-center pl-2 gap-3 font-medium bg-trendygreen text-darkgray border-b border-zinc-200' : "w-[98%] h-fit py-3 whitespace-nowrap flex items-center pl-2 gap-3 font-medium text-darkgray hover:bg-verylighttrendygreen hover:border-zinc-200 border-b border-zinc-200"}>
                <RiDashboardFill />
                Dashboard 
            </Link>
            <NavLink to='/account/orders' className={({isActive}) => isActive ? 'w-[98%] h-fit py-3 whitespace-nowrap flex items-center pl-2 gap-3 font-medium bg-trendygreen text-darkgray border-b border-zinc-200' : "w-[98%] h-fit py-3 whitespace-nowrap flex items-center pl-2 gap-3 font-medium text-darkgray hover:bg-verylighttrendygreen hover:border-zinc-200 border-b border-zinc-200"}>
                <RiFileList2Fill />
                Orders history
            </NavLink>
            <NavLink to='/account/wishlist' className={({isActive}) => isActive ? 'w-[98%] h-fit py-3 whitespace-nowrap flex items-center pl-2 gap-3 font-medium bg-trendygreen text-darkgray border-b border-zinc-200' : "w-[98%] h-fit py-3 whitespace-nowrap flex items-center pl-2 gap-3 font-medium text-darkgray hover:bg-verylighttrendygreen hover:border-zinc-200 border-b border-zinc-200"}>
                <FaHeart />
                Wishlist
            </NavLink>
            <NavLink to='/account/settings' className={({isActive}) => isActive ? 'w-[98%] h-fit py-3 whitespace-nowrap flex items-center pl-2 gap-3 font-medium bg-trendygreen text-darkgray border-b border-zinc-200' : "w-[98%] h-fit py-3 whitespace-nowrap flex items-center pl-2 gap-3 font-medium text-darkgray hover:bg-verylighttrendygreen hover:border-zinc-200 border-b border-zinc-200"}>
                <IoMdSettings />
                Settings
            </NavLink>
            <button onClick={handleLogout} className="w-[98%] h-fit py-3 whitespace-nowrap flex items-center pl-2 gap-3 font-medium text-darkgray hover:bg-verylighttrendygreen hover:border-zinc-200">
                <CgLogOut />
                Logout
            </button>
        </aside>

        <Outlet />
    </main>
  )
}

export default UserDashboardLayout