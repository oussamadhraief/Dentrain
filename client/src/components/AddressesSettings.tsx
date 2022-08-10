import { useRef, useState } from 'react'
import { countriesData } from "../utils/countriesData"
import Select from 'react-select'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { IconContext } from 'react-icons';
import { IoIosArrowDown } from 'react-icons/io';
import axios, { AxiosError, AxiosResponse } from 'axios';
import useAuth from '../hooks/useAuth';
import { UserAddress } from '../services/authentication';

interface Props {
    ShowUseraddressesSection: boolean;
    ShowAddNewAddressForm: boolean;
    ShowUpdateAddressForm: boolean;
    AddNewAddressForm: UserAddress;
    setShowUsernameForm: React.Dispatch<React.SetStateAction<boolean>>;
    setAddNewAddressForm: React.Dispatch<React.SetStateAction<UserAddress>>;
    setShowUseraddressesSection: React.Dispatch<React.SetStateAction<boolean>>;
    setShowUserpasswordForm: React.Dispatch<React.SetStateAction<boolean>>;
    setShowAddNewAddressForm: React.Dispatch<React.SetStateAction<boolean>>;
    setShowUpdateAddressForm: React.Dispatch<React.SetStateAction<boolean>>;
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

const themes = (theme:any) => ({
    ...theme,
    colors: {
        ...theme.colors,
        primary: "#14B1C0"
    }})

const AddressesSettings = ({ ShowUseraddressesSection, ShowAddNewAddressForm, ShowUpdateAddressForm, AddNewAddressForm, setShowUsernameForm, setAddNewAddressForm, setShowUseraddressesSection, setShowUserpasswordForm, setShowAddNewAddressForm, setShowUpdateAddressForm }: Props) => {

    const { Auth,setAuth } = useAuth()
    const updateAddressInputRef = useRef<HTMLInputElement>(null)
    
    const [UpdateAddressForm, setUpdateAddressForm] = useState<UserAddress>({ address: '', detailedAddress: '', zipCode: '', city: '', country: '', company: '', addressName: '', defaultAddress: false })
    const [isCompanyActive, setisCompanyActive] = useState<boolean>(false)
    const [isAddressActive, setisAddressActive] = useState<boolean>(false)
    const [isDetailedAddressActive, setisDetailedAddressActive] = useState<boolean>(false)
    const [isCityActive, setisCityActive] = useState<boolean>(false)
    const [isZipCodeActive, setisZipCodeActive] = useState<boolean>(false)
    const [isAddressNameActive, setisAddressNameActive] = useState<boolean>(false)
    

    const handleAddAddressFormChange = ( e: React.FormEvent<HTMLInputElement>, setIsActive: React.Dispatch<React.SetStateAction<boolean>> ) => {
        const target = e.target as HTMLInputElement
        setAddNewAddressForm({
            ...AddNewAddressForm,
            [target.name]: target.value
        });
      
        if (target.value !== '') {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
    }
    
    const handleUpdateAddressFormChange = ( e: React.FormEvent<HTMLInputElement>, setIsActive: React.Dispatch<React.SetStateAction<boolean>> ) => {
        const target = e.target as HTMLInputElement
        setUpdateAddressForm({
            ...UpdateAddressForm,
            [target.name]: target.value
        });
      
        if (target.value !== '') {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
    }

    const handleAddAddressSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        axios.post('/api/user/manage-user-address',JSON.stringify(AddNewAddressForm),{
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            withCredentials: true
        }).then((res: AxiosResponse)=> {
            setAuth({ user : res?.data?.updatedUser })
            setShowAddNewAddressForm(false)
        }).catch((error: Error | AxiosError) => {
            if (axios.isAxiosError(error))  {
                console.log(error.response?.status);
                
            } else {
              String(error);
              console.log(error);
              
            }
          })
    }

    const handleUpdateAddressSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        axios.patch('/api/user/manage-user-address',JSON.stringify(UpdateAddressForm),{
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            withCredentials: true
        }).then((res: AxiosResponse)=> {
            setAuth({ user : res?.data?.updatedUser })
            setShowUpdateAddressForm(false)
            setUpdateAddressForm({ address: '', detailedAddress: '', zipCode: '', city: '', country: '', company: '', addressName: '', defaultAddress: false })
        })
    }

    const handleDeleteAddress = (addressName: string) => {

        axios.delete('/api/user/manage-user-address/' + addressName ,{
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            withCredentials: true
        }).then((res: AxiosResponse)=> {
            setAuth({ user : res?.data?.updatedUser })
            setShowUpdateAddressForm(false)
            setUpdateAddressForm({ address: '', detailedAddress: '', zipCode: '', city: '', country: '', company: '', addressName: '', defaultAddress: false })
        })
    }

  return (
    <div className="w-[570px] h-fit overflow-hidden border-b border-zinc-300 pb-2 mt-5">

    <button className="w-full flex justify-between items-center text-xl font-medium px-1 text-darkertrendygreen" onClick={() => {
        setShowUseraddressesSection(prev => !prev)
        setShowUsernameForm(false)
        setShowUserpasswordForm(false)
        setShowUpdateAddressForm(false)
        setShowAddNewAddressForm(false)
    }}>
        Manage your adresses
        <IconContext.Provider value={{ className: ShowUseraddressesSection ? 'rotate-180 transition-all' : "rotate-0 transition-all"}}>
            <IoIosArrowDown />
        </IconContext.Provider>
    </button>

    <div className={ShowUseraddressesSection ? "w-full h-fit pb-5 grid max-h-[2000px] overflow-hidden transition-all duration-300" : "w-full h-fit grid max-h-0 overflow-hidden transition-all duration-300"}>
        

        
        <button onClick={() => {
            setAddNewAddressForm({ address: '', detailedAddress: '', zipCode: '', city: '', country: '', company: '', addressName: '', defaultAddress: false })
            setShowAddNewAddressForm(true)
            setShowUpdateAddressForm(false)
            setisCompanyActive(false)
            setisAddressActive(false)
            setisDetailedAddressActive(false)
            setisCityActive(false)
            setisZipCodeActive(false)
            setisAddressNameActive(false)
        }} className='h-10 w-fit px-3 font-medium text-white whitespace-nowrap bg-trendygreen rounded shadow-xxxl mx-auto shadow-trendygreen/30 mt-5'>
            Add address
        </button>


        <form className={ShowAddNewAddressForm ? "w-full px-1 mx-auto h-fit mb-5 grid max-h-[1000px] overflow-hidden transition-all duration-300" : "w-full px-1 mx-auto h-fit grid max-h-0 overflow-hidden transition-all duration-300"} onSubmit={handleAddAddressSubmit}>


        <div className="flex flex-col floatingLabel w-full relative mt-5">
            <input type="text" name="address" id="address" value={AddNewAddressForm.address} onChange={e => handleAddAddressFormChange(e, setisAddressActive)} />
            <label htmlFor="address" className={ isAddressActive ? "Active" : ""}>Address</label>
        </div>

        <p className="flex items-center gap-1 font-medium text-sm mt-1">
            <IconContext.Provider value={{ className: "w-5 h-5"}}>
                <HiOutlineInformationCircle />
            </IconContext.Provider>

            Add a house number if possible
        </p>

    
        <div className="flex flex-col floatingLabel w-full relative mt-5">
            <input type="text" name="detailedAddress" id="detailedAddress" value={AddNewAddressForm.detailedAddress} onChange={e => handleAddAddressFormChange(e, setisDetailedAddressActive)} />
            <label htmlFor="detailedAddress" className={ isDetailedAddressActive ? "Active" : ""}>Apartment, Suite, etc. &#40;optional&#41;</label>
        </div>

        <div className='flex flex-nowrap gap-2 items-center'>
        
            <div className="flex flex-col floatingLabel w-1/2 relative mt-5">
                <input type="text" name="zipCode" id="zipCode" value={AddNewAddressForm.zipCode} onChange={e => handleAddAddressFormChange(e, setisZipCodeActive)} />
                <label htmlFor="zipCode" className={ isZipCodeActive ? "Active" : ""}>ZipCode</label>
            </div>

            <div className="flex flex-col floatingLabel w-1/2 relative mt-5">
                <input type="text" name="city" id="city" value={AddNewAddressForm.city} onChange={e => handleAddAddressFormChange(e, setisCityActive)} />
                <label htmlFor="city" className={ isCityActive ? "Active" : ""}>City</label>
            </div>

        </div>
            
        <Select options={countriesData} className='w-full mt-7 h-10 outline-none text-[13px] font-thin placeholder:text-zinc-300' value={AddNewAddressForm.country} onChange={selectedValue => {
            
            if(selectedValue) {
                    setAddNewAddressForm({
                ...AddNewAddressForm,
                country: selectedValue
            })}else{
                setAddNewAddressForm({
                    ...AddNewAddressForm,
                    country: ''
                })
        }
    }} 
        
        placeholder="Country" 
        isClearable={true} 
        menuShouldScrollIntoView={true} 
        name="country" 
        styles={styles} 
        theme={themes} />


        <div className="flex flex-col floatingLabel w-full relative mt-5">
            <input type="text" name="company" id="company" value={AddNewAddressForm.company} onChange={e => handleAddAddressFormChange(e, setisCompanyActive)} />
            <label htmlFor="company" className={ isCompanyActive ? "Active" : ""}>Company &#40;optional&#41;</label>
        </div>

        <div className="flex flex-col floatingLabel w-full relative mt-5">
            <input type="text" name="addressName" id="addressName" value={AddNewAddressForm.addressName} onChange={e => handleAddAddressFormChange(e, setisAddressNameActive)} />
            <label htmlFor="addressName" className={ isAddressNameActive ? "Active" : ""}>Address name</label>
        </div>

        <label className="font-medium text-sm text-darkgray mt-5 gap-1 w-fit flex whitespace-nowrap items-center">
            <input type="checkbox" name="defaultAddress" checked={AddNewAddressForm.defaultAddress} onChange={e => setAddNewAddressForm(prev => {
                return {
                ...prev,
                defaultAddress: !prev.defaultAddress
                }
            })} className='w-full h-fit outline-none ' />
            Set this address as default
        </label>

        <div className="w-fit h-fit mx-auto flex items-center gap-3 flex-nowrap my-7">
            <button type="submit" className="w-fit rounded bg-trendygreen px-7 h-10 shadow-trendygreen/20 text-white font-medium shadow-modern mx-auto ">Add address</button>
            <button onClick={() => {
                setShowAddNewAddressForm(false)
                setAddNewAddressForm({ address: '', detailedAddress: '', zipCode: '', city: '', country: '', company: '', addressName: '', defaultAddress: false })
            }} type="button" className="w-fit h-fit font-medium text-sm hover:underline">cancel</button>

        </div>

        </form>



        {Auth?.user?.address.map(item => { return (<address className="w-[450px] h-fit mb-5 gap-1 grid duration-300 mt-7 font-medium text-sm text-darkgray">
            
            <p className="mb-2 text-lg text-darkertrendygreen">{item.addressName} {item.defaultAddress && <span className="text-sm text-darkgray">&#40;Default address&#41;</span>}  </p> 
            <p><span className='text-darkertrendygreen w-72'>Address: </span>{item.address}</p> 
            <p><span className='text-darkertrendygreen w-72'>Apartment, Suite, etc. : </span>{item.detailedAddress}</p> 
            <p><span className='text-darkertrendygreen w-72'>Zip Code: </span>{item.zipCode}</p> 
            <p><span className='text-darkertrendygreen w-72'>City: </span>{item.city}</p> 
            <p><span className='text-darkertrendygreen w-72'>Country: </span>{typeof item.country === 'string' ? item.country : item.country.label}</p> 
            <p><span className='text-darkertrendygreen w-72'>Company: </span>{item.company}</p> 
            <div className="flex gap-3 items-center mt-2">
                <button onClick={() => {
                    setShowAddNewAddressForm(false)
                    setShowUpdateAddressForm(true)
                    setUpdateAddressForm({ address: item.address, detailedAddress: item.detailedAddress, zipCode: item.zipCode, city: item.city, country: item.country, company: item.company, addressName: item.addressName, defaultAddress: item.defaultAddress })
                    setisAddressActive(true)
                    setisCityActive(true)
                    setisZipCodeActive(true)
                    setisAddressNameActive(true)
                    updateAddressInputRef.current?.scrollIntoView()
                    if(item.company !== '')
                        setisCompanyActive(true)
                    if(item.detailedAddress !== '')
                        setisDetailedAddressActive(true)
                }} className="h-fit w-fit px-2 py-1.5 font-medium text-white whitespace-nowrap bg-darkertrendygreen rounded">Edit address</button>
                <button onClick={() => handleDeleteAddress(item.addressName)} className="h-fit w-fit font-medium text-darkgray hover:underline whitespace-nowrap">Delete address</button>
            </div>
        </address>)})}
    
        <form  className={ShowUpdateAddressForm ? "w-full px-1 h-fit mb-5 grid max-h-[1000px] overflow-hidden transition-all duration-300" : "w-full px-1 h-fit grid max-h-0 overflow-hidden transition-all duration-300"} onSubmit={handleUpdateAddressSubmit}>


            <div className="flex flex-col floatingLabel w-full relative mt-5">
                <input ref={updateAddressInputRef} type="text" name="address" id="address" value={UpdateAddressForm.address} onChange={e => handleUpdateAddressFormChange(e, setisAddressActive)} className='scroll-smooth' />
                <label htmlFor="address" className={ isAddressActive ? "Active" : ""}>Address</label>
            </div>

            <p className="flex items-center gap-1 font-medium text-sm mt-1">
                <IconContext.Provider value={{ className: "w-5 h-5"}}>
                    <HiOutlineInformationCircle />
                </IconContext.Provider>

                Add a house number if possible
            </p>


            <div className="flex flex-col floatingLabel w-full relative mt-5">
                <input type="text" name="detailedAddress" id="detailedAddress" value={UpdateAddressForm.detailedAddress} onChange={e => handleUpdateAddressFormChange(e, setisDetailedAddressActive)} />
                <label htmlFor="detailedAddress" className={ isDetailedAddressActive ? "Active" : ""}>Apartment, Suite, etc. &#40;optional&#41;</label>
            </div>

            <div className='flex flex-nowrap gap-2 items-center'>
        
            <div className="flex flex-col floatingLabel w-1/2 relative mt-5">
                <input type="text" name="zipCode" id="zipCode" value={UpdateAddressForm.zipCode} onChange={e => handleUpdateAddressFormChange(e, setisZipCodeActive)} />
                <label htmlFor="zipCode" className={ isZipCodeActive ? "Active" : ""}>ZipCode</label>
            </div>

            <div className="flex flex-col floatingLabel w-1/2 relative mt-5">
                <input type="text" name="city" id="city" value={UpdateAddressForm.city} onChange={e => handleUpdateAddressFormChange(e, setisCityActive)} />
                <label htmlFor="city" className={ isCityActive ? "Active" : ""}>City</label>
            </div>

        </div>
            
        <Select options={countriesData} className='w-full mt-7 h-10 outline-none text-[13px] font-thin placeholder:text-zinc-300' value={UpdateAddressForm.country} onChange={selectedValue => {
            
            if(selectedValue) {
                    setUpdateAddressForm({
                ...UpdateAddressForm,
                country: selectedValue
            })}else{
                setUpdateAddressForm({
                    ...UpdateAddressForm,
                    country: ''
                })
        }
    }} 
        
        placeholder="Country" 
        isClearable={true} 
        menuShouldScrollIntoView={true} 
        name="country" 
        styles={styles} 
        theme={themes} />

        <div className="flex flex-col floatingLabel w-full relative mt-5">
            <input type="text" name="company" id="company" value={UpdateAddressForm.company} onChange={e => handleUpdateAddressFormChange(e, setisCompanyActive)} />
            <label htmlFor="company" className={ isCompanyActive ? "Active" : ""}>Company &#40;optional&#41;</label>
        </div>

        <div className="flex flex-col disabledFloatingLabel w-full relative mt-5 group hover:cursor-not-allowed">
            <input type="text" name="addressName" id="addressName" value={UpdateAddressForm.addressName} className='hover:cursor-not-allowed text-zinc-600' />
            <label htmlFor="addressName" className={ isAddressNameActive ? "Active" : ""}>Address name</label>
            <p className="hidden group-hover:block absolute top-[110%] left-1/2 -translate-x-1/2 h-fit w-fit text-sm wsFont font-medium bg-red-100 text-red-600 px-2 py-1 rounded z-10 before:absolute before:left-1/2 before:-translate-x-1/2 before:w-3 before:h-3 before:bg-red-100 before:-top-1 before:rotate-45">Sorry, you can't edit the name of this address</p>
        </div>

            <label className="font-medium text-sm text-darkgray mt-5 gap-1 w-fit flex whitespace-nowrap items-center">
                <input type="checkbox" name="defaultAddress" checked={UpdateAddressForm.defaultAddress} onChange={e => setUpdateAddressForm(prev => {
                    return {
                    ...prev,
                    defaultAddress: !prev.defaultAddress
                    }
                })} className='w-full h-fit outline-none ' />
                Set this address as default
            </label>

            <div className="w-fit h-fit mx-auto flex items-center gap-3 flex-nowrap my-7">
                <button type="submit" className="w-fit rounded bg-trendygreen px-7 h-10 shadow-trendygreen/20 text-white font-medium shadow-modern mx-auto ">Save changes</button>
                <button onClick={() => {
                    setShowUpdateAddressForm(false)
                }} type="button" className="w-fit h-fit font-medium text-sm hover:underline">cancel</button>

            </div>

        </form>
    </div>
</div>
  )
}

export default AddressesSettings