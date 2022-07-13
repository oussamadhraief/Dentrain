import NavbarNavigationSection from './NavbarNavigationSection'

const Navbar = () => {
  return (
    <nav className="w-screen h-fit fixed top-0 left-0 flex justify-around py-1 items-center flex-nowrap shadow z-10 bg-white">
        <a href="/"><img src="/Dentrain.svg" alt="Dentrain logo" className='w-52' /></a>
        <NavbarNavigationSection />
    </nav>
  )
}

export default Navbar