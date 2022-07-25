import { useState } from "react"
import AdminNavbar from "./AdminNavbar"
import AdminSideBar from "./AdminSideBar"
import { Outlet } from "react-router-dom"

const AdminLayout = () => {

    const [SideBarOpen, setSideBarOpen] = useState<boolean>(true)

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