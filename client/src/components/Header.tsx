import Navbar from './Navbar'
import LandingPageHeader from './LandingPageHeader'
import OtherPagesHeader from './OtherPagesHeader'
import { useLocation } from 'react-router-dom'


const Header = () => {

  const currentLocation = useLocation()

  return (
    <header>
        <Navbar />
        {currentLocation.pathname === '/' ? 
        <LandingPageHeader /> 
        : 
        <OtherPagesHeader />}
        {/* <BannerSection /> */}
    </header>
  )
}

export default Header