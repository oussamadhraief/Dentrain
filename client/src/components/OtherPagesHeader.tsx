import { AiOutlineSearch } from 'react-icons/ai'
import { IconContext } from "react-icons";

const OtherPagesHeader = () => {
  return (
    <form className='w-full h-fit flex justify-center items-center flex-nowrap pt-32 pb-14 shadow'>
        <input type="text" name="search" placeholder='Search a product' className='w-96 h-10 border px-1 outline-none' />
        <IconContext.Provider value={{ color: "#fff",className: "w-7 h-7" }}>
            <button type='submit' className='bg-darkertrendygreen h-10 w-fit px-3'>
                <AiOutlineSearch />
            </button>
        </IconContext.Provider>
    </form>
  )
}

export default OtherPagesHeader