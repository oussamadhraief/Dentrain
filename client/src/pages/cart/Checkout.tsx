import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import { IconContext } from 'react-icons'
import { AiOutlineUser } from 'react-icons/ai'
import axios from 'axios'
import useAuth from '../../hooks/useAuth'
import Select from 'react-select'
import React, { useState } from 'react'
import { countriesData } from '../../utils/countriesData'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import medicalScrub from '../../assets/product.webp'
import medicalScrub2 from '../../assets/product2.webp'

interface SelectedAddressInterface  {
    label: string;
    value: string;
}

interface Country {
    label: string;
    value: string;
}

interface UserAddress {
    address: string;
    detailedAddress?: string;
    zipCode: string;
    city: string;
    country: Country | string;
    company?: string;
    addressName: string;
    defaultAddress: boolean;
}

const styles = {
    menuList: (base: any) => ({
        ...base,
        height: "200px"
    }),
    control: (base: any) => ({
        ...base,
        height: 44,
        minHeight: 44
      }),
    option: (provided:any, state:any) => ({
    ...provided,
    outline: 'none',
    height: '40px',
    color: state.isSelected ? 'white' : 'black',
    background: state.isSelected ? '#14B1C0' : "#fff"
    })}

const theme = (theme:any) => ({
    ...theme,
    colors: {
        ...theme.colors,
        primary: "#14B1C0"
    }})

const Checkout = () => {
    
    const { setAuth } = useAuth()
    const navigate = useNavigate()

    const [SelectedAddress, setSelectedAddress] = useState<SelectedAddressInterface | null>(null)
    const [ShippingInformation, setShippingInformation] = useState<UserAddress>({ address: '', detailedAddress: '', zipCode: '', city: '', country: '', company: '', addressName: '', defaultAddress: false })
    const [isNameActive, setisNameActive] = useState<boolean>(false)
    const [isCompanyActive, setisCompanyActive] = useState<boolean>(false)
    const [isAddressActive, setisAddressActive] = useState<boolean>(false)
    const [isDetailedAddressActive, setisDetailedAddressActive] = useState<boolean>(false)
    const [isCityActive, setisCityActive] = useState<boolean>(false)
    const [isZipCodeActive, setisZipCodeActive] = useState<boolean>(false)
    const [isPhoneActive, setisPhoneActive] = useState<boolean>(false)
    const [isDiscountCodeActive, setisDiscountCodeActive] = useState<boolean>(false)

    function handleTextChange( e: React.FormEvent<HTMLInputElement>, setIsActive: React.Dispatch<React.SetStateAction<boolean>> ) {
        const target = e.target as HTMLInputElement
        setShippingInformation({
            ...ShippingInformation,
            [target.name]: target.value
        });
      
        if (target.value !== '') {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }
      

    const handleLogout = () => {
        axios.get('/api/user/logout',{
          withCredentials: true
        }).then(() => {
            setAuth(null)
            navigate('/login')
        })
      }

    return (
    <main className='w-full h-fit min-h-screen flex items-start overflow-auto bg-darkertrendygreen'>
        <div className='relative w-7/12 h-fit bg-white flex justify-end shadow-xxxl shadow-trendygreen/50'>
            

        <div className='w-7/12 h-fit min-h-screen px-5 gap-5 pt-14 overflow-auto bg-white'>
            <Link to='/' className='h-fit w-fit '>
                <img src='/Dentrain.svg' alt="Logo" className='w-60 h-auto mx-auto' />
            </Link>
            <div className='w-fit flex gap-1 items-center text-sm font-medium mt-3 mx-auto'>
                <Link to='/cart'>Cart</Link>
                <IoIosArrowForward />
                <p>Information</p>
                <IoIosArrowForward />
                <p className='text-zinc-500'>Payment</p>
            </div>
            <h2 className='font-medium text-lg mt-7'>Contact information</h2>
            <div className='w-fit h-fit flex justify-start items-center my-3 gap-2'>
                <IconContext.Provider value={{ className: 'w-9 h-10'}}>
                    <AiOutlineUser />
                </IconContext.Provider>
                <div className='text-sm'>
                    <p>Oussema Dhraief &#40;oussema.dhraief.17@gmail.com&#41;</p>
                    <button onClick={handleLogout} className="w-fit h-fit font-medium">Logout</button>
                </div>
            </div>
            <form className='w-full h-fit min-w-[320px]'>
                <label className='flex items-center gap-1 font-medium text-sm'>
                    <input type="checkbox" name="subscribe" id="" />
                    Email me with news and offers
                </label>
                <h2 className='font-medium text-lg my-7'>Shipping address and information</h2>


                <Select options={[
                    {value: 'chaalik', label: 'Home'},
                    {value: 'chaalik1', label: 'Home1'},
                    {value: 'chaalik2', label: 'Home2'},
                    {value: 'newAddress', label: 'Use a new address'}
                ]} className='w-full h-10 outline-none text-[13px] font-thin placeholder:text-zinc-300' value={SelectedAddress} onChange={selectedValue => {
                    
                    if(selectedValue) {
                        setSelectedAddress(selectedValue)
                    }else{
                        setSelectedAddress(null)
                    }
                }} 
                placeholder="Saved addresses" menuShouldScrollIntoView={true} name="selectedAddress" styles={{
                    menuList: (base: any) => ({
                        ...base,
                        height: "fit-content",
                        maxHeight: "200px"
                    }),
                    control: (base: any) => ({
                        ...base,
                        height: 44,
                        minHeight: 44
                      }),
                    option: (provided:any, state:any) => ({
                    ...provided,
                    outline: 'none',
                    height: '40px',
                    color: state.isSelected ? 'white' : 'black',
                    background: state.isSelected ? '#14B1C0' : "#fff"
                    })}} 
                    theme={theme} />
                
                
                <div className="flex flex-col floatingLabel w-full mt-5 relative">
                    <input type="text" name="name" id="name" onChange={e => handleTextChange(e, setisNameActive)} />
                    <label htmlFor="name" className={ isNameActive ? "Active" : ""}>Name</label>
                </div>

                <div className="flex flex-col floatingLabel w-full relative mt-5">
                    <input type="text" name="company" id="company" onChange={e => handleTextChange(e, setisCompanyActive)} />
                    <label htmlFor="company" className={ isCompanyActive ? "Active" : ""}>Company &#40;optional&#41;</label>
                </div>
                
                <div className="flex flex-col floatingLabel w-full relative mt-5">
                    <input type="text" name="address" id="address" onChange={e => handleTextChange(e, setisAddressActive)} />
                    <label htmlFor="address" className={ isAddressActive ? "Active" : ""}>Address</label>
                </div>

                <div className="flex flex-col floatingLabel w-full relative mt-5">
                    <input type="text" name="detailedAddress" id="detailedAddress" onChange={e => handleTextChange(e, setisDetailedAddressActive)} />
                    <label htmlFor="detailedAddress" className={ isDetailedAddressActive ? "Active" : ""}>Apartment, Suite, etc. &#40;optional&#41;</label>
                </div>

                <div className='flex flex-nowrap gap-2 items-center'>
                
                    <div className="flex flex-col floatingLabel w-1/2 relative mt-5">
                        <input type="text" name="zipCode" id="zipCode" onChange={e => handleTextChange(e, setisZipCodeActive)} />
                        <label htmlFor="zipCode" className={ isZipCodeActive ? "Active" : ""}>ZipCode</label>
                    </div>

                    <div className="flex flex-col floatingLabel w-1/2 relative mt-5">
                        <input type="text" name="city" id="city" onChange={e => handleTextChange(e, setisCityActive)} />
                        <label htmlFor="city" className={ isCityActive ? "Active" : ""}>City</label>
                    </div>

                </div>


                <Select options={countriesData} className='w-full h-10 outline-none text-[13px] font-thin placeholder:text-zinc-300 mt-5' value={ShippingInformation.country} onChange={selectedValue => {
                            
                            if(selectedValue) {
                                    setShippingInformation({
                                ...ShippingInformation,
                                country: selectedValue
                            })}else{
                                setShippingInformation({
                                    ...ShippingInformation,
                                    country: ''
                                })
                        }
                        }} 
                        placeholder="Country" isClearable={true} menuShouldScrollIntoView={true} name="country" styles={styles} theme={theme} />

                <div className="flex flex-col floatingLabel w-full relative mt-5">
                    <input type="text" name="phone" id="phone" onChange={e => handleTextChange(e, setisPhoneActive)} />
                    <label htmlFor="phone" className={ isPhoneActive ? "Active" : ""}>Phone</label>
                </div>

                <div className='w-full h-fit flex items-center justify-between flex-nowrap mt-7'>
                    <Link to='/' className='w-fit h-fit flex items-center gap-1 font-medium'>
                        <FaLongArrowAltLeft />
                        Return to cart
                    </Link>
                    <button type='submit' className='w-fit h-fit px-3 py-2 bg-trendygreen text-white font-medium rounded shadow-modern shadow-trendygreen/30'>
                        Continue to payment
                    </button>
                </div>

            </form>
            <div className='w-full h-fit flex justify-evenly items-center border-t mt-20 text-sm font-medium py-5'>
                    <p>Refund policy</p>
                    <p>Shipping policy</p>
                    <p>Privacy policy</p>
                    <p>Terms of service</p>
            </div>
        </div>
        </div>
        <aside className='relative w-5/12 h-fit min-h-screen overflow-hidden flex justify-start'>

        <div className='absolute -top-40 -right-0 w-1/3 aspect-square border-4 rounded-full border-white/80  border-t-8'></div>
        <div className='absolute -top-20 -right-20 w-1/3 aspect-square border-4 rounded-full border-white/80 border-t-8'></div>

            <section className='w-7/12 px-10'>
                <p className='text-white my-20'>STEP 2/3</p>
                <div className='w-full h-fit flex mb-7 justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        <div className='w-[70px] h-[70px] rounded-xl relative bg-white'>
                            <img src={medicalScrub} alt="" className='h-full w-auto mx-auto' />
                            <p className='absolute -top-3.5 -right-2 w-fit h-fit rounded-full bg-trendygreen/80 py-0.5 text-sm font-medium p-2'>10</p>
                        </div>
                        <div className='grid gap-1 font-medium'>
                            <p className='text-white'>Product name</p>
                            <p className=' text-sm text-zinc-200'>XS / S / OPEN</p>
                        </div>
                    </div>
                    <p className='text-white font-medium text-sm'>299.00$</p>
                </div>

                <div className='w-full h-fit flex mb-7 justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        <div className='w-[70px] h-[70px] rounded-xl relative bg-white'>
                            <img src={medicalScrub2} alt="" className='h-full w-auto mx-auto' />
                            <p className='absolute -top-3.5 -right-2 w-fit h-fit rounded-full bg-trendygreen/80 py-0.5 text-sm font-medium p-2'>10</p>
                        </div>
                        <div className='grid gap-1 font-medium'>
                            <p className='text-white'>Product name</p>
                            <p className=' text-sm text-zinc-200'>XS / S / OPEN</p>
                        </div>
                    </div>
                    <p className='text-white font-medium text-sm'>299.00$</p>
                </div>
                
                <form className='w-full h-fit flex items-center gap-2 mt-7 py-7 border-y border-trendygreen'>

                    <div className="flex flex-col floatingLabel w-full relative">
                        <input type="text" name="discountCode" id="discountCode" onChange={e => handleTextChange(e, setisDiscountCodeActive)} className='flex-1' />
                        <label htmlFor="discountCode" className={ isDiscountCodeActive ? "Active" : ""}>Discount code</label>
                    </div>

                    <button type='submit' className='w-fit h-[42px] px-3 bg-trendygreen font-medium text-white rounded'>Apply</button>

                </form>

                <p className='w-full h-fit flex justify-between items-center mb-5 mt-5 font-medium text-white text-sm'>Subtotal: <span>299$</span></p>
                <p className='w-full h-fit flex justify-between items-center pb-5 border-b border-trendygreen font-medium text-white text-sm'>Estimate shipping: <span>299$</span></p>
                <p className='w-full h-fit flex justify-between items-center mt-3 font-bold text-white'>Total: <span className='text-2xl'>299$</span></p>
            </section>

        </aside>
    </main>
  )
}

export default Checkout