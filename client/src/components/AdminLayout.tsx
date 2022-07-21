import { useState } from "react"
import AdminNavbar from "./AdminNavbar"
import AdminSideBar from "./AdminSideBar"

const AdminLayout = () => {

    const [SideBarOpen, setSideBarOpen] = useState<boolean>(true)

  return (
    <div className="w-screen h-screen overflow-hidden">
        <AdminNavbar SideBarOpen={SideBarOpen} setSideBarOpen={setSideBarOpen} />
        <main className="w-full h-full flex items-start">
            <AdminSideBar SideBarOpen={SideBarOpen} setSideBarOpen={setSideBarOpen} />
            <div></div>
        </main>
    </div>
  )
}

export default AdminLayout