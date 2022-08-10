import { useEffect, useState } from "react"
import AdminNavbar from "./AdminNavbar"
import AdminSideBar from "./AdminSideBar"
import { Outlet, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import useAuthLoading from "../hooks/useAuthLoading"
import { authentication } from "../services/authentication"
import LoadingAnimation from "./LoadingAnimation"

const AdminLayout = () => {

    const [SideBarOpen, setSideBarOpen] = useState<boolean>(true)

    const { setAuth } = useAuth()
    const { AuthLoading, setAuthLoading } = useAuthLoading()
    const location = useLocation()

    useEffect(() => {
      authentication(setAuthLoading, setAuth)
    }, [location])

    
    if(AuthLoading)
      return <LoadingAnimation />
      
    return (
      <div className="w-screen h-screen overflow-hidden flex flex-col justify-start flex-nowrap">
          <AdminNavbar SideBarOpen={SideBarOpen} setSideBarOpen={setSideBarOpen} />
          <main className="mainAdminSection overflow-hidden w-full flex items-start justify-center flex-nowrap">
              <AdminSideBar SideBarOpen={SideBarOpen} setSideBarOpen={setSideBarOpen} />
              <Outlet />
          </main>
      </div>
    )
}

export default AdminLayout