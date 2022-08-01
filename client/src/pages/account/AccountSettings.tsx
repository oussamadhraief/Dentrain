import axios, { AxiosResponse } from "axios"
import React, { useEffect, useRef, useState } from "react"
import useAuth from "../../hooks/useAuth"
import { IoIosArrowDown } from 'react-icons/io'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import { IconContext } from 'react-icons'
import { countriesData } from "../../utils/countriesData"
import Select from 'react-select'

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

const AccountSettings = () => {

    const updateAddressInputRef = useRef<HTMLInputElement>(null)
    const addAddressInputRef = useRef<HTMLInputElement>(null)

    const { Auth,setAuth } = useAuth()


    const [Username, setUsername] = useState<string>('')
    const [Userphone, setUserphone] = useState<string>('')
    const [Userpassword, setUserpassword] = useState<string>('')
    const [Userpassword2, setUserpassword2] = useState<string>('')
    const [ShowUsernameForm, setShowUsernameForm] = useState<boolean>(true)
    const [ShowUseraddressesSection, setShowUseraddressesSection] = useState<boolean>(false)
    const [ShowUserpasswordForm, setShowUserpasswordForm] = useState<boolean>(false)
    const [ShowAddNewAddressForm, setShowAddNewAddressForm] = useState<boolean>(false)
    const [AddNewAddressForm, setAddNewAddressForm] = useState<UserAddress>({ address: '', detailedAddress: '', zipCode: '', city: '', country: '', company: '', addressName: '', defaultAddress: false })
    const [ShowUpdateAddressForm, setShowUpdateAddressForm] = useState<boolean>(false)
    const [UpdateAddressForm, setUpdateAddressForm] = useState<UserAddress>({ address: '', detailedAddress: '', zipCode: '', city: '', country: '', company: '', addressName: '', defaultAddress: false })

    useEffect(() => {

    if(Auth?.user?.name)
        setUsername(Auth.user.name)

    if(Auth?.user?.phone)
      setUserphone(Auth.user.phone)

    }, [])

    const handleAddAddressFormChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        setAddNewAddressForm({
            ...AddNewAddressForm,
            [target.name]: target.value
        })
    }
    
    const handleUpdateAddressFormChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        setUpdateAddressForm({
            ...UpdateAddressForm,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        axios.patch('/api/user/update-user-info',JSON.stringify({
            name: Username,
            phone: Userphone
        }),{
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            withCredentials: true
        }).then((res: AxiosResponse)=> {
            setAuth({ user : res?.data?.updatedUser })
        })
    }


    const handleAddAddressSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        axios.post('/api/user/add-user-address',JSON.stringify(AddNewAddressForm),{
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            withCredentials: true
        }).then((res: AxiosResponse)=> {
            setAuth({ user : res?.data?.updatedUser })
            setShowAddNewAddressForm(false)
            setAddNewAddressForm({ address: '', detailedAddress: '', zipCode: '', city: '', country: '', company: '', addressName: '', defaultAddress: false })
        })
    }
    
  return (
    <div className="flex-1">
        <div className={ShowUsernameForm ? "w-[570px] h-fit overflow-hidden pb-2" : "w-[570px] h-fit overflow-hidden border-b border-zinc-300 pb-2"}>

            <button className="w-full flex justify-between items-center text-xl font-medium px-1 text-darkertrendygreen" onClick={() => {
                setShowUsernameForm(prev => !prev)
                setShowUserpasswordForm(false)
                setShowUseraddressesSection(false)
            }}>
                Change your personal information 
                <IconContext.Provider value={{ className: ShowUsernameForm ? 'rotate-180 transition-all' : "rotate-0 transition-all"}}>
                    <IoIosArrowDown />
                </IconContext.Provider>
            </button>

            <form className={ShowUsernameForm ? "w-fit h-fit pb-14 grid max-h-[1000px] overflow-hidden transition-all duration-700" : "w-fit h-fit grid max-h-0 overflow-hidden transition-all duration-300"} onSubmit={handleSubmit}>


                <label className="font-medium text-darkgray grid mt-7 gap-1">Name
                    <input type="text" name="" value={Username} onChange={e => setUsername(e.target.value)} className='w-[450px] h-9 outline-none border font-normal text-darkgray border-zinc-300 px-1 mb-5' />
                </label>

                <label className="font-medium text-darkgray grid gap-1 mt-3">Phone
                    <input type="text" name="" value={Userphone} onChange={e => setUserphone(e.target.value)} className='w-[450px] h-9 outline-none font-normal text-darkgray border border-zinc-300 px-1 mb-5' />
                </label>

                <button type="submit" className="w-fit rounded bg-trendygreen px-5 h-12 shadow-trendygreen/20 text-white font-medium shadow-modern mt-4 mx-auto">Save changes</button>

            </form>
        
        </div>

        <div className={ShowUserpasswordForm ? "w-[570px] h-fit overflow-hidden pb-2 mt-5" : "w-[570px] h-fit overflow-hidden border-b border-zinc-300 pb-2 mt-5"}>

            <button className="w-full flex justify-between items-center text-xl font-medium px-1 text-darkertrendygreen" onClick={() => {
                setShowUserpasswordForm(prev => !prev)
                setShowUsernameForm(false)
                setShowUseraddressesSection(false)
                setShowUpdateAddressForm(false)
                setShowAddNewAddressForm(false)
                setAddNewAddressForm({ address: '', detailedAddress: '', zipCode: '', city: '', country: '', company: '', addressName: '', defaultAddress: false })
            }}>
                Change your password
                <IconContext.Provider value={{ className: ShowUserpasswordForm ? 'rotate-180 transition-all' : "rotate-0 transition-all"}}>
                    <IoIosArrowDown />
                </IconContext.Provider>
            </button>

            <form className={ShowUserpasswordForm ? "w-[450px] h-fit pb-14 grid max-h-[1000px] overflow-hidden transition-all duration-700" : "w-[450px] h-fit grid max-h-0 overflow-hidden transition-all duration-300"} onSubmit={handleSubmit}>

            <label className="font-medium text-darkgray grid mt-10 gap-1 w-full">Old password
                <input type="text" name="" value={Userpassword} onChange={e => setUserpassword(e.target.value)} className='w-full h-10 outline-none border border-zinc-300 px-1' />
            </label>

            <label className="font-medium text-darkgray grid mt-7 gap-1 w-full">New password
                <input type="text" name="" value={Userpassword} onChange={e => setUserpassword(e.target.value)} className='w-full h-10 outline-none border border-zinc-300 px-1' />
            </label>

            <label className="font-medium text-darkgray grid mt-7 gap-1 w-full">Confirm new password
                <input type="text" name="" value={Userpassword2} onChange={e => setUserpassword2(e.target.value)} className='w-full h-10 outline-none border border-zinc-300 px-1' />
            </label>

            <button type="submit" className="w-fit rounded bg-trendygreen px-7 h-10 shadow-trendygreen/20 text-white font-medium shadow-modern mx-auto mt-5">Save</button>

            </form>
        
        </div>


        <div className="w-[570px] h-fit overflow-hidden border-b border-zinc-300 pb-2 mt-5">

            <button className="w-full flex justify-between items-center text-xl font-medium px-1 text-darkertrendygreen" onClick={() => {
                setShowUseraddressesSection(prev => !prev)
                setShowUsernameForm(false)
                setShowUserpasswordForm(false)
                setShowUpdateAddressForm(false)
                setShowAddNewAddressForm(false)
                setAddNewAddressForm({ address: '', detailedAddress: '', zipCode: '', city: '', country: '', company: '', addressName: '', defaultAddress: false })
            }}>
                Manage your adresses
                <IconContext.Provider value={{ className: ShowUseraddressesSection ? 'rotate-180 transition-all' : "rotate-0 transition-all"}}>
                    <IoIosArrowDown />
                </IconContext.Provider>
            </button>

            <div className={ShowUseraddressesSection ? "w-full h-fit pb-5 grid max-h-[2000px] overflow-hidden transition-all duration-700" : "w-full h-fit grid max-h-0 overflow-hidden transition-all duration-300"}>
                

                
                <button onClick={() => {
                    setShowAddNewAddressForm(true)
                    setShowUpdateAddressForm(false)
                    addAddressInputRef.current?.focus()
                }} className='h-10 w-fit px-3 font-medium text-white whitespace-nowrap bg-trendygreen rounded shadow-xxxl mx-auto shadow-trendygreen/30 mt-5'>
                    Add address
                </button>


                <form className={ShowAddNewAddressForm ? "w-[450px] h-fit mb-5 grid max-h-[1000px] overflow-hidden transition-all duration-700" : "w-[450px] h-fit grid max-h-0 overflow-hidden transition-all duration-300"} onSubmit={handleAddAddressSubmit}>


                <label className="font-medium text-darkgray mt-7 gap-1 w-full">Address
                    <input ref={addAddressInputRef} type="text" name="address" value={AddNewAddressForm.address} onChange={handleAddAddressFormChange} className='w-full h-10 outline-none border border-zinc-300 px-1' />
                </label>
                <p className="flex items-center gap-1 font-medium text-sm mt-1">
                    <IconContext.Provider value={{ className: "w-5 h-5"}}>
                        <HiOutlineInformationCircle />
                    </IconContext.Provider>

                    Add a house number if possible
                </p>

            
                <label className="font-medium text-darkgray mt-7 gap-1 w-full">Apartment, Suite, etc. <span className="text-zinc-500 font-normal text-sm">&#40;optional&#41;</span>
                    <input type="text" name="detailedAddress" value={AddNewAddressForm.detailedAddress} onChange={handleAddAddressFormChange} className='w-full h-10 outline-none border border-zinc-300 px-1' />
                </label>

                <div className="w-full flex mt-7 gap-2 items-center">
                <input type="number" name="zipCode" value={AddNewAddressForm.zipCode} onChange={handleAddAddressFormChange} placeholder='Zip Code' className='w-1/4 h-[40px] placeholder:text-zinc-400 outline-none border border-zinc-300 px-1 rounded-md removeArrowButtons' />

                <input type="text" name="city" value={AddNewAddressForm.city} onChange={handleAddAddressFormChange} placeholder='City' className='w-1/4 h-[40px] placeholder:text-zinc-400 outline-none border border-zinc-300 px-1 rounded-md' />
                    
                <Select options={countriesData} className='w-1/2 h-10 outline-none placeholder:text-zinc-300' value={AddNewAddressForm.country} onChange={selectedValue => {
                    
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
                
                placeholder="Country" isClearable={true} menuShouldScrollIntoView={true} name="country" styles={{
                    option: (provided:any, state:any) => ({
                      ...provided,
                      outline: 'none',
                      color: state.isSelected ? 'white' : 'black',
                      background: state.isSelected ? '#14B1C0' : "#fff"
                    })}} />
                </div>

                <label className="font-medium text-darkgray mt-10 gap-1 w-full">Company <span className="text-zinc-500 font-normal text-sm">&#40;optional&#41;</span>
                    <input type="text" name="company" value={AddNewAddressForm.company} onChange={handleAddAddressFormChange} className='w-full h-10 outline-none border border-zinc-300 px-1' />
                </label>

                <label className="font-medium text-darkgray mt-10 gap-1 w-full">Address name
                    <input type="text" name="addressName" value={AddNewAddressForm.addressName} onChange={handleAddAddressFormChange} className='w-full h-10 outline-none border border-zinc-300 px-1' />
                </label>

                <label className="font-medium text-sm text-darkgray mt-7 gap-1 w-fit flex whitespace-nowrap items-center">
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



                {Auth?.user?.address.map(item => { return (<address className="w-[450px] h-fit mb-5 grid duration-700 mt-7 font-medium text-sm text-darkgray">
                    
                    <p className="mb-2 text-base text-darkertrendygreen">{item.addressName} {item.defaultAddress && <span className="text-sm text-darkgray">&#40;Default address&#41;</span>}  </p> 
                    <p>{item.address}</p> 
                    <p>{item.detailedAddress}</p> 
                    <p>{item.zipCode}</p> 
                    <p>{item.city}</p> 
                    <p>{typeof item.country === 'string' ? item.country : item.country.label}</p> 
                    <p>{item.company}</p> 
                    <div className="flex gap-3 items-center mt-1">
                        <button onClick={() => {
                            setShowAddNewAddressForm(false)
                            setShowUpdateAddressForm(true)
                            setUpdateAddressForm({ address: item.address, detailedAddress: item.detailedAddress, zipCode: item.zipCode, city: item.city, country: item.country, company: item.company, addressName: item.addressName, defaultAddress: item.defaultAddress })
                            updateAddressInputRef.current?.focus()
                        }} className="h-fit w-fit px-2 py-1.5 font-medium text-white whitespace-nowrap bg-darkertrendygreen rounded">Edit address</button>
                        <button className="h-fit w-fit font-medium text-xs text-red-500 hover:underline whitespace-nowrap">Delete address</button>
                    </div>
                </address>)})}
            
                <form className={ShowUpdateAddressForm ? "w-[450px] h-fit mb-5 grid max-h-[1000px] overflow-hidden transition-all duration-700" : "w-[450px] h-fit grid max-h-0 overflow-hidden transition-all duration-300"} onSubmit={handleSubmit}>


                    <label className="font-medium text-darkgray mt-7 gap-1 w-full">Address
                        <input ref={updateAddressInputRef} type="text" name="address" value={UpdateAddressForm.address} onChange={handleUpdateAddressFormChange} className='w-full h-10 outline-none border border-zinc-300 px-1' />
                    </label>
                    <p className="flex items-center gap-1 font-medium text-sm mt-1">
                        <IconContext.Provider value={{ className: "w-5 h-5"}}>
                            <HiOutlineInformationCircle />
                        </IconContext.Provider>

                        Add a house number if possible
                    </p>


                    <label className="font-medium text-darkgray mt-7 gap-1 w-full">Apartment, Suite, etc. <span className="text-zinc-500 font-normal text-sm">&#40;optional&#41;</span>
                        <input type="text" name="detailedAddress" value={UpdateAddressForm.detailedAddress} onChange={handleUpdateAddressFormChange} className='w-full h-10 outline-none border border-zinc-300 px-1' />
                    </label>

                    <div className="w-full flex mt-7 gap-2 items-center">
                    <input type="number" name="zipCode" value={UpdateAddressForm.zipCode} onChange={handleUpdateAddressFormChange} placeholder='Zip Code' className='w-1/4 h-[40px] placeholder:text-zinc-400 outline-none border border-zinc-300 px-1 rounded-md removeArrowButtons' />

                    <input type="text" name="city" value={UpdateAddressForm.city} onChange={handleUpdateAddressFormChange} placeholder='City' className='w-1/4 h-[40px] placeholder:text-zinc-400 outline-none border border-zinc-300 px-1 rounded-md' />
                        
                    <Select options={countriesData} className='w-1/2 h-10 outline-none placeholder:text-zinc-300' value={UpdateAddressForm.country} onChange={selectedValue => {
                        
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

                    placeholder="Country" isClearable={true} menuShouldScrollIntoView={true} name="country" styles={{
                        option: (provided:any, state:any) => ({
                        ...provided,
                        outline: 'none',
                        color: state.isSelected ? 'white' : 'black',
                        background: state.isSelected ? '#14B1C0' : "#fff"
                        })}} />
                    </div>

                    <label className="font-medium text-darkgray mt-10 gap-1 w-full">Company <span className="text-zinc-500 font-normal text-sm">&#40;optional&#41;</span>
                        <input type="text" name="company" value={UpdateAddressForm.company} onChange={handleUpdateAddressFormChange} className='w-full h-10 outline-none border border-zinc-300 px-1' />
                    </label>

                    <label className="font-medium text-darkgray mt-10 gap-1 w-full">Address name
                        <input type="text" name="addressName" value={UpdateAddressForm.addressName} onChange={handleUpdateAddressFormChange} className='w-full h-10 outline-none border border-zinc-300 px-1' />
                    </label>

                    <label className="font-medium text-sm text-darkgray mt-7 gap-1 w-fit flex whitespace-nowrap items-center">
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
    </div>
  )
}

export default AccountSettings