import { AiOutlineSearch } from 'react-icons/ai'
import { FiMenu } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import { IconContext } from 'react-icons'

type Props = {
    SideBarOpen: boolean;
    setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AdminNavbar = ({ SideBarOpen, setSideBarOpen}: Props) => {
  return (
    <nav className='h-14 w-full bg-darkertrendygreen shadow-stylish flex justify-between px-10 items-center flex-nowrap'>

            <IconContext.Provider value={{ className: `w-7 h-8`}}>
                <button className={SideBarOpen ? "text-pinky" : "text-white"} onClick={() => setSideBarOpen(prev => !prev)}>
                    <FiMenu />
                </button>
            </IconContext.Provider>

            <form className='h-fit w-fit flex items-center rounded-xl bg-lighterdarktrendygreen'>
                <input type="text" name="" id="" placeholder='Search' className='h-9 w-96 bg-transparent rounded-l-xl px-3 outline-none text-white placeholder:text-white' />

                <IconContext.Provider value={{ className: 'w-7 h-7 text-white'}}>
                    <button className='px-2'>
                        <AiOutlineSearch />
                    </button>
                </IconContext.Provider>
            </form>
            
        <button className='w-fit h-fit flex flex-nowrap items-center gap-2 text-white bg-lighterdarktrendygreen px-2 py-1 rounded-xl font-medium'>
            <span>Oussema Dhraief</span>

            <IconContext.Provider value={{ className: 'w-5 h-4'}}>

                <IoIosArrowDown />

            </IconContext.Provider>

        </button>

    </nav>
  )
}

export default AdminNavbar