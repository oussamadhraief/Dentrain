import Header from './Header'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import useAuth from '../hooks/useAuth'
import { useEffect } from 'react'
import { authentication } from '../services/authentication'
import useAuthLoading from '../hooks/useAuthLoading'
import LoadingAnimation from './LoadingAnimation'

const Layout = () => {
  const { setAuth } = useAuth()
  const { AuthLoading, setAuthLoading } = useAuthLoading()
  const location = useLocation()

  useEffect(() => {
    authentication(setAuthLoading, setAuth)
  }, [location])

  if(AuthLoading)
    return <LoadingAnimation />

    
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout