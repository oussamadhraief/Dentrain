import NavbarNavigationSection from './NavbarNavigationSection'
import { Link,useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Navbar = () => {

  const [Scrolled, setScrolled] = useState<boolean>(false)
  const currentLocation = useLocation()

  useEffect(() => {

        

    window.addEventListener('scroll', handleScroll)

    return () => {
        window.removeEventListener('scroll', handleScroll)
    }
  },[])

  const handleScroll = () => {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
      setScrolled(true)
    }else{
      setScrolled(false)
    }
  }
  

  return (
    <nav className={currentLocation.pathname !== '/' && !Scrolled ? "w-screen h-fit fixed top-0 left-0 flex justify-around py-1 items-center flex-nowrap bg-white" : "w-screen h-fit fixed top-0 left-0 flex justify-around py-1 items-center flex-nowrap shadow z-10 bg-white" }>
        <Link to="/"><img src="/logo.png" alt="Dentrain logo" className='w-56' /></Link>
        <NavbarNavigationSection Scrolled={Scrolled} />
    </nav>
  )
}

export default Navbar