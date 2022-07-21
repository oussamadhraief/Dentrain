import { NavLink } from "react-router-dom"
import { AiOutlineAppstoreAdd } from "react-icons/ai"
import { RiListSettingsLine } from "react-icons/ri"
import { BsArchive } from "react-icons/bs"
import { HiOutlineClipboardList } from "react-icons/hi"
import { FaRegFolderOpen } from "react-icons/fa"
import { RiUserSettingsLine } from "react-icons/ri"
import { IconContext } from "react-icons"

type Props = {
    SideBarOpen: boolean;
    setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminSideBar = ({ SideBarOpen, setSideBarOpen}: Props) => {
  return (
    <aside className={SideBarOpen ? "w-56 h-full bg-lighterdarktrendygreen grid place-content-start border-t border-trendygreen/30 transition-all overflow-hidden" : "w-0 overflow-hidden transition-all"}>
        <NavLink to='/admin-dashboard/products/add' className={({ isActive }: {isActive: boolean}) => SideBarOpen ? isActive ? "w-56 h-fit py-3 pl-3.5 transition-all my-1 text-white font-extrabold poppinsFont flex items-center flex-nowrap gap-3 text-sm bg-trendygreen relative before:content-[''] before:h-full before:absolute before:w-1 before:top-0 before:left-0 before:bg-white" : 'w-56 h-fit py-3 pl-3.5 transition-all my-1 text-white/70 font-extrabold poppinsFont flex items-center flex-nowrap gap-3 text-sm hover:text-white hover:bg-darkertrendygreen' : "hidden"}>
            <IconContext.Provider value={{ className: 'w-5 h-5'}}>
                <AiOutlineAppstoreAdd /> 
            </IconContext.Provider>
            <span>Add a product</span>
        </NavLink>
        <NavLink to='/admin-dashboard/products/manage' className={({ isActive }: {isActive: boolean}) => SideBarOpen ? isActive ? "w-56 h-fit py-3 pl-3.5 transition-all my-1 text-white font-extrabold poppinsFont flex items-center flex-nowrap gap-3 text-sm bg-trendygreen relative before:content-[''] before:h-full before:absolute before:w-1 before:top-0 before:left-0 before:bg-white" : 'w-56 h-fit py-3 pl-3.5 transition-all my-1 text-white/70 font-extrabold poppinsFont flex items-center flex-nowrap gap-3 text-sm hover:text-white hover:bg-darkertrendygreen' : "hidden"}>
            <IconContext.Provider value={{ className: 'w-5 h-5 p-[2px]'}}>
                <RiListSettingsLine /> 
            </IconContext.Provider>
            <span>Manage products</span> 
        </NavLink>
        <NavLink to='/admin-dashboard/products/archived' className={({ isActive }: {isActive: boolean}) => SideBarOpen ? isActive ? "w-56 h-fit py-3 pl-3.5 transition-all my-1 text-white font-extrabold poppinsFont flex items-center flex-nowrap gap-3 text-sm bg-trendygreen relative before:content-[''] before:h-full before:absolute before:w-1 before:top-0 before:left-0 before:bg-white" : 'w-56 h-fit py-3 pl-3.5 transition-all my-1 text-white/70 font-extrabold poppinsFont flex items-center flex-nowrap gap-3 text-sm hover:text-white hover:bg-darkertrendygreen' : "hidden"}>
            <IconContext.Provider value={{ className: 'w-5 h-5 p-[2px]'}}>
                <BsArchive /> 
            </IconContext.Provider>
            <span>Archived products</span> 
        </NavLink>
        <NavLink to='/admin-dashboard/orders/manage' className={({ isActive }: {isActive: boolean}) => SideBarOpen ? isActive ? "w-56 h-fit py-3 pl-3.5 transition-all my-1 text-white font-extrabold poppinsFont flex items-center flex-nowrap gap-3 text-sm bg-trendygreen relative before:content-[''] before:h-full before:absolute before:w-1 before:top-0 before:left-0 before:bg-white" : 'w-56 h-fit py-3 pl-3.5 transition-all my-1 text-white/70 font-extrabold poppinsFont flex items-center flex-nowrap gap-3 text-sm hover:text-white hover:bg-darkertrendygreen' : "hidden"}>
            <IconContext.Provider value={{ className: 'w-5 h-5'}}>
                <HiOutlineClipboardList /> 
            </IconContext.Provider>
            <span>Manage orders</span> 
        </NavLink>
        <NavLink to='/admin-dashboard/orders/archived' className={({ isActive }: {isActive: boolean}) => SideBarOpen ? isActive ? "w-56 h-fit py-3 pl-3.5 transition-all my-1 text-white font-extrabold poppinsFont flex items-center flex-nowrap gap-3 text-sm bg-trendygreen relative before:content-[''] before:h-full before:absolute before:w-1 before:top-0 before:left-0 before:bg-white" : 'w-56 h-fit py-3 pl-3.5 transition-all my-1 text-white/70 font-extrabold poppinsFont flex items-center flex-nowrap gap-3 text-sm hover:text-white hover:bg-darkertrendygreen' : "hidden"}>
            <IconContext.Provider value={{ className: 'w-5 h-5 p-[2px]'}}>
                <FaRegFolderOpen /> 
            </IconContext.Provider>
            <span>Archived orders</span> 
        </NavLink>
        <NavLink to='/admin-dashboard/users/manage' className={({ isActive }: {isActive: boolean}) => SideBarOpen ? isActive ? "w-56 h-fit py-3 pl-3.5 transition-all my-1 text-white font-extrabold poppinsFont flex items-center flex-nowrap gap-3 text-sm bg-trendygreen relative before:content-[''] before:h-full before:absolute before:w-1 before:top-0 before:left-0 before:bg-white" : 'w-56 h-fit py-3 pl-3.5 transition-all my-1 text-white/70 font-extrabold poppinsFont flex items-center flex-nowrap gap-3 text-sm hover:text-white hover:bg-darkertrendygreen' : "hidden"}>
            <IconContext.Provider value={{ className: 'w-4 h-4'}}>
                <RiUserSettingsLine /> 
            </IconContext.Provider>
            <span>Manage users</span> 
        </NavLink>
    </aside>
  )
}

export default AdminSideBar