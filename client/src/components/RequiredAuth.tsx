import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequiredAuth = ({ allowedRoles }: {allowedRoles: string[]}) => {

    const { Auth } = useAuth()
    const location = useLocation()
    
    

    return (
        Auth?.user ? 
        allowedRoles?.includes(Auth?.user?.role) ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />
        : 
        <Navigate to="/login" state={{ from: location }} replace />
    )
}

export default RequiredAuth